import { Given, When, Then, BeforeScenario } from '../../src/fixtures/pageFixture.js';
import { expect } from '@playwright/test';

const accountField = (page, label) => page.getByLabel(label, { exact: false }).first();
const accountNameField = (page) => page.locator('input[name="name"], input[placeholder*="Name"]').first();
const saveButton = (page) => page.getByRole('button', { name: /^Save$/i }).first();

const createAccountName = () => `Playwright Account ${Date.now()}`;

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

Given('User land on create Account page', async ({ homePage }) => {
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

Then('user should see asterisk {string} beside the Name label', async ({ createAccount }, message) => {
	createAccount.verifyVisible(createAccount.namemandatory);
});
// completed- working

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

Then('Name should be highlighted as invalid', async ({ createAccount }) => {
	await expect(createAccount.nameField).toHaveCSS(
  'border-color',
  'rgb(220, 53, 69)'
);
});
// Tc008
When('User enter only spaces in Name', async ({ createAccount }) => {
	await (createAccount.fillField(createAccount.nameField, '    '))
    
});

//Then('User should see {string}', async ({ createAccount }) => {
	//await createAccount.verifyVisible(createAccount.errorMessage);
//});

// TC009

//When('User enter a unique account name', async ({ createAccount }) => {
	//await createAccount.EnteruniqueName();

///});
When('Leave optional fields empty', async () => {});

When('Click Save', async ({ createAccount }) => {
	await createAccount.clickSaveButton();
});

Then('Exactly one account should be created', async ({ page }) => {
	await expect(page.locator('.dynamic-label')).toHaveCount(1);
});

// TC010
//When('User enter a unique account name', async ({ createAccount }) => {
	//await createAccount.EnteruniqueName();
//});


When('User fills in the account form with the following details:', async ({ createAccount }, dataTable) => {
  const formData = dataTable.rowsHash();
  await createAccount.fillAccountForm(formData);
});

Then('All values should appear in their corresponding fields', async ({ page }) => {
	
});

//
Given('the user has entered a unique account name', async ({ page }) => {
	const accountName = createAccountName();
	page.__accountName = accountName;
	await accountNameField(page).fill(accountName);
});

Given('the user has entered {string} in the first email row', async ({ page }, email) => {
	await page.locator('input[type="email"]').first().fill(email);
});

When('the user clicks the add email button', async ({ page }) => {
	await page.getByRole('button', { name: /add email/i }).click();
});

When('the user enters {string} in the new row', async ({ page }, email) => {
	await page.locator('input[type="email"]').last().fill(email);
});

When('the user clicks Save', async ({ page }) => {
	await saveButton(page).click();
});

When('the user reopens the account', async ({ page }) => {
	await page.getByText(page.__accountName, { exact: true }).first().click();
});

Then('the first email row should contain {string}', async ({ page }, email) => {
	await expect(page.locator('input[type="email"]').first()).toHaveValue(email);
});

Then('the second email row should contain {string}', async ({ page }, email) => {
	await expect(page.locator('input[type="email"]').nth(1)).toHaveValue(email);
});

When('the user enters the billing address details', async ({ page }) => {
	await accountField(page, 'Street').first().fill('123 Main Street');
	await accountField(page, 'City').first().fill('Boston');
	await accountField(page, 'State').first().fill('Massachusetts');
	await accountField(page, 'Postal Code').first().fill('02108');
	await accountField(page, 'Country').first().fill('United States');
});

When('the user saves the account', async ({ page }) => {
	await saveButton(page).click();
});

Then('the billing address values should match the entered values', async ({ page }) => {
	await expect(accountField(page, 'Street').first()).toHaveValue('123 Main Street');
	await expect(accountField(page, 'City').first()).toHaveValue('Boston');
});

When('the user enters the following shipping address:', async ({ page }, dataTable) => {
	for (const row of dataTable.hashes()) {
		await accountField(page, row.Field).last().fill(row.Value);
	}
});

Then('the shipping address should match the entered values', async ({ page }) => {
	await expect(accountField(page, 'Street').last()).toHaveValue('123 Main Street');
	await expect(accountField(page, 'City').last()).toHaveValue('Boston');
});

Given('An account with the entered name already exists', async ({ page }) => {
	await accountNameField(page).fill('Existing Account');
});

Given('Duplicate account names are prohibited', async ({ page }) => {
	await expect(page.getByText(/duplicate|unique/i).first()).toBeAttached();
});

When('User enter that existing account name', async ({ page }) => {
	await accountNameField(page).fill('Existing Account');
});

Then('User should see a duplicate account validation message', async ({ page }) => {
	await expect(page.getByText(/already exists|duplicate|unique/i).first()).toBeVisible();
});


Given('Create Account screen is open', async ({}) => {
  // Step: And Create Account screen is open
  // From: features\accounts\create_account.feature:64:5
});

Given('the Create Account screen is open', async ({}) => {
  // Step: Given the Create Account screen is open
  // From: features\accounts\create_account.feature:88:5
});
