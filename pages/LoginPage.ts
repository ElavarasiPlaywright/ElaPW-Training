import {Page,Locator, test, expect } from "@playwright/test"

export class LoginPage{

    readonly page:Page
    readonly userId: Locator;
    readonly password: Locator;
    readonly loginbtn: Locator;
    readonly title: Locator;
    readonly acceptedUserName: Locator;

  constructor(page:Page){
    this.page = page;
    this.userId = page.locator("//input[@placeholder='Username']");
    this.password = page.locator('//input[@placeholder="Password"]');
    this.loginbtn = page.locator('//input[@value="Login"]');
    this.title = page.locator("//div[text()='Swag Labs']");
    this.acceptedUserName = page.locator("//h4[text()='Accepted usernames are:']");
  }
  async goto(){
    await this.page.goto("https://www.saucedemo.com/")
  }
  async login(userName:string, Password: string){
    await expect(this.userId).toBeVisible();
    await expect(this.password).toBeVisible();
    await this.userId.fill(userName);
    await this.password.fill(Password);
  }
  async acceptedUserField(){
    await expect(this.acceptedUserName).toBeVisible()
  }
  async clicksLoginButton(){
    await expect(this.loginbtn).toBeVisible();
    await this.loginbtn.click();
  }

}
