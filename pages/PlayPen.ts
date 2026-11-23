import { Page, Locator } from "@playwright/test";

export class PlayPenLogin{
    EmailInput : Locator;
    PasswordIput: Locator;
    SignInButton: Locator;

    constructor (private page : Page){

        this.EmailInput = this.page.locator('#email');
        this.PasswordIput = this.page.locator('#password');
        this.SignInButton = this.page.locator('button[type=submit]');
    }

    async SignIN (email: string, password: string) {
        await this.EmailInput.fill(email);
        await this.PasswordIput.fill(password);
        await this.SignInButton.click();

    }

    async goto(){
        await this.page.goto('https://happy-playpen.lovable.app/login');
    }
} 
