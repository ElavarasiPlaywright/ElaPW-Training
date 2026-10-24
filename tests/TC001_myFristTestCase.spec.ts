
//Checking Git
//tests-->TC001_myFirstTest.spec.ts
import { test, expect, chromium } from '@playwright/test'
//with page fixture
test('TC001_my first playwright test',async({page})=>{
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
});
//without page fixture
test('TC002_my second playwright test',async()=>{
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

await browser.close()
});