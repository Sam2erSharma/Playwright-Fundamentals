/*
page.goto() - you need to OPEN a page. `page.goto(url)` is how every Playwright test begins.
> await page.goto("https://app.com/page1")

> Apart from url, we can also pass other optional arguments like: waitUntil, timeout and referer.

1. waitUntil option:
> The `waitUntil` option tells Playwright at which stage it should consider the page "loaded" and move to the next line of your test.

> There are 4 types of waitUntil options available, from fastest to slowest:

> `commit` — the server has responded. HTML may not even be parsed yet. Use this for testing redirects or checking HTTP status codes.

> `domcontentloaded` — the HTML is fully parsed and the DOM tree is built. CSS, images, and fonts may still be loading. Use when you need elements in the DOM but don't care about visuals.

> `load` — everything is loaded including images, CSS, fonts, and scripts. This is the DEFAULT. Use for most tests.

> `networkidle` — no network requests for 500ms. The page is completely quiet. Use for SPAs(React, Angular, Vue) that fetch data via API calls AFTER the initial HTML loads.
*/

/*Example:
import { test, expect } from "@playwright/test";

test("Load states", async ({ page }) => {

    //1. DEFAULT: "load" → wait for DOM + all assets
    await page.goto("https://app.com/page1");

    // 2. Faster - only DOM ready, no assets
    // Use when you need to interact with elements immediately
    await page.goto("https://app.com/page2", { waitUntil: "domcontentloaded" });

    // 3. Fastest - only server response, nothing else
    // Useful for checking redirects, HTTP status, or initial routing
    await page.goto("https://app.com/page3", { waitUntil: "commit" });

    // 4. Slowest - everything settled + no network for 500ms
    // Perfect for SPAs (React/Angular/Vue) that load data via JS after initial paint
    await page.goto("https://app.com/page4", { waitUntil: "networkidle" });

});
*/

import { test, expect } from '@playwright/test';

test("goto with different waitUntil options", async ({ page }) => {

    await page.goto("https://app.com/page1", { waitUntil: "commit" });
    console.log("commit: server responded");

    // Wait for HTML to be parsed
    await page.goto("https://app.com/page2", { waitUntil: "domcontentloaded" });
    console.log("domcontentloaded: HTML parsed");

    // DEFAULT — wait for everything (images, CSS, scripts)
    await page.goto("https://app.com/page3", { waitUntil: "load" });
    console.log("load: all resources loaded");

    // SLOWEST — wait for all network activity to stop
    await page.goto("https://app.com/page4", { waitUntil: "networkidle" });
    console.log("networkidle: no requests for 500ms");

});