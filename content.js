// Injects the legacy stylesheet
function toggleLegacyCSS(enable) {
    const existing = document.getElementById("legacy-css");

    if (enable && !existing) {
        const link = document.createElement("link");
        link.id = "legacy-css";
        link.rel = "stylesheet";
        link.href = chrome.runtime.getURL("content.css");
        document.head.appendChild(link);
    }

    if (!enable && existing) {
        existing.remove();
    }
}

// Check stored setting and apply if enabled
chrome.storage.sync.get("legacyEnabled", ({ legacyEnabled = true }) => {
    toggleLegacyCSS(legacyEnabled);
});

// Reapply on turbo-driven navigation
document.addEventListener("turbo:load", () => {
    chrome.storage.sync.get("legacyEnabled", ({ legacyEnabled = true }) => {
        toggleLegacyCSS(legacyEnabled);
    });
});

// Listen for popup toggle messages
chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "enableLegacy") {
        toggleLegacyCSS(true);
    } else if (message.action === "disableLegacy") {
        toggleLegacyCSS(false);
    }
});