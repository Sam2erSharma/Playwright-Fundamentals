import { test, expect } from '@playwright/test'

test("locators are lazy, strict and auto-wait", async ({ page }) => {
    await page.goto("https://awesomeqa.com/css/");

    const allSpans = page.locator("dev.first > span"); //returns locator so no await is required.
    const count = await allSpans.count(); //count() returns promise, so await is required.
    console.log(count);

    const span1 = await allSpans.first().textContent();//first() bydefaults returns first element but returns locator;
    //textContent() returns the text content of the element and returns promise. So, await is required.
    const span2 = await allSpans.nth(1).textContent();       // "Span 2"
    const span3 = await allSpans.nth(2).textContent();       // "Span 3!"
    const span5 = await allSpans.nth(4).textContent();       // "Span 5!"
    const lastSpan = await allSpans.last().textContent();    // "Span 7!"

    console.log("First  (Span 1):", span1);
    console.log("Second (Span 2):", span2);
    console.log("Third  (Span 3):", span3);
    console.log("Fifth  (Span 5):", span5);
    console.log("Last   (Span 7):", lastSpan);



    for (let i = 0; i < count; i++) {
        let span_ith = await allSpans.nth(i).textContent();
        console.log(span_ith);
    }

});