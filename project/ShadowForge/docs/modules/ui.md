# UI Module

This module is responsible for the "Soul" of ShadowForge—the aesthetics.

**Location:** `lua/shadowforge/modules/ui/`

## Theming Engine

ShadowForge.nvim use a custom wrapper around **Catppuccin**.

*   **Glassmorphism:** ShadowForge.nvim inject custom highlight groups to remove backgrounds from Telescope, Neo-tree, and Floating Windows. This is controlled via `lua/user/init.lua` (`ui.transparency`).
*   **Persistence:** Your chosen theme is saved to `~/.local/share/nvim/shadowforge_theme`. It restores automatically on startup.

## Statusline (Lualine)

I implemented a custom, independent theme for Lualine.

*   **Stability:** It does not rely on the global colorscheme, preventing "white flashes" when switching themes.
*   **Mode Colors:** The "pill" icon changes color based on mode:
    *   🟠 **Normal:** Orange
    *   🟣 **Insert:** Purple
    *   🟢 **Visual:** Green

## Cinematic UI (Noice)

`noice.nvim` replaces the command line with a floating bar in the center of the screen. It also routes messages and notifications into sleek popup cards.

## Dashboard (Snacks)

A minimal, fast startup screen showing the ShadowForge header and key shortcuts.

*   **Dimming:** Snacks also handles "Focus Mode". Press `<Space>sd` to dim code outside your current function.
*   **Scroll:** Snacks handles smooth scrolling for `<C-d>` and `<C-u>`.

## Tabs (Bufferline)

A browser-like tab bar at the top of the screen. It integrates with Neo-tree to ensure the tabs don't overlap the file explorer sidebar.
