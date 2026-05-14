import { test, expect } from "@playwright/test";

test("locators are lazy, strict, and auto-wait", async ({ page }) => {
    await page.goto("https://app.vwo.com/#login");

    // Rule 2 - Css Seecltor 
    // id -> #
    // class -> .

    // Create locators — nothing happens yet (lazy)
    let usernameField = page.locator("#login-username");
    //Apart from selector, you can also pass other optional arguments like:
    //has, hasNot, hasText, hasNotText
    let passwordField = page.locator("#login-password");
    let loginButton = page.locator("#js-login-btn");

    // NOW Playwright finds the element and acts (auto-wait)

    await usernameField.fill("admin");
    await passwordField.fill("pass123");
    await loginButton.click();

    console.log("All actions completed ✅");

    let error_message = page.locator('#js-notification-box-msg');
    // error_message.getByText()
    await expect(error_message).toContainText("Your email, password, IP address or location did not match");

});