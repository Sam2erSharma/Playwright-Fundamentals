// Reusing Context Across Tests

import { test } from '@playwright/test';

test.describe('Shared context tests', () => { //Describe is used to group tests
    test.use({//use method is used to override the default browser context settings. 
        //It will be applied to all the tests within the describe block
        viewport: { width: 1280, height: 720 },
        locale: 'en-US',
    });

    test('test 1', async ({ page }) => {
        await page.goto('https://app.vwo.com/#login');
    });

    test('test 2', async ({ page }) => {
        await page.goto('https://app.vwo.com/#login');
    });
});

//2 browser windows will be opened in this test but they will be sharing the same context

