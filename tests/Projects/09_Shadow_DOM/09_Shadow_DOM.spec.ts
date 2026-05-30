import { test, expect, Locator } from '@playwright/test'

test.describe('Shadow Dom', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://selectorshub.com/xpath-practice-page/');
    })

    test('Handling Open and Closed Shadow Dom', async ({ page }) => {
        //Shadow root: Open for below field
        await page.locator('#kils').fill('Sameer');
        await page.getByPlaceholder('Enter pizza name').fill('Margherita');

        //Shadow root: Closed, so below fields cannot be accessed by locators(even using CSS)
        //Using keyboard events to navigate to the fields inside the closed shadow dom 
        await page.keyboard.press('Tab');
        await page.keyboard.type("Playwright");
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('Sameer@1234');

        //Not part of Shadow root
        await page.getByRole('link', { name: 'Click to practice iframe inside shadow dom scenario' }).click();
    })
})