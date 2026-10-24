import { test, expect } from '@playwright/test';

test('TC005_codegen', async ({ page }, testInfo) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('[data-test="username"]')).toBeVisible();
  await expect(page.locator('[data-test="password"]')).toBeVisible();
  await expect(page.locator('#root')).toContainText('Swag Labs');
  const screenshot1 = await page.screenshot();
  await testInfo.attach('screenshot1', { body: screenshot1, contentType: 'image/png' });
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="password"]').press('Tab');
  const screenshot2 = await page.screenshot();
  await testInfo.attach('screenshot2', { body: screenshot2, contentType: 'image/png' });
  await page.locator('[data-test="login-button"]').click();
  const screenshot3 = await page.screenshot();
  await testInfo.attach('screenshot3', { body: screenshot3, contentType: 'image/png' });
});