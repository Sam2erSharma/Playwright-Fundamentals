import { test, expect } from "@playwright/test";

test("simple goto — uses load by default", async ({ page }) => {
    // No waitUntil specified — defaults to "load"
    await page.goto("https://example.com");

    let title = await page.title();
    console.log("Title:", title);

    await expect(page).toHaveURL("https://example.com/");
    console.log("URL verified ✅");
});
