import {Page,Locator, test, expect } from "@playwright/test"

export class YourInfo{

    readonly Firstname: Locator;
    readonly Lastname: Locator;
    readonly Zipcode: Locator;
    readonly continue: Locator;
    readonly finish: Locator;

  constructor(page:Page){
    this.Firstname = page.locator("//input[@id='first-name']");
    this.Lastname = page.locator("//input[@id='last-name']");
    this.Zipcode=page.locator("//input[@id='postal-code']");
    this.continue=page.locator("//input[@id='continue']");
    this.finish=page.locator("//button[@id='finish']");
    
  }
  
   async YourInfo(firstname: string, lastname:string, zipcode:string){
    await expect(this.Firstname).toBeVisible();
    await expect(this.Lastname).toBeVisible();
    await expect(this.Zipcode).toBeVisible();
    await this.Firstname.fill(firstname);
    await this.Lastname.fill(lastname);
    await this.Zipcode.fill(zipcode);
    await this.continue.click();
    await this.finish.click();
  }

}
