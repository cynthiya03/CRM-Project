import { expect } from '@playwright/test';
import { Given, When, Then } from '../../src/fixtures/pageFixture.js';
import { readLoginData } from '../src/utils/loginData.js';


Given('User opens the CRM login page', async ({ page, loginPage }) => {
  if (!process.env.BASE_URL) {
    throw new Error('Set BASE_URL to the CRM login URL.');
  }

  await page.goto(process.env.BASE_URL);
  await expect(loginPage.username).toBeVisible();
  await expect(loginPage.password).toBeVisible();
});

When(
  'User submits login credentials from Excel for {string}',
  async ({ loginPage }, testCase) => {
    const data = await readLoginData(testCase);
    // Blank Excel cells become empty strings, not undefined.
    await loginPage.dologin(data.username, data.password);
  },
);

Then(
  'User should see the Excel login result for {string}',
  async ({ page, loginPage }, testCase) => {
    const data = await readLoginData(testCase);

    // Assumes expected contains a unique, visible text message.
    // Scope this locator to your CRM's message container if necessary.
    await expect(page.getByText(data.expected, { exact: true })).toBeVisible();

    if (testCase !== 'TC001_valid_login') {
      await expect(loginPage.username).toBeVisible();
      await expect(loginPage.password).toBeVisible();
      await expect(loginPage.loginButton).toBeVisible();
    }
  },
);