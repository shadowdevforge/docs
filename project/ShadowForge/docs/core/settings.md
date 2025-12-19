# Options & Keymaps

These files define the "Vim" part of Neovim. They are located in `lua/shadowforge/core/`.

## Options (`options.lua`)

We enforce sensible defaults so you don't have to.

| Option | Value | Reasoning |
| :--- | :--- | :--- |
| `clipboard` | `unnamedplus` | Syncs with system clipboard automatically. |
| `splitbelow` | `true` | Horizontal splits open below (like VSCode). |
| `splitright` | `true` | Vertical splits open to the right. |
| `ignorecase` | `true` | Search is case insensitive... |
| `smartcase` | `true` | ...unless you type a capital letter. |
| `undofile` | `true` | Persistent undo history (even after closing nvim). |
| `scrolloff` | `8` | Always keep 8 lines of context when scrolling. |
| `number` | `true` | Show line numbers. |
| `relativenumber` | `true` | Show relative numbers (configurable in user init). |

---

## Keymaps (`keymaps.lua`)

Our philosophy is **"Center & Flow"**. We map keys to keep the cursor centered and movement fluid.

### ⚡ The Speed Hacks
These mappings radically change how you interact with Vim to make it faster.

| Mode | Key | Action | Why? |
| :--- | :--- | :--- | :--- |
| **Normal** | `<leader> w` | Fast Save | `w<cr>` is faster than `:w<cr>`. |
| **Insert** | `jj` | Exit Insert Mode | Keeps your hands on the home row. No reaching for `Esc`. |
| **Normal** | `;` | Enter Command Mode | Maps `;` to `:`. Saves your pinky from holding Shift. |
| **Normal** | `:` | Repeat Find Char | Maps `:` to `;` so you don't lose the functionality. |

### 🧭 Navigation (Centered)
Standard Vim navigation can be disorienting because the cursor jumps around the screen. We force the viewport to center on the cursor.

| Key | Action | Behavior |
| :--- | :--- | :--- |
| `<C-d>` | Scroll Down | Scrolls half-page and **centers** the line (`zz`). |
| `<C-u>` | Scroll Up | Scrolls half-page and **centers** the line (`zz`). |
| `n` | Next Search Result | Jumps to next match, **centers**, and opens folds. |
| `N` | Prev Search Result | Jumps to prev match, **centers**, and opens folds. |

### 🪟 Window Management
Treat splits like physical windows.

| Key | Action |
| :--- | :--- |
| `<C-h>` | Focus Left Window |
| `<C-j>` | Focus Lower Window |
| `<C-k>` | Focus Upper Window |
| `<C-l>` | Focus Right Window |
| `<C-Up>` | Increase Height |
| `<C-Down>` | Decrease Height |
| `<C-Left>` | Decrease Width |
| `<C-Right>` | Increase Width |

### 📑 Buffer Management
Navigate open files without leaving the keyboard.

| Key | Action |
| :--- | :--- |
| `<Shift-h>` | Go to Previous Buffer |
| `<Shift-l>` | Go to Next Buffer |
| `<leader> bd` | Close Current Buffer (Preserves window layout) |

### 📝 Text Manipulation
Modern editing features ported to Vim.

| Mode | Key | Action |
| :--- | :--- | :--- |
| **Normal** | `<Alt-j>` | Move current line down. |
| **Normal** | `<Alt-k>` | Move current line up. |
| **Insert** | `<Alt-j>` | Move current line down (and re-indent). |
| **Insert** | `<Alt-k>` | Move current line up (and re-indent). |
| **Visual** | `<Alt-j>` | Move selected block down. |
| **Visual** | `<Alt-k>` | Move selected block up. |
| **Visual** | `<` | Indent Left (Stays in Visual Mode). |
| **Visual** | `>` | Indent Right (Stays in Visual Mode). |
| **Visual** | `p` | **No-Loss Paste.** Pastes over text without copying the deleted text to register. |

### 🔍 Diagnostics & General
| Key | Action |
| :--- | :--- |
| `<Esc>` | Clear Search Highlights (`:nohlsearch`). |
| `<leader> qq` | Quit All (`:qa`). |
| `]d` | Jump to Next Diagnostic (Error/Warning). |
| `[d` | Jump to Previous Diagnostic. |

### 🖥️ Terminal
| Mode | Key | Action |
| :--- | :--- | :--- |
| **Terminal** | `<Esc><Esc>` | Exit Terminal Insert Mode (Returns to Normal Mode). |
