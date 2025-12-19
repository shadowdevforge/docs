# Editor Module

This module handles file manipulation, navigation, and git integration.

**Location:** `lua/shadowforge/modules/editor/`

## File Explorer (`neo-tree.nvim`)

ShadowForge.nvim use **Neo-tree** for the side panel. It is configured to look like a modern IDE file tree but behave like Vim.

### The H/L Navigation Flow
ShadowForge introduces a unique navigation workflow for the explorer:

| Key | Action | Behavior |
| :--- | :--- | :--- |
| `l` | **Open / Expand** | Opens file or expands directory. |
| `h` | **Collapse** | Closes directory. |
| `H` (Shift+h) | **Go Up** | Navigates the tree view up to the Parent Directory. |
| `L` (Shift+l) | **Context Switch** | Sets the current directory as the **Root** of the workspace. |

## Fuzzy Finder (`telescope.nvim`)

Powered by `fzf-native` (compiled C) for instant sorting.

*   `<Space> ff`: Find Files (respects `.gitignore`)
*   `<Space> fw`: Live Grep (search text inside files)
*   `<Space> fr`: Recent Files

## Git Integration (`gitsigns.nvim`)

*   **Gutter:** Shows colored bars in the left margin for added/modified/deleted lines.
*   **Blame:** Shows "Who wrote this" virtual text at the end of the current line (0.5s delay).
*   **LazyGit:** Press `<Space>gg` to open a full terminal UI for Git operations (powered by `snacks.nvim`).
