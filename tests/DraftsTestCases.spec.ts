
import { test, expect } from '@playwright/test';
import { LoginPage } from '../POM_classes/LoginPage';
import { testData } from '../testData/LoginPageTestData';
import { HomePage } from '../POM_classes/HomePage';
import { ComposeEmailPage } from '../POM_classes/ComposeEmailPage';
import { DraftTestData } from '../testData/DraftTestData';

test.describe.configure({ mode: 'default' });

for (const data of DraftTestData.emailTestData) {

    test(`Verify a draft is saved automatically`, async ({ browser }) => {

        const context = await browser.newContext({
            storageState: 'loginState.json'
        });

        const page = await context.newPage();

        const loginPage = new LoginPage(page);
        await loginPage.gotoHomePage();

        const homePage = new HomePage(page);
        await homePage.clickOnComposeEmail();

        const composeEmailPage = new ComposeEmailPage(page);

        await composeEmailPage.enterToAddress(data.toAddress);
        await composeEmailPage.enterSubject(data.subjectForDraftVerify);
        await composeEmailPage.enterBody(data.body);

        await composeEmailPage.clickOnCloseComposer();

        // Validate in Draft folder
        await homePage.clickOnDraftFolder();

        await expect(
            page.locator(`//span[@data-testid="message-row:subject"] //span[text()="${data.subjectForDraftVerify}"]`)
        ).toHaveText(data.subjectForDraftEditSend);

        await context.close();
    });
}

// 02. Reopen and edit a saved draft and send verfiy

for (const data of DraftTestData.emailTestData) {

    test(`Reopen and edit a saved draft and send verfiy`, async ({ browser }) => {
        test.setTimeout(60000);
        const context = await browser.newContext({
            storageState: 'loginState.json'
        });

        const page = await context.newPage();

        const loginPage = new LoginPage(page);
        await loginPage.gotoHomePage();

        const homePage = new HomePage(page);
        await homePage.clickOnComposeEmail();

        const composeEmailPage = new ComposeEmailPage(page);

        await composeEmailPage.enterToAddress(data.toAddress);
        await composeEmailPage.enterSubject(data.subjectForDraftEditSend);
        await composeEmailPage.enterBody(data.body);

        await composeEmailPage.clickOnCloseComposer();

        // Validate in Draft folder
        await homePage.clickOnDraftFolder();

        await page.waitForTimeout(1000);
        await page.reload();

        await expect(
            page.locator(`//span[@data-testid="message-row:subject"] //span[text()="${data.subjectForDraftEditSend}"]`).first()).toHaveText(data.subjectForDraftEditSend);

        //open a draft mail and edit and send
        await  page.locator(`//span[@data-testid="message-row:subject"] //span[text()="${data.subjectForDraftEditSend}"]`).first().click();
        await composeEmailPage.clickSendEmail();
        await homePage.waitForMessageSent();

        //open a send folder and validate
        await homePage.clickOnSentFolder();

        await page.waitForTimeout(1000);
        await page.reload();
                
        await expect(
            page.locator(`//span[@data-testid="message-row:subject"] //span[text()="${data.subjectForDraftEditSend}"]`)).toHaveText(data.subjectForDraftEditSend);
                
        await context.close();

    });
}

