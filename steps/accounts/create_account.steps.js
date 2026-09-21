import { LoginPage } from '../../src/pages/LoginPage.js';
import { Given, When, Then } from '../../src/fixtures/pageFixture.js';
import { expect } from '@playwright/test';



Given('User open a the CRM application', async ({ loginPage }) => {
  await loginPage.openURL("https://suite8demo.suiteondemand.com/#/Login")
});

When('User enters username and password', async ({ loginPage }) => {
  await loginPage.dologin('will' , 'will');
});

Then('User able to login successfully', async ({ page }) => {
  // Replace this pattern with your CRM's actual home page URL.
  await expect(page).toHaveURL("https://suite8demo.suiteondemand.com/#/home");
});

Given('User logged into the CRM application', async ({}) => {
  
});

When('User view the top navigation menu', async ({}) => {
  // Step: When User view the top navigation menu
  // From: features\Account.feature:8:5
});

Then('User should be redirected to Home page', async ({}) => {
  // Step: Then User should be redirected to Home page
  // From: features\Account.feature:9:5
});

Given('User Logged into CRM application', async ({}) => {
  // Step: Given User Logged into CRM application
  // From: features\Account.feature:13:5
});

When('user mouse hover the {string} tab', async ({}, arg) => {
  // Step: When user mouse hover the "Account" tab
  // From: features\Account.feature:14:5
});

Then('User should see create Account', async ({}) => {
  // Step: Then User should see create Account
  // From: features\Account.feature:15:5
});

Given('User Logged into CRM', async ({}) => {
  // Step: Given User Logged into CRM
  // From: features\Account.feature:19:5
});

Then('User should see view Accounts', async ({}) => {
  // Step: Then User should see view Accounts
  // From: features\Account.feature:21:5
});

Then('User should see view Accounts field', async ({}) => {
  // Step: Then User should see view Accounts field
  // From: features\Account.feature:27:5
});

Then('User should see import Account', async ({}) => {
  // Step: Then User should see import Account
  // From: features\Account.feature:33:5
});

Given('User signed in application and mouse hover {string}', async ({}, arg) => {
  // Step: Given User signed in application and mouse hover "Account"
  // From: features\Account.feature:37:5
});

When('user click create Account field', async ({}) => {
  // Step: When user click create Account field
  // From: features\Account.feature:38:5
});

Then('User should be redirected to Create Account page', async ({}) => {
  // Step: Then User should be redirected to Create Account page
  // From: features\Account.feature:39:5
});

Given('User logged in application and click the Create Account screen', async ({}) => {
  // Step: Given User logged in application and click the Create Account screen
  // From: features\Account.feature:43:5
});

Given('Create Account screen is open', async ({}) => {
  // Step: And Create Account screen is open
  // From: features\Account.feature:44:5
});

When('User inspect the form', async ({}) => {
  // Step: When User inspect the form
  // From: features\Account.feature:45:5
});

Then('User should see the Overview tab', async ({}) => {
  // Step: Then User should see the Overview tab
  // From: features\Account.feature:46:5
});

Then('User should see More Information', async ({}) => {
  // Step: And User should see More Information
  // From: features\Account.feature:47:5
});

Then('User should see Other tabs', async ({}) => {
  // Step: And User should see Other tabs
  // From: features\Account.feature:48:5
});

Then('User should see Name field', async ({}) => {
  // Step: And User should see Name field
  // From: features\Account.feature:49:5
});

Then('User should see Website field', async ({}) => {
  // Step: And User should see Website field
  // From: features\Account.feature:50:5
});

Then('User should see Office Phone', async ({}) => {
  // Step: And User should see Office Phone
  // From: features\Account.feature:51:5
});

Then('User should see Assigned To fields', async ({}) => {
  // Step: And User should see Assigned To fields
  // From: features\Account.feature:52:5
});

Then('User should see email', async ({}) => {
  // Step: And User should see email
  // From: features\Account.feature:53:5
});

Then('User should see billing address sections', async ({}) => {
  // Step: And User should see billing address sections
  // From: features\Account.feature:54:5
});

Then('User should see shipping address sections', async ({}) => {
  // Step: And User should see shipping address sections
  // From: features\Account.feature:55:5
});

Given('User land on create Account page', async ({}) => {
  // Step: Given User land on create Account page
  // From: features\Account.feature:59:5
});

When('User view the Name field label', async ({}) => {
  // Step: When User view the Name field label
  // From: features\Account.feature:60:5
});

Then('user should see asterisk {string} beside the Name label', async ({}, arg) => {
  // Step: Then user should see asterisk "*" beside the Name label
  // From: features\Account.feature:61:5
});

Given('name field is empty', async ({}) => {
  // Step: And name field is empty
  // From: features\Account.feature:67:5
});

When('User click Save', async ({}) => {
  // Step: When User click Save
  // From: features\Account.feature:68:5
});

Then('User should see {string}', async ({}, arg) => {
  // Step: Then User should see "Missing required field: Name"
  // From: features\Account.feature:69:5
});

Then('Name should be highlighted as invalid', async ({}) => {
  // Step: And Name should be highlighted as invalid
  // From: features\Account.feature:70:5
});

When('User enter only spaces in Name', async ({}) => {
  // Step: When User enter only spaces in Name
  // From: features\Account.feature:76:5
});

When('User enter a unique account name', async ({}) => {
  // Step: When User enter a unique account name
  // From: features\Account.feature:83:5
});

When('Leave optional fields empty', async ({}) => {
  // Step: And Leave optional fields empty
  // From: features\Account.feature:84:5
});

When('retain the default assignee', async ({}) => {
  // Step: And retain the default assignee
  // From: features\Account.feature:85:5
});

When('Click Save', async ({}) => {
  // Step: And Click Save
  // From: features\Account.feature:86:5
});

Then('Exactly one account should be created', async ({}) => {
  // Step: Then Exactly one account should be created
  // From: features\Account.feature:87:5
});

When('Pass unique value to all create account field', async ({}) => {
  // Step: When Pass unique value to all create account field
  // From: features\Account.feature:94:5
});

Then('All values should appear in their corresponding fields', async ({}) => {
  // Step: Then All values should appear in their corresponding fields
  // From: features\Account.feature:95:5
});

Given('the Create Account screen is open', async ({}) => {
  // Step: Given the Create Account screen is open
  // From: features\Account.feature:99:5
});

Given('the user has entered a unique account name', async ({}) => {
  // Step: And the user has entered a unique account name
  // From: features\Account.feature:100:5
});

Given('the user has entered {string} in the first email row', async ({}, arg) => {
  // Step: And the user has entered "primary@example.com" in the first email row
  // From: features\Account.feature:101:5
});

When('the user clicks the add email button', async ({}) => {
  // Step: When the user clicks the add email button
  // From: features\Account.feature:102:5
});

When('the user enters {string} in the new row', async ({}, arg) => {
  // Step: And the user enters "secondary@example.com" in the new row
  // From: features\Account.feature:103:5
});

When('the user clicks Save', async ({}) => {
  // Step: And the user clicks Save
  // From: features\Account.feature:104:5
});

When('the user reopens the account', async ({}) => {
  // Step: And the user reopens the account
  // From: features\Account.feature:105:5
});

Then('the first email row should contain {string}', async ({}, arg) => {
  // Step: Then the first email row should contain "primary@example.com"
  // From: features\Account.feature:106:5
});

Then('the second email row should contain {string}', async ({}, arg) => {
  // Step: Then the second email row should contain "secondary@example.com"
  // From: features\Account.feature:107:5
});

When('the user enters the billing address details', async ({}) => {
  // Step: When the user enters the billing address details
  // From: features\Account.feature:121:5
});

When('the user saves the account', async ({}) => {
  // Step: And the user saves the account
  // From: features\Account.feature:122:5
});

Then('the billing address values should match the entered values', async ({}) => {
  // Step: Then the billing address values should match the entered values
  // From: features\Account.feature:124:5
});

When('the user enters the following shipping address:', async ({}, dataTable) => {
  // Step: When the user enters the following shipping address:
  // From: features\Account.feature:130:5
});

Then('the shipping address should match the entered values', async ({}) => {
  // Step: Then the shipping address should match the entered values
  // From: features\Account.feature:139:5
});

Given('An account with the entered name already exists', async ({}) => {
  // Step: And An account with the entered name already exists
  // From: features\Account.feature:145:5
});

Given('Duplicate account names are prohibited', async ({}) => {
  // Step: And Duplicate account names are prohibited
  // From: features\Account.feature:146:5
});

When('User enter that existing account name', async ({}) => {
  // Step: When User enter that existing account name
  // From: features\Account.feature:147:5
});

Then('User should see a duplicate account validation message', async ({}) => {
  // Step: Then User should see a duplicate account validation message
  // From: features\Account.feature:149:5
});
