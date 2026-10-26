import { test, expect } from '@playwright/test';
import { LoginPage } from '../POM_classes/LoginPage';
import { testData } from '../testData/LoginPageTestData';
import { textSync } from 'node:stream/iter';

test.describe.configure({ mode: 'serial' });

test('Login with valid credentials', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.enterEmailPassAndSubmit(testData.username,testData.password);
    //await page.pause();
    //validation the user on home page.
    await expect(page.getByText(testData.username)).toHaveText(testData.username);
});

test("Login with InValid credentials",async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.enterEmailPassAndSubmit(testData.username,testData.incorrectPassword,);

    //Added assertion to validate the error by entering the invalid credentials.
    await expect(page.getByText(testData.incorrectPasswordError)).toHaveText(testData.incorrectPasswordError);
});

test("Logout and verify session behavior",async({browser})=>{
    test.setTimeout(50000);
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    loginPage.enterEmailPassAndSubmit(testData.username,testData.password);
    await page.getByText(testData.username).click();
    await page.getByRole("button",{name:"Sign out"}).click();
    
    //handling the signout popup:
    const popup = page.locator("div[class='modal-two-dialog-container']");

    try {
    await popup.waitFor({ state: 'visible', timeout: 3000 });

    await popup.getByRole("button",{name:"Sign out"}).click();

    console.log('Popup appeared and was closed');
    } catch {
    console.log('Popup did not appear; continuing test');
     await page.getByRole("button",{name:"Sign out"}).click();
    }

    //adding assertion to validate we landed back to login page with the help of login page url:
    await expect(page).toHaveURL(testData.loginPageURL);
});


