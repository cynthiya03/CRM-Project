import { Given, When, Then, BeforeScenario } from '../../src/fixtures/pageFixture.js';
import { expect } from '@playwright/test';

Given('User Land on view Account page', async ({ page }) => {
  //await expect(page).toHaveURL(viewAccount_URL, { timeout: 15000 });
});

When('User view the account list', async ({ viewAccount }) => {
  await viewAccount.verifyVisible(viewAccount.accountlistTitle);
});

Then('User should see Name column be displayed', async ({ viewAccount }) => {
  await viewAccount.verifyVisible(viewAccount.name);
});

Then('City column should be displayed', async ({ viewAccount }) => {
  await viewAccount.verifyVisible(viewAccount.city);
});

Then('Billing Country column should be displayed', async ({ viewAccount }) => {
  await viewAccount.verifyVisible(viewAccount.billingCountry);
});

Then('Phone column should be displayed', async ({ viewAccount }) => {
  await viewAccount.verifyVisible(viewAccount.phone);
});

Then('User column should be displayed', async ({ viewAccount }) => {
  await viewAccount.verifyVisible(viewAccount.user);
});

Then('Email Address column should be displayed', async ({ viewAccount }) => {
  await viewAccount.verifyVisible(viewAccount.emailAddress);
});