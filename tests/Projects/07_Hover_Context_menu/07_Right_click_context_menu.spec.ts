import { test, expect, Locator } from '@playwright/test'

test.describe('Context menus', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');
    });

    test('Context menu', async ({ page }) => {

        //Locating the First Target i.e. Right click here, and right clicking on it
        await page.getByTestId("ctx-target").click({ button: 'right' });

        //Printing all the sub-menu item labels
        const allMenu: Locator = page.getByTestId("ctx-menu");
        console.log(`The Context Menu items: ${await allMenu.allInnerTexts()}`);

        //Checking if the Paste option is disabled
        expect(allMenu.getByRole('button', { name: 'Paste' })).toBeDisabled();

        //From the menu items,clicking on Copy option
        await allMenu.getByRole('button', { name: 'Copy' }).click();

        //Asserting that Copy is selected and printing the text it contains
        const output: Locator = page.getByTestId('ctx-output')
        expect(output).toHaveText(/Copy/);
        console.log("The Output after selecting Copy option is: " + await output.allInnerTexts());

    })

});