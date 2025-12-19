import { marked } from "marked";
import { generateTOC } from "./toc.js";
import config from "../../shadepress.config.js";

// Helper: Smart Admonition Parser with Code Block Masking
function parseAdmonitions(text) {
  const placeholders = [];

  // 1. MASK: Find all fenced code blocks (```...```) and hide them
  // This prevents the Admonition regex from matching inside code examples
  const protectedText = text.replace(/(`{3,})[\s\S]*?\1/g, (match) => {
    placeholders.push(match);
    return `__SHADE_PROTECTED_BLOCK_${placeholders.length - 1}__`;
  });

  // 2. PARSE: Run Admonition Regex on the "safe" text
  const admonitionRegex =
    /:::\s+(tip|warning|danger|info)\s*(.*?)?\n([\s\S]*?):::/g;

  let processedText = protectedText.replace(
    admonitionRegex,
    (match, type, title, content) => {
      const displayTitle = title ? title : type.toUpperCase();

      // 2a. UNMASK INSIDE: If the admonition *itself* contains a code block,
      // we must restore it before passing it to marked.parse()
      let restoredContent = content.replace(
        /__SHADE_PROTECTED_BLOCK_(\d+)__/g,
        (m, id) => {
          return placeholders[id];
        },
      );

      return `<div class="admonition ${type}">
<p class="admonition-title">${displayTitle}</p>
${marked.parse(restoredContent)}
</div>`;
    },
  );

  // 3. UNMASK OUTSIDE: Restore any code blocks that were NOT inside admonitions
  return processedText.replace(/__SHADE_PROTECTED_BLOCK_(\d+)__/g, (m, id) => {
    return placeholders[id];
  });
}

export async function renderPage(path) {
  const contentEl = document.getElementById("markdown-body");

  try {
    let cleanPath = path.replace("#", "");
    if (cleanPath === "/" || cleanPath === "") cleanPath = "/index";

    const fileUrl = `./docs${cleanPath}.md`;

    const response = await fetch(fileUrl);
    if (!response.ok) throw new Error(response.status);

    let markdownText = await response.text();

    // 1. Pre-process Admonitions (Now with masking!)
    markdownText = parseAdmonitions(markdownText);

    // 2. Parse Markdown
    let html = marked.parse(markdownText);

    // 3. Append "Edit on GitHub" Link
    if (config.repo) {
      const branch = config.branch || "main";
      let baseDir = config.dir ? `/${config.dir}` : "";
      const cleanRepo = config.repo.replace(/\/+$/, "");
      const editUrl = `${cleanRepo}/blob/${branch}${baseDir}/docs${cleanPath}.md`;

      html += `
                <div class="edit-link-wrapper">
                    <a href="${editUrl}" target="_blank" rel="noopener" class="edit-link">
                        <svg class="sp-icon edit-icon" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        Edit this page on GitHub
                    </a>
                </div>
            `;
    }

    contentEl.innerHTML = html;
    window.scrollTo(0, 0);

    // 4. Highlight Code
    if (window.Prism) window.Prism.highlightAll();

    // 5. Inject Copy Buttons
    document.querySelectorAll("pre").forEach((pre) => {
      if (pre.querySelector(".copy-btn")) return;
      const btn = document.createElement("button");
      btn.className = "copy-btn";
      btn.textContent = "Copy";
      btn.addEventListener("click", () => {
        const code = pre.querySelector("code");
        const text = code ? code.innerText : pre.innerText;
        navigator.clipboard.writeText(text).then(() => {
          btn.textContent = "Copied!";
          btn.classList.add("copied");
          setTimeout(() => {
            btn.textContent = "Copy";
            btn.classList.remove("copied");
          }, 2000);
        });
      });
      pre.appendChild(btn);
    });

    // 6. Generate TOC
    generateTOC();
  } catch (error) {
    console.error("ShadePress Render Error:", error);
    contentEl.innerHTML = `<h1>404</h1><p>Page not found: ${path}</p>`;
    document.getElementById("sp-toc").innerHTML = "";
  }
}
