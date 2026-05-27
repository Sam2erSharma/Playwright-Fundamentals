# ⌨️ Keyboard, Hover, Drag & Drop, and Mouse Gestures

This directory contains the automation test suites for advanced user interactions such as simulated keyboard events, element hovering, standard/manual drag-and-drop actions, and right-click context menu handling in Playwright.

## 📁 Test Files Summary

| File Name | Focus | Key Actions & APIs Used |
| :--- | :--- | :--- |
| `243_Keyboard.spec.ts` | **Keyboard Actions** | `page.keyboard.press()`, `page.keyboard.down()`, `page.keyboard.up()`, and capturing screenshots for verification. |
| `244_Hover.spec.ts` | **Hover Flyouts & Submenus** | `locator.hover()`, navigating dropdown additions, and inner text extraction. |
| `245_Drag_Drop.spec.ts` | **Standard Drag & Drop** | Native column source and target mapping using `locator.dragTo()`. |
| `246_Drag_Drop_Kanban.spec.ts` | **Manual Mouse Drag & Drop** | Precise mouse coordinate movement (`mouse.move()`, `mouse.down()`, `mouse.up()`) and bounding box boundaries for custom Kanban widgets. |
| `247_Mouse_Right_Click.spec.ts` | **Right-Click Context Menu** | Right-button clicks using `locator.click({ button: 'right' })` and element choice trigger actions. |

---

## ⚙️ Execution Flow & Scenarios

### 1. Keyboard Actions (`243_Keyboard.spec.ts`)
* Simulates single character keys (`A`), navigation keys (`ArrowLeft`), and compound hotkeys (`Shift+O`).
* Takes specific, focused screenshots verifying keycode registration.

### 2. Hover Interactions (`244_Hover.spec.ts`)
* Hovers over dynamic elements on SpiceJet and TTA hover menus.
* Asserts flyout menus appear and extracts subcategory listings.

### 3. Native Drag & Drop (`245_Drag_Drop.spec.ts`)
* Simulates standard column repositioning (Column A ↔ Column B).
* Asserts state changes from `'A'` to `'B'` and vice versa.

### 4. Kanban Mouse Coordinates Drag & Drop (`246_Drag_Drop_Kanban.spec.ts`)
* Obtains source and target coordinates using `.boundingBox()`.
* Automatically moves mouse, clicks and holds, slides along a 10-step path, and releases to handle complex custom HTML5 drag libraries.

### 5. Context Menu Right Click (`247_Mouse_Right_Click.spec.ts`)
* Right-clicks context targets and verifies options count.
* Clicks specific choices like `'Copy'`.

---

## 🚀 How to Run the Tests

To run all keyboard and mouse interaction tests, run:
```bash
npx playwright test tests/11_Keyboard_Hover_Drag_Drop/
```

To run a specific file, e.g. the Kanban drag-and-drop:
```bash
npx playwright test tests/11_Keyboard_Hover_Drag_Drop/246_Drag_Drop_Kanban.spec.ts
```
