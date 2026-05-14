/* 2. Referer option:
> referer is the URL of the previous page.
> referer is used to track the user's journey through the website.

> The HTTP `Referer` header tells the server which page the user came FROM. When you click a link on Google that takes you to a website, the browser sends `Referer: https://google.com` in the request. The server knows the user came from Google.

Common Use Cases:

    Test Referral Programs: Track which partner brought the user.
    Affiliate Tracking: See which affiliate link led to the sale.
    Internal Marketing Campaigns: Track banner clicks from your homepage to a landing page.
*/

import { test } from "@playwright/test";

test("navigate with custom referer", async ({ page }) => {
    // Tell the server "user came from Google"
    await page.goto("https://app.com/landing", {
        referer: "https://google.com/search?q=testing+academy"
    });

    console.log("Page loaded with Google as referer");
    console.log("URL:", page.url());
});

//--------------------------------------------------------------
//setting the referer for all the pages in a context
test("set referer for entire context", async ({ browser }) => {
    let context = await browser.newContext({
        extraHTTPHeaders: {
            "Referer": "https://thetestingacademy.com"
        }
    });

    let page = await context.newPage();
    await page.goto("https://app.vwo.com/#login");
    console.log("Page 1 — partner referer included");

    await page.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login");
    console.log("Page 2 — partner referer included");




});