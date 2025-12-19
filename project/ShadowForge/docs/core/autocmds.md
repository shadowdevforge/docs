# Autocommands (`autocmds.lua`)

Autocommands are event listeners. They allow ShadowForge to react to editor events like saving a file, resizing the window, or yanking text.

**Location:** `lua/shadowforge/core/autocmds.lua`

## 1. Visual Feedback
**Event:** `TextYankPost`

When you copy text (`y`), the editor briefly highlights the copied region. This provides immediate visual confirmation that the action succeeded.

## 2. Responsive Layouts
**Event:** `VimResized`

If you resize your terminal window, Neovim splits often get messed up. ShadowForge.nvim automatically trigger a re-balance (`wincmd =`) to ensure all splits remain proportional.

## 3. Theme Persistence
**Event:** `ColorScheme`

Whenever you switch themes (via Telescope, Themery, or command), we intercept the event and write the theme name to `~/.local/share/nvim/shadowforge_theme`. This ensures that when you restart Neovim, your chosen theme loads instantly.

## 4. Smart Quit
**Event:** `FileType`

For temporary windows like Help, Man pages, LSP Info, or Checkhealth, we map `q` to close the window immediately. You shouldn't have to type `:q<cr>` for a help popup.

## 5. Core Protection Protocol
**Event:** `BufWritePre`

This is the safety guard. If you attempt to save a file inside the `lua/shadowforge/` directory (The Core), the editor will issue a warning:

> ⚠️ This is a READ ONLY file! If you've broke something, run :ShadowUpdate

This prevents users from accidentally modifying core logic that will be overwritten during the next update cycle.

::: tip USER SAFETY
This guard explicitly ignores `lua/user/`, so your personal config is always writable.
:::
