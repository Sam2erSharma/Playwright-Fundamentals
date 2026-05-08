// **Creating your first Playwright test:**

// - Test structure
// - Basic assertions
// - Navigation
// - Element interaction

/* Basic structure of a Playwright test is as follows:
>> navigate to url - line 12
>> expect. here, we are checking the title of the page as desired. - line 14
>> find element using locator. here 'img' is the selector. - line 16
>> do the interaction i.e. check the visiblity of the element. - line 24
*/

import { test, expect } from '@playwright/test';

test('Verify our first TC', async ({ page }) => {

    await page.goto('https://app.vwo.com');

    await expect(page).toHaveTitle('Login - VWO');

    const img_vwo = page.locator('img'); //locator doesn't return promise hence no await keyword is used here.

    /*NOTE:
    >> .locator returns a locator object which is a reference to the element. It does not perform any action. 
    >> Here, it will locate the first img element on the page.
    >> To locate all img elements, use page.locator('img').all()
    */

    await expect(img_vwo).toBeVisible();
});

