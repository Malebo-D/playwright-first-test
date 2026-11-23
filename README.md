# Playwright POM Practice

Practicing Playwright with Page Object Model (POM) in TypeScript.

## Projects Covered

### 1. SauceDemo - Login (Working ✅)
Site: https://www.saucedemo.com
- POM file: `pages/saucedemo.page.ts`
- Tests: `tests/saucedemo.spec.ts`
- Tests:
    - Valid login succeeds -> lands on inventory page
    - Wrong password shows "Username and password do not match"
    - Locked out user shows "locked out" error
- Run: `npx playwright test tests/saucedemo.spec.ts --project=chromium`
- Result: **3 passed**

### 2. Happy PlayPen - Login
Site: https://happy-playpen.lovable.app/login
- POM file: `pages/PlayPen.ts`
- Tests: `tests/playpen.spec.ts`
- POM: `PlayPenLogin` class with `goto()` + `SignIN(email, password)`
- Locators:
    - Email: `#email`
    - Password: `#password`
    - Sign In Button: `button[type=submit]`
- Tests:
    - Can log in successfully with `test@demo.com` / `demo1234`
    - Cannot login with wrong password -> stays on `/login`
    - Cannot login with wrong email -> stays on `/login`
    - Cannot login with empty fields -> stays on `/login`
- Run: `npx playwright test tests/playpen.spec.ts --project=chromium`

### 3. Herokuapp - Login (Blocked by Trellix ⚠️)
Site: https://the-internet.herokuapp.com/login
- POM file: `pages/login.page.ts`
- Tests: `tests/login.spec.ts`
- Code is correct, but site is blocked by Trellix in this environment.

## How to Run
```bash
npm install
npx playwright install chromium
npx playwright test --project=chromium