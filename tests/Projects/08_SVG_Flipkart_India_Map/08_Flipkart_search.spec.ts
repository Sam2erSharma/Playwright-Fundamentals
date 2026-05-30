import { test, expect, Locator } from '@playwright/test'

test.describe('Searching for an item in Flipkart', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.flipkart.com/search');
    })

    test('Flipkart', async ({ page }) => {
        // Enter the item name in the search bar and click on the search icon
        await page.getByRole("textbox", { name: "Search for products, brands and more" }).fill("macmini");
        await page.locator('svg').first().click();

        // Wait for the page to load
        await page.waitForTimeout(3000);

        // Define the locator for the first product
        let firstElementPrice: Locator = page.locator('div.hZ3P6w').first();
        //await expect(firstElementPrice).toBeVisible();

        let firstElementName = page.locator('a.pIpigb').first();
        //await expect(firstElementName).toBeVisible();

        // Fetching and printing the first product's name and price before sorting
        let priceBefore: string = await firstElementPrice.innerText();
        let nameBefore: string = await firstElementName.innerText();
        console.log('The first available product is :');
        console.log(`Name : ${nameBefore}`);
        console.log(`Price : ${priceBefore}`);

        // Click the filter to sort the items based on price
        const applyFilter = page.getByText('Price -- Low to High');
        //await expect(applyFilter).toBeVisible();
        await applyFilter.click();

        // Wait for the UI to update after the filter has been applied
        await page.waitForTimeout(3000);

        // Re-fetching and printing the lowest price available after sorting
        let priceAfter: string = await firstElementPrice.innerText();
        let nameAfter: string = await firstElementName.innerText();
        if (nameBefore != nameAfter) {
            console.log('The lowest available product is :');
            console.log(`Name : ${nameAfter}`);
            console.log(`Price : ${priceAfter}`);
        } else {
            console.log('The lowest available product is same as before');
        }
    })
})