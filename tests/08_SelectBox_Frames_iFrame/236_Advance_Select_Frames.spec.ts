import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');

    await page.locator('//div[@data-testid="dropdown-language"]').click();

    await page.getByText("JavaScript").click();

    await page.locator("#experience-shell").click();
    await page.getByText("Mid-level (4-6 years)", { exact: true }).click();

    await page.waitForTimeout(5000);

});

/*
import { Browser, chromium, Page, expect } from '@playwright/test';

(async () => {
  const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
  const page: Page = await browser.newPage();
  await page.goto('/playwright/tables/dropdowns.html');

  await selectValue(page, 'Choose your preferred programming language', 'Java');
  await selectValue(page, 'Choose your preferred web framework', 'Angular');
  await selectValue(page, 'Select your experience level', 'Mid-level (4-6 years)');
})();

async function selectValue(page: Page, dropDownLabel: string, value: string): Promise<void> {
  await page.locator(`//button[contains(@class,'select-trigger')]//span[text()='${dropDownLabel}']`).click();
  await page.getByText(value, { exact: true }).click();
}

*/


