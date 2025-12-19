# LSP Module

This module connects Neovim to Language Servers (LSP), providing features like "Go to Definition," "Hover," and "Rename."

**Location:** `lua/shadowforge/modules/lsp/`

## Components

1.  **`mason.nvim`**: A package manager for external tools. It downloads the actual server binaries (like `pyright` or `rust-analyzer`).
2.  **`mason-lspconfig.nvim`**: Bridges Mason and Neovim. It ensures servers installed by Mason are automatically configured.
3.  **`nvim-lspconfig`**: The core client configuration.
4.  **`lazydev.nvim`**: Special configuration for Lua development (Neovim APIs).

## Configuration

You do **not** need to edit this module to add languages.

Open `lua/user/init.lua` and add the server name to the `lsp.servers` list. ShadowForge will automatically install and configure it on next startup.

```lua
-- lua/user/init.lua
return {
  lsp = {
    servers = { "rust_analyzer", "gopls", "volar" },
  }
}
```

## Keybindings (LSP Attached)

These keys are only active when a language server is running in the current buffer.

| Key | Action |
| :--- | :--- |
| `gd` | Go to Definition |
| `gD` | Go to Declaration |
| `gr` | Go to References |
| `K` | Hover Documentation |
| `<leader> cr` | Rename Symbol |
| `<leader> ca` | Code Action |
| `]d` / `[d` | Next / Prev Diagnostic |
