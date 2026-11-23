import { test, expect } from '@playwright/test';
import { PlayPenLogin } from '../pages/PlayPen';

test('Can log in successfully', async ({ page }) => {
   const loginPage = new PlayPenLogin(page);
   await loginPage.goto();
   await loginPage.SignIN('test@demo.com', 'demo1234');
   await page.waitForTimeout(3000);
});

test('Cannot login with wrong password ', async ({ page }) => {
   const loginPage = new PlayPenLogin(page);
   await loginPage.goto();
   await loginPage.SignIN('test@demo.com', 'wrongPassword')
   await expect(page).toHaveURL(/login/i);
});

test ('Cannot login with wrong email', async ({ page }) => {
   const loginPage = new PlayPenLogin(page);
   await loginPage.goto();
   await loginPage.SignIN('tester@wrong.com','Demo1234');
   await expect(page).toHaveURL(/login/i);
});

test ('Cannot login with empty fields', async ({ page }) => {
   const loginPage = new PlayPenLogin(page);
   await loginPage.goto();
   await loginPage.SignIN('','');
   await expect(page).toHaveURL(/login/i);
   

});