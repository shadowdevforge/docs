import { renderPage } from "shade/renderer.js";
import { updateActiveLinks } from "shade/ui.js";

export function initRouter(state) {
  const handleRoute = () => {
    const hash = window.location.hash || "#/";
    state.currentPath = hash;
    updateActiveLinks(hash, state.config);
    // Render content
    renderPage(hash);
  };
  // Listen for future navigation
  window.addEventListener("hashchange", handleRoute);
  // Trigger initial route
  handleRoute();
}
