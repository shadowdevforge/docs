import MiniSearch from "minisearch";

let searchIndex = null;
let isIndexing = false;

function stripMarkdown(md) {
  if (!md) return "";
  return md
    .replace(/#+\s+/g, "")
    .replace(/(\*\*|__)(.*?)\1/g, "$2")
    .replace(/(\*|_)(.*?)\1/g, "$2")
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
    .replace(/`{3}[\s\S]*?`{3}/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\n/g, " ");
}

async function buildIndex(config) {
  if (searchIndex || isIndexing) return;
  isIndexing = true;
  console.log("🔍 ShadePress: Indexing content...");

  const pages = config.sidebar.flatMap((group) => group.items);

  const documents = [];

  const promises = pages.map(async (page, id) => {
    try {
      const path = page.link.replace("#", "");
      // CHANGE: Relative path for crawler
      const fileUrl = `./docs${path === "/" ? "/index" : path}.md`;

      const res = await fetch(fileUrl);
      if (res.ok) {
        const text = await res.text();
        documents.push({
          id: id,
          title: page.text,
          link: page.link,
          text: stripMarkdown(text),
        });
      }
    } catch (e) {
      console.warn(`Failed to index ${page.link}`, e);
    }
  });

  await Promise.all(promises);

  searchIndex = new MiniSearch({
    fields: ["title", "text"],
    storeFields: ["title", "link", "text"],
    searchOptions: {
      boost: { title: 2 },
      fuzzy: 0.2,
    },
  });

  searchIndex.addAll(documents);
  isIndexing = false;
  console.log(`🔍 Indexing complete. ${documents.length} pages indexed.`);
}

export function initSearch(config) {
  setTimeout(() => buildIndex(config), 2000);
  // ... (Rest of UI logic remains identical) ...
  // (If you need the full file again let me know, but only the buildIndex path needed changing)
  const modal = document.getElementById("search-modal");
  const input = document.getElementById("search-input");
  const resultsContainer = document.getElementById("search-results");
  const closeBtn = document.getElementById("close-search");
  const openBtn = document.getElementById("search-btn");

  const openSearch = () => {
    if (!searchIndex) buildIndex(config);
    modal.classList.add("open");
    input.value = "";
    resultsContainer.innerHTML =
      '<div class="search-empty">Type to search...</div>';
    input.focus();
  };

  const closeSearch = () => {
    modal.classList.remove("open");
  };

  openBtn.addEventListener("click", openSearch);
  closeBtn.addEventListener("click", closeSearch);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeSearch();
  });

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      openSearch();
    }
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeSearch();
    }
  });

  input.addEventListener("input", () => {
    if (!searchIndex) return;

    const query = input.value.trim();
    if (query.length < 2) {
      resultsContainer.innerHTML =
        '<div class="search-empty">Type to search...</div>';
      return;
    }

    const results = searchIndex.search(query);

    if (results.length === 0) {
      resultsContainer.innerHTML =
        '<div class="search-empty">No results found.</div>';
      return;
    }

    resultsContainer.innerHTML = results
      .map((result) => {
        const snippet = result.text.substring(0, 100) + "...";
        return `
                <a href="${result.link}" class="search-result-item">
                    <span class="search-result-title">${result.title}</span>
                    <span class="search-result-excerpt">${snippet}</span>
                </a>
            `;
      })
      .join("");

    document.querySelectorAll(".search-result-item").forEach((item) => {
      item.addEventListener("click", closeSearch);
    });
  });
}
