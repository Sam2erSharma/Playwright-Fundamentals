import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/dropdown');

    // await page.locator("#dropdown").click();

    //await page.selectOption("#dropdown", "Option 1");//works but not recommended
    await page.locator("#dropdown").selectOption("Option 1");//recommended way



    await page.waitForTimeout(5000);




});