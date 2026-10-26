import {Page,Locator} from "@playwright/test";
import { testData } from "../testData/LoginPageTestData";

export class ComposeEmailPage {
    private page: Page;
    private toAddressL: Locator;
    private subjectL: Locator;
    private ccL: Locator;
    private ccTextL: Locator;
    private bccL: Locator;
    private bccTextL: Locator;
    private sendButtonL: Locator;
    private bodyL: Locator;
    private closeComposerL: Locator;
    private clickOnAttachmentL: Locator;
    private clickOnUndoSendEmailL: Locator;

    constructor(page:Page){
        this.page = page;
        this.toAddressL = this.page.getByRole("textbox",{name: "To"});
        this.subjectL = this.page.getByRole("textbox",{name:"Subject"});
        this.ccL = this.page.locator("//button[@title='Carbon Copy']");
        this.ccTextL = this.page.getByRole("textbox",{name:"CC"});
        this.bccL = this.page.locator("//button[@title='Blind Carbon Copy']");
        this.bccTextL = this.page.getByRole("textbox",{name:"BCC"});
        this.sendButtonL = this.page.locator("//span[text()='Send' and @class='px-4 hidden md:inline']");
        this.bodyL = this.page.frameLocator('iframe[data-testid="rooster-iframe"]').locator('#rooster-editor[contenteditable="true"]');
        this.closeComposerL = this.page.locator("//button[contains(@class, 'composer-title-bar-button') and @data-testid='composer:close-button']");
        this.clickOnAttachmentL = this.page.locator("//label[data-testid='composer:attachment-button']");
        this.clickOnUndoSendEmailL = this.page.locator("//button[@data-testid='notification:undo-button']");
    }
    public async enterToAddress(toAddress: string){
        await this.toAddressL.fill(toAddress);
        await this.page.keyboard.press("Enter");
    }
    public async enterSubject(subject: string){
        await this.subjectL.click();
        await this.subjectL.fill(subject);
    }
    public async enterCC(cc: string){
        await this.ccL.click();
        await this.ccTextL.fill(cc)
    }
    public async enterBCC(bcc: string){
        await this.bccL.click();
        await this.bccTextL.fill(bcc);
    }
    public async enterBody(body:string){
        await this.bodyL.waitFor({ state: 'visible' });
        await this.bodyL.fill(body)
    }
    public async clickSendEmail(){
        await this.sendButtonL.click();
    }
    public async clickOnCloseComposer(){
        await this.closeComposerL.click();
    }
    public async clickOnAttachment(fileLocation: string){
        const uploadEvent = this.page.waitForEvent("filechooser");
        await this.page.keyboard.press("Control+Shift+A");
        const uploader = await uploadEvent;
        await uploader.setFiles(fileLocation);

    }
    public async clickOnUndoSendEmail(){
        await this.clickOnUndoSendEmailL.click();
    }
}