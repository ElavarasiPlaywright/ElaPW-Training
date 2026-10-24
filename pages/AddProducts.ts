import {Page,Locator, test, expect } from "@playwright/test"

export class AddProducts{

    readonly SauceLabsBackpack: Locator;
    readonly SauceLabsBikeLight: Locator;
    readonly SauceLabsBoltTShirt: Locator;
    readonly SauceLabsFleeceJacket: Locator;
    readonly SauceLabsOnesie: Locator;
    readonly TestallTheThingsTShirtRed: Locator;

  constructor(page:Page){
    this.SauceLabsBackpack = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
    this.SauceLabsBikeLight = page.locator("//button[@id='add-to-cart-sauce-labs-bike-light']");
    this.SauceLabsBoltTShirt = page.locator("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']");
    this.SauceLabsFleeceJacket = page.locator("//button[@id='add-to-cart-sauce-labs-fleece-jacket']");
    this.SauceLabsOnesie = page.locator("//button[@id='add-to-cart-sauce-labs-onesie']");
    this.TestallTheThingsTShirtRed = page.locator("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']");
  }
  
  async productsadd(){
    await expect(this.SauceLabsBackpack).toBeVisible();
    await this.SauceLabsBackpack.click();
    await expect(this.SauceLabsBikeLight).toBeVisible();
    await this.SauceLabsBikeLight.click();
    await expect(this.SauceLabsBoltTShirt).toBeVisible();
    await this.SauceLabsBoltTShirt.click();
    await expect(this.SauceLabsFleeceJacket).toBeVisible();
    await this.SauceLabsFleeceJacket.click();
    await expect(this.SauceLabsOnesie).toBeVisible();
    await this.SauceLabsOnesie.click();
    await expect(this.TestallTheThingsTShirtRed).toBeVisible();
    await this.TestallTheThingsTShirtRed.click();
  }
 

}
