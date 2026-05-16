import { test, expect } from "@playwright/test";

test("Free Trail", async ({ page }) => {
    //  await page.goto("https://app.vwo.com/#login");
    // await page.getByRole('link', { name: 'Start a FREE TRIAL' }).click();
    // await page.waitForTimeout(5000);
    await page.goto("https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage");
    //await page.getByRole('textbox', { name: 'Business Email' }).fill("abcd@gmail.com", { timeout: 5000 });
    await page.getByRole('textbox', { name: 'Business Email' }).pressSequentially("abcd@gmail.com", { delay: 100 });
    //await page.waitForTimeout(3000);
    const err_msg = page.getByText("gmail.com doesn't look like a business domain. Please use your business email.");
    await expect(err_msg).toBeVisible();
    console.log(await err_msg.textContent());
    //await page.getByRole("checkbox").check();



})