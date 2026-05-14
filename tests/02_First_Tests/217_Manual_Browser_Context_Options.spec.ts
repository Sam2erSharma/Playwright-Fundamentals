import { test, expect } from '@playwright/test';

test('context with options', async ({ browser }) => {
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 },// we can change the viewport to 1920x1080, it will change the resolution of the browser
        locale: 'fr-FR',// we can change the locale to fr-FR to French, it will change the language of the website to French
        timezoneId: 'Europe/Paris',// we can change the timezone to Europe/Paris, it will change the timezone of the browser
        geolocation: { latitude: 48.8566, longitude: 2.3522 },// we can change the geolocation to Paris, it will change the geolocation of the browser
        permissions: ['geolocation'],// we can change the permissions to geolocation, it will change the permissions of the browser
    });

    const page = await context.newPage();
    await page.goto('https://app.vwo.com/#login');

    await context.close();
});

test('mobile context', async ({ browser }) => {
    const iPhone = {
        viewport: { width: 375, height: 667 },//mobile viewport
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',//user agent for iphone
        deviceScaleFactor: 2,//deviceScaleFactor is the ratio of the device's physical pixels to its CSS pixels
        isMobile: true,//isMobile means the browser is running on a mobile device
        hasTouch: true,//hasTouch means the browser has touch support
    };

    const context = await browser.newContext(iPhone);

    const page = await context.newPage();

    await page.goto("https://app.vwo.com/#login");

    await context.close();
});
