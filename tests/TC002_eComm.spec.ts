import { test, expect, chromium } from '@playwright/test'
test('TC002_eComm',async()=>{
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://www.saucedemo.com/");
await expect(page.locator("//div[text()='Swag Labs']")).toBeVisible();
await expect(page.locator("//input[@placeholder='Username']")).toBeEditable();
await page.locator("//input[@placeholder='Username']").click();
await page.locator("//input[@placeholder='Username']").fill("standard_user");
await expect(page.locator("//input[@placeholder='Password']")).toBeEnabled();
await page.locator("//input[@placeholder='Password']").click();
await page.locator("//input[@placeholder='Password']").fill("secret_sauce");
await page.locator("//input[@id='login-button']").click();
await expect(page.locator("//span[text()='Products']")).toBeVisible();
await page.locator("//button[@name='add-to-cart-sauce-labs-backpack']").click();
await page.locator("//a[@data-test='shopping-cart-link']").click();
await page.locator("//button[@data-test='checkout']").click();
await page.locator("//input[@id='first-name']").fill("SampleFirstName");
await page.locator("//input[@id='last-name']").fill("SampleLastName");
await page.locator("//input[@id='postal-code']").fill("600001");
await page.locator("//input[@id='continue']").click();
await page.locator("//button[@id='finish']").click();
await page.locator("//button[@name='back-to-products']").click();
await browser.close()
});