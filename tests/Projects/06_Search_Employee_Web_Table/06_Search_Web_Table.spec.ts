import { test, expect } from '@playwright/test';

test("Search, select, and verify an employee in the web table", async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/webtable');
    const emp_Name = "Kabir";

    //Searching for an employee in the webtable
    const search_Emp = page.getByLabel("Search employee table");
    await search_Emp.fill(emp_Name);

    //Checking the checkbox next to Employee Name
    const emp_Row = page.locator('tr').filter({ hasText: emp_Name });
    const emp_Checkbox = emp_Row.getByRole('checkbox');
    await emp_Checkbox.check();
    //Using exact: false handles potential extra spaces or hidden characters in the label
    //const emp_Checkbox = page.getByRole("checkbox", { name: `Select ${emp_Name}` });
    //await emp_Checkbox.check();

    //Verifying the selected employee name
    const selected_Emp = page.locator(".selected-output");
    await expect(selected_Emp).toContainText(emp_Name);
})