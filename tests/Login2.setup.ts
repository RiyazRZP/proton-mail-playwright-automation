import { test, expect } from '@playwright/test';
import { LoginPage } from '../POM_classes/LoginPage';
import { testData,testData2 } from '../testData/LoginPageTestData';

test("Creating a login state bypass Authentication and saving that state into storage state",async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    const lp = new LoginPage(page);
    const updatedPage = await lp.enterEmailPassAndSubmit(testData2.username,testData2.password);
    await expect(updatedPage.getByText(testData2.userNameValidation)).toHaveText(testData2.userNameValidation);
    await updatedPage.context().storageState({path:"loginState2.json"});
    await context.close();
});