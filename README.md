# SOW Classic Legacy Theme

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-brightgreen?logo=googlechrome&logoColor=white)](https://chromewebstore.google.com/detail/sow-classic-legacy-theme/lmhpmpiifhdmmnfpkangjpfbnkfocgih)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/baikho/sowclassic-legacy-theme?include_prereleases)](https://github.com/baikho/sowclassic-legacy-theme/releases)
[![GitHub last commit](https://img.shields.io/github/last-commit/baikho/sowclassic-legacy-theme)](https://github.com/baikho/sowclassic-legacy-theme/commits/main)
[![GitHub stars](https://img.shields.io/github/stars/baikho/sowclassic-legacy-theme?style=social)](https://github.com/baikho/sowclassic-legacy-theme/stargazers)

| ![SOW Classic Legacy Theme Icon](https://github.com/user-attachments/assets/425e2771-58d5-446b-95ed-dc03ad51f1e0) | **SOW Classic Legacy Theme** is a lightweight Chrome extension that restores the nostalgic look of the original Secrets of War Classic UI with a single click. |
|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|

---

## 🎨 What It Does

This extension replaces the modern SOW Classic theme with a **legacy look** using custom CSS. It supports Turbo-powered navigation (no full page reloads) and can be toggled on/off instantly via the extension popup.

---

## ✅ Features

- 🎨 Restores the original Legacy Theme background and layout
- ⚙️ Toggle on/off from the popup UI
- ⚡ Works with Turbo navigation (auto-applies after AJAX page loads)
- 🧠 Remembers your preference across sessions

### From the Chrome Web Store (Recommended)

Install directly from the Chrome Web Store:  
👉 [**SOW Classic Legacy Theme** on Chrome Web Store](https://chromewebstore.google.com/detail/sow-classic-legacy-theme/lmhpmpiifhdmmnfpkangjpfbnkfocgih)

### Manual Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/baikho/sowclassic-legacy-theme.git
   ```

---

## 📦 Installation

### From the Chrome Web Store (Recommended)

Install directly from the Chrome Web Store:  
👉 [**SOW Classic Legacy Theme** on Chrome Web Store](https://chromewebstore.google.com/detail/sow-classic-legacy-theme/lmhpmpiifhdmmnfpkangjpfbnkfocgih)

### Manual Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/baikho/sowclassic-legacy-theme.git
   ```
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

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for details.
