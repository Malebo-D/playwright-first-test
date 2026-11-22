import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('can log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});