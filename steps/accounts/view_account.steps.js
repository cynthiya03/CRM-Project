import { Given, When, Then, BeforeScenario } from '../../src/fixtures/pageFixture.js';


Given('User Land on view Account page', async ({ page }) => {
  //await expect(page).toHaveURL(viewAccount_URL, { timeout: 15000 });
});

When('User view the account list', async ({ viewAccount, logger  }) => {
  await viewAccount.verifyVisible(viewAccount.accountlistTitle);
  logger.info('Account list is visible');
});

Then('User should see Name column be displayed', async ({ viewAccount, logger}) => {
  await viewAccount.verifyVisible(viewAccount.name);
  logger.info('Name column is visible');
});

Then('City column should be displayed', async ({ viewAccount, logger  }) => {
  await viewAccount.verifyVisible(viewAccount.city);
  logger.info('City column is visible');
});

Then('Billing Country column should be displayed', async ({ viewAccount, logger }) => {
  await viewAccount.verifyVisible(viewAccount.billingCountry);
  logger.info('Billing Country column is visible');
});

Then('Phone column should be displayed', async ({ viewAccount,logger  }) => {
  await viewAccount.verifyVisible(viewAccount.phone);
  logger.info('Phone column is visible');
});

Then('User column should be displayed', async ({ viewAccount,logger  }) => {
  await viewAccount.verifyVisible(viewAccount.user);
  logger.info('User column is visible');
});

Then('Email Address column should be displayed', async ({ viewAccount,logger  }) => {
  await viewAccount.verifyVisible(viewAccount.emailAddress);
  logger.info('Email Address column is visible');
});