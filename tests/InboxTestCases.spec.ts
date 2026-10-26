import { test, expect} from '@playwright/test';
import { LoginPage } from '../POM_classes/LoginPage';
import { testData } from '../testData/InboxTestData';
import { HomePage } from '../POM_classes/HomePage';
import { ComposeEmailPage } from '../POM_classes/ComposeEmailPage';

//Disabling the parallel execuation Because we want beforeAll hook should run for one time for all Test methods:
test.describe.configure({ mode: 'default' });

//Sending an email from different Account for all Test cases by using Before All:
test.beforeAll(async({browser})=>{
    const context = await browser.newContext({
        storageState: "loginState2.json"
    });
    test.setTimeout(60000);
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.gotoHomePage();
    const homePage = new HomePage(page);
    const composeEmailPage = new ComposeEmailPage(page);
    await homePage.clickOnComposeEmail();
    await composeEmailPage.enterToAddress(testData.toAddress);
    await composeEmailPage.enterSubject(testData.subject);
    await composeEmailPage.enterBody(testData.body);
    await composeEmailPage.clickSendEmail();
    await homePage.waitForMessageSent();
    await page.getByText(testData.senderEmailUserName).click();
    await page.getByRole("button",{name:"Sign out"}).click();
    await context.close();
});


test('Send email from another account and Open an email and verify its read state at reciever account', async ({ browser }) => {
    const context = await browser.newContext({
        storageState: "loginState.json"
    });
    test.setTimeout(60000);
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.gotoHomePage();
    const homepage = new HomePage(page);
    //verify the send mail at receiver and open an email and verify its read state
    await expect(page.locator(`//button[@data-testid='heading:userdropdown']//span[text()="${testData.reciverUsername}"]`)).toHaveText(testData.reciverUsername);
    await page.waitForTimeout(4000);
    await page.reload();
    
    await expect(page.locator(`//span[@data-testid="message-row:subject"]/span[text()="${testData.subject}"]`)).toHaveText(testData.subject);
    
    await page.locator(`//span[@data-testid="message-row:subject"]/span[text()="${testData.subject}"]`).click();
    
    await expect(page.getByTestId("toolbar:unread")).toHaveText(testData.markAsUnread);

});

test('Send email from another account and validate the unread state', async ({ browser }) => {
    test.setTimeout(60000);
    const context = await browser.newContext({
        storageState: "loginState.json"
    });
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.gotoHomePage();
    const homepage = new HomePage(page);
    //verify the send mail at receiver and validate it's unread state:
    await expect(page.locator(`//button[@data-testid='heading:userdropdown']//span[text()="${testData.reciverUsername}"]`)).toHaveText(testData.reciverUsername);
    await page.waitForTimeout(4000);
    await page.reload();
   
    await expect(page.locator(`//span[@data-testid="message-row:subject"]/span[text()="${testData.subject}"]`)).toHaveText(testData.subject);
    const homePage = new HomePage(page);
    await homePage.selectSpecificEmail();
    
    await expect(page.locator("//button[@data-testid='toolbar:unread'] //span[text()='Mark as unread']")).toHaveText(testData.markAsUnRead);
    
});


test('Archive an email and verify its location in Archive folder', async ({ browser }) => {
    test.setTimeout(60000);
    const context = await browser.newContext({
        storageState: "loginState.json"
    });
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.gotoHomePage();
    const homepage = new HomePage(page);

    //validate the email is received from sender:
    await expect(page.locator(`//button[@data-testid='heading:userdropdown']//span[text()="${testData.reciverUsername}"]`)).toHaveText(testData.reciverUsername);
    await page.waitForTimeout(4000);
    await page.reload();

    await expect(page.locator(`//span[@data-testid="message-row:subject"]/span[text()="${testData.subject}"]`)).toHaveText(testData.subject);
    
    //Archive the Email:
    const homePage = new HomePage(page);
    await homePage.selectSpecificEmail();
    await homePage.clickOnArchiveEmailButton();

    //validate in Archive folder:
    await homePage.clickOnMore();
    await homePage.clickOnArchiveFolder();
    await homePage.waitForMessageArchiveSent();
    await page.waitForTimeout(4000);
    await page.reload();
    
    await expect(page.locator(`//span[@data-testid="message-row:subject"] //span[text()="${testData.subject}"]`)).toHaveText(testData.subject);    

});