# SOW Classic Legacy Theme

A lightweight Chrome extension that restores the nostalgic look of the original Secrets of War Classic UI with a single click.

---

## 🎨 What It Does

This extension replaces the modern SOW Classic theme with a **legacy look** using custom CSS. It supports Turbo-powered navigation (no full page reloads) and can be toggled on/off instantly via the extension popup.

---

## ✅ Features

- 🎨 Restores the original Legacy Theme background and layout
- ⚙️ Toggle on/off from the popup UI
- ⚡ Works with Turbo navigation (auto-applies after AJAX page loads)
- 🧠 Remembers your preference across sessions
- 🧩 Fully client-side — no server or network dependencies

---

## 📦 Installation

1. Clone or download this repo.
2. Go to `chrome://extensions/` in your Chrome browser.
3. Enable **Developer Mode** (top right).
4. Click **Load unpacked** and select the extension folder.

---

## 🧪 Usage

1. Navigate to [sowclassic.com](https://sowclassic.com)
2. Click the extension icon in your browser toolbar.
3. Use the checkbox to enable or disable the Legacy Theme.
4. The styling is applied immediately without needing to refresh the page.

---

## 🛠 Developer Notes

- The extension conditionally injects `content.css` using JavaScript, based on a saved setting in `chrome.storage.sync`.
- Turbo navigation is supported by listening to `turbo:load` events and re-applying styles.
- No additional JavaScript logic modifies DOM styles directly — all legacy theming is done through CSS.

---

## 📄 License

MIT — feel free to use, modify, and share.
