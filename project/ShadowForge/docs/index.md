<style>
  /* 1. LAYOUT OVERRIDES */
  .sp-sidebar,
  .sp-toc,
  .sp-pagination,
  .edit-link-wrapper {
    display: none !important;
  }

  .sp-content {
    margin-left: 0 !important;
    margin-right: 0 !important;
    max-width: 100% !important;
    padding: 0 !important;
    width: 100%;
  }

  /* 2. HERO SECTION */
  .hero {
    text-align: center;
    padding: 6rem 1.5rem 4rem;
    background: radial-gradient(circle at center, var(--ctp-mantle) 0%, var(--ctp-base) 70%);
    border-bottom: 1px solid var(--ctp-surface0);
  }

  /* Specific class for the main logo to avoid affecting badges */
  .main-logo {
    width: 180px;
    height: 180px;
    margin-bottom: 2rem;
    border-radius: 50%;
    box-shadow: 0 0 50px rgba(137, 180, 250, 0.15);
    transition: transform 0.3s ease;
  }

  .main-logo:hover {
    transform: scale(1.05);
  }

  .hero-title {
    font-size: 4rem;
    font-weight: 800;
    margin: 0;
    letter-spacing: -1px;
    line-height: 1.1;
    color: var(--ctp-text);
    border-bottom: none !important;
    /* Override markdown h1 border */
  }

  .gradient-text {
    background: linear-gradient(120deg, var(--ctp-blue) 30%, var(--ctp-mauve));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }

  .hero-tagline {
    font-size: 1.5rem;
    color: var(--ctp-subtext0);
    margin: 1.5rem auto 2rem;
    max-width: 700px;
    line-height: 1.6;
  }

  /* 3. BADGES - Fixed styling */
  .badges {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }

  .badges img {
    height: 28px;
    border-radius: 0 !important;
    /* Force square corners */
    display: block;
  }

  /* 4. BUTTONS */
  .actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 3rem;
  }

  .action-btn {
    display: inline-flex;
    align-items: center;
    padding: 0.8rem 2rem;
    border-radius: 99px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.2s;
    font-size: 1.1rem;
  }

  .btn-primary {
    background: var(--ctp-blue);
    color: var(--ctp-base) !important;
    /* Force text color */
    border: 1px solid var(--ctp-blue);
    box-shadow: 0 4px 15px rgba(137, 180, 250, 0.3);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(137, 180, 250, 0.4);
    color: var(--ctp-base) !important;
  }

  .btn-secondary {
    background: var(--ctp-surface0);
    color: var(--ctp-text) !important;
    border: 1px solid var(--ctp-surface1);
  }

  .btn-secondary:hover {
    background: var(--ctp-surface1);
    color: var(--ctp-text) !important;
  }

  /* 5. CONTENT SECTIONS */
  .section-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 4rem 1.5rem;
  }

  .section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    border-bottom: none !important;
    color: var(--ctp-text);
  }

  /* Feature Grid */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .feature-card {
    background: var(--ctp-mantle);
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid var(--ctp-surface0);
    transition: all 0.3s ease;
  }

  .feature-card:hover {
    border-color: var(--ctp-blue);
    transform: translateY(-5px);
  }

  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    display: block;
  }

  .feature-title {
    font-weight: 700;
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
    color: var(--ctp-text);
  }

  .feature-desc {
    color: var(--ctp-subtext0);
    font-size: 1rem;
    line-height: 1.7;
  }

  /* Install Box */
  .install-box {
    background: var(--ctp-crust);
    border: 1px solid var(--ctp-surface0);
    border-radius: 12px;
    padding: 2rem;
    margin-top: 2rem;
  }

  .install-box h3 {
    margin-top: 0;
    color: var(--ctp-blue);
    font-size: 1.2rem;
    border-bottom: none !important;
  }

  /* Footer */
  .footer {
    background-color: var(--ctp-mantle);
    padding: 3rem 0;
    border-top: 1px solid var(--ctp-surface0);
    text-align: center;
    margin-top: 4rem;
  }

  .footer-link {
    color: var(--ctp-subtext0);
    font-weight: 600;
    text-decoration: none;
    margin: 0 1rem;
  }

  .footer-link:hover {
    color: var(--ctp-mauve);
  }

  /* Fix code blocks in HTML mode */
  pre {
    text-align: left;
  }
</style>

<!-- HERO -->
<div class="hero">
<img class="main-logo" src="./docs/assets/logo.png" alt="ShadowForge Logo" />
  <h1 class="hero-title">Shadow<span class="gradient-text">Forge</span></h1>

  <p class="hero-tagline">
    The Ultimate Neovim Experience.<br>
    Forged for Speed. Polished for Aesthetics. Engineered for Stability.
  </p>

  <div class="badges">
    <img
      src="https://img.shields.io/badge/Neovim-0.10+-57A143?style=for-the-badge&logo=neovim&logoColor=white&color=89b4fa&labelColor=1e1e2e"
      alt="Neovim">
    <img
      src="https://img.shields.io/badge/Lua-5.1-2C2D72?style=for-the-badge&logo=lua&logoColor=white&color=a6e3a1&labelColor=1e1e2e"
      alt="Lua">
    <img src="https://img.shields.io/badge/Speed-Blazing-yellow?style=for-the-badge&color=fab387&labelColor=1e1e2e"
      alt="Speed">
  </div>

  <div class="actions">
    <a href="#/install" class="action-btn btn-primary">Get Started →</a>
    <a href="https://github.com/shadowdevforge/shadowforge.nvim" target="_blank" class="action-btn btn-secondary">
      View on GitHub
    </a>
  </div>
</div>

<!-- INTRODUCTION SECTION -->
<div class="section-container">
  <h2 class="section-title">Why ShadowForge?</h2>

  <!-- Replaced Markdown Admonition with HTML -->
  <div class="admonition tip">
    <p class="admonition-title">ARCHITECTURE FIRST</p>
    <p>Unlike other distros that dump everything into <code>init.lua</code>, ShadowForge uses a strict separation of
      concerns. The <strong>Core</strong> is read-only. The <strong>User</strong> config is yours. Updates never break
      your settings.</p>
  </div>

  <div class="features-grid" style="margin-top: 3rem;">
    <div class="feature-card">
      <span class="feature-icon">🚀</span>
      <div class="feature-title">Blazing Fast</div>
      <div class="feature-desc">
        Powered by <code>lazy.nvim</code> byte-compilation and <code>snacks.nvim</code> consolidation. Achieves sub-20ms
        startup times on modern hardware.
      </div>
    </div>

   <div class="feature-card">
     <span class="feature-icon">🧠</span>
     <div class="feature-title">Hyper-Intelligent</div>
     <div class="feature-desc">
      ShadowForge.nvim ditched <code>nvim-cmp</code> for the Rust-based <strong>Blink.cmp</strong>. Autocompletion is instant,
       flicker-free, and handles 10k+ line files with ease.
     </div>
   </div>

   <div class="feature-card">
     <span class="feature-icon">💎</span>
     <div class="feature-title">Glassmorphic UI</div>
     <div class="feature-desc">
       A custom-engineered Catppuccin theme with true transparency, window dimming, and smooth cursor animations.
     </div>
   </div>

   <div class="feature-card">
     <span class="feature-icon">🛡️</span>
     <div class="feature-title">Ironclad Stability</div>
     <div class="feature-desc">
       Built-in <code>:ShadowDoctor</code> for diagnostics and <code>:ShadowBackup</code> for instant snapshots. Break
       things safely.
     </div>
   </div>
  </div>
</div>

<!-- INSTALL SECTION -->
<div class="section-container" style="padding-top: 0;">
  <h2 class="section-title">Ready to Forge?</h2>

  <div class="install-box">
   <h3>1. Clone the Repository</h3>
   <pre><code class="language-bash">git clone https://github.com/shadowdevforge/shadowforge.nvim ~/.config/nvim</code>
   </pre>

   <h3 style="margin-top: 1.5rem;">2. Launch & Bootstrap</h3>
   <p style="color: var(--ctp-subtext0); margin-bottom: 0.5rem;">Open Neovim. The installer runs automatically.</p>
   <pre><code class="language-bash">nvim</code></pre>
  </div>
</div>

<!-- FOOTER -->
<footer class="footer">
  <div style="margin-bottom: 1rem;">
    <a href="https://github.com/shadowdevforge" target="_blank" class="footer-link">GitHub</a>
    <a href="#/install" class="footer-link">Installation</a>
    <a href="#/core/init" class="footer-link">Architecture</a>
  </div>
  <div style="color: var(--ctp-surface2); font-size: 0.9rem;">
    © 2025 ShadowDevForge. Licensed under MIT.
  </div>
</footer>
