import { test, expect } from '@playwright/test';
import { LoginPage } from '../POM_classes/LoginPage';
import { data } from '../testData/AttachmentTestData';
import { textSync } from 'node:stream/iter';
import { HomePage } from '../POM_classes/HomePage';
import { ComposeEmailPage } from '../POM_classes/ComposeEmailPage';



test('Attach a file, send the email and verify the received attachment', async ({ browser }) => {
    const context = await browser.newContext({
        storageState: "loginState.json"
    });
    test.setTimeout(60000);
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.gotoHomePage();
    const homePage = new HomePage(page);
    await homePage.clickOnComposeEmail();

    const composeEmailPage = new ComposeEmailPage(page);
    await composeEmailPage.enterToAddress(data.toAddress);
    await composeEmailPage.enterSubject(data.subject);
    await composeEmailPage.enterBody(data.body);
    await composeEmailPage.clickOnAttachment(data.fileLocation);
    await composeEmailPage.clickSendEmail();
    await homePage.waitForMessageSent();

    //validate the attachment:
    await homePage.clickOnSentFolder();
    await page.waitForTimeout(2000);
    await page.reload();

    await page.getByTestId("message-column:sender-address").first().click();

    await expect(page.locator(`//span[@aria-label="${data.fileName}"]`).first()).toHaveAttribute('aria-label', data.fileName);
    
    
});