import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();  

Given('User land on Home page', async ({}) => {
  // Step: Given User land on Home page
  // From: features\viewcontact.feature:6:4
});

Then('the user should see Import Contact', async ({}) => {
  // Step: Then the user should see Import Contact
  // From: features\viewcontact.feature:8:5
});

When('the user clicks View Contacts', async ({}) => {
  // Step: When the user clicks View Contacts
  // From: features\viewcontact.feature:13:5
});

Then('the user should be redirected to the Contact List page', async ({}) => {
  // Step: Then the user should be redirected to the Contact List page
  // From: features\viewcontact.feature:14:5
});

Given('the user is on the Contact List page', async ({}) => {
  // Step: Given the user is on the Contact List page
  // From: features\viewcontact.feature:18:5
});

When('the user views the contact list toolbar', async ({}) => {
  // Step: When the user views the contact list toolbar
  // From: features\viewcontact.feature:19:5
});

Then('the select-all checkbox should be displayed', async ({}) => {
  // Step: Then the select-all checkbox should be displayed
  // From: features\viewcontact.feature:20:5
});

Then('the Bulk Action dropdown should be displayed', async ({}) => {
  // Step: Then the Bulk Action dropdown should be displayed
  // From: features\viewcontact.feature:21:5
});

Then('the Filter button should be displayed', async ({}) => {
  // Step: Then the Filter button should be displayed
  // From: features\viewcontact.feature:22:5
});

Then('the Column button should be displayed', async ({}) => {
  // Step: Then the Column button should be displayed
  // From: features\viewcontact.feature:23:5
});

Then('the pagination controls should be displayed', async ({}) => {
  // Step: Then the pagination controls should be displayed
  // From: features\viewcontact.feature:24:5
});