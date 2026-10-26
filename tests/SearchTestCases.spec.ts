import { test, expect } from '@playwright/test';
import { LoginPage } from '../POM_classes/LoginPage';
import { testData } from '../testData/SearchEmailTestData';
import { textSync } from 'node:stream/iter';
import { HomePage } from '../POM_classes/HomePage';
import { SearchEmailPage } from '../POM_classes/SearchEmailPage';



test('Search using multiple conditions, such as sender and date range', async ({ browser }) => {
    const context = await browser.newContext({
        storageState: "loginState.json"
    });
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.gotoHomePage();
    const searchEmailPage = new SearchEmailPage(page);
    await searchEmailPage.clickOnSearchTab();
    await searchEmailPage.clickMoreSuchOptionButton();
    await searchEmailPage.enterStartDate(testData.startData);
    await searchEmailPage.enterToDate(testData.endData);
    await searchEmailPage.enterSender(testData.sender);
    await searchEmailPage.clickOnSearchButton();
    //validate search result:
    await expect(page.getByTestId("message-column:sender-address").first()).toHaveText(testData.sender);
});

test('Search for an email using a keyword', async ({ browser }) => {
    const context = await browser.newContext({
        storageState: "loginState.json"
    });
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.gotoHomePage();
    const searchEmailPage = new SearchEmailPage(page);
    await searchEmailPage.clickOnSerachTabWithInput(testData.searchKeyword);
    await searchEmailPage.clickOnSearchButton();

    //validate search result:
    await expect(page.getByTestId("message-column:sender-address").first()).toHaveText(testData.sender);
});