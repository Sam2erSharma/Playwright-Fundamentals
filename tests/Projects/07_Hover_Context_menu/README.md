# 🖱️ Hover and Context Menu Automation Projects

This directory contains end-to-end automation projects verifying hover interaction overlays and context-triggered right-click menu actions in Playwright.

---

## 📁 Project Structure & Test Files

### 1. Hover Menu Action (`07_Hover_menu.spec.ts`)
* **URL Under Test**: `https://app.thetestingacademy.com/playwright/widgets/hover-menu`
* **Workflow**:
  1. Locates the primary Add-ons navigation header (`nav-add-ons`) and hovers to trigger the flyout overlay.
  2. Extracts and logs all submenu item text contents.
  3. Clicks on the **Wifi** selection link.
  4. Asserts that the resulting text output displays `"Wifi"` to confirm the child element click registered correctly.

### 2. Context Menu Action (`07_Right_click_context_menu.spec.ts`)
* **URL Under Test**: `https://app.thetestingacademy.com/playwright/widgets/context-menu`
* **Workflow**:
  1. Performs a simulated right-button mouse click on the main target element (`ctx-target`) to trigger the context menu.
  2. Extracts and logs all available context action options.
  3. Verifies that the **Paste** action is disabled in the active menu.
  4. Clicks the **Copy** action.
  5. Asserts that the output status displays `"Copy"` correctly.

---

## 🚀 How to Run the Tests

To run all Hover & Context Menu test cases in headed/headless mode:
```bash
npx playwright test tests/Projects/07_Hover_Context_menu/
```

To run a specific test file (e.g. Hover Menu):
```bash
npx playwright test tests/Projects/07_Hover_Context_menu/07_Hover_menu.spec.ts
```
