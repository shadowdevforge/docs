# The Bootstrapper (`init.lua`)

The `init.lua` file at the root of the repository is the entry point. It is engineered for **Speed** and **Stability**.

## Performance Optimizations

Before loading *any* plugin, we apply aggressive optimizations.

```lua
-- Byte-compilation cache (Experimental Lua loader)
vim.loader.enable() 

-- Disable built-in providers to save startup time (~15ms)
vim.g.loaded_ruby_provider = 0
vim.g.loaded_perl_provider = 0
vim.g.loaded_python3_provider = 0 
vim.g.loaded_node_provider = 0
```

By disabling the remote providers (Ruby/Node/Python), we stop Neovim from scanning your system for these runtimes on every startup. We use **Mason** and **LSP** for language support instead.

## The Self-Healing Bootstrapper

ShadowForge checks if `lazy.nvim` is installed. If not, it pauses execution, clones the repository from GitHub, adds it to the runtime path, and continues.

This means you can clone ShadowForge on a fresh machine, type `nvim`, and it just works.

## The Setup Sequence

The `M.setup()` function enforces a strict loading order:

1.  **Config Engine:** Reads your `lua/user/init.lua`.
2.  **Core Settings:** Applies spaces/tabs/numbers.
3.  **Lazy:** Loads plugins (Modules).
4.  **Runtime:** Loads Autocommands and Keymaps.
5.  **Tools:** Initializes Doctor and Backup.

::: danger READ ONLY
You should rarely need to edit `init.lua`. Changes here will be overwritten when you run `:ShadowUpdate`. Use `lua/user/overrides.lua` for customizations.
:::
