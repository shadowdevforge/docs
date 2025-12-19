# User Configuration (init.lua)

The `lua/user/init.lua` file is the **Single Source of Truth** for controlling global settings in ShadowForge. It is designed to be simple to read and edit, even if you don't know Lua.

### Structure

The file returns a single table (dictionary) with different sections for Editor, UI, and LSP.

```lua
return {
  editor = {
    relative_numbers = true,
    wrap = false,
  },
  ui = {
    transparency = true,
    animations = true,
  },
  lsp = {
    servers = { "lua_ls", "ts_ls" },
  },
}
```

## Editor Settings

This section controls core editor options.

| Option | Description | Values | Default |
| :--- | :--- | :--- | :--- |
| `relative_numbers` | Show relative line numbers. | `true` / `false` | `true` |
| `wrap` | Enable line wrapping. | `true` / `false` | `false` |
| `tab_width` | Number of spaces for a tab. | `number` | `2` |

Example: Show absolute numbers, wrap long lines, and use 4 spaces for tabs:

```lua
editor = {
  relative_numbers = false,
  wrap = true,
  tab_width = 4,
}
```

## UI Settings

This section controls graphical elements and animations.

| Option | Description | Values | Default |
| :--- | :--- | :--- | :--- |
| `transparency` | Enable transparent window backgrounds. | `true` / `false` | `false` |
| `animations` | Enable smooth animations (cursor, scrolling). | `true` / `false` | `true` |

Example: Enable transparency and disable animations:

```lua
ui = {
  transparency = true,
  animations = false,
}
```

## LSP Settings

This configures the Language Server Protocol.

| Option | Description | Values | Default |
| :--- | :--- | :--- | :--- |
| `servers` | A list of language servers to install. | `string[]` | `{"lua_ls", "ts_ls"}` |
| `formatting.format_on_save` | Auto-format on save. | `true` / `false` | `true` |

ShadowForge uses `mason.nvim` to download and configure LSP servers.

To enable support for Python, Rust, Go, or other languages, just add their server names to the `servers` array:

```lua
lsp = {
  servers = { "lua_ls", "ts_ls", "pyright", "rust_analyzer", "gopls" },
}
```

::: tip MASON
These names correspond to the servers available in `mason.nvim`. To see the full list, type `:Mason` in Neovim.
:::
