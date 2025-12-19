import config from "../shadepress.config.js";

import { initRouter } from "shade/router.js";
import { initUI } from "shade/ui.js";
import { initSearch } from "shade/search.js";

function startApp() {
  console.log("DOM ready. Starting ShadePress...");
  const appState = {
    config,
    currentPath: null,
  };

  initUI(appState);
  initRouter(appState);
  initSearch(config);

  console.log("🌑 ShadePress initialized");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startApp);
} else {
  startApp();
}
