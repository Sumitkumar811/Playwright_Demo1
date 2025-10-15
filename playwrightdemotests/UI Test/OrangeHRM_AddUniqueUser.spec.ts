import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('heading', { name: 'Dashboard' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await expect(page.getByRole('heading', { name: 'Add User' })).toBeVisible();
  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('a');
  await page.waitForTimeout(3000)
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  //await page.getByText('A8DCo 4Ys 010Z').click();
await page.pause
  const ExpUserName = 'sk' + Math.random() * 100;
 
  await page.getByRole('textbox').nth(2).fill(ExpUserName);
  await page.getByRole('textbox').nth(3).fill('sk12345');
  await page.getByRole('textbox').nth(4).fill('sk12345');
  await page.getByRole('button', { name: 'Save' }).click();
  //await page.waitForTimeout(5000)
   await page.waitForSelector(".orangehrm-container");
  await expect(page.locator(".orangehrm-container")).toHaveText(ExpUserName);


});
