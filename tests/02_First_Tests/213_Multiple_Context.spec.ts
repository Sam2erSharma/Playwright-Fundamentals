import { chromium } from "playwright";

async function multiUserTest() {
    let browser = await chromium.launch({ headless: false });
    /*NOTE:
    >>Ideally we should specify the datatype of the variables like browser etc, same as we have done in 212_Browser_Context_Page.spec.ts but without specifying it also, it will work.
    >>This is due to the type inference property of typescript. It will assume the datatype of the variable based on the value assigned to it.
    >>It might throw a warning but it won't throw an error, hence the code will run.
    */

    // Admin
    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();
    await adminPage.goto("https://app.vwo.com/login");
    console.log("Admin: on login page");



    // Viewer
    let viewerContext = await browser.newContext();
    let viewerPage = await viewerContext.newPage();
    await viewerPage.goto("https://app.vwo.com/login");
    console.log("Viewer: on login page");

    await adminContext.close();
    await viewerContext.close();
    await browser.close();


}

multiUserTest();