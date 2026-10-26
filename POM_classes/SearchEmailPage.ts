import {Page,Locator} from "@playwright/test";


export class SearchEmailPage {
    private page: Page;
    private searchTabL: Locator;
    private startDateL: Locator;
    private endDateL: Locator;
    private enterSenderL: Locator;
    private moreSuchOptionL: Locator;
    private clickOnSearchL: Locator;

    constructor(page:Page){
        this.page = page;
        this.searchTabL = this.page.getByPlaceholder("Search messages");
        this.startDateL = this.page.getByPlaceholder("Start date");
        this.endDateL = this.page.getByPlaceholder("End date");
        this.enterSenderL = this.page.locator("#from");
        this.moreSuchOptionL = this.page.getByRole("button",{name: "More search options"});
        this.clickOnSearchL = this.page.locator("//button[@data-testid='advanced-search:submit']");
    }
    public async clickOnSearchTab(){
        await this.searchTabL.click();
    }
    public async clickOnSerachTabWithInput(keyword: string){
        await this.searchTabL.click();
        await this.page.keyboard.type(keyword);
    }
    public async clickMoreSuchOptionButton(){
        await this.moreSuchOptionL.click();
    }
    public async enterStartDate(startData: string) {
        await this.startDateL.click();
        await this.page.locator(`//span[@class='minicalendar-day-number' and text()='${startData}']`).click();
    }
    public async enterToDate(endData: string) {
        await this.endDateL.click();
        await this.page.locator(`//span[@class='minicalendar-day-number' and text()='${endData}']`).last().click();
    }
    public async enterSender(sender: string){
        await this.enterSenderL.pressSequentially(sender);
        await this.page.keyboard.press('Enter');
    }
    public async clickOnSearchButton(){
        await this.clickOnSearchL.click();
    }
        
}