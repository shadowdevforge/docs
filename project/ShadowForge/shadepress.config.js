export default {
  title: "ShadowForge Docs",
  logo: "ShadowForge",
  repo: "https://github.com/shadowdevforge/docs",
  branch: "main",
  dir: "./project/ShadowForge",

  nav: [
    { text: "Home", link: "#/" },
    { text: "Installation", link: "#/install" },
    { text: "User Guide", link: "#/user/init" },
  ],

  sidebar: [
    {
      text: "Introduction",
      items: [
        { text: "What is ShadowForge?", link: "#/" },
        { text: "Installation", link: "#/install" },
      ],
    },
    {
      text: "Health & Safety",
      items: [
        { text: "Doctor & Updater", link: "#/health/tools" },
        { text: "Backup System", link: "#/health/backup" },
      ],
    },
    {
      text: "User Configuration",
      items: [
        { text: "init.lua (Feature Flags)", link: "#/user/init" },
        { text: "overrides.lua", link: "#/user/overrides" },
        { text: "keymaps.lua", link: "#/user/keymaps" },
      ],
    },
    {
      text: "The Core (Architecture)",
      items: [
        { text: "Bootstrapper (init.lua)", link: "#/core/init" },
        { text: "Config Engine (config.lua)", link: "#/core/engine" },
        { text: "Options & Keymaps", link: "#/core/settings" },
        { text: "Autocommands", link: "#/core/autocmds" },
      ],
    },
    {
      text: "Modules",
      collapsed: true,
      items: [
        { text: "UI (Themes & Dashboard)", link: "#/modules/ui" },
        { text: "Coding (Blink & Format)", link: "#/modules/coding" },
        { text: "Editor (Neo-tree & Telescope)", link: "#/modules/editor" },
        { text: "LSP (Mason & Config)", link: "#/modules/lsp" },
        { text: "Treesitter", link: "#/modules/treesitter" },
      ],
    },
  ],
};
