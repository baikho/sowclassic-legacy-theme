document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggleLegacyStyle");

    chrome.storage.sync.get(["legacyEnabled"], (result) => {
        toggle.checked = result.legacyEnabled ?? true;
    });

    toggle.addEventListener("change", () => {
        const enabled = toggle.checked;
        chrome.storage.sync.set({ legacyEnabled: enabled }, () => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                if (tabs[0]?.id) {
                    chrome.tabs.sendMessage(tabs[0].id, {
                        action: enabled ? "enableLegacy" : "disableLegacy"
                    });
                }
            });
        });
    });
});