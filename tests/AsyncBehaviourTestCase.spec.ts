import { test, expect } from '@playwright/test';
import { LoginPage } from '../POM_classes/LoginPage';
import { testData } from '../testData/AsyncBehaviourTestData';
import { HomePage } from '../POM_classes/HomePage';
import { ComposeEmailPage } from '../POM_classes/ComposeEmailPage';


//  01. Verify email is sent successfully

test(`Verify Undo Send within the available undo window`, async ({ browser }) => {
    test.setTimeout(60000);
    const context = await browser.newContext({
        storageState: "loginState.json"
    });
    const page = await context.newPage();

    const loginPage = new LoginPage(page);
    await loginPage.gotoHomePage();

    const homePage = new HomePage(page);
    await homePage.clickOnComposeEmail();

    const composeEmailPage = new ComposeEmailPage(page);
    await composeEmailPage.enterToAddress(testData.toAddress);
    await composeEmailPage.enterSubject(testData.subject);
    await composeEmailPage.enterBody(testData.body);
    await composeEmailPage.clickSendEmail();
    await homePage.waitForMessageSent();

    // Click on undo :
    await composeEmailPage.clickOnUndoSendEmail();

    //verify undo message:
    await expect(page.getByText(testData.validateMessage1)).toHaveText(testData.validateMessage1);
    await expect(page.getByText(testData.validateMessage2)).toHaveText(testData.validateMessage2)
    await context.close();
});
