# Treesitter Module

Treesitter provides advanced syntax highlighting and code understanding. It parses code into an Abstract Syntax Tree (AST) rather than using regex.

**Location:** `lua/shadowforge/modules/treesitter/`

## Highlighting

ShadowForge.nvim enable highlighting for ~25 common languages by default. It automatically downloads parsers for new languages when you open a file type for the first time.

## Sticky Context (`nvim-treesitter-context`)

When scrolling through long functions or classes, the declaration line "sticks" to the top of the window so you always know where you are.

*   **Max Lines:** 3
*   **Trim Scope:** Outer

## Auto Tags

Using `nvim-ts-autotag`, HTML and JSX tags are automatically closed and renamed. If you type `<div>`, it inserts `</div>` automatically. If you rename the opening tag, the closing tag updates instantly.
