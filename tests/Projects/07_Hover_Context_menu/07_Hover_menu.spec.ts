import { test, expect, Locator } from '@playwright/test'

test.describe('Hover menus', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu#');
    });

    test('Hover over and select child menu options', async ({ page }) => {

        //Locating Add-on i.e. Parent menu
        await page.getByTestId('nav-add-ons').hover();

        //Locating Add-ons submenu i.e. Child menu and printing them
        const addOnMenu = page.getByLabel('Add-ons submenu');
        console.log(`The Add-ons submenu items: ${await addOnMenu.allInnerTexts()}`);

        //Select Wifi from Add-ons submenu
        await page.getByTestId('test-id-Wifi').click();

        //Locating the output div and printing the text it contains
        const output: Locator = page.getByTestId('hover-output');
        expect(output).toHaveText(/Wifi/);

        const outputText: string[] = await output.allInnerTexts();
        console.log(`The Selected Add-ons Output : ${outputText}`);
    })

});