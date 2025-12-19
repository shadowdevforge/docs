# Installation Guide

ShadowForge is designed to be a "Drop-in" configuration. ShadowForge.nvimt manages its own dependencies via `lazy.nvim` and `mason.nvim`.

## Prerequisites

Before installing, ensure your system meets the requirements.

### 1. Neovim (0.10+)
ShadowForge.nvim rely on modern APIs (`vim.loader`, `vim.keymap`, `vim.diagnostic.jump`).
```bash
nvim --version
# Should be v0.10.0 or higher
```

### 2. Nerd Font
Aesthetics are a core pillar. You need a **Nerd Font** to render file icons, git symbols, and statusline glyphs.
*   **Recommended:** [JetBrains Mono Nerd Font](https://www.nerdfonts.com/font-downloads)
*   **Alternative:** Hack, FiraCode, or VictorMono.

### 3. External Tools
These are required for Telescope, LSP, and Treesitter to function at peak speed.

*   **Git**: Version control (Required).
*   **Ripgrep (`rg`)**: Used by Telescope for grep searches (Required).
*   **Fd**: Used by Telescope for file finding (Required).
*   **NodeJS & npm**: Required by Mason to install Language Servers (LSP).
*   **C Compiler (gcc/clang)**: Required by Treesitter to compile parsers.

::: tip ARCH LINUX USERS
```bash
sudo pacman -S neovim git ripgrep fd nodejs npm base-devel
```
:::

---

## Installation Steps

### 1. Backup
If you have an existing config, move it aside.
```bash
mv ~/.config/nvim ~/.config/nvim.bak
mv ~/.local/share/nvim ~/.local/share/nvim.bak
```

### 2. Clone
Clone ShadowForge into your config directory.

```bash
git clone https://github.com/shadowdevforge/shadowforge.nvim ~/.config/nvim
```

### 3. Bootstrap
Open Neovim.
```bash
nvim
```

**Do not panic.** The first launch will:
1.  Clone `lazy.nvim` automatically.
2.  Install ~40 plugins.
3.  Install Treesitter parsers.
4.  Install Mason tools.

::: warning PATIENCE REQUIRED
This process takes about 2-3 minutes depending on your internet connection. You may see some errors regarding "module not found" during the very first second—this is normal as plugins are downloading. **Restart Neovim once the dashboard appears.**
:::

## Post-Install Check

Run the doctor to ensure your environment is healthy.

```vim
:ShadowDoctor
```

If you see all ✅ Green, you are ready to forge.
