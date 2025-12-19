# Plugin Overrides (overrides.lua)

The `lua/user/overrides.lua` file is for **advanced customizations**. It uses `lazy.nvim`'s "spec import" system to modify existing ShadowForge plugins, add completely new ones, or disable core modules that you don't use.

### The Structure

The file returns a single table (dictionary) with Lazy.nvim specifications. You only need to specify the `opts` or `enabled` fields to change a plugin. The rest are inherited from the distribution.

```lua
return {
  -- Disable a plugin
  { "folke/noice.nvim", enabled = false },

  -- Modify plugin options
  {
    "nvim-treesitter/nvim-treesitter",
    opts = {
      highlight = { enabled = true },
      indent = { enabled = false },
    },
  },

  -- Add a completely new plugin
  {
    "zbirenbaum/copilot.lua",
    cmd = "Copilot",
    event = "InsertEnter",
  },
}
```

### Adding New Plugins

To install a plugin not included in ShadowForge, simply define it in this table:

```lua
-- Add a plugin from GitHub
{
  "nvim-telescope/telescope-media-files.nvim",
  dependencies = { "nvim-telescope/telescope.nvim" },
  config = function()
    require("telescope").load_extension("media_files")
  end,
}
```

### Disabling Plugins

To disable a core feature, set `enabled = false`:

```lua
-- Remove MiniMap
{
  "wfxr/minimap.vim",
  enabled = false,
},
```

### Modifying Existing Plugins

Use the `opts` field to change plugin settings without copying the entire configuration. The setting will be deep-merged with the default options.

```lua
-- Add languages to Treesitter
{
  "nvim-treesitter/nvim-treesitter",
  opts = {
    ensure_installed = { "lua", "python", "javascript" },
  },
},
```

## Caveats

*   Do not use `require("plugin").setup()` in this file. Lazy.nvim handles the setup automatically.
*   Do not try to override keybindings here. Use `lua/user/keymaps.lua` instead.
