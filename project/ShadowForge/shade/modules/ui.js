import { CATPPUCCIN_COLORS } from "./theme.js";

// --- Theme Application Helper ---
function applyTheme(themeName) {
  const palette =
    themeName === "dark" ? CATPPUCCIN_COLORS.mocha : CATPPUCCIN_COLORS.latte;
  const root = document.documentElement;

  // 1. Set Semantic Variables (The Basics)
  root.style.setProperty(
    "--bg-color",
    themeName === "dark" ? palette.crust : palette.base,
  );
  root.style.setProperty("--sidebar-bg", palette.mantle);
  root.style.setProperty(
    "--border-color",
    themeName === "dark" ? palette.base : palette.surface1,
  );
  root.style.setProperty("--text-color", palette.text);
  root.style.setProperty("--subtext-color", palette.subtext0);
  root.style.setProperty("--primary-color", palette.mauve);

  // 2. EXPOSE ALL COLORS (The Fix for Gradients/Admonitions)
  // This makes --ctp-blue, --ctp-red, etc. available in your CSS
  Object.entries(palette).forEach(([key, value]) => {
    root.style.setProperty(`--ctp-${key}`, value);
  });

  // 3. Prism Configuration
  root.style.setProperty(
    "--code-inline-bg",
    themeName === "dark"
      ? `rgba(203, 166, 247, 0.15)`
      : `rgba(136, 57, 239, 0.1)`,
  );
  root.style.setProperty("--code-inline-text", palette.mauve);
  root.style.setProperty("--code-block-bg", palette.mantle);

  const latteTheme = document.getElementById("prism-latte-theme");
  const mochaTheme = document.getElementById("prism-mocha-theme");

  if (latteTheme && mochaTheme) {
    if (themeName === "dark") {
      latteTheme.disabled = true;
      mochaTheme.disabled = false;
    } else {
      latteTheme.disabled = false;
      mochaTheme.disabled = true;
    }
  }
}

// --- Main UI Initialization ---
export function initUI(state) {
  const { config } = state;

  // 1. Theme Setup
  const initialTheme = localStorage.getItem("shade-theme") || "dark";
  document.body.classList.toggle("dark", initialTheme === "dark");
  applyTheme(initialTheme);

  // 2. Static UI
  document.title = config.title;
  document.getElementById("sp-logo").textContent = config.logo;

  // 3. Desktop Nav
  document.getElementById("sp-nav").innerHTML = config.nav
    .map(
      (item) => `
        <a href="${item.link}" class="nav-link" ${item.external ? 'target="_blank" rel="noopener"' : ""}>${item.text}</a>
    `,
    )
    .join("");

  // 4. Render Sidebar (With Mobile Nav)
  const sideEl = document.getElementById("sp-sidebar");

  const mobileNavHTML = `
        <div class="sidebar-mobile-nav">
            ${config.nav
              .map(
                (item) => `
                <a href="${item.link}" class="mobile-nav-link" ${item.external ? 'target="_blank" rel="noopener"' : ""}>
                   ${item.text} ${item.external ? "↗" : ""}
                </a>
            `,
              )
              .join("")}
            <hr class="sidebar-divider" />
        </div>
    `;

  // Render collapsible groups
  const docsNavHTML = config.sidebar
    .map((group, index) => {
      const isCollapsed = group.collapsed ? "collapsed" : "";
      return `
        <div class="sidebar-group ${isCollapsed}" id="sb-group-${index}">
            <button class="sidebar-group-header" data-group-id="sb-group-${index}">
                <span class="sidebar-title">${group.text}</span>
                <svg class="sp-icon chevron-icon" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
            <ul class="sidebar-list">
                ${group.items
                  .map(
                    (item) => `
                    <li>
                        <a href="${item.link}" class="sidebar-link" data-path="${item.link}">
                            ${item.text}
                        </a>
                    </li>
                `,
                  )
                  .join("")}
            </ul>
        </div>
    `;
    })
    .join("");

  sideEl.innerHTML = mobileNavHTML + docsNavHTML;

  // --- EVENT LISTENERS ---

  // Sidebar Toggle
  sideEl.addEventListener("click", (e) => {
    const header = e.target.closest(".sidebar-group-header");
    if (header) {
      const groupId = header.getAttribute("data-group-id");
      const group = document.getElementById(groupId);
      if (group) {
        group.classList.toggle("collapsed");
      }
    }
  });

  // Theme Toggle
  document.getElementById("theme-toggle").addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    const newTheme = isDark ? "dark" : "light";
    localStorage.setItem("shade-theme", newTheme);
    applyTheme(newTheme);
  });

  // Mobile Menu Logic
  const menuBtn = document.getElementById("menu-toggle");
  const backdrop = document.getElementById("backdrop");

  const toggleMenu = (show) => {
    if (show) {
      sideEl.classList.add("open");
      backdrop.classList.add("open");
    } else {
      sideEl.classList.remove("open");
      backdrop.classList.remove("open");
    }
  };

  menuBtn.addEventListener("click", () => toggleMenu(true));
  backdrop.addEventListener("click", () => toggleMenu(false));
  sideEl.addEventListener("click", (e) => {
    if (
      e.target.tagName === "A" &&
      !e.target.classList.contains("sidebar-group-header")
    ) {
      toggleMenu(false);
    }
  });
}

// --- Active Link & Pagination Helper ---
export function updateActiveLinks(hash, config) {
  const links = document.querySelectorAll(".sidebar-link");

  links.forEach((link) => {
    const isActive = link.getAttribute("href") === hash;
    link.classList.toggle("active", isActive);

    if (isActive) {
      link.scrollIntoView({ block: "center", behavior: "smooth" });
      const parentGroup = link.closest(".sidebar-group");
      if (parentGroup && parentGroup.classList.contains("collapsed")) {
        parentGroup.classList.remove("collapsed");
      }
    }
  });

  // Pagination Logic
  const flatList = config.sidebar.flatMap((group) => group.items);
  const currentIndex = flatList.findIndex((item) => item.link === hash);
  const pagEl = document.getElementById("pagination");

  if (currentIndex === -1) {
    pagEl.innerHTML = "";
    return;
  }

  const prev = flatList[currentIndex - 1];
  const next = flatList[currentIndex + 1];

  pagEl.innerHTML = `
        ${prev ? `<a href="${prev.link}" class="page-link prev"><span>Previous</span><div>${prev.text}</div></a>` : ""}
        ${next ? `<a href="${next.link}" class="page-link next"><span>Next</span><div>${next.text}</div></a>` : ""}
    `;
}
