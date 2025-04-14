document.addEventListener("DOMContentLoaded", () => {
    const toggleLegacy = document.getElementById("toggleLegacy");
    const toggleBackground = document.getElementById("toggleBackground");

    chrome.storage.sync.get(["legacyEnabled", "backgroundEnabled"], (result) => {
        toggleLegacy.checked = result.legacyEnabled ?? true;
        toggleBackground.checked = result.backgroundEnabled ?? false;
    });

    toggleLegacy.addEventListener("change", () => {
        const enabled = toggleLegacy.checked;
        chrome.storage.sync.set({ legacyEnabled: enabled }, () => {
            notifyContentScript("legacy", enabled);
        });
    });

    toggleBackground.addEventListener("change", () => {
        const enabled = toggleBackground.checked;
        chrome.storage.sync.set({ backgroundEnabled: enabled }, () => {
            notifyContentScript("background", enabled);
        });
    });

    function notifyContentScript(setting, enabled) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]?.id) {
                chrome.tabs.sendMessage(tabs[0].id, {
                    action: setting === "legacy" ? (enabled ? "enableLegacy" : "disableLegacy") : (enabled ? "enableBackground" : "disableBackground")
                });
            }
        });
    }
});