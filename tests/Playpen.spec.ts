import { test, expect } from '@playwright/test';
import { PlayPenLogin } from '../pages/PlayPen';

test('Can log in successfully', async ({ page }) => {
   const loginPage = new PlayPenLogin(page);
   await loginPage.goto();
   await loginPage.SignIN('test@demo.com', 'demo1234');
   
 
   await page.waitForTimeout(3000);
});