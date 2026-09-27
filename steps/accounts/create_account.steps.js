import { Given, When, Then, BeforeScenario } from '../../src/fixtures/pageFixture.js';
import { expect } from '@playwright/test';

//const accountField = (page, label) => page.getByLabel(label, { exact: false }).first();
//const accountNameField = (page) => page.locator('input[name="name"], input[placeholder*="Name"]').first();
//const saveButton = (page) => page.getByRole('button', { name: /^Save$/i }).first();

//const createAccountName = () => `Playwright Account ${Date.now()}`;

// @TC001, @TC002, @TC003, @TC004 - @AccountfieldisDisplayed
Given('User Logged into CRM application', async ({ page }) => {
  //await page.goto(process.env.ACCOUNTS_URL);
});

When('user click the Accounts tab', async ({ homePage }) => {
  await homePage.accountclick();
});

Then('User should see create Account field', async ({ homePage }) => {
  await expect(homePage.create_accounts).toBeVisible();
});
//002
Then('User should see view Accounts field', async ({ homePage }) => {
  await expect(homePage.view_accounts).toBeVisible();
});

Then('User should see import Account', async ({ homePage }) => {
  await expect(homePage.import_accounts).toBeVisible();
});

// @TC004 - @AccountfieldisDisplayed

When('user click create Account field', async ({ homePage }) => {
  await (homePage.accountclick());
	await (homePage.create_accounts).click();
});

Then('User should be redirected to Create Account page', async ({ homePage }) => {
	await expect(homePage.createAccountTitle).toBeVisible();
	
});

// TC005 - @createaccountscreen

Given('User land on create Account page', async ({  }) => {

});


When('User inspect the form', async ({ createAccount }) => {
	await createAccount.verifyVisible(createAccount.createAccountTitle);
});

Then('User should see the Overview tab', async ({ createAccount }) => {
	await createAccount.verifyVisible(createAccount.overviewTab);
});

Then('User should see More Information', async ({ createAccount }) => {
	await createAccount.verifyVisible(createAccount.moreInformationTab);
});

Then('User should see Other tabs', async ({ createAccount }) => {
	await createAccount.verifyVisible(createAccount.othersTab);
});

Then('User should see Name field', async ({ createAccount }) => {
	await createAccount.verifyVisible(createAccount.nameField);
});

Then('User should see Website field', async ({ createAccount }) => {
	await createAccount.verifyVisible(createAccount.website);
});

Then('User should see Office Phone', async ({ createAccount }) => {
	await createAccount.verifyVisible(createAccount.officePhone);
});

Then('User should see Assigned To fields', async ({ createAccount }) => {
	await createAccount.verifyVisible(createAccount.assignedTo);
});

Then('User should see email', async ({ createAccount }) => {
	await createAccount.verifyVisible(createAccount.email);
});

Then('User should see billing address sections', async ({ createAccount }) => {
	await createAccount.verifyVisible(createAccount.BillingStreet);
});

Then('User should see shipping address sections', async ({ createAccount }) => {
	await createAccount.verifyVisible(createAccount.ShippingStreet);
});

// @TC006 - @Verifymandatoryfieldsdisplayanasterisk

When('User view the Name field label', async ({ createAccount }) => {
	await createAccount.verifyVisible(createAccount.nameField);
});

Then('user should see {string} beside the Name label', async ({ createAccount }, expectedSymbol) => {
	await createAccount.verifyVisible(createAccount.namemandatory);
  await expect(createAccount.namemandatory).toHaveText(expectedSymbol);
});


// 007
Given('name field is empty', async ({ createAccount }) => {
	await (createAccount.nameField).fill('');
});

When('User click Save', async ({ createAccount }) => {
	await createAccount.clickSaveButton();
});

Then('User should see {string}', async ({ createAccount }, expectedMessage) => {
  await expect(createAccount.errorMessage).toBeVisible();
  await expect(createAccount.errorMessage).toHaveText(expectedMessage);
});

Then('user should see the error message {string}', async ({ createAccount }, expectedMessage) => {
	await expect(createAccount.errorMessage).toBeVisible();
	await expect(createAccount.errorMessage).toHaveText(expectedMessage);
});

Then('Name should be highlighted as invalid', async ({ createAccount }) => {
	await expect(createAccount.nameField).toHaveCSS(
  'border-color',
  'rgb(220, 53, 69)'
);
});


When('User enter only spaces in Name', async ({ createAccount }) => {
	await (createAccount.fillField(createAccount.nameField,'    '))
    
});

// TC009

When('User enter a unique account name', async ({ createAccount }) => {
	await createAccount.EnteruniqueName();
});

When('User saves the account', async ({ createAccount }) => {
	await createAccount.clickSaveButton();
});

When('User returns to the accounts list', async ({ createAccount }) => {
  await createAccount.returnToAccountsList();
});

Then('Exactly one account should be created', async ({ createAccount }) => {
  const account = createAccount.accountNameText(
  createAccount.createdAccountName,
);
await expect(account).toBeVisible();
});

// TC010

When('User fills in the account form with the following details:', async ({ createAccount }, dataTable) => {
  	//await createAccount.EnteruniqueName();
  const formData = dataTable.rowsHash();
  await createAccount.fillAccountForm(formData);
});

When('User submits the account creation form', async ({ createAccount }) => {
	await createAccount.clickSaveButton();
});

Then('User should see the account created successfully', async ({ createAccount, viewAccount }) => {
	await createAccount.verifySavedAccount(
    createAccount.createdAccountName,
  );

});
