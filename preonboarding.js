// Preonboarding overlay — renders the Firefox Terms of Use modal layered on top
// of the already-loaded about:welcome page.
// Uses the same HTML class names as the bundle so aboutwelcome.css applies directly.

(function () {
  const S = {
    title:           "Welcome to Firefox",
    subtitle:        "By continuing, you agree to the Firefox Terms of Use and our Privacy Notice. To help improve the browser, Firefox sends diagnostic and interaction data to Mozilla.",
    cta:             "Continue",
    touTitle:        "Read our Terms of Use",
    privacyTitle:    "Read our Privacy Notice",
    dataTitle:       "Manage diagnostic and interaction data",
    interactionLabel:"Send technical and interaction data to Mozilla",
    interactionDesc: "Data about your device, hardware configuration, and how you use Firefox helps improve features, performance, and stability for users everywhere.",
    crashLabel:      "Automatically send crash reports",
    crashDesc:       "Crash reports allow us to diagnose and fix issues with the browser. Reports may include personal or sensitive data.",
  };

  const style = document.createElement("style");
  style.textContent = `
    #preonboarding-backdrop {
      position: fixed; inset: 0; z-index: 8000;
      background: light-dark(rgba(21,20,26,.5), rgba(21,20,26,.7));
      display: flex; align-items: center; justify-content: center;
      animation: pob-fade .2s ease-out;
    }
    #preonboarding-backdrop.closing {
      animation: pob-fade .15s ease-in reverse forwards;
    }
    @keyframes pob-fade { from { opacity: 0 } to { opacity: 1 } }

    /* Card — override onboardingContainer layout while keeping its CSS variables */
    #preonboarding-card.onboardingContainer {
      position: static !important;
      height: auto !important;
      text-align: initial;
      width: 560px; max-height: 90vh; overflow-y: auto;
      background: light-dark(#fff, #2b2a33);
      border-radius: 12px;
      box-shadow: 0 4px 32px rgba(21,20,26,.3);
      animation: pob-slide .25s cubic-bezier(0,.5,.5,1);
    }
    @keyframes pob-slide {
      from { transform: translateY(10px); opacity: 0 }
      to   { transform: none; opacity: 1 }
    }

    /* Top header area (logo + title + subtitle + continue button) */
    .pob-header {
      padding: 40px 40px 0;
      text-align: center;
    }
    .pob-logo-row {
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 20px;
    }
    .pob-logo-row img, .pob-logo-row svg { width: 40px; height: 40px; }
    .pob-title {
      font-size: 24px; font-weight: 700; line-height: 1.2;
      color: var(--text-color, light-dark(#15141a, #fbfbfe));
      margin: 0 0 12px;
    }
    .pob-subtitle {
      font-size: 14px; line-height: 1.5;
      color: light-dark(#5b5b66, #cfcfd8);
      margin: 0 0 20px;
    }
    #pob-continue {
      padding: 8px 20px;
    }

    /* Tile content visibility — bundle uses conditional render, we use display */
    #preonboarding-card .tile-content { display: none; }
    #preonboarding-card .tile-content.open { display: block; }

    /* Bottom padding after tiles */
    #preonboarding-card #content-tiles-container {
      margin-bottom: 0;
    }
    #preonboarding-card {
      padding-bottom: 40px;
    }
  `;
  document.head.appendChild(style);

  function buildModal(logoSvg) {
    const backdrop = document.createElement("div");
    backdrop.id = "preonboarding-backdrop";

    // Card uses .onboardingContainer so aboutwelcome.css scoped rules apply
    const card = document.createElement("div");
    card.id = "preonboarding-card";
    card.className = "onboardingContainer";
    card.setAttribute("role", "dialog");
    card.setAttribute("aria-modal", "true");
    card.setAttribute("aria-labelledby", "pob-title");

    card.innerHTML = `
      <div class="pob-header">
        <div class="pob-logo-row">${logoSvg}</div>
        <h1 class="pob-title" id="pob-title">${S.title}</h1>
        <p class="pob-subtitle">${S.subtitle}</p>
        <button class="primary" id="pob-continue">${S.cta}</button>
      </div>

      <div id="content-tiles-container">

        <div class="content-tile has-header">
          <button class="tile-header secondary" role="link"
                  data-url="https://www.mozilla.org/about/legal/terms/firefox/">
            <div class="header-text-container">
              <span class="header-title">${S.touTitle}</span>
            </div>
            <div class="external-link-icon"></div>
          </button>
        </div>

        <div class="content-tile has-header">
          <button class="tile-header secondary" role="link"
                  data-url="https://www.mozilla.org/privacy/firefox/">
            <div class="header-text-container">
              <span class="header-title">${S.privacyTitle}</span>
            </div>
            <div class="external-link-icon"></div>
          </button>
        </div>

        <div class="content-tile has-header" id="pob-data-tile">
          <button class="tile-header secondary"
                  aria-expanded="false" aria-controls="pob-tile-content">
            <div class="header-text-container">
              <span class="header-title">${S.dataTitle}</span>
            </div>
            <div class="arrow-icon"></div>
          </button>
          <div class="tile-content" id="pob-tile-content">
            <div class="multi-select-container">
              <div class="checkbox-container multi-select-item">
                <input type="checkbox" id="pob-interaction" checked>
                <label for="pob-interaction">${S.interactionLabel}</label>
                <p>${S.interactionDesc}</p>
              </div>
              <div class="checkbox-container multi-select-item">
                <input type="checkbox" id="pob-crash">
                <label for="pob-crash">${S.crashLabel}</label>
                <p>${S.crashDesc}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    `;

    // Link tiles → open URL in new tab
    card.querySelectorAll(".tile-header[data-url]").forEach(btn => {
      btn.addEventListener("click", () =>
        window.open(btn.dataset.url, "_blank", "noopener,noreferrer")
      );
    });

    // Accordion tile → toggle
    const accordionBtn = card.querySelector("#pob-data-tile .tile-header");
    const tileContent  = card.querySelector("#pob-tile-content");
    accordionBtn.addEventListener("click", () => {
      const expanded = accordionBtn.getAttribute("aria-expanded") === "true";
      accordionBtn.setAttribute("aria-expanded", String(!expanded));
      tileContent.classList.toggle("open", !expanded);
    });

    // Continue → dismiss with fade-out
    card.querySelector("#pob-continue").addEventListener("click", () => {
      backdrop.classList.add("closing");
      setTimeout(() => backdrop.remove(), 150);
    });

    backdrop.appendChild(card);
    return backdrop;
  }

  function mount() {
    if (!document.querySelector(".onboardingContainer")) {
      requestAnimationFrame(mount);
      return;
    }
    fetch("assets/splash-logo.svg")
      .then(r => r.text())
      .then(svgText => {
        const doc = new DOMParser().parseFromString(svgText, "image/svg+xml");
        // Remove the <style> block that contains the bounce animation
        doc.querySelectorAll("style").forEach(s => s.remove());
        const staticSvg = new XMLSerializer().serializeToString(doc.documentElement);
        document.body.appendChild(buildModal(staticSvg));
      })
      .catch(() => {
        document.body.appendChild(buildModal('<img src="assets/splash-logo.svg" alt="" role="presentation">'));
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
