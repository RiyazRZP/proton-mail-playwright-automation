import { test, expect } from '@playwright/test';
import { LoginPage } from '../POM_classes/LoginPage';
import { testData } from '../testData/LoginPageTestData';

test("Creating a login state bypass Authentication and saving that state into storage state",async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    const lp = new LoginPage(page);
    await lp.enterEmailPassAndSubmit(testData.username,testData.password);
    await expect(page.getByText(testData.username)).toHaveText(testData.username);
    await page.context().storageState({path:"loginState.json"});
    await context.close();
});