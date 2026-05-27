import { test, expect, FrameLocator, Page, Locator } from '@playwright/test';

test("Handling Nested iFrames", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/nested-iframes");
    let header: string = await page.locator("h3").first().innerText();
    console.log("Page Outer Header :" + header);
    await nested_IFrame(
        page,
        ["#pact1", "#pact2", "#pact3"],
        ["#inp_val", "#jex", "#glaf"],
        ["Antigravity", "Playwright", "TypeScript"]
    );
    await expect(header).toContain("Outer page · ");
});

async function nested_IFrame(page: Page, frameSelectors: string[], locatorIDs: string[], texts: string[]): Promise<void> {

    let frame1 = page.frameLocator(frameSelectors[0]).first();
    let frame2 = frame1.frameLocator(frameSelectors[1]).first();
    let frame3 = frame2.frameLocator(frameSelectors[2]).first();

    await frame1.locator(locatorIDs[0]).first().fill(texts[0]);
    await frame2.locator(locatorIDs[1]).first().fill(texts[1]);
    await frame3.locator(locatorIDs[2]).first().fill(texts[2]);
}


