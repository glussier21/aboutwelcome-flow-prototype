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

  // Personalization screen checkbox labels
  "onboarding-personalization-use-case-personal-option": "Personal",
  "onboarding-personalization-use-case-school-option": "School",
  "onboarding-personalization-use-case-work-option": "Work",
  "onboarding-personalization-motivation-privacy-option": "Privacy",
  "onboarding-personalization-motivation-productivity-option": "Productivity",
  "onboarding-personalization-motivation-other-option": "Other",

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
// Nimbus preview mode: ?nimbus=1 + sessionStorage set by experiments.html
const _nimbusPreviewData = (() => {
  if (!new URLSearchParams(location.search).has("nimbus")) return null;
  try { return JSON.parse(sessionStorage.getItem("nimbus-preview") || "null"); } catch { return null; }
})();

if (_nimbusPreviewData) {
  // Show a banner so it's clear this is a Nimbus experiment preview
  document.addEventListener("DOMContentLoaded", () => {
    const banner = document.createElement("div");
    banner.style.cssText = [
      "position:fixed", "top:12px", "left:50%", "transform:translateX(-50%)",
      "z-index:9999", "background:#15141a", "color:#fff",
      "font:600 12px/1 system-ui,sans-serif", "padding:7px 14px 7px 10px",
      "border-radius:100px", "display:flex", "align-items:center", "gap:8px",
      "box-shadow:0 2px 12px rgba(0,0,0,.3)", "white-space:nowrap",
    ].join(";");
    banner.innerHTML = `
      <span style="width:7px;height:7px;border-radius:50%;background:#2ac3a2;flex-shrink:0"></span>
      Nimbus preview
      <span style="opacity:.55;font-weight:400">·</span>
      <span style="opacity:.85">${_nimbusPreviewData.expName || ""}</span>
      <span style="opacity:.4">/</span>
      <span style="font-family:ui-monospace,monospace;font-size:11px;opacity:.85">${_nimbusPreviewData.branchSlug || ""}</span>
      <a href="experiments.html" style="margin-left:4px;opacity:.5;color:#fff;text-decoration:none;font-size:11px">✕</a>
    `;
    document.body.appendChild(banner);
  });
}

// In Nimbus preview mode the browser can't execute OPEN_ABOUT_PAGE or
// SET_PREF actions. Patch all skip/continue buttons so they just advance
// the screen flow (navigate:true), which lets AWFinish() fire naturally
// on the last screen and redirect to newtab.html.
function _patchScreenForPreview(screen) {
  if (!screen?.content) return screen;
  const content = { ...screen.content };
  for (const key of ["primary_button", "secondary_button", "additional_button"]) {
    const btn = content[key];
    if (!btn?.action) continue;
    if (btn.action.navigate) continue; // already navigates — leave it
    // Secondary = skip button: always make it advance in preview
    // Primary: make it advance only if it goes to newtab (other primaries like
    // FXA_SIGNIN_FLOW are fine as-is since AWSendToParent handles them)
    const isSecondary = key === "secondary_button" || key === "additional_button";
    const _goesToNewtab = action => {
      const acts = action?.type === "MULTI_ACTION"
        ? (action.data?.actions || []) : [action];
      return acts.some(a =>
        a?.type === "OPEN_ABOUT_PAGE" &&
        (a.data?.args === "newtab" || String(a.data?.args).startsWith("newtab"))
      );
    };
    if (isSecondary || _goesToNewtab(btn.action)) {
      content[key] = { ...btn, action: { navigate: true } };
    }
  }
  return { ...screen, content };
}

window.AWGetFeatureConfig = async () => {
  if (_nimbusPreviewData?.screens?.length) {
    return {
      id: "nimbus_preview",
      template: "multistage",
      transitions: true,
      startScreen: 0,
      screens: _nimbusPreviewData.screens.map(_patchScreenForPreview),
    };
  }
  return {
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
  };
};

window.AWEvaluateScreenTargeting = async (screens) => screens;

window.AWSendToParent = (type, payload) => {
  console.info("[AWSendToParent]", type, payload);
  if (type !== "SPECIAL_ACTION") return Promise.resolve(true);

  const _navToNewtab = () => {
    const inPreview = new URLSearchParams(location.search).has("nimbus");
    window.location.href = inPreview ? "newtab.html?nimbus=1" : "newtab.html";
  };

  // Expand MULTI_ACTION so we can handle each sub-action the same way
  const actions = payload?.type === "MULTI_ACTION"
    ? (payload?.data?.actions || [])
    : [payload].filter(Boolean);

  let goToNewtab = false;
  for (const action of actions) {
    if (!action?.type) continue;
    if (action.type === "OPEN_URL" && action.data?.args) {
      window.open(action.data.args, "_blank", "noopener,noreferrer");
    }
    if (action.type === "OPEN_ABOUT_PAGE") {
      const page = action.data?.args || "";
      if (page === "newtab" || page.startsWith("newtab")) goToNewtab = true;
    }
  }
  if (goToNewtab) _navToNewtab();

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
  const inNimbusPreview = new URLSearchParams(location.search).has('nimbus');
  window.location.href = inNimbusPreview ? 'newtab.html?nimbus=1' : 'newtab.html';
};

if (typeof globalThis.Services === "undefined") {
  globalThis.Services = { scriptSecurityManager: { createNullPrincipal: () => ({}) } };
}

// ---------------------------------------------------------------------------
// Migration wizard stub — 4-step realistic mock
// ---------------------------------------------------------------------------
const MW_STYLE = `
  .mw { font-family: system-ui, sans-serif; padding: 4px 0; }
  .mw-title { font-size: 13px; font-weight: 600; margin: 0 0 10px; color: var(--text-color, #15141a); }
  .mw-back { display: flex; align-items: center; gap: 4px; background: none; border: none;
    padding: 0 0 8px; font-size: 12px; color: var(--color-accent-primary, #0061e0);
    cursor: pointer; font-family: inherit; }
  .mw-back:hover { text-decoration: underline; }
  .mw-back svg { flex-shrink: 0; }

  /* Step 1 — browser list */
  .mw-browser-list { display: flex; flex-direction: column; gap: 5px; margin-bottom: 12px; }
  .mw-browser-opt {
    display: flex; align-items: center; gap: 10px; padding: 9px 12px;
    border: 1.5px solid var(--border-color, #cfcfd8); border-radius: 8px; cursor: pointer;
    background: var(--background-color-canvas, #fff); font-size: 13px;
    color: var(--text-color, #15141a); text-align: left; width: 100%;
    transition: border-color 0.15s; font-family: inherit;
  }
  .mw-browser-opt:hover { border-color: var(--color-accent-primary, #0061e0); }
  .mw-browser-opt.selected {
    border-color: var(--color-accent-primary, #0061e0);
    background: light-dark(#f0f6ff, #1a2a4a);
  }
  .mw-browser-icon {
    width: 22px; height: 22px; border-radius: 5px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 12px; font-weight: 700; color: #fff;
  }
  .mw-radio {
    width: 16px; height: 16px; border-radius: 50%;
    border: 2px solid var(--border-color, #cfcfd8);
    margin-left: auto; flex-shrink: 0; position: relative;
    transition: border-color 0.15s;
  }
  .selected .mw-radio { border-color: var(--color-accent-primary, #0061e0); }
  .selected .mw-radio::after {
    content: ''; position: absolute;
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--color-accent-primary, #0061e0);
    top: 50%; left: 50%; transform: translate(-50%, -50%);
  }

  /* Step 2 — data type checkboxes */
  .mw-data-list { display: flex; flex-direction: column; margin-bottom: 12px; }
  .mw-data-item {
    display: flex; align-items: center; gap: 10px;
    padding: 9px 0; border-bottom: 1px solid var(--border-color, #e0e0e6);
    cursor: pointer;
  }
  .mw-data-item:last-child { border-bottom: none; }
  .mw-checkbox {
    width: 16px; height: 16px; border-radius: 4px; flex-shrink: 0;
    border: 2px solid var(--border-color, #cfcfd8);
    display: flex; align-items: center; justify-content: center;
    transition: background 0.12s, border-color 0.12s;
  }
  .mw-checkbox.checked { background: var(--color-accent-primary, #0061e0); border-color: var(--color-accent-primary, #0061e0); }
  .mw-checkbox.checked::after { content: ''; display: block; width: 9px; height: 5px;
    border-left: 2px solid #fff; border-bottom: 2px solid #fff;
    transform: rotate(-45deg) translateY(-1px); }
  .mw-data-label { font-size: 13px; color: var(--text-color, #15141a); flex: 1; }
  .mw-data-count { font-size: 12px; color: var(--text-color-deemphasized, #5b5b66); }

  /* Step 3 — progress */
  .mw-prog-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 14px; padding: 4px 0; }
  .mw-prog-item { display: flex; align-items: center; gap: 10px; font-size: 13px; color: var(--text-color, #15141a); }
  .mw-prog-item.pending { opacity: 0.45; }
  .mw-prog-status { width: 18px; height: 18px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
  .mw-spinner { width: 14px; height: 14px; border-radius: 50%;
    border: 2px solid var(--border-color, #e0e0e6);
    border-top-color: var(--color-accent-primary, #0061e0);
    animation: mw-spin 0.75s linear infinite; }
  @keyframes mw-spin { to { transform: rotate(360deg); } }

  /* Step 4 — done */
  .mw-done { text-align: center; padding: 6px 0 8px; }
  .mw-done-circle {
    width: 44px; height: 44px; border-radius: 50%; margin: 0 auto 10px;
    background: var(--color-accent-primary, #0061e0);
    display: flex; align-items: center; justify-content: center;
  }
  .mw-done-circle::after {
    content: ''; display: block; width: 18px; height: 10px;
    border-left: 3px solid #fff; border-bottom: 3px solid #fff;
    transform: rotate(-45deg) translateY(-2px);
  }
  .mw-done h3 { font-size: 14px; font-weight: 600; margin: 0 0 6px; color: var(--text-color, #15141a); }
  .mw-done-summary { font-size: 12px; color: var(--text-color-deemphasized, #5b5b66); margin: 0 0 14px; line-height: 1.6; }

  /* Shared button */
  .mw-btn { display: block; width: 100%; padding: 10px; margin-top: 2px;
    background: var(--button-background-color-primary, #0061e0);
    color: var(--button-text-color-primary, #fff); font-size: 13px; font-weight: 600;
    border: none; border-radius: 100px; cursor: pointer;
    transition: background 0.15s; font-family: inherit; }
  .mw-btn:hover { background: var(--button-background-color-primary-hover, #0250bb); }
  .mw-btn:disabled { opacity: 0.5; cursor: default; }
  .mw-skip { display: block; text-align: center; margin-top: 10px; font-size: 12px;
    color: var(--color-accent-primary, #0061e0); background: none; border: none;
    cursor: pointer; font-family: inherit; text-decoration: underline; }
  .mw-skip:hover { color: var(--color-accent-primary-hover, #0250bb); }
`;

const MW_BROWSERS = [
  { id: "chrome",  name: "Chrome",         color: "#4285F4" },
  { id: "safari",  name: "Safari",         color: "#006CFF" },
  { id: "edge",    name: "Microsoft Edge", color: "#0078D7" },
  { id: "brave",   name: "Brave",          color: "#FB542B" },
  { id: "ie",      name: "Internet Explorer", color: "#1EBBEE" },
  { id: "other",   name: "Other browser",  color: "#8f8f9d" },
];

const MW_DATA_TYPES = [
  { id: "bookmarks", label: "Bookmarks",        count: "312 items" },
  { id: "passwords", label: "Saved passwords",  count: "47 logins" },
  { id: "history",   label: "Browsing history", count: "2,400 pages" },
  { id: "tabs",      label: "Open tabs",        count: "8 tabs" },
  { id: "payment",   label: "Payment methods",  count: "1 card" },
];

if (!customElements.get("migration-wizard")) {
  customElements.define("migration-wizard", class extends HTMLElement {
    connectedCallback() {
      const style = document.createElement("style");
      style.textContent = MW_STYLE;
      this.appendChild(style);
      this._step = "select";
      this._selected = null;
      this._checked = new Set(MW_DATA_TYPES.map(d => d.id));
      this._render();
    }

    _render() {
      const old = this.querySelector(".mw");
      if (old) old.remove();
      const div = document.createElement("div");
      div.className = "mw";

      if (this._step === "select") {
        div.innerHTML = `
          <div class="mw-title">Which browser would you like to import from?</div>
          <div class="mw-browser-list">
            ${MW_BROWSERS.map(b => `
              <button class="mw-browser-opt${this._selected === b.id ? " selected" : ""}" data-id="${b.id}">
                <span class="mw-browser-icon" style="background:${b.color}">${b.name[0]}</span>
                ${b.name}
                <span class="mw-radio"></span>
              </button>`).join("")}
          </div>
          <button class="mw-btn" ${this._selected ? "" : "disabled"}>Continue</button>
          <button class="mw-skip">Skip for now</button>
        `;
        div.querySelectorAll(".mw-browser-opt").forEach(btn => {
          btn.addEventListener("click", () => {
            this._selected = btn.dataset.id;
            this._render();
          });
        });
        div.querySelector(".mw-btn").addEventListener("click", () => {
          this._step = "data";
          this._render();
        });
        div.querySelector(".mw-skip").addEventListener("click", () => {
          this.closest(".screen")?.querySelector(".secondary-cta:not(.top) .secondary")?.click();
        });

      } else if (this._step === "data") {
        const browser = MW_BROWSERS.find(b => b.id === this._selected);
        div.innerHTML = `
          <button class="mw-back">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M8 2L4 6l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            ${browser.name}
          </button>
          <div class="mw-title">Choose what to import</div>
          <div class="mw-data-list">
            ${MW_DATA_TYPES.map(d => `
              <div class="mw-data-item" data-id="${d.id}">
                <span class="mw-checkbox${this._checked.has(d.id) ? " checked" : ""}"></span>
                <span class="mw-data-label">${d.label}</span>
                <span class="mw-data-count">${d.count}</span>
              </div>`).join("")}
          </div>
          <button class="mw-btn">Import</button>
        `;
        div.querySelector(".mw-back").addEventListener("click", () => {
          this._step = "select";
          this._render();
        });
        div.querySelectorAll(".mw-data-item").forEach(item => {
          item.addEventListener("click", () => {
            const id = item.dataset.id;
            if (this._checked.has(id)) this._checked.delete(id);
            else this._checked.add(id);
            item.querySelector(".mw-checkbox").classList.toggle("checked", this._checked.has(id));
          });
        });
        div.querySelector(".mw-btn").addEventListener("click", () => {
          this._step = "importing";
          this._render();
          // Advance through importing items with staggered timeouts
          const items = [...this._checked];
          items.forEach((id, i) => {
            setTimeout(() => {
              const el = this.querySelector(`.mw-prog-item[data-id="${id}"]`);
              if (!el) return;
              el.classList.remove("pending");
              const status = el.querySelector(".mw-prog-status");
              if (i < items.length - 1) {
                status.innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="7" fill="var(--color-accent-primary,#0061e0)"/><path d="M4 7l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
              } else {
                status.innerHTML = `<span class="mw-spinner"></span>`;
              }
            }, i * 420);
          });
          setTimeout(() => { this._step = "done"; this._render(); }, items.length * 420 + 600);
        });

      } else if (this._step === "importing") {
        const items = MW_DATA_TYPES.filter(d => this._checked.has(d.id));
        div.innerHTML = `
          <div class="mw-title">Importing your data…</div>
          <div class="mw-prog-list">
            ${items.map((d, i) => `
              <div class="mw-prog-item pending" data-id="${d.id}">
                <span class="mw-prog-status">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="7" fill="var(--color-accent-primary,#0061e0)"/><path d="M4 7l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
                ${d.label}
              </div>`).join("")}
          </div>
        `;

      } else if (this._step === "done") {
        const imported = MW_DATA_TYPES.filter(d => this._checked.has(d.id));
        div.innerHTML = `
          <div class="mw-done">
            <div class="mw-done-circle"></div>
            <h3>Your data has been imported</h3>
            <p class="mw-done-summary">${imported.map(d => d.count + " " + d.label.toLowerCase()).join(" · ")}</p>
            <button class="mw-btn">Continue</button>
          </div>
        `;
        div.querySelector(".mw-btn").addEventListener("click", () => {
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

// ---------------------------------------------------------------------------
// Sandbox mode — index.html?sandbox=1, reads config from localStorage
// ---------------------------------------------------------------------------
(function () {
  const params = new URLSearchParams(location.search);
  if (!params.has("sandbox")) return;

  // Apply color scheme override before anything renders
  const scheme = params.get("scheme");
  if (scheme === "dark")  document.documentElement.style.colorScheme = "dark";
  if (scheme === "light") document.documentElement.style.colorScheme = "light";

  const DEFAULT_CFG = {
    pos: "split", logo: true, progressBar: true,
    background: "url('assets/br-set-default-fox-heart.svg') var(--mr-secondary-position) no-repeat light-dark(rgba(252,245,240,1),rgba(33,3,64,1))",
    title: "Welcome to Firefox",
    subtitle: "We protect your data and block companies from spying on your clicks — automatically.",
    primLabel: "Get started", hasSecondary: true, secLabel: "Skip for now",
    tilesType: "none",
    checkItems: ["Set Firefox as default browser", "Import from previous browser"],
    multiItems: ["Option 1", "Option 2", "Option 3"],
    multiLabel: "Choose what applies to you",
    singleItems: ["Option A", "Option B", "Option C"],
    singleLabel: "Select an option",
  };

  function _buildScreen(cfg) {
    const r = s => ({ raw: s });
    const content = {};

    content.fullscreen = true;
    if (cfg.pos === "split") {
      content.position = "split";
      content.split_narrow_bkg_position = "-228px";
    }

    if (cfg.logo)        content.logo         = {};
    if (cfg.progressBar) content.progress_bar = true;
    if (cfg.background)  content.background   = cfg.background;
    if (cfg.title)       content.title        = r(cfg.title);
    if (cfg.subtitle)    content.subtitle     = r(cfg.subtitle);

    if (cfg.tilesType === "checklist" && cfg.checkItems?.length) {
      content.tiles = {
        type: "checklist", style: "icon",
        items: cfg.checkItems.map((t, i) => ({
          id: `check_${i}`, label: r(t), defaultValue: true,
          checkedAction:   { type: "MULTI_ACTION", data: { actions: [] } },
          uncheckedAction: { type: "MULTI_ACTION", data: { actions: [] } },
        }))
      };
      content.primary_button = {
        label: r(cfg.primLabel || "Save and continue"),
        action: { type: "MULTI_ACTION", collectSelect: true, navigate: true, data: { actions: [] } }
      };
    } else if (cfg.tilesType === "multiselect" && cfg.multiItems?.length) {
      content.tiles = {
        type: "multiselect", label: r(cfg.multiLabel || "Select options"),
        data: cfg.multiItems.map((t, i) => ({
          id: `opt_${i}`, type: "checkbox", label: r(t),
          action: { type: "MULTI_ACTION", data: { actions: [] } }
        }))
      };
      content.primary_button = {
        label: r(cfg.primLabel),
        action: { type: "MULTI_ACTION", collectSelect: true, navigate: true, data: { actions: [] } }
      };
    } else if (cfg.tilesType === "single-select" && cfg.singleItems?.length) {
      content.tiles = {
        type: "single-select",
        data: cfg.singleItems.map((t, i) => ({
          id: `opt_${i}`, label: r(t),
          action: { type: "MULTI_ACTION", data: { actions: [] } },
        }))
      };
      content.primary_button = {
        label: r(cfg.primLabel || "Continue"),
        action: { type: "MULTI_ACTION", collectSelect: true, navigate: true, data: { actions: [] } },
        disabled: "hasActiveSingleSelect",
      };
    } else if (cfg.tilesType === "migration") {
      content.tiles = { type: "migration-wizard", migrate_start: {}, migrate_close: {} };
    }

    if (!content.primary_button) {
      content.primary_button = { label: r(cfg.primLabel || "Get started"), action: { navigate: true } };
    }
    if (cfg.hasSecondary && cfg.secLabel) {
      content.secondary_button = { label: r(cfg.secLabel), style: "link", action: { navigate: true } };
    }

    return { id: "SANDBOX_SCREEN", content };
  }

  window.AWGetFeatureConfig = async () => {
    let cfg = DEFAULT_CFG;
    try {
      const raw = localStorage.getItem("sandbox-cfg");
      if (raw) cfg = { ...DEFAULT_CFG, ...JSON.parse(raw) };
    } catch (e) {}
    return {
      id: "sandbox", template: "multistage",
      transitions: false, startScreen: 0,
      screens: [_buildScreen(cfg)],
    };
  };

  // In sandbox, finishing just stays on the page (nothing to navigate to)
  window.AWFinish = () => {};
})();
