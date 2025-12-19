# Doctor & Updater

ShadowForge isn't just a config; it's a managed distribution. ShadowForge.nvim provide built-in tools to keep your environment healthy and up-to-date.

## The Doctor (`:ShadowDoctor`)

**Location:** `lua/shadowforge/health/doctor.lua`

Running `:ShadowDoctor` performs a deep scan of your system. It checks for:

1.  **System Requirements:** Neovim version, OS type.
2.  **External Tools:** Checks if `git`, `rg`, `fd`, `node`, `npm`, and `gcc` are in your `$PATH`.
3.  **Config Integrity:** Verifies that `lua/user/init.lua` exists.
4.  **Persistence:** Checks if a theme state file has been generated.

It renders a beautiful Nerd-Font enhanced report in a notification popup.

```text
🩺 SHADOWFORGE DIAGNOSTICS
━━━━━━━━━━━━━━━━━━━━━━━━━
  Neovim: 0.10.2
  git        : Installed (Version Control)
  rg         : Installed (Ripgrep)
  fd         : Installed (Fd)
 󰖟 node       : Installed (NodeJS)
```

## The Updater (`:ShadowUpdate`)

Updating a Neovim config manually is painful. You have to pull git changes, sync plugins, rebuild parsers, and update language servers.

`:ShadowUpdate` automates the entire pipeline:

1.  **Git Pull:** Updates the ShadowForge Core repository.
2.  **Lazy Sync:** Installs missing plugins and updates existing ones to locked versions.
3.  **Mason Update:** Upgrades language servers and linters.
4.  **Treesitter Update:** Recompiles syntax parsers.

::: warning LOCKFILE
The updater respects `lazy-lock.json`. This ensures you only get plugin versions that we have tested and verified, preventing breaking changes from upstream plugins.
:::


