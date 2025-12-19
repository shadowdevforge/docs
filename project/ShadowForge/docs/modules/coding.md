# Coding Module

This module handles the "Hands on Keyboard" experience: typing, autocompletion, and formatting.

**Location:** `lua/shadowforge/modules/coding/`

## Autocompletion (`blink.cmp`)

ShadowForge.nvim have replaced the industry-standard `nvim-cmp` with **`blink.cmp`**.

*   **Why?** Blink uses a **Rust** backend for fuzzy matching and sorting. It is significantly faster than Lua-based completion, especially in large files.
*   **Sources:** LSP, Snippets, Buffer, Path.

### Ghost Text
ShadowForge.nvim support "Ghost Text" (inline grey suggestions), but it is disabled by default to keep the UI clean.

| Key | Action |
| :--- | :--- |
| `<leader>gt` | Toggle Ghost Text on/off |
| `<Tab>` | Select Next Item / Expand Snippet |
| `<S-Tab>` | Select Previous Item |
| `<Enter>` | Accept Suggestion |

## Formatting (`conform.nvim`)

Formatting is handled by `conform.nvim`. It is configured to run automatically on save (if enabled in your user config).

*   **Lua:** `stylua`
*   **Python:** `isort` + `black`
*   **JS/TS:** `prettierd` (or `prettier`)

## Text Manipulation

*   **Auto Pairs:** `mini.pairs` automatically closes `(`, `[`, `{`, and quotes.
*   **Surround:** `mini.surround` allows you to modify surrounding characters easily.

| Key | Action | Example |
| :--- | :--- | :--- |
| `gsa` | Add surround | `gsa"` -> adds quotes around selection |
| `gsd` | Delete surround | `gsd"` -> removes quotes |
| `gsr` | Replace surround | `gsr"(` -> change quotes to parenthesis |
