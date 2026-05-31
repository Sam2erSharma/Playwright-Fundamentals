import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('File Upload Demo - TestingAcademy', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/scroll');
    });

    test('scroll to view', async ({ page }) => {

        // 1) scrollIntoViewIfNeeded — Playwright does the scroll for you

        // await page.getByTestId('deep-anchor').scrollIntoViewIfNeeded();
        // await page.getByTestId('deep-anchor').click();//this will also scroll to the element and perform click action

        // await page.waitForTimeout(5000);

        // // 2) scrollBy 1000 px
        // await page.evaluate(() => window.scrollBy(0, 1000));
        // await page.waitForTimeout(500);

        // // 3) jump to bottom
        // await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        // await expect(page.getByTestId('cta-button')).toBeEnabled();

        // // 4) jump back to top
        // await page.evaluate(() => window.scrollTo(0, 0));

        // 5) lazy list grows past 10 once visible
        //First scroll to the section
        await page.getByTestId('section-lazy').scrollIntoViewIfNeeded();
        //Then scroll to the lazy list
        await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();


        const list = page.getByTestId('lazy-list').locator('li');

        const initialCount = await list.count();

        await list.last().scrollIntoViewIfNeeded();//scroll till the last element of the lazy list
        // poll until new items appended
        //poll() will wait until the condition is met or timeout occurs
        await expect.poll(async () => list.count(), {
            message: 'expected lazy list to load more items',
            timeout: 10000,
        }).toBeGreaterThan(initialCount);
        //after polling it will check the condition
        const finalCount = await list.count();
        console.log(finalCount);


        await page.waitForTimeout(5000);
    });

});