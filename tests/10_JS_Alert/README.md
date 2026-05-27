# 🚨 JavaScript Alerts Automation

This directory contains the automation test suite for handling various native browser dialogs (Alerts, Confirms, and Prompts) using Playwright.

## 📄 Test File
* **File name**: `242_JS_Alert.spec.ts`
* **Path**: `tests/10_JS_Alert/242_JS_Alert.spec.ts`

## ⚙️ Test Scenarios Covered

1. **JS Alert (`dialog.accept()`)**:
   * Registers a single dialog handler using `page.once('dialog')` before clicking the button.
   * Asserts the dialog message is exactly `"I am a JS Alert"`.
   * Accepts the dialog and verifies the resulting text is `"You successfully clicked an alert"`.

2. **JS Confirm (`dialog.accept()` / `dialog.dismiss()`)**:
   * Captures and handles native confirm alerts.
   * Asserts the dialog type is `'confirm'` and accepts it, verifying the resulting label displays `"You clicked: Ok"`.

3. **JS Prompt (Input filling inside dialog)**:
   * Sets up a prompt dialog handler.
   * Inserts text (`"Hello from The Testing Academy"`) into the prompt dialog using `dialog.accept(inputText)`.
   * Verifies the output result displays the entered text message.

## 🚀 How to Run the Test

To execute the JavaScript Alert tests:
```bash
npx playwright test tests/10_JS_Alert/242_JS_Alert.spec.ts
```
