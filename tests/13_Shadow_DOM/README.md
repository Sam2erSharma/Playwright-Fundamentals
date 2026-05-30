# 👻 Shadow DOM Automation Tests

This directory contains automation tests for interacting with **Shadow DOM** elements — both open and closed — using Playwright.

---

## 📁 Test Files

### 1. Shadow DOM Practice (`251_Shadow_DOM.spec.ts`)
* **URL**: `https://app.thetestingacademy.com/playwright/widgets/shadow-dom`
* **Flow**:
  1. Fills an email and password inside a shadow card (`card-account`) using accessible locators.
  2. Submits and asserts the status text contains the email.
  3. Increments a cart counter inside a shadow counter widget and asserts the value is `5`.
  4. Fills the nested host shadow card fields (`card-inside-email`, `card-inside-password`) and submits.

---

## 📁 Projects

### 2. Shadow DOM Project (`tests/Projects/09_Shadow_DOM/09_Shadow_DOM.spec.ts`)
* **URL**: `https://selectorshub.com/xpath-practice-page/`
* **Flow**:
  1. Fills a field inside an **open** shadow root using a CSS selector (`#kils`).
  2. Fills a placeholder field (`Enter pizza name`) inside an open shadow root.
  3. For **closed** shadow roots (inaccessible to standard locators), uses keyboard tab navigation to reach and fill the hidden fields.
  4. Clicks the iframe shadow DOM link for further iframe-in-shadow practice.

> 💡 **Key Insight**: Playwright can **pierce open shadow roots** natively using standard locators. For **closed shadow roots**, Playwright cannot pierce them — keyboard simulation (`page.keyboard.press('Tab')`, `page.keyboard.type()`) is the recommended workaround.

---

## 🚀 How to Run

```bash
# Run the core shadow DOM spec
npx playwright test tests/13_Shadow_DOM/

# Run the Shadow DOM project spec
npx playwright test tests/Projects/09_Shadow_DOM/
```
