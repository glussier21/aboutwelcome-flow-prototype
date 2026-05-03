// Scenario switcher — floating panel for switching between user flows.
// Inject after stubs.js (needs SCENARIOS / currentScenarioId from stubs.js).

(function () {
  // Skip in sandbox mode
  if (new URLSearchParams(location.search).has("sandbox")) return;
  const style = document.createElement("style");
  style.textContent = `
    #sw-toggle {
      position: fixed; bottom: 16px; left: 16px; z-index: 9999;
      background: light-dark(#fff, #2b2a33);
      border: 1.5px solid light-dark(#cfcfd8, #52525e);
      border-radius: 100px; padding: 6px 14px 6px 10px;
      font: 600 12px/1.4 system-ui; cursor: pointer;
      color: light-dark(#15141a, #fbfbfe);
      box-shadow: 0 2px 8px rgba(0,0,0,.15);
      display: flex; align-items: center; gap: 6px;
      transition: box-shadow .15s;
    }
    #sw-toggle:hover { box-shadow: 0 4px 14px rgba(0,0,0,.2); }
    #sw-toggle .sw-dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: var(--color-accent-primary, #0061e0);
    }

    #sw-panel {
      position: fixed; bottom: 52px; left: 16px; z-index: 9998;
      width: 290px; max-height: 70vh; overflow-y: auto;
      background: light-dark(#fff, #2b2a33);
      border: 1.5px solid light-dark(#cfcfd8, #52525e);
      border-radius: 12px;
      box-shadow: 0 8px 30px rgba(0,0,0,.2);
      font-family: system-ui; font-size: 13px;
      color: light-dark(#15141a, #fbfbfe);
      display: none;
    }
    #sw-panel.open { display: block; }

    .sw-panel-header {
      padding: 12px 14px 10px;
      font-weight: 700; font-size: 12px; letter-spacing: .04em; text-transform: uppercase;
      color: light-dark(#5b5b66, #cfcfd8);
      border-bottom: 1px solid light-dark(#e0e0e6, #52525e);
    }

    .sw-group { padding: 8px 0 4px; }
    .sw-group-label {
      padding: 2px 14px 4px;
      font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .04em;
      color: light-dark(#8f8f9d, #afafba);
    }

    .sw-item {
      display: block; width: 100%; text-align: left;
      padding: 7px 14px; border: none; background: none; cursor: pointer;
      font: inherit; color: inherit; font-size: 12.5px;
      border-radius: 0; transition: background .1s;
    }
    .sw-item:hover { background: light-dark(#f0f0f4, #3a3944); }
    .sw-item.active {
      background: light-dark(#ddeeff, #1a2a4a);
      color: var(--color-accent-primary, #0061e0);
      font-weight: 600;
    }
    .sw-item .sw-screens {
      display: block; font-size: 11px;
      color: light-dark(#8f8f9d, #afafba);
      margin-top: 1px; font-weight: 400;
    }
  `;
  document.head.appendChild(style);

  // Toggle button
  const toggle = document.createElement("button");
  toggle.id = "sw-toggle";
  toggle.innerHTML = `<span class="sw-dot"></span> Scenarios`;
  document.body.appendChild(toggle);

  // Panel
  const panel = document.createElement("div");
  panel.id = "sw-panel";

  panel.innerHTML = `<div class="sw-panel-header">User flows</div>` +
    SCENARIOS.groups.map(group => `
      <div class="sw-group">
        <div class="sw-group-label">${group.label}</div>
        ${group.items.map(item => `
          <button class="sw-item${item.id === currentScenarioId ? " active" : ""}" data-id="${item.id}">
            ${item.label}
            <span class="sw-screens">${item.screens.length} screen${item.screens.length !== 1 ? "s" : ""}</span>
          </button>
        `).join("")}
      </div>
    `).join("");

  document.body.appendChild(panel);

  toggle.addEventListener("click", () => panel.classList.toggle("open"));

  panel.addEventListener("click", (e) => {
    const btn = e.target.closest(".sw-item");
    if (!btn) return;
    const id = btn.dataset.id;
    if (id === currentScenarioId) return;
    const url = new URL(location.href);
    url.searchParams.set("scenario", id);
    location.href = url.toString();
  });

  document.addEventListener("click", (e) => {
    if (!panel.contains(e.target) && e.target !== toggle) {
      panel.classList.remove("open");
    }
  });
})();
