// ---------------------------------------------------------------------------
// Fluent / l10n stub
// ---------------------------------------------------------------------------
const STRINGS = {
  // Easy setup shared
  "onboarding-refresh-pin-set-default-title": "You're in safe paws",
  "onboarding-refresh-pin-set-default-subtitle": "We protect your data and block companies from spying on your clicks — automatically.",
  "mr2022-onboarding-easy-setup-import-checkbox-label": "Import from previous browser",
  "mr2022-onboarding-easy-setup-set-default-checkbox-label": "Set Firefox as default browser",
  "mr2022-onboarding-pin-primary-button-label": "Pin Firefox to taskbar",
  "mr2022-onboarding-easy-setup-primary-button-label": "Save and continue",
  "mr2022-onboarding-secondary-skip-button-label": "Skip this step",
  "mr1-onboarding-sign-in-button-label": "Sign in",
  "mr2022-onboarding-default-image-alt": "Person hugging the Firefox logo",
  "restore-from-backup-secondary-top-button": "Restore from Backup",

  // Backup / restore
  "restore-from-backup-title": "Let's get Firefox back how you like it",
  "restore-from-backup-subtitle": "Recover all your bookmarks, history, and other data to get back to browsing.",
  "restore-from-backup-secondary-button": "Don't restore",
  "multiple-backups-info-tile": "Multiple backups found — choose one in Settings",

  // Device migration
  "onboarding-device-migration-title": "Welcome back!",
  "onboarding-device-migration-subtitle2": "Sign in to your account to bring your bookmarks, passwords, and history with you on your new device.",
  "onboarding-device-migration-primary-button-label": "Sign in",
  "onboarding-device-migration-image-alt": "A fox waving on a laptop screen.",

  // RTAMO
  "mr1-return-to-amo-subtitle": "Say hello to Firefox",
  "mr1-return-to-amo-addon-title": "You've got a fast, private browser. Now you can add your extension and do even more.",
  "mr1-return-to-amo-add-extension-label": "Add extension",

  // Smart Window
  "smartwindow-onboarding-title": "Make Smart Window your go-to",
  "smartwindow-onboarding-subtitle": "Summarize, compare, and ask questions without missing a beat.",
  "smartwindow-onboarding-primary-button": "Continue",
  "smartwindow-onboarding-image-alt": "Firefox mascot (Kit) with star props",

  // Import
  "onboarding-refresh-import-title": "Make Firefox feel more like home",
  "onboarding-refresh-import-subtitle": "Bring over your passwords, bookmarks, history and more.",
  "mr2022-onboarding-import-image-alt": "Person riding a skateboard with a box of software icons",

  // AMO
  "onboarding-refresh-onboarding-addons-title": "Give your browsing a boost",
  "onboarding-refresh-onboarding-addons-subtitle": "Extensions are tiny apps that let you customize Firefox — from blocking ads to comparing prices while you shop.",

  // Language mismatch
  "mr2022-onboarding-live-language-text": "Speak your language?",
  "mr2022-language-mismatch-subtitle": "Your system language doesn't match Firefox. Switch now or keep English.",
  "mr2022-onboarding-live-language-switch-to": "Switch to French",
  "mr2022-onboarding-live-language-continue-in": "Continue in English",
  "onboarding-live-language-button-label-downloading": "Downloading…",
  "onboarding-live-language-secondary-cancel-download": "Cancel",
  "onboarding-live-language-waiting-button": "Waiting for download…",

  // Account / gratitude
  "onboarding-refresh-sync-title": "Go anywhere. Sync everything.",
  "onboarding-refresh-sync-subtitle": "Sync your bookmarks, passwords, history, and more on all the devices where you use Firefox.",
  "onboarding-sign-up-button": "Sign up or sign in",
  "mr2-onboarding-start-browsing-button-label": "Start browsing",
  "onboarding-refresh-gratitude-title": "Firefox has your back",
  "onboarding-refresh-gratitude-subtitle": "Thank you for using Firefox, the only major browser backed by a non-profit focused on your privacy.",
  "mr2022-onboarding-gratitude-image-alt": "View of a sunset through a window with a fox and a house plant on a windowsill",

  // Shared
  "onboarding-welcome-header": "Firefox — Welcome",

  // Preonboarding (Terms of Use modal)
  "preonboarding-title": "Welcome to Firefox",
  "preonboarding-subtitle": "By continuing, you agree to the Firefox Terms of Use and our Privacy Notice. To help improve the browser, Firefox sends diagnostic and interaction data to Mozilla.",
  "preonboarding-primary-cta-v2": "Continue",
  "preonboarding-terms-of-use-header-button-title": "Read our Terms of Use",
  "preonboarding-privacy-notice-header-button-title": "Read our Privacy Notice",
  "preonboarding-manage-data-header-button-title": "Manage diagnostic and interaction data",
  "preonboarding-checklist-interaction-data-label": "Send technical and interaction data to Mozilla",
  "preonboarding-checklist-interaction-data-description": "Data about your device, hardware configuration, and how you use Firefox helps improve features, performance, and stability for users everywhere.",
  "preonboarding-checklist-crash-reports-label": "Automatically send crash reports",
  "preonboarding-checklist-crash-reports-description": "Crash reports allow us to diagnose and fix issues with the browser. Reports may include personal or sensitive data.",
};

document.l10n = {
  formatValue(id, args) {
    const s = (STRINGS[id] ?? id).replace(/\{ -brand-[^}]+ \}/g, "Firefox");
    return Promise.resolve(s);
  },
  formatValues(pairs) {
    return Promise.all(pairs.map(([id, args]) => this.formatValue(id, args)));
  },
  formatMessages(ids) {
    return Promise.resolve(
      ids.map(({ id }) => ({
        value: (STRINGS[id] ?? id).replace(/\{ -brand-[^}]+ \}/g, "Firefox"),
        attributes: null,
      }))
    );
  },
  setAttributes(el, id) {
    el.textContent = (STRINGS[id] ?? id).replace(/\{ -brand-[^}]+ \}/g, "Firefox");
  },
  connectRoot() {},
  disconnectRoot() {},
  pauseObserving() {},
  resumeObserving() {},
  translateFragment: async (node) => {
    node.querySelectorAll("[data-l10n-id]").forEach(translateL10nEl);
  },
};

function translateL10nEl(el) {
  const id = el.getAttribute("data-l10n-id");
  const str = STRINGS[id];
  if (!str) return;
  const resolved = str.replace(/\{ -brand-[^}]+ \}/g, "Firefox");
  const attrs = el.getAttribute("data-l10n-attrs");
  if (attrs) {
    attrs.split(",").forEach((attr) => el.setAttribute(attr.trim(), resolved));
  } else if (el.tagName === "TITLE") {
    document.title = resolved;
  } else if (resolved.includes("<")) {
    el.innerHTML = resolved;
  } else {
    el.textContent = resolved;
  }
}

// Auto-translate data-l10n-id elements as React renders them — mirrors Firefox's DOMLocalization overlay.
new MutationObserver(mutations => {
  for (const m of mutations) {
    for (const node of m.addedNodes) {
      if (node.nodeType !== 1) continue;
      if (node.hasAttribute("data-l10n-id")) translateL10nEl(node);
      node.querySelectorAll("[data-l10n-id]").forEach(translateL10nEl);
    }
    if (m.type === "attributes") translateL10nEl(m.target);
  }
}).observe(document.documentElement, {
  childList: true, subtree: true,
  attributes: true, attributeFilter: ["data-l10n-id"],
});

// ---------------------------------------------------------------------------
// Screen content building helpers
// ---------------------------------------------------------------------------
const r = (id) => ({ raw: STRINGS[id] ?? id }); // string_id → raw

const SIGN_IN_TOP_BTN = {
  label: r("mr1-onboarding-sign-in-button-label"),
  action: { data: { entrypoint: "activity-stream-firstrun", where: "tab" }, type: "SHOW_FIREFOX_ACCOUNTS", addFlowParams: true },
};

const SKIP_BTN = { label: r("mr2022-onboarding-secondary-skip-button-label"), action: { navigate: true }, has_arrow_icon: true };

const EASY_SETUP_BG = "url('assets/br-set-default-fox-heart.svg') var(--mr-secondary-position) no-repeat light-dark(rgba(252,245,240,1), rgba(33,3,64,1))";

// ---------------------------------------------------------------------------
// All screen definitions
// ---------------------------------------------------------------------------
const SCREEN = {
  AW_BACKUP_RESTORE_EMBEDDED_BACKUP_FOUND: {
    id: "AW_BACKUP_RESTORE_EMBEDDED_BACKUP_FOUND",
    content: {
      fullscreen: true, logo: {}, position: "split", split_narrow_bkg_position: "-42px",
      progress_bar: true, hide_secondary_section: "responsive",
      background: "url('assets/fox-doodle-backup-restore.svg') var(--mr-secondary-position) no-repeat var(--mr-screen-background-color)",
      title: r("restore-from-backup-title"),
      subtitle: r("restore-from-backup-subtitle"),
      // backup_show_filepicker is rendered by the Firefox restore-from-backup
      // custom element (not available outside Firefox). Add an explicit
      // primary_button so the CTA is visible in the prototype.
      primary_button: {
        label: { raw: "Restore from Backup" },
        action: { navigate: true },
      },
      tiles: { type: "backup_restore" },
      backup_show_filepicker: { action: {} },
      skip_button: { label: r("restore-from-backup-secondary-button"), action: { navigate: true } },
    },
  },

  AW_BACKUP_RESTORE_EMBEDDED_MULTIPLE_BACKUPS_FOUND: {
    id: "AW_BACKUP_RESTORE_EMBEDDED_MULTIPLE_BACKUPS_FOUND",
    content: {
      fullscreen: true, logo: {}, position: "split", split_narrow_bkg_position: "-42px",
      progress_bar: true, hide_secondary_section: "responsive",
      background: "url('assets/fox-doodle-backup-restore.svg') var(--mr-secondary-position) no-repeat var(--mr-screen-background-color)",
      title: r("restore-from-backup-title"),
      subtitle: r("restore-from-backup-subtitle"),
      // Multiple backups: the real screen uses cta_paragraph (a clickable info
      // tile) instead of a standard primary_button. Without the Firefox
      // restore-from-backup custom element that renders the cta_paragraph,
      // nothing surfaces. Add an explicit primary_button matching the intended
      // action so the CTA is visible in the prototype.
      primary_button: {
        label: { raw: "Open backup settings" },
        action: { type: "OPEN_ABOUT_PAGE", data: { args: "preferences#sync-backup", where: "tabshifted" }, navigate: true },
      },
      tiles: { type: "backup_restore" },
      backup_show_filepicker: { action: {} },
      skip_button: { label: r("restore-from-backup-secondary-button"), action: { navigate: true } },
    },
  },

  AW_WELCOME_BACK: {
    id: "AW_WELCOME_BACK",
    content: {
      fullscreen: true, position: "split", split_narrow_bkg_position: "-100px",
      progress_bar: true, logo: {},
      image_alt_text: r("onboarding-device-migration-image-alt"),
      background: "url('assets/device-migration.svg') var(--mr-secondary-position) no-repeat var(--mr-screen-background-color)",
      title: r("onboarding-device-migration-title"),
      subtitle: r("onboarding-device-migration-subtitle2"),
      primary_button: { label: r("onboarding-device-migration-primary-button-label"), action: { type: "FXA_SIGNIN_FLOW", navigate: true, data: { entrypoint: "fx-device-migration-onboarding" } } },
      secondary_button: SKIP_BTN,
      secondary_button_top: SIGN_IN_TOP_BTN,
    },
  },

  RETURN_TO_AMO: {
    id: "RETURN_TO_AMO",
    content: {
      fullscreen: true, position: "split", isRtamo: true,
      progress_bar: true,
      background: "url('assets/mr-rtamo-background-image.svg') center center / cover no-repeat",
      title: r("mr1-return-to-amo-subtitle"),
      subtitle: r("mr1-return-to-amo-addon-title"),
      primary_button: { label: r("mr1-return-to-amo-add-extension-label"), action: { type: "INSTALL_ADDON_FROM_URL", data: { url: null, telemetrySource: "rtamo" }, navigate: true } },
      secondary_button: SKIP_BTN,
      secondary_button_top: SIGN_IN_TOP_BTN,
    },
  },

  AW_SMART_WINDOW_NEEDS_DEFAULT_AND_PIN: {
    id: "AW_SMART_WINDOW_NEEDS_DEFAULT_AND_PIN",
    force_hide_steps_indicator: true,
    content: {
      fullscreen: true, position: "split", split_narrow_bkg_position: "-60px",
      progress_bar: true, logo: {}, hide_secondary_section: "responsive",
      image_alt_text: r("smartwindow-onboarding-image-alt"),
      background: "url('assets/mr-kit-smart-window.svg') var(--mr-secondary-position) no-repeat",
      title: r("smartwindow-onboarding-title"),
      subtitle: r("smartwindow-onboarding-subtitle"),
      tiles: { type: "multiselect", data: [
        { id: "checkbox-1", defaultValue: true, label: r("mr2022-onboarding-easy-setup-set-default-checkbox-label"), action: { type: "SET_DEFAULT_BROWSER" } },
        { id: "checkbox-2", defaultValue: true, label: r("mr2022-onboarding-pin-primary-button-label"), action: { type: "PIN_FIREFOX_TO_TASKBAR" } },
      ]},
      primary_button: { label: r("smartwindow-onboarding-primary-button"), action: { type: "MULTI_ACTION", collectSelect: true, navigate: true, data: { actions: [] } } },
      secondary_button: SKIP_BTN,
    },
  },

  AW_SMART_WINDOW_NEEDS_DEFAULT: {
    id: "AW_SMART_WINDOW_NEEDS_DEFAULT",
    force_hide_steps_indicator: true,
    content: {
      fullscreen: true, position: "split", split_narrow_bkg_position: "-60px",
      progress_bar: true, logo: {}, hide_secondary_section: "responsive",
      image_alt_text: r("smartwindow-onboarding-image-alt"),
      background: "url('assets/mr-kit-smart-window.svg') var(--mr-secondary-position) no-repeat",
      title: r("smartwindow-onboarding-title"),
      subtitle: r("smartwindow-onboarding-subtitle"),
      tiles: { type: "multiselect", data: [
        { id: "checkbox-1", defaultValue: true, label: r("mr2022-onboarding-easy-setup-set-default-checkbox-label"), action: { type: "SET_DEFAULT_BROWSER" } },
      ]},
      primary_button: { label: r("smartwindow-onboarding-primary-button"), action: { type: "MULTI_ACTION", collectSelect: true, navigate: true, data: { actions: [] } } },
      secondary_button: SKIP_BTN,
    },
  },

  AW_SMART_WINDOW_NEEDS_PIN: {
    id: "AW_SMART_WINDOW_NEEDS_PIN",
    force_hide_steps_indicator: true,
    content: {
      fullscreen: true, position: "split", split_narrow_bkg_position: "-60px",
      progress_bar: true, logo: {}, hide_secondary_section: "responsive",
      image_alt_text: r("smartwindow-onboarding-image-alt"),
      background: "url('assets/mr-kit-smart-window.svg') var(--mr-secondary-position) no-repeat",
      title: r("smartwindow-onboarding-title"),
      subtitle: r("smartwindow-onboarding-subtitle"),
      tiles: { type: "multiselect", data: [
        { id: "checkbox-1", defaultValue: true, label: r("mr2022-onboarding-pin-primary-button-label"), action: { type: "PIN_FIREFOX_TO_TASKBAR" } },
      ]},
      primary_button: { label: r("smartwindow-onboarding-primary-button"), action: { type: "MULTI_ACTION", collectSelect: true, navigate: true, data: { actions: [] } } },
      secondary_button: SKIP_BTN,
    },
  },

  AW_SMART_WINDOW_NO_CHECKBOXES: {
    id: "AW_SMART_WINDOW_NO_CHECKBOXES",
    force_hide_steps_indicator: true,
    content: {
      fullscreen: true, position: "split", split_narrow_bkg_position: "-60px",
      progress_bar: true, logo: {}, hide_secondary_section: "responsive",
      image_alt_text: r("smartwindow-onboarding-image-alt"),
      background: "url('assets/mr-kit-smart-window.svg') var(--mr-secondary-position) no-repeat",
      title: r("smartwindow-onboarding-title"),
      subtitle: r("smartwindow-onboarding-subtitle"),
      primary_button: { label: r("smartwindow-onboarding-primary-button"), action: { navigate: true } },
    },
  },

  AW_EASY_SETUP_NEEDS_DEFAULT_AND_PIN: {
    id: "AW_EASY_SETUP_NEEDS_DEFAULT_AND_PIN",
    content: {
      fullscreen: true, position: "split", split_narrow_bkg_position: "-60px",
      progress_bar: true, logo: {}, hide_secondary_section: "responsive",
      image_alt_text: r("mr2022-onboarding-default-image-alt"),
      background: EASY_SETUP_BG,
      title: r("onboarding-refresh-pin-set-default-title"),
      subtitle: r("onboarding-refresh-pin-set-default-subtitle"),
      tiles: { type: "multiselect", data: [
        { id: "checkbox-1", defaultValue: true, label: r("mr2022-onboarding-pin-primary-button-label"), action: { type: "PIN_FIREFOX_TO_TASKBAR" } },
        { id: "checkbox-2", defaultValue: true, label: r("mr2022-onboarding-easy-setup-set-default-checkbox-label"), action: { type: "SET_DEFAULT_BROWSER" } },
        { id: "checkbox-3", defaultValue: true, label: r("mr2022-onboarding-easy-setup-import-checkbox-label"),
          checkedAction: { type: "SET_PREF", data: { pref: { name: "showEmbeddedImport", value: true } } },
          uncheckedAction: { type: "SET_PREF", data: { pref: { name: "showEmbeddedImport" } } } },
      ]},
      primary_button: { label: r("mr2022-onboarding-easy-setup-primary-button-label"), action: { type: "MULTI_ACTION", collectSelect: true, navigate: true, data: { actions: [] } } },
      secondary_button: SKIP_BTN,
      secondary_button_top: [SIGN_IN_TOP_BTN],
    },
  },

  AW_EASY_SETUP_NEEDS_DEFAULT: {
    id: "AW_EASY_SETUP_NEEDS_DEFAULT",
    content: {
      fullscreen: true, position: "split", split_narrow_bkg_position: "-60px",
      progress_bar: true, logo: {},
      image_alt_text: r("mr2022-onboarding-default-image-alt"),
      background: EASY_SETUP_BG,
      title: r("onboarding-refresh-pin-set-default-title"),
      subtitle: r("onboarding-refresh-pin-set-default-subtitle"),
      tiles: { type: "multiselect", data: [
        { id: "checkbox-1", defaultValue: true, label: r("mr2022-onboarding-easy-setup-set-default-checkbox-label"), action: { type: "SET_DEFAULT_BROWSER" } },
        { id: "checkbox-2", defaultValue: true, label: r("mr2022-onboarding-easy-setup-import-checkbox-label"),
          checkedAction: { type: "SET_PREF", data: { pref: { name: "showEmbeddedImport", value: true } } },
          uncheckedAction: { type: "SET_PREF", data: { pref: { name: "showEmbeddedImport" } } } },
      ]},
      primary_button: { label: r("mr2022-onboarding-easy-setup-primary-button-label"), action: { type: "MULTI_ACTION", collectSelect: true, navigate: true, data: { actions: [] } } },
      secondary_button: SKIP_BTN,
      secondary_button_top: [SIGN_IN_TOP_BTN],
    },
  },

  AW_EASY_SETUP_NEEDS_PIN: {
    id: "AW_EASY_SETUP_NEEDS_PIN",
    content: {
      fullscreen: true, position: "split", split_narrow_bkg_position: "-60px",
      progress_bar: true, logo: {},
      image_alt_text: r("mr2022-onboarding-default-image-alt"),
      background: EASY_SETUP_BG,
      title: r("onboarding-refresh-pin-set-default-title"),
      subtitle: r("onboarding-refresh-pin-set-default-subtitle"),
      tiles: { type: "multiselect", data: [
        { id: "checkbox-1", defaultValue: true, label: r("mr2022-onboarding-pin-primary-button-label"), action: { type: "PIN_FIREFOX_TO_TASKBAR" } },
        { id: "checkbox-2", defaultValue: true, label: r("mr2022-onboarding-easy-setup-import-checkbox-label"),
          checkedAction: { type: "SET_PREF", data: { pref: { name: "showEmbeddedImport", value: true } } },
          uncheckedAction: { type: "SET_PREF", data: { pref: { name: "showEmbeddedImport" } } } },
      ]},
      primary_button: { label: r("mr2022-onboarding-easy-setup-primary-button-label"), action: { type: "MULTI_ACTION", collectSelect: true, navigate: true, data: { actions: [] } } },
      secondary_button: SKIP_BTN,
      secondary_button_top: [SIGN_IN_TOP_BTN],
    },
  },

  AW_EASY_SETUP_ONLY_IMPORT: {
    id: "AW_EASY_SETUP_ONLY_IMPORT",
    content: {
      fullscreen: true, position: "split", split_narrow_bkg_position: "-60px",
      progress_bar: true, logo: {},
      image_alt_text: r("mr2022-onboarding-default-image-alt"),
      background: EASY_SETUP_BG,
      title: r("onboarding-refresh-pin-set-default-title"),
      subtitle: r("onboarding-refresh-pin-set-default-subtitle"),
      tiles: { type: "multiselect", data: [
        { id: "checkbox-1", defaultValue: true, label: r("mr2022-onboarding-easy-setup-import-checkbox-label"),
          checkedAction: { type: "SET_PREF", data: { pref: { name: "showEmbeddedImport", value: true } } },
          uncheckedAction: { type: "SET_PREF", data: { pref: { name: "showEmbeddedImport" } } } },
      ]},
      primary_button: { label: r("mr2022-onboarding-easy-setup-primary-button-label"), action: { type: "MULTI_ACTION", collectSelect: true, navigate: true, data: { actions: [] } } },
      secondary_button: SKIP_BTN,
      secondary_button_top: [SIGN_IN_TOP_BTN],
    },
  },

  AW_LANGUAGE_MISMATCH: {
    id: "AW_LANGUAGE_MISMATCH",
    content: {
      fullscreen: true, position: "split",
      progress_bar: true, logo: {},
      background: "var(--mr-screen-background-color)",
      title: r("mr2022-onboarding-live-language-text"),
      subtitle: r("mr2022-language-mismatch-subtitle"),
      hero_text: { raw: "Parlez-vous français?" },
      languageSwitcher: {
        downloading: r("onboarding-live-language-button-label-downloading"),
        cancel: r("onboarding-live-language-secondary-cancel-download"),
        waiting: r("onboarding-live-language-waiting-button"),
        skip: r("mr2022-onboarding-secondary-skip-button-label"),
        action: { navigate: true },
        switch: { raw: "Switch to French" },
        continue: { raw: "Continue in English" },
      },
    },
  },

  AW_IMPORT_SETTINGS_EMBEDDED: {
    id: "AW_IMPORT_SETTINGS_EMBEDDED",
    content: {
      fullscreen: true, position: "split", split_narrow_bkg_position: "-42px",
      progress_bar: true, hide_secondary_section: "responsive",
      image_alt_text: r("mr2022-onboarding-import-image-alt"),
      background: "url('assets/br-import-fox-house.svg') var(--mr-secondary-position) no-repeat light-dark(rgba(252,245,240,1), rgba(33,3,64,1))",
      title: r("onboarding-refresh-import-title"),
      subtitle: r("onboarding-refresh-import-subtitle"),
      tiles: { type: "migration-wizard" },
      migrate_start: { action: {} },
      migrate_close: { action: { navigate: true } },
      secondary_button: SKIP_BTN,
      secondary_button_top: SIGN_IN_TOP_BTN,
    },
  },

  AW_AMO_INTRODUCE: {
    id: "AW_AMO_INTRODUCE",
    content: {
      fullscreen: true, position: "split", split_narrow_bkg_position: "-58px",
      progress_bar: true, logo: {},
      background: "url('assets/br-amo-fox-paint.svg') var(--mr-secondary-position) no-repeat light-dark(rgba(252,245,240,1), rgba(33,3,64,1))",
      title: r("onboarding-refresh-onboarding-addons-title"),
      subtitle: r("onboarding-refresh-onboarding-addons-subtitle"),
      primary_button: {
        label: { raw: "Explore staff recommended extensions" },
        action: { type: "OPEN_URL", data: { args: "https://addons.mozilla.org/en-US/firefox/collections/4757633/b4d5649fb087446aa05add5f0258c3/?page=1&collection_sort=-popularity", where: "tabshifted" }, navigate: true },
      },
      secondary_button: SKIP_BTN,
      secondary_button_top: SIGN_IN_TOP_BTN,
    },
  },

  AW_GRATITUDE: {
    id: "AW_GRATITUDE",
    content: {
      fullscreen: true, position: "split", split_narrow_bkg_position: "-228px",
      progress_bar: true, logo: {},
      image_alt_text: r("mr2022-onboarding-gratitude-image-alt"),
      background: "url('assets/br-gratitude-fox-rock.svg') var(--mr-secondary-position) no-repeat light-dark(rgba(252,245,240,1), rgba(33,3,64,1))",
      title: r("onboarding-refresh-gratitude-title"),
      subtitle: r("onboarding-refresh-gratitude-subtitle"),
      primary_button: { label: r("mr2-onboarding-start-browsing-button-label"), action: { navigate: true } },
    },
  },

  AW_ACCOUNT_LOGIN: {
    id: "AW_ACCOUNT_LOGIN",
    content: {
      fullscreen: true, position: "split", split_narrow_bkg_position: "-228px",
      progress_bar: true, logo: {},
      image_alt_text: r("mr2022-onboarding-gratitude-image-alt"),
      background: "url('assets/br-fxa-fox-mirror.svg') var(--mr-secondary-position) no-repeat light-dark(rgba(252,245,240,1), rgba(33,3,64,1))",
      title: r("onboarding-refresh-sync-title"),
      subtitle: r("onboarding-refresh-sync-subtitle"),
      primary_button: { label: r("onboarding-sign-up-button"), action: { data: { entrypoint: "newuser-onboarding-desktop" }, type: "FXA_SIGNIN_FLOW", navigate: true } },
      secondary_button: { label: r("mr2-onboarding-start-browsing-button-label"), style: "secondary", action: { navigate: true } },
    },
  },
};

// ---------------------------------------------------------------------------
// Scenarios — every distinct user flow
// ---------------------------------------------------------------------------
const IMPORT_TAIL   = ["AW_IMPORT_SETTINGS_EMBEDDED", "AW_AMO_INTRODUCE", "AW_ACCOUNT_LOGIN"];
const IMPORT_SIGNED = ["AW_IMPORT_SETTINGS_EMBEDDED", "AW_AMO_INTRODUCE", "AW_GRATITUDE"];

const SCENARIOS = {
  groups: [
    {
      label: "macOS",
      items: [
        { id: "mac-needs-default",   label: "Not set as default browser",           screens: ["AW_EASY_SETUP_NEEDS_DEFAULT",           ...IMPORT_TAIL] },
        { id: "mac-already-default", label: "Already set as default browser",       screens: ["AW_EASY_SETUP_ONLY_IMPORT",             ...IMPORT_TAIL] },
        { id: "mac-signed-in",       label: "Already signed in to Firefox account", screens: ["AW_EASY_SETUP_NEEDS_DEFAULT",            ...IMPORT_SIGNED] },
      ],
    },
    {
      label: "Windows",
      items: [
        { id: "win-needs-pin-default", label: "Needs pin + default browser",    screens: ["AW_EASY_SETUP_NEEDS_DEFAULT_AND_PIN",   ...IMPORT_TAIL] },
        { id: "win-needs-pin",         label: "Needs pin (already default)",    screens: ["AW_EASY_SETUP_NEEDS_PIN",               ...IMPORT_TAIL] },
        { id: "win-needs-default",     label: "Needs default (already pinned)", screens: ["AW_EASY_SETUP_NEEDS_DEFAULT",           ...IMPORT_TAIL] },
        { id: "win-fully-setup",       label: "Already pinned + default",       screens: ["AW_EASY_SETUP_ONLY_IMPORT",             ...IMPORT_TAIL] },
      ],
    },
    {
      label: "Smart Window (Windows)",
      items: [
        { id: "sw-needs-pin-default", label: "Needs pin + default browser",    screens: ["AW_SMART_WINDOW_NEEDS_DEFAULT_AND_PIN", ...IMPORT_TAIL] },
        { id: "sw-needs-default",     label: "Needs default (already pinned)", screens: ["AW_SMART_WINDOW_NEEDS_DEFAULT",         ...IMPORT_TAIL] },
        { id: "sw-needs-pin",         label: "Needs pin (already default)",    screens: ["AW_SMART_WINDOW_NEEDS_PIN",             ...IMPORT_TAIL] },
        { id: "sw-no-checkboxes",     label: "Already pinned + default",       screens: ["AW_SMART_WINDOW_NO_CHECKBOXES",         ...IMPORT_TAIL] },
      ],
    },
    {
      label: "Special entries",
      items: [
        { id: "device-migration",  label: "Device migration (new device)",  screens: ["AW_WELCOME_BACK", "AW_EASY_SETUP_NEEDS_DEFAULT", ...IMPORT_TAIL] },
        { id: "backup-found",      label: "Backup found",                   screens: ["AW_BACKUP_RESTORE_EMBEDDED_BACKUP_FOUND", "AW_EASY_SETUP_NEEDS_DEFAULT", ...IMPORT_TAIL] },
        { id: "multiple-backups",  label: "Multiple backups found",         screens: ["AW_BACKUP_RESTORE_EMBEDDED_MULTIPLE_BACKUPS_FOUND", "AW_EASY_SETUP_NEEDS_DEFAULT", ...IMPORT_TAIL] },
        { id: "return-to-amo",     label: "Return to AMO (add-on install)", screens: ["RETURN_TO_AMO", "AW_ACCOUNT_LOGIN"] },
        { id: "language-mismatch", label: "System/app language mismatch",   screens: ["AW_EASY_SETUP_NEEDS_DEFAULT", "AW_LANGUAGE_MISMATCH", ...IMPORT_TAIL] },
      ],
    },
  ],
};

// Flat lookup
const SCENARIO_MAP = {};
SCENARIOS.groups.forEach(g => g.items.forEach(s => { SCENARIO_MAP[s.id] = s; }));

const currentScenarioId = new URLSearchParams(location.search).get("scenario") || "mac-needs-default";
const currentScenario   = SCENARIO_MAP[currentScenarioId] ?? SCENARIO_MAP["mac-needs-default"];

// ---------------------------------------------------------------------------
// AW* globals
// ---------------------------------------------------------------------------
window.AWGetFeatureConfig = async () => ({
  id: "prototype_welcome",
  template: "multistage",
  transitions: true,
  backdrop: null,
  disableHistoryUpdates: true,
  startScreen: 0,
  skipFxA: false,
  write_in_microsurvey: false,
  requireAction: false,
  aria_role: null,
  appAndSystemLocaleInfo: null,
  screens: currentScenario.screens.map(id => SCREEN[id]).filter(Boolean),
});

window.AWEvaluateScreenTargeting = async (screens) => screens;

window.AWSendToParent = (type, payload) => {
  console.info("[AWSendToParent]", type, payload);
  if (type === "SPECIAL_ACTION" && payload?.type === "OPEN_URL" && payload?.data?.args) {
    window.open(payload.data.args, "_blank", "noopener,noreferrer");
  }
  return Promise.resolve(true);
};

window.AWSendEventTelemetry   = (ping)   => console.info("[telemetry]", ping);
window.AWAdvanceScreens       = (cfg)    => console.info("[AWAdvanceScreens]", cfg);
window.AWGetFxAMetricsFlowURI = async () => null;
window.AWWaitForNimbus        = async () => "ready";
window.AWGetUnhandledCampaignAction = async () => null;
window.AWAddScreenImpression  = (s)      => console.debug("[impression]", s?.id);
window.AWGetSelectedTheme     = async () => "default";
window.AWSelectTheme          = (theme)  => console.info("[AWSelectTheme]", theme);
window.AWGetInstalledAddons   = async () => [];
window.AWEvaluateAttributeTargeting = async () => true;
window.AWEnsureAddonInstalled = async () => "complete";
window.AWNegotiateLangPackForLanguageMismatch = async () => ({ langPack: null, langPackDisplayName: null });
window.AWEnsureLangPackInstalled = async () => {};
window.AWSetRequestedLocales  = () => {};
window.AWWaitForMigrationClose= async () => {};
window.AWSendToDeviceEmailsSupported = () => false;
window.AWFindBackupsInWellKnownLocations = async () => {};
window.AWPredictRemoteType    = () => "web";

window.AWFinish = () => {
  window.location.href = "about:newtab";
};

if (typeof globalThis.Services === "undefined") {
  globalThis.Services = { scriptSecurityManager: { createNullPrincipal: () => ({}) } };
}

// ---------------------------------------------------------------------------
// Migration wizard stub — realistic multi-step mock
// ---------------------------------------------------------------------------
const MW_STYLE = `
  .mw-stub { font-family: system-ui; padding: 8px 0; }
  .mw-stub h3 { font-size: 13px; font-weight: 600; margin: 0 0 10px; color: var(--text-color, #15141a); }
  .mw-browsers { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 16px; }
  .mw-browser { display: flex; align-items: center; gap: 10px; padding: 10px 12px;
    border: 1.5px solid var(--border-color, #cfcfd8); border-radius: 8px; cursor: pointer;
    background: var(--background-color-canvas, #fff); font-size: 13px;
    color: var(--text-color, #15141a); transition: border-color 0.15s; }
  .mw-browser:hover { border-color: var(--color-accent-primary, #0061e0); }
  .mw-browser.selected { border-color: var(--color-accent-primary, #0061e0);
    background: light-dark(#f0f6ff, #1a2a4a); }
  .mw-browser img { width: 24px; height: 24px; }
  .mw-import-btn { display: block; width: 100%; padding: 10px; margin-top: 4px;
    background: var(--button-background-color-primary, #0061e0);
    color: var(--button-text-color-primary, #fff); font-size: 13px; font-weight: 600;
    border: none; border-radius: 100px; cursor: pointer; }
  .mw-import-btn:hover { background: var(--button-background-color-primary-hover, #0250bb); }
  .mw-import-btn:disabled { opacity: 0.5; cursor: default; }
  .mw-progress { text-align: center; padding: 20px 0; color: var(--text-color, #5b5b66); font-size: 13px; }
  .mw-progress-bar { height: 4px; background: var(--border-color, #e0e0e6); border-radius: 2px; margin: 12px 0; overflow: hidden; }
  .mw-progress-bar-fill { height: 100%; background: var(--color-accent-primary, #0061e0); border-radius: 2px;
    animation: mw-fill 1.4s ease-in-out forwards; }
  @keyframes mw-fill { from { width: 0 } to { width: 100% } }
  .mw-done { text-align: center; padding: 8px 0; }
  .mw-done-icon { font-size: 28px; margin-bottom: 8px; }
  .mw-done h3 { margin-bottom: 4px; }
  .mw-done p { font-size: 12px; color: var(--text-color, #5b5b66); margin: 0 0 14px; }
`;

const BROWSERS = [
  { id: "chrome",  name: "Chrome",       icon: "https://www.google.com/chrome/static/images/chrome-logo-m100.svg" },
  { id: "safari",  name: "Safari",       icon: "https://www.apple.com/v/safari/r/images/overview/icon_safari__cp90k3u7orey_large.png" },
  { id: "edge",    name: "Microsoft Edge", icon: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/a1b46a23-8c05-4d83-b27f-11a746af621c.png" },
  { id: "other",   name: "Other browser", icon: "" },
];

if (!customElements.get("migration-wizard")) {
  customElements.define("migration-wizard", class extends HTMLElement {
    connectedCallback() {
      const style = document.createElement("style");
      style.textContent = MW_STYLE;
      this.appendChild(style);
      this._step = "select";
      this._render();
    }

    _render() {
      const old = this.querySelector(".mw-stub");
      if (old) old.remove();
      const div = document.createElement("div");
      div.className = "mw-stub";

      if (this._step === "select") {
        div.innerHTML = `
          <h3>Which browser would you like to import from?</h3>
          <div class="mw-browsers">
            ${BROWSERS.map(b => `
              <button class="mw-browser" data-id="${b.id}">
                ${b.icon ? `<img src="${b.icon}" alt="" onerror="this.style.display='none'">` : "🌐"}
                ${b.name}
              </button>`).join("")}
          </div>
          <button class="mw-import-btn" disabled>Import</button>
        `;
        div.querySelectorAll(".mw-browser").forEach(btn => {
          btn.addEventListener("click", () => {
            div.querySelectorAll(".mw-browser").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            div.querySelector(".mw-import-btn").disabled = false;
          });
        });
        div.querySelector(".mw-import-btn").addEventListener("click", () => {
          this._step = "importing";
          this._render();
          setTimeout(() => { this._step = "done"; this._render(); }, 1600);
        });
      } else if (this._step === "importing") {
        div.innerHTML = `
          <div class="mw-progress">
            <p>Importing your data…</p>
            <div class="mw-progress-bar"><div class="mw-progress-bar-fill"></div></div>
          </div>`;
      } else if (this._step === "done") {
        div.innerHTML = `
          <div class="mw-done">
            <div class="mw-done-icon">✓</div>
            <h3>Import complete!</h3>
            <p>Your bookmarks, passwords, and history are ready.</p>
            <button class="mw-import-btn">Continue</button>
          </div>`;
        div.querySelector(".mw-import-btn").addEventListener("click", () => {
          // Advance via the screen's Skip/secondary button (navigate: true action)
          this.closest(".screen")?.querySelector(".secondary-cta:not(.top) .secondary")?.click();
        });
      }

      this.appendChild(div);
    }
  });
}

// Backup restore stub
if (!customElements.get("backup-restore")) {
  customElements.define("backup-restore", class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<div style="padding:16px 0;font-family:system-ui;font-size:13px;color:var(--text-color,#5b5b66);text-align:center">
        <p style="margin:0 0 12px">Backup file selector would appear here.</p>
        <p style="margin:0;font-size:12px;opacity:.7">In Firefox, this opens a file picker to choose a backup.</p>
      </div>`;
    }
  });
}
