import { test, expect, Page } from '@playwright/test';

async function signUp(page: Page, name: string, email: string, password: string): Promise<void> {
    await page.getByRole("button", { name: "Sign Up" }).click();
    await expect(page.getByText('Create your digital account')).toBeVisible();
    await page.getByPlaceholder("John Doe").fill(name);
    await page.getByPlaceholder("you@example.com").fill(email);
    await page.getByPlaceholder("••••••••").fill(password);
    const btn_createAccount = page.getByRole("button", { name: "Create Account" });
    await btn_createAccount.click();
}

async function transferFunds(page: Page, amount: number, comment: string): Promise<void> {
    await page.getByRole("button", { name: "Transfer Funds" }).click();
    const page2 = page.locator("header h1");
    console.log("Page Title: " + await page2.textContent());
    const transferAmount = amount;
    //await page.getByPlaceholder("0.00").fill(amount.toString());
    await page.getByPlaceholder("0.00").fill(`${amount}`);
    await page.getByPlaceholder("e.g. Rent for October").fill(comment);
    await page.getByRole("button", { name: "Continue" }).click();
    await page.getByRole("button", { name: "Confirm Transfer" }).click();
}

test("Create an account and verify Total Balance after successfully transfering the money", async ({ page }) => {

    page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");

    await signUp(page, "Sameer Sharma", "sameer@sharma.com", "Test1234");

    const page1 = page.locator("header h1");
    console.log("Page Title: " + await page1.textContent());

    const totalBalance = page.locator("h3").first();
    let initialBalance = await totalBalance.allTextContents();
    console.log("Total Balance: " + initialBalance);

    await transferFunds(page, 5000, "Rent");

    await page.getByRole("button", { name: "Dashboard" }).click();
    await expect(totalBalance).toHaveText("$45,000.00");
    let finalBalance = await totalBalance.allTextContents();
    console.log("Total Balance after transfer: " + finalBalance);
});


