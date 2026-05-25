import { test, expect } from '@playwright/test';

test.describe('Multiple Elements Handling', () => {
    //.describe is used to group the test cases which are related to each other
    //this group of test cases will be run together
    // 1 describe can have multiple test cases

    test('Basic Test - Verify page title', async ({ page }) => {
        // Navigate to a sample page
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');


        const rightPanelLinksTexts: string[] = await page.locator('a.list-group-item').allInnerTexts(); //allInnerTexts -get all the inner text of the element
        console.log(rightPanelLinksTexts.length);


        for (const linkText of rightPanelLinksTexts) {
            if (linkText === 'My Account') {
                await page.getByText(linkText).first().click();//first() - get the first element
                break;
            }
        }

        const rightPanelLinks = await page.locator('a.list-group-item').all();//all() - get all the elements
        for (const link of rightPanelLinks) {
            console.log(await link.getAttribute("href"));//getAttribute() - get the attribute of the element
        }
    });


});

