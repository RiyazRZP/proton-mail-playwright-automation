import { test, expect } from '@playwright/test';
import { LoginPage } from '../POM_classes/LoginPage';
import { testData } from '../testData/LoginPageTestData';
import { HomePage } from '../POM_classes/HomePage';
import { ComposeEmailPage } from '../POM_classes/ComposeEmailPage';
import {ComposeEmailtestData} from '../testData/ComposeEmailTestData';

//  01. Verify email is sent successfully
for (const data of ComposeEmailtestData.emailTestData) {
    test(`Verify email is sent successfully`, async ({ browser }) => {
        test.setTimeout(60000);
        const context = await browser.newContext();
        const page = await context.newPage();

        const loginPage = new LoginPage(page);
        await loginPage.gotoHomePage();

        const homePage = new HomePage(page);
        await homePage.clickOnComposeEmail();

        const composeEmailPage = new ComposeEmailPage(page);
        await composeEmailPage.enterToAddress(data.toAddress);
        await composeEmailPage.enterSubject(data.subject);
        await composeEmailPage.enterBody(data.body);
        await composeEmailPage.clickSendEmail();
        await homePage.waitForMessageSent();

        // Validate the email in the Sent folder
        await homePage.clickOnSentFolder();
        await page.waitForTimeout(2000);
        await page.reload();

        await expect(page.locator(`//span[@data-testid="message-row:subject"] //span[text()="${data.subject}"]`).first())
            .toHaveText(data.subject);

        await context.close();
    });
}


// 02. Validate sending with a missing recipient

for (const data of ComposeEmailtestData.emailTestData) {
    test(`Validate sending with a missing recipient`, async ({ browser }) => {
        test.setTimeout(60000);
        const context = await browser.newContext();
        const page = await context.newPage();

        const loginPage = new LoginPage(page);
        await loginPage.gotoHomePage();

        const homePage = new HomePage(page);
        await homePage.clickOnComposeEmail();

        const composeEmailPage = new ComposeEmailPage(page);
        await composeEmailPage.enterSubject(data.subject);
        await composeEmailPage.enterBody(data.body);
        await composeEmailPage.clickSendEmail();

        // Validate the missing recipient error
        await expect(
            page.getByRole('heading', {
                name: data.RecipientMissing
            })
        ).toHaveText(data.RecipientMissing);

        await context.close();
    });
}

// 03. Validate sending with an invalid recipient
for (const data of ComposeEmailtestData.emailTestData) {
    test(`Validate sending with an invalid recipient`, async ({ browser }) => {
        test.setTimeout(60000);
        const context = await browser.newContext();
        const page = await context.newPage();

        const loginPage = new LoginPage(page);
        await loginPage.gotoHomePage();

        const homePage = new HomePage(page);
        await homePage.clickOnComposeEmail();

        const composeEmailPage = new ComposeEmailPage(page);
        await composeEmailPage.enterToAddress(data.invalidToAddress);
        await composeEmailPage.enterSubject(data.subject);
        await composeEmailPage.enterBody(data.body);
        await composeEmailPage.clickSendEmail();

        // Validate the error for the invalid recipient
        await expect(page.getByText(data.invalidRecipientError))
            .toHaveText(data.invalidRecipientError);

        await context.close();
    });
}

// 04.Send an email with CC and BCC

for (const data of ComposeEmailtestData.emailTestData) {
    test(`Send an email with CC and BCC`, async ({ browser }) => {
        test.setTimeout(60000);
        const context = await browser.newContext();
        const page = await context.newPage();

        const loginPage = new LoginPage(page);
        await loginPage.gotoHomePage();

        const homePage = new HomePage(page);
        await homePage.clickOnComposeEmail();

        const composeEmailPage = new ComposeEmailPage(page);
        await composeEmailPage.enterToAddress(data.toAddress);
        await composeEmailPage.enterSubject(data.subject);
        await composeEmailPage.enterCC(data.cc);
        await composeEmailPage.enterBCC(data.bcc);
        await composeEmailPage.enterBody(data.body);
        await composeEmailPage.clickSendEmail();
        await homePage.waitForMessageSent();

        // Validate the email in the Sent folder with BCC:
        await homePage.clickOnSentFolder();

        await page.waitForTimeout(2000);
        await page.reload();

        await expect(page.locator(`//span[@data-testid="message-row:subject"] //span[text()="${data.subject}"]`).first())
            .toHaveText(data.subject);

        await expect(page.getByText(data.bcc).first())
            .toHaveText(data.bcc);

        await context.close();
    });
}

