# 📚 ShadowForge Docs

**The Centralized Knowledge Hub for all ShadowDevForge projects.**

[![Powered By: ShadePress](https://img.shields.io/badge/Powered%20By-ShadePress-blue.svg)](https://github.com/shadowdevforge/shadepress)
[![Theme: Catppuccin](https://img.shields.io/badge/Theme-Catppuccin-cba6f7.svg)](https://github.com/catppuccin/catppuccin)
[![Status: Active](https://img.shields.io/badge/Status-Active-a6e3a1.svg)]()

This repository hosts the documentation for **every** project under the ShadowDevForge umbrella. Instead of scattering documentation across dozens of repositories and struggling with complex build tools, everything lives here.

<a href="https://shadowdevforge.github.io/docs">Go to Site</a>

---

## 🧠 The Philosophy: Why Centralize?

Building complex software is stressful enough. Documentation shouldn't add to that stress.

While frameworks like VitePress or Astro Starlight are powerful, they introduce the **"Two Worlds Problem"**:
1.  **The Code World:** You are writing Rust, Go, or TypeScript to solve actual logic problems.
2.  **The Docs World:** You are suddenly debugging Vue.js breaking changes, fighting Webpack configurations, or dealing with npm dependency conflicts just to fix a typo in a README.

**I am tired of maintaining 16 projects just to document 8 repositories.**

By nuking the `docs/` folder from individual project repositories and centralizing them here, I solve the maintenance burden. I no longer have to worry that a Vue API update will break the documentation for my Rust CLI. 

**One Repository. One Tech Stack. Hundreds of Projects.**

---

## 🏗 Architecture

This repository uses a two-tier structure powered by **[ShadePress](https://github.com/shadowdevforge/shadepress)**, a serverless, zero-build documentation engine.

### 1. The Hub (Root)
The entry point (`index.html`) is a lightweight "Link-in-Bio" style dashboard. It lists every project in a clean, searchable Card View. You simply search for the tool you want, and it links you to its dedicated documentation.

### 2. The Projects (Subdirectories)
Each project gets its own folder. Inside that folder is a self-contained instance of ShadePress.

```Tree
./docs
├── index.html           # The Hub (Card View of all projects)
├── README.md            # This file
└── projects/
    └── project-name/   # projects docs
        ├── docs/
        ├── shade/
        └── shadepress.config.js
```

---

## Can you fork and diy for yourself? Or Contribute?

Absoutely!! You can help my projects documentation get better and its really appreciated.

---

## 🛠 Tech Stack

*   **Engine**: [ShadePress](https://github.com/shadowdevforge/shadepress) (Vanilla JS, Markdown, No Build)
*   **Theme**: Catppuccin (Mocha & Latte)
*   **Hosting**: GitHub Pages (Static)

---

## 📄 License

This repository and the documentation within it are open source.
