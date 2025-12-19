# Configuration Engine

ShadowForge separates the **Distribution** logic from the **User** logic. This is handled by `lua/shadowforge/config.lua`.

## The Problem
In most Neovim distros, you have to edit the core files to change settings. When the distro updates, you get merge conflicts.

## The Solution
We expose a `defaults` table and merge it with your `user` table using `vim.tbl_deep_extend`.

### Default Settings
Located in `lua/shadowforge/config.lua`:

```lua
M.defaults = {
  editor = {
    relative_numbers = true,
    wrap = false,
    tab_width = 2,
  },
  ui = {
    transparency = false, -- Default to solid background
    animations = true,
  },
  lsp = {
    -- We assume standard web/lua dev by default
    servers = { "lua_ls", "ts_ls", "html", "cssls" },
  },
}
```

### Injection Logic
Any module in ShadowForge can request these settings dynamically.

For example, `themes.lua` does not know if transparency is on. It asks the engine:

```lua
-- Inside themes.lua
local transparent = require("shadowforge.config").options.ui.transparency
```

This allows us to change the behavior of 10 different plugins just by changing one line in your `user/init.lua`.
