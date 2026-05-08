import { test, expect } from '@playwright/test'; // {test, expect} are the pre defined functions and are called as fixtures. We can change the name 'test' to anything else.

test('Verify the title of app.vwo.com', async ({ page }) => { // {page} is called a page fixture which is used to interact with the browser and passed as argument.
    await page.goto('https://app.vwo.com'); // goto method is used to navigate to a URL
    await expect(page).toHaveTitle("Login - VWO"); // expect is used to make an assertion and to haveTitle method is used to check the title of the page.
    await expect(page).toHaveURL("https://app.vwo.com/"); // expect is used to make an assertion and to toHaveURL method is used to check the URL of the page.

    //Assertion : it basically means it's a statement or a validation statement, which means your expected result should be equal to the actual result.
    //In Playwright, you will basically use assertions by using the expect keyword

});