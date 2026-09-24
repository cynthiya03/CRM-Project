import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage.js';

setup('Authenticate CRM user', async ({ page, browserName }) => {
  const username = process.env.TEST_USERNAME;
  const password = process.env.TEST_PASSWORD;
  const baseURL = process.env.BASE_URL;

  if (!username || !password || !baseURL) {
    throw new Error('Set TEST_USERNAME, TEST_PASSWORD, and BASE_URL.');
  }

  const loginPage = new LoginPage(page);

  await page.goto(baseURL);
  await loginPage.dologin(username, password);

  // Replace with your CRM's actual home URL pattern.
  await expect(page).toHaveURL(/\/home\/?$/);

  await page.context().storageState({
    path: `playwright/.auth/${browserName}.json`,
  });
});