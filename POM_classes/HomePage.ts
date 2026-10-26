import {Page,Locator} from "@playwright/test";
import { testData } from "../testData/LoginPageTestData";

export class HomePage {
    private page: Page;
    private composeEmailButtonL: Locator;
    private sentFolderL: Locator;
    private draftFolderL: Locator;
    private waitForMessageSentL: Locator;
    private archiveFolderL: Locator;
    private selectSpecificEmailL: Locator;
    private archiveEmailButtonL: Locator;
    private clickOnMoreButtonL: Locator;
    private waitForArchiveMessageSentL: Locator;
    private unReadTheEmailButtonL: Locator;


    constructor(page:Page){
        this.page = page;
        this.composeEmailButtonL = this.page.getByRole("button",{name: "New message"});
        this.sentFolderL = this.page.getByRole("link",{name:"Sent"});
        this.draftFolderL = this.page.getByText("Drafts");
        this.archiveFolderL = this.page.locator('//a[@data-testid="navigation-link:archive"] //span[text()="Archive"]');
        this.waitForMessageSentL = this.page.getByText("Message sent.");
        this.selectSpecificEmailL = this.page.locator('(//input[@data-testid="item-checkbox"])[1]');   
        this.archiveEmailButtonL = this.page.locator('//button[@data-testid="toolbar:movetoarchive"]');
        this.clickOnMoreButtonL = this.page.locator("//button[@title='More'] //span[text()='More']");
        this.waitForArchiveMessageSentL = this.page.getByText("Conversation moved to Archive.");
        this.unReadTheEmailButtonL = this.page.locator("//button[@data-testid='toolbar:unread']");
    }
    // await page.getByText('Message sent.').waitFor({
    // state: 'visible',
    // timeout: 5000
    // });
    public async clickOnComposeEmail(){
        await this.composeEmailButtonL.click();
    }
    public async clickOnSentFolder(){
        await this.sentFolderL.click();
    }
    public async clickOnDraftFolder(){
        await this.draftFolderL.click();
    }
    public async clickOnArchiveFolder(){
        await this.archiveFolderL.click();
    }
    public async clickOnMore(){
        await this.clickOnMoreButtonL.click();
    }
    public async selectSpecificEmail(){
        await this.selectSpecificEmailL.click();
    }
    public async clickOnArchiveEmailButton(){        
        await this.archiveEmailButtonL.click();
    }
    public async clickOnUnReadEmailButton(){
        await this.unReadTheEmailButtonL.click();
    }
    public async waitForMessageSent(){
        await this.waitForMessageSentL.waitFor({
            state: "visible",
            timeout: 30000
        });
    }
    public async waitForMessageArchiveSent(){
        await this.waitForArchiveMessageSentL.waitFor({
            state: "visible",
            timeout: 30000
        });
    }

    public async waitForSubjectToAppear(subject: string) {
        await this.page.locator(
            `//span[@data-testid="message-row:subject"] //span[text()="${subject}"]`
        ).waitFor({
            state: "visible",
            timeout: 10000
        });
    }

}