/*
What is XPath?

- XPath is a query language for selecting nodes from an XML/HTML document.
- XPath was defined by the World Wide Web Consortium.
-  xPath is supported by all modern browsers

Core Logic - //tagName[@attribute='value']

>> id, name, data - qa, class....-  is unique in nature.

TAG - h1, p, input, a, form, img, video, audio, button, table, ul, li, tr, div, select, span, -> Html Tags

Attrbute - id, class, name, alt, href, src, data - qa, ….srcset..

Two types of XPath:
1. Relative XPath
2. Absolute XPath

Absolute XPath -  xPath is an expression which basically contains details from the root element
>> the problem with the absolute XPath is if any element changes, the XPath basically breaks.So generally people don't use it
Example: / html / body / div[2] / div[1] / div[2] / div / div[1] / div / div / div[3] / form[1] / ul / li[1] / div / input

Relative Xpath
> You can simply start by referencing the element you want and go from there
>> Core Logic - //tagName[@attribute='value']
*/

import { test, expect } from "@playwright/test";

test("locators are lazy, strict, and auto-wait", async ({ page }) => {
    await page.goto("https://app.vwo.com/#login");

    //let usernameField = page.locator("#login-username");
    //Xpath
    let usernameField = page.locator("xpath=//input[@data-qa='hocewoqisi']")
    //let usernameField = page.locator("//input[@id='login-username']");

    let passwordField = page.locator("#login-password");
    await usernameField.fill("admin");
    await passwordField.fill("pass123");
    let loginButton = page.locator("#js-login-btn");
    await loginButton.click();
    //Xpath
    //page.locator("xpath=//button").click()**

    console.log("All actions completed ✅");

    let error_message = page.locator('#js-notification-box-msg');
    // error_message.getByText()
    await expect(error_message).toContainText("Your email, password, IP address or location did not match");

});

/* Xpath functions:
**concat**(string, ...): XPath concat function concatenated number of arguments and return to a concatenated string.

**starts-with**(string, string): XPath start-with function return True/False. Return True if second argument string is start with first argument.

**contains**(string, string) - XPath contains function return True/False. Return True if second argument string is a contain of first argument.

string-length(string): XPath string-length function return the length of string.

**substring-after**(string, string): XPath substring-after function return the substring of the first argument string base on first occurrence of the second argument string after all character.

**substring-before**(string, string): XPath substring-before function return the substring of the first argument string base on first occurrence of the second argument string before all character.

**normalize-space**(string): XPath normalize-space function sequence of whitespace combine into single normalize space and removing leading and trailing whitespace.

Element:
    <a id="btn-make-appointment" href="./profile.php#login" class="btn btn-dark btn-lg">Make Appointment</a>
 Xpaths:
    //a[contains(@id,"make")]                 - Partial Match
    //a[contains(text(),"Make Appointment")]   - Partial Match
    //a[starts-with(@id,"btn")]               - starts with Match
    //a[text()="Make Appointment"]           - Exact Match
    //a[text()="Make Appointment" or @id="btn-make-appointment"] - Either True
    //a[text()="Make Appointment" and @id="btn-make-appointment"] - both True
    //a[normalize-space()="Make Appointment"] - Trim the head and trila space
*/
