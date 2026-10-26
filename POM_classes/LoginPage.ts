import {Page,Locator} from "@playwright/test";
import { testData } from "../testData/LoginPageTestData";

export class LoginPage {
    private page: Page;
    private loginButtonL: Locator;
    private emailL: Locator;
    private passwordL: Locator;

    constructor(page:Page){
        this.page = page;
        this.emailL = this.page.getByRole("textbox",{name: "Email or username"})
        this.passwordL = this.page.getByRole("textbox",{name: "Password"})
        this.loginButtonL = this.page.getByRole("button",{name: "Sign in"})
    }
    public async enterEmailPassAndSubmit(email:string, password:string){
        await this.page.goto(testData.loginPageURL);
        await this.emailL.pressSequentially(email);
        await this.passwordL.pressSequentially(password);
        await this.loginButtonL.click();
    }
    public async gotoLoginURL(){
        await this.page.goto(testData.loginPageURL);
    }
    public async gotoHomePage(){
        await this.page.goto(testData.HomepageURL);
    }
}