# Backup System

Experimentation is the heart of learning. ShadowForge encourages you to tweak your config by providing a safety net.

## The Snapshot Engine (`:ShadowBackup`)

**Location:** `lua/shadowforge/health/backup.lua`

Running `:ShadowBackup` creates an instant timestamped copy of your **User Configuration**.

### How it works

1.  It scans `~/.config/nvim/lua/user/`.
2.  It creates a new folder in `lua/user/snapshots/` formatted as `snapshot-YYYY-MM-DD-HH-MM-SS`.
3.  It copies `init.lua`, `overrides.lua`, and `keymaps.lua` into that folder.

### Restoration

If you break your config, simply:
1.  Navigate to `lua/user/snapshots/`.
2.  Open the snapshot you want.
3.  Copy the content back to your main `lua/user/` files.

::: tip SMART COPY
The backup engine is recursive-aware. It will never try to backup the `snapshots` folder itself, preventing infinite loops and disk bloat.
:::
