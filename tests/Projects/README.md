# 🚀 Playwright E2E Automation Projects

This folder acts as a central repository for real-world automated testing projects. Each project evaluates different core aspects of the Playwright framework, ranging from basic authentication workflows to advanced mouse gestures and dynamic tables.

---

## 📁 Projects Overview

### [🏦 04_TTA_Bank](./04_TTA_Bank)
* **Goal**: End-to-end automation of a digital banking dashboard.
* **Core Flows**:
  * Digital account registration and initial balance extraction.
  * Initiating transactions, inputs validation, and transfer confirmation.
  * Asserting calculated balances update correctly post-transfer.

### [👥 05_QA_Profile](./05_QA_Profile)
* **Goal**: Automated form interactions and dynamic profile editing.
* **Core Flows**:
  * Input fields verification, options selecting, checkboxes clicking, and profile updates.

### [🔍 06_Search_Employee_Web_Table](./06_Search_Employee_Web_Table)
* **Goal**: Verifying employee search and row checkbox selection within a tabular grid.
* **Core Flows**:
  * Filtering tables with text search.
  * Sibling element lookup and target row-specific checkbox selection.
  * Confirming row values update on selection changes.

### [🖱️ 07_Hover_Context_menu](./07_Hover_Context_menu)
* **Goal**: Custom overlay hovering and context triggers.
* **Core Flows**:
  * Hovering dynamic parent anchors to trigger hidden flyouts and selecting children.
  * Context menu triggers using `click({ button: 'right' })` and disabled action option assertions.

### [🗺️ 08_SVG_Flipkart_India_Map](./08_SVG_Flipkart_India_Map)
* **Goal**: Verifying SVG selectors and interaction nodes.
* **Core Flows**:
  * Simulating product searches on Flipkart, extracting elements, and applying Low-to-High price sorting triggers.
  * Locating child `<path>` elements in an SVG map of India, looping to extract state attributes, and selecting Uttar Pradesh (UP).

---

## 📄 Core Single Specs

| File Name | Description | Key Focus |
| :--- | :--- | :--- |
| `01_Cura_Katalon_login_test.spec.ts` | Cura Healthcare Center Login | Form input, submit action, success validation. |
| `02_VWO_Invalid_login_error.spec.ts` | VWO App Invalid Login | Authentication rejection, error message presence. |
| `03_VWO_Free_Trail_error.spec.ts` | VWO Free Trial Registration | Validation feedback, required field alert handling. |

---

## 🚀 Running Any Project Test

To run a specific project folder's suite:
```bash
npx playwright test tests/Projects/<project_folder_name>/
```

For instance, to run the Hover & Context Menu suite:
```bash
npx playwright test tests/Projects/07_Hover_Context_menu/
```
