import { test, expect } from '@playwright/test';
import { LoginPage } from '../POM_classes/LoginPage';
import { testData } from '../testData/LoginPageTestData';
import { HomePage } from '../POM_classes/HomePage';
import { ComposeEmailPage } from '../POM_classes/ComposeEmailPage';
import {ComposeEmailtestData} from '../testData/ComposeEmailTestData';


//  01. Verify email is sent successfully

test(`Verify email is sent successfully`, async ({ browser }) => {
    test.setTimeout(60000);
    const context = await browser.newContext();
    const page = await context.newPage();

    const loginPage = new LoginPage(page);
    await loginPage.gotoHomePage();

    const homePage = new HomePage(page);
    await homePage.clickOnComposeEmail();

    const composeEmailPage = new ComposeEmailPage(page);
    await composeEmailPage.enterToAddress(ComposeEmailtestData.emailTestData[0].toAddress);
    await composeEmailPage.enterSubject(ComposeEmailtestData.emailTestData[0].subject);
    await composeEmailPage.enterBody(ComposeEmailtestData.emailTestData[0].body);
    await composeEmailPage.clickSendEmail();
    await homePage.waitForMessageSent();

    // Validate the email in the Sent folder
    await homePage.clickOnSentFolder();
    await page.waitForTimeout(2000);
    await page.reload();

    await expect(page.locator(`//span[@data-testid="message-row:subject"] //span[text()="${ComposeEmailtestData.emailTestData[0].subject}"]`))
        .toHaveText(ComposeEmailtestData.emailTestData[0].subject);

    await context.close();
});



// 02. Validate sending with a missing recipient


test(`Validate sending with a missing recipient`, async ({ browser }) => {
    test.setTimeout(60000);
    const context = await browser.newContext();
    const page = await context.newPage();

    const loginPage = new LoginPage(page);
    await loginPage.gotoHomePage();

    const homePage = new HomePage(page);
    await homePage.clickOnComposeEmail();

    const composeEmailPage = new ComposeEmailPage(page);
    await composeEmailPage.enterSubject(ComposeEmailtestData.emailTestData[1].subject);
    await composeEmailPage.enterBody(ComposeEmailtestData.emailTestData[1].body);
    await composeEmailPage.clickSendEmail();

    // Validate the missing recipient error
    await expect(
        page.getByRole('heading', {
            name: ComposeEmailtestData.emailTestData[1].RecipientMissing
        })
    ).toHaveText(ComposeEmailtestData.emailTestData[1].RecipientMissing);

    await context.close();
});


// 03. Validate sending with an invalid recipient

test(`Validate sending with an invalid recipient`, async ({ browser }) => {
    test.setTimeout(60000);
    const context = await browser.newContext();
    const page = await context.newPage();

    const loginPage = new LoginPage(page);
    await loginPage.gotoHomePage();

    const homePage = new HomePage(page);
    await homePage.clickOnComposeEmail();

    const composeEmailPage = new ComposeEmailPage(page);
    await composeEmailPage.enterToAddress(ComposeEmailtestData.emailTestData[2].invalidToAddress);
    await composeEmailPage.enterSubject(ComposeEmailtestData.emailTestData[2].subject);
    await composeEmailPage.enterBody(ComposeEmailtestData.emailTestData[2].body);
    await composeEmailPage.clickSendEmail();

    // Validate the error for the invalid recipient
    await expect(page.getByText(ComposeEmailtestData.emailTestData[2].invalidRecipientError))
        .toHaveText(ComposeEmailtestData.emailTestData[2].invalidRecipientError);

    await context.close();
});

// 04.Send an email with CC and BCC


test(`Send an email with CC and BCC`, async ({ browser }) => {
    test.setTimeout(60000);
    const context = await browser.newContext();
    const page = await context.newPage();

    const loginPage = new LoginPage(page);
    await loginPage.gotoHomePage();

    const homePage = new HomePage(page);
    await homePage.clickOnComposeEmail();

    const composeEmailPage = new ComposeEmailPage(page);
    await composeEmailPage.enterToAddress(ComposeEmailtestData.emailTestData[3].toAddress);
    await composeEmailPage.enterSubject(ComposeEmailtestData.emailTestData[3].subject);
    await composeEmailPage.enterCC(ComposeEmailtestData.emailTestData[3].cc);
    await composeEmailPage.enterBCC(ComposeEmailtestData.emailTestData[3].bcc);
    await composeEmailPage.enterBody(ComposeEmailtestData.emailTestData[3].body);
    await composeEmailPage.clickSendEmail();
    await homePage.waitForMessageSent();

    // Validate the email in the Sent folder with BCC:
    await homePage.clickOnSentFolder();

    await page.waitForTimeout(2000);
    await page.reload();

    await expect(page.locator(`//span[@data-testid="message-row:subject"] //span[text()="${ComposeEmailtestData.emailTestData[3].subject}"]`))
        .toHaveText(ComposeEmailtestData.emailTestData[3].subject);

    await expect(page.getByText(ComposeEmailtestData.emailTestData[3].bcc).first())
        .toHaveText(ComposeEmailtestData.emailTestData[3].bcc);

    await context.close();
});


