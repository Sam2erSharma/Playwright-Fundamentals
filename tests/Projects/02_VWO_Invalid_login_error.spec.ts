import { test, expect } from "@playwright/test";

test("Validate the error message on VWO invalid login ", async ({ page }) => {
    await page.goto("https://app.vwo.com/#login");

    await page.getByRole("textbox", { name: "Email address" }).fill("admin");
    //name:Email address is coming from the label of the element.

    await page.getByRole("textbox", { name: "Password" }).fill("pass123");
    //name:Password is coming from the label of the element.

    await page.getByRole("button", { name: "Sign in", exact: true }).click();
    // With only {name: 'Sign in'} 4 elements are getting matched, so we need to use exact: true to match the exact element with name: Sign in
    //exact:true ensures that the button text is exactly "Sign in" and not "Sign in with Google" or any other text.

    await expect(page.getByText("Your email, password, IP address or location did not match")).toBeVisible();
    //.toBeVisible() is used here to check whether the error message is visible or not.
});