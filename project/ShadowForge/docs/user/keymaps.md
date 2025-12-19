# User Keybindings (keymaps.lua)

The `lua/user/keymaps.lua` file is where you define your custom keybindings and shortcuts.

## The Structure

This file should return a series of `vim.keymap.set()` calls.

```lua
local map = vim.keymap.set
local opts = { noremap = true, silent = true }

map("n", "<leader>ps", "<cmd> Telescope live_grep <cr>", opts)
map("i", "jk", "<ESC>", opts)
map("n", "<C-s>", "<cmd>w<cr>", opts)
```

### Anatomy of a Keymap

| Field | Description |
| :--- | :--- |
| `mode` | The Vim mode where the keybinding applies (`n`, `i`, `v`, `t`). |
| `lhs` | The key you want to press (Left-Hand Side). |
| `rhs` | The action to perform (Right-Hand Side). |
| `opts` | Extra options (like `noremap` to prevent recursion). |

### Useful Options

*   `noremap = true`: Disable mapping other mappings (Safe).
*   `silent = true`: Don't show messages or errors.
*   `desc = "My Description"`: Add a description for Which-Key.nvim.
*   `buffer = true`: Make the mapping buffer-local (Only active in current window).

### Example: Add a Custom Keybinding

Let's map `<leader>tt` to toggle transparency in a specific buffer.

```lua
local map = vim.keymap.set
local opts = { noremap = true, silent = true, buffer = true, desc = "Toggle Transparency" }

map("n", "<leader>tt", function()
  -- Toggle transparency for the current buffer
  vim.cmd("TransparentToggle")
end, opts)
```
