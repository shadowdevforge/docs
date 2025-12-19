export function generateTOC() {
  const tocContainer = document.getElementById("sp-toc");
  const headers = document.querySelectorAll(
    "#markdown-body h2, #markdown-body h3",
  );

  if (headers.length === 0) {
    tocContainer.innerHTML = "";
    return;
  }

  // 1. Build HTML
  let html = '<div class="toc-header">ON THIS PAGE</div><ul class="toc-list">';

  headers.forEach((header, index) => {
    // Ensure header has an ID for linking
    if (!header.id) {
      // Generate a cleaner ID from text if possible, fallback to index
      const cleanId = header.innerText
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
        .replace(/(^-|-$)/g, ""); // Trim leading/trailing hyphens

      header.id = cleanId || `header-${index}`;
    }

    const depth = header.tagName === "H2" ? "depth-2" : "depth-3";
    html += `
            <li>
                <a href="#${header.id}" class="toc-link ${depth}" data-target="${header.id}">
                    ${header.innerText}
                </a>
            </li>
        `;
  });

  html += "</ul>";
  tocContainer.innerHTML = html;

  // 2. Setup Logic
  setupObserver(headers);
  setupClickHandlers();
}

function setupClickHandlers() {
  document.querySelectorAll(".toc-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // STOP the URL hash change (Prevents 404)

      const targetId = link.getAttribute("data-target");
      const target = document.getElementById(targetId);

      if (target) {
        // Calculate position with offset for fixed header
        const navHeight = 70; // Approx 3.6rem + padding
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

function setupObserver(headers) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove active from all
          document
            .querySelectorAll(".toc-link")
            .forEach((link) => link.classList.remove("active"));

          // Add active to current
          const activeLink = document.querySelector(
            `.toc-link[data-target="${entry.target.id}"]`,
          );
          if (activeLink) activeLink.classList.add("active");
        }
      });
    },
    {
      rootMargin: "-100px 0px -60% 0px", // Trigger when header is near top
      threshold: 0,
    },
  );

  headers.forEach((header) => observer.observe(header));
}
