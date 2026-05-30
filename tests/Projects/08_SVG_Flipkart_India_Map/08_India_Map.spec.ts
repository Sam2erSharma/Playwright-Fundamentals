import { test, expect, Locator } from '@playwright/test'

test.describe('SVG - Map of India', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://simplemaps.com/svg/country/in');
    });

    test('Print all the states name in the map and select UP.', async ({ page }) => {

        // Path of all states
        const allStates = await page.locator('#admin1_map_inner>svg>path').all();
        //text.sm_label.sm_label
        //text.sm_label.sm_label>tspan
        //path.sm_state.sm_state

        //Total count of states
        console.log(`Total number of states found : ${allStates.length}`);

        // Loop through each state element, pull its class attribute and print the last 2 characters and also select UP state.
        for (const state of allStates) {
            const stateNames = await state.getAttribute('class');
            console.log(`State Name : ${stateNames?.slice(-2)}`);
            if (stateNames && stateNames === 'sm_state sm_state_INUP') {
                console.log('Found Uttar Pradesh! Clicking...');
                await state.click();
            }

        }

    });
});