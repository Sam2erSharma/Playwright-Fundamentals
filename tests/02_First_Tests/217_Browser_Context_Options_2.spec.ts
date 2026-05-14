import { test, expect } from "@playwright/test";

// Scenario 1: Context with HTTP Credentials

test('context with HTTP auth', async ({ browser }) => {
    const context = await browser.newContext({
        httpCredentials: {
            username: 'user',
            password: 'pass',
        }
    });

    const page = await context.newPage();
    // https://the-internet.herokuapp.com/basic_auth
    // Will auto-authenticate for HTTP Basic Auth
    // await page.goto("https://the-internet.herokuapp.com/basic_auth");
    // await expect(page).toHaveTitle("Basic Auth");
    await context.close();
});

//Scenario 2: Incognito - like Context
test('fresh context like incognito', async ({ browser }) => {
    // Each newContext() is like incognito
    // No shared cookies, localStorage, etc.

    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    // These are completely isolated
    const page1 = await context1.newPage();
    const page2 = await context2.newPage();

    await context1.close();
    await context2.close();
});
