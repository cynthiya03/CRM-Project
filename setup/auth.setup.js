import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage.js';

setup('Authenticate CRM user', async ({ page }) => {
  const username = process.env.TEST_USERNAME;
  const password = process.env.TEST_PASSWORD;
  const baseURL = process.env.BASE_URL;

  const loginPage = new LoginPage(page);

  
  //await page.goto(baseURL);
  await loginPage.openURL(baseURL)
  await loginPage.dologin(username, password);

await expect(page).toHaveURL(/\/home\/?$/);

  await page.context().storageState({
    path: 'playwright/.auth/userdata.json',
  });
});