import {Page,Locator, test, expect } from "@playwright/test"

export class YourCart{

    readonly ContinueShopping: Locator;
    readonly Checkout: Locator;
    readonly Shoppingcart: Locator;

  constructor(page:Page){
    this.ContinueShopping = page.locator("//button[@id='continue-shopping']");
    this.Checkout = page.locator("//button[@id='checkout']");
    this.Shoppingcart=page.locator("//a[@data-test='shopping-cart-link']");
  }
  
   async clickcheckout(){
    await expect(this.ContinueShopping).toBeVisible();
    await expect(this.Checkout).toBeVisible();
    await expect(this.Shoppingcart).toBeVisible();
    await this.Checkout.click();
    await this.Shoppingcart.click();
  }

}
