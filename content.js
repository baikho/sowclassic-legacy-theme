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

function toggleBackgroundCSS(enable) {
    const existing = document.getElementById("bg-style");

    if (enable && !existing) {
        const style = document.createElement("style");
        style.id = "bg-style";
        style.textContent = `
            body {
                background: url('${chrome.runtime.getURL("assets/bg.gif")}') fixed !important;
            }
        `;
        document.head.appendChild(style);
    }

    if (!enable && existing) {
        existing.remove();
    }
}

function applyStoredSettings() {
    chrome.storage.sync.get(["legacyEnabled", "backgroundEnabled"], ({ legacyEnabled = true, backgroundEnabled = false }) => {
        toggleLegacyCSS(legacyEnabled);
        toggleBackgroundCSS(backgroundEnabled);
    });
}

applyStoredSettings();
document.addEventListener("turbo:load", applyStoredSettings);

chrome.runtime.onMessage.addListener((message) => {
    switch (message.action) {
        case "enableLegacy": toggleLegacyCSS(true); break;
        case "disableLegacy": toggleLegacyCSS(false); break;
        case "enableBackground": toggleBackgroundCSS(true); break;
        case "disableBackground": toggleBackgroundCSS(false); break;
    }
});