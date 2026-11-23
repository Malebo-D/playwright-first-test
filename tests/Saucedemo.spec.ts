import { test, expect } from '@playwright/test';
import { SauceDemoPage } from '../pages/Saucedemo.page';

test.describe('SauceDemo Login - POM', () => {
  test('valid login succeeds', async ({ page }) => {
    const loginPage = new SauceDemoPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/.*inventory/);
  });

  test('login fails with wrong password', async ({ page }) => {
    const loginPage = new SauceDemoPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'wrongpassword');
    await expect(loginPage.errorMessage).toContainText('Username and password do not match');
  });

  test('locked out user shows error', async ({ page }) => {
    const loginPage = new SauceDemoPage(page);
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await expect(loginPage.errorMessage).toContainText('locked out');
  });
});