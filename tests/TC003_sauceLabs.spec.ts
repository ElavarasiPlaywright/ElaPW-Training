//tests---> TC003_sauceLab.spec.js
import {test, expect} from "@playwright/test"
import {LoginPage} from "../pages/LoginPage"
import { AddProducts } from "../pages/AddProducts"
import { YourCart } from "../pages/YourCart";
import { YourInfo } from "../pages/YourInfo";

test("TC003_Sauce Lab Test Case In POM ",async({page})=>{
  const loginPage = new LoginPage(page);
  const addprod = new AddProducts(page);
  const yourcart = new YourCart(page);
  const yourinfo = new YourInfo(page);
  await loginPage.goto();
  await loginPage.login("standard_user","secret_sauce");
  await loginPage.acceptedUserField();
  await loginPage.clicksLoginButton();

  await addprod.SauceLabsBackpack.click();
  await addprod.SauceLabsBikeLight.click();
  await addprod.SauceLabsBoltTShirt.click();
  await addprod.SauceLabsFleeceJacket.click();
  await addprod.SauceLabsOnesie.click();
  await addprod.TestallTheThingsTShirtRed.click();  
  
  await yourcart.Shoppingcart.click();

  await yourcart.Checkout.click();

  await yourinfo.Firstname.fill("SampleFirstName");
  await yourinfo.Lastname.fill("SampleLastName");
  await yourinfo.Zipcode.fill("600001");
  await yourinfo.continue.click();
  await yourinfo.finish.click();


})