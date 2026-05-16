import { test, expect } from "@playwright/test";
test("Automate Cura website", async ({ page }) => {
    //Go to website
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    //Locate Make Appointment button
    let btn_MakeAppointment = page.locator('#btn-make-appointment');
    //Click on Make Appointment button
    await btn_MakeAppointment.click();

    //Locate Username, Password and Login button.
    let username = page.locator('#txt-username');
    let password = page.locator('#txt-password');
    let btn_login = page.locator('#btn-login');

    //Fill username, password and click on login
    await username.fill("John Doe");
    await password.fill("ThisIsNotAPassword");
    await btn_login.click();

    //Verify the url of the next page
    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");

    //Verify the heading of the next page
    await expect(page.locator('h2')).toHaveText('Make Appointment');

});