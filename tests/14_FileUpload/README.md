# 📎 File Upload Automation Tests

This directory contains automation tests for single and multi-file upload scenarios using Playwright's built-in `setInputFiles()` API.

---

## 📁 Test Files

### 1. Single File Upload (`252_File_Upload.spec.ts`)
* **URL**: `https://the-internet.herokuapp.com/upload`
* **Flow**:
  1. Resolves the local file path using `path.join(__dirname, 'testdata.txt')`.
  2. Sets the file on the upload input using `page.locator("#file-upload").setInputFiles([filePath])`.
  3. Clicks the **Upload** button.
  4. Asserts the `#uploaded-files` element contains the filename `testdata.txt`.

### 2. Multi File Upload — Buffer-based (`253_Multi_File_Upload.spec.ts`)
* **URL**: `https://www.patternfly.org/components/file-upload/multiple-file-upload/`
* **Flow**:
  1. Creates two in-memory files (`file1.png` as `image/png` and `file2.jpg` as `image/jpeg`) directly from `Buffer.from()` — **no disk file needed**.
  2. Sets both files on the multi-upload input using `setInputFiles([...])`.
  3. Triggers the upload action.

> 💡 **Key Insight**: Playwright's `setInputFiles()` supports both **real file paths** (disk files) and **virtual in-memory buffers** — extremely useful for mocking file uploads in CI/CD pipelines where files may not exist on disk.

---

## 📄 Test Data

| File | Purpose |
| :--- | :--- |
| `testdata.txt` | Local test file used by `252_File_Upload.spec.ts` |
| `file1.png` | Asset reference (uploaded via buffer in multi-upload) |
| `file2.jpg` | Asset reference (uploaded via buffer in multi-upload) |

---

## 🚀 How to Run

```bash
npx playwright test tests/14_FileUpload/
```
