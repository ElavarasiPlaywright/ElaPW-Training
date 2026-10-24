import { test, expect, chromium } from '@playwright/test'
test('TC010_Practice',async()=>{
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://practice-automation.com/form-fields/");
await expect(page.locator("//input[@name='name-input']")).toBeVisible();
await page.locator("//input[@name='name-input']").fill("Practicename");
await expect(page.locator("//input[@type='password']")).toBeVisible();
await page.locator("//input[@type='password']").fill("TestPassword");
await expect(page.locator("//input[@data-cy='drink1']")).toBeVisible();
await page.locator("//input[@data-cy='drink1']").check();
await page.locator("//input[@data-cy='drink2']").check();
await page.locator("//input[@data-cy='drink3']").check();
await page.locator("//input[@data-cy='drink4']").check();
await page.locator("//input[@data-cy='drink5']").check();
await page.locator("//input[@data-cy='color1']").check();
await page.locator("//input[@data-cy='color2']").check();
await page.locator("//input[@data-cy='color3']").check();
await page.locator("//input[@data-cy='color4']").check();
await page.locator("//input[@data-cy='color5']").check();
});