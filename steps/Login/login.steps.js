import { expect } from '@playwright/test';
import { Given, When, Then } from '../../src/fixtures/pageFixture.js';
import { ExcelHelper } from '../../src/utils/ExcelHelper.js';


Given('User opens the CRM login page', async ({ page, loginPage }) => {
  if (!process.env.BASE_URL) {
    throw new Error('Set BASE_URL to the CRM login URL.');
  }

  await page.goto(process.env.BASE_URL);
  await expect(loginPage.username).toBeVisible();
  await expect(loginPage.password).toBeVisible();
  await expect(loginPage.loginButton).toBeVisible();
});

When(
  'User submits login credentials from Excel for {string}',
  async ({ loginPage }, testCase) => {
    const filePath =
      process.env.LOGIN_DATA_FILE || 'Data/login.xlsx';

    const data = ExcelHelper.getRow(
      filePath,
      'LoginTestData',
      'testCase',
      testCase
    );

    await loginPage.dologin(data.username, data.password);
  },
);

Then(
  'User should see the Excel login result for {string}',
  async ({ page, loginPage }, testCase) => {
    const filePath =
      process.env.LOGIN_DATA_FILE || 'Data/login.xlsx';
    const data = ExcelHelper.getRow(
      filePath,
      'LoginTestData',
      'testCase',
      testCase,
    );

    if (testCase === 'TC001_valid_login') {
      await expect(page).toHaveURL(/#\/home/);
      return;
    }

    if (
  testCase === 'TC002_invalid_password' ||
  testCase === 'TC003_invalid_username'
) {
  const errorAlert = page.locator('.alert.alert-danger');

  await expect(errorAlert).toBeVisible();
  await expect(errorAlert).toContainText(data.expected);

  return;
}

    if (
      testCase === 'TC004_empty_username' ||
      testCase === 'TC005_empty_password'
    ) {
      const errorAlert1 = page.getByText('Missing required field', { exact: true })
      await expect(errorAlert1).toBeVisible();
      await expect(errorAlert1).toContainText(data.expected);
      return;
    }
    // checks login form visible after unsuccessful login attempt
    if (testCase !== 'TC001_valid_login') {
      await expect(loginPage.username).toBeVisible();
      await expect(loginPage.password).toBeVisible();
      await expect(loginPage.loginButton).toBeVisible();
    }
  },
);
