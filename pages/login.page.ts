import { Page, Locator } from '@playwright/test';

export class LoginPage {
  usernameInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;

  constructor(private page: Page) {
    this.usernameInput = this.page.locator('#username');
    this.passwordInput = this.page.locator('#password');
    this.loginButton = this.page.locator('button[type="submit"]');
  }

  async login(username: string,password: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
  }
  
  async goto(){
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }
}