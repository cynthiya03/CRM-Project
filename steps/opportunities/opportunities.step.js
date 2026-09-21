import { createBdd } from "playwright-bdd";
const{ Given,When, Then } = createBdd();

Given('User must have logged into the crm application', async ({}) => {
  // Step: Given User must have logged into the crm application
  // From: features/opportunities.feature:5:5
});

Given('User is on the CRM home page', async ({}) => {
  // Step: Given User is on the CRM home page
  // From: features/opportunities.feature:9:5
});

When('User clicks the opportunities section', async ({}) => {
  // Step: When User clicks the opportunities section
  // From: features/opportunities.feature:10:5
});

Then('User should see the opportunities landing page', async ({}) => {
  // Step: Then User should see the opportunities landing page
  // From: features/opportunities.feature:11:5
});

Given('User is on the opportunities page', async ({}) => {
  // Step: Given User is on the opportunities page
  // From: features/opportunities.feature:15:5
});

When('User clicks create opportunities button from dropdown', async ({}) => {
  // Step: When User clicks create opportunities button from dropdown
  // From: features/opportunities.feature:16:5
});

Then('User should see the new opportunities form where the user can enter details', async ({}) => {
  // Step: Then User should see the new opportunities form where the user can enter details
  // From: features/opportunities.feature:17:5
});

When('User enters valid details on the form including Opportunity name, account name , amount and selects one sales stage and closing date and click save button', async ({}) => {
  // Step: When User enters valid details on the form including Opportunity name, account name , amount and selects one sales stage andclosing date and click save button
  // From: features/opportunities.feature:22:5
});

Then('New Opportunity should be created successfully', async ({}) => {
  // Step: Then New Opportunity should be created successfully
  // From: features/opportunities.feature:23:5
});

Given('User is on the create opportunities page', async ({}) => {
  // Step: Given User is on the create opportunities page
  // From: features/opportunities.feature:27:5
});
When('User missed to enter mandatory information and clicks save', async ({}) => {
  // Step: When User missed to enter mandatory information and clicks save
  // From: features/opportunities.feature:28:5
});

Then('It throws validation error {string}', async ({}, arg) => {
  // Step: Then It throws validation error "unable to perform action"
  // From: features/opportunities.feature:29:5
});

Given('user is on the opportunities page', async ({}) => {
  // Step: Given user is on the opportunities page
  // From: features/opportunities.feature:33:5
});

When('user selects view opportunities', async ({}) => {
  // Step: When user selects view opportunities
  // From: features/opportunities.feature:34:5
});

Then('user should see the list of opportunities', async ({}) => {
  // Step: Then user should see the list of opportunities
  // From: features/opportunities.feature:35:5
});

Given('user is on the view opportunities page', async ({}) => {
  // Step: Given user is on the view opportunities page
  // From: features/opportunities.feature:39:5
});

When('user clicks any opportunity name on the list', async ({}) => {
  // Step: When user clicks any opportunity name on the list
  // From: features/opportunities.feature:40:5
});

Then('user should able to see all the details under that name', async ({}) => {
  // Step: Then user should able to see all the details under that name
  // From: features/opportunities.feature:41:5
});

When('user clicks any opportunity account name on the list', async ({}) => {
  // Step: When user clicks any opportunity account name on the list
  // From: features/opportunities.feature:46:5
});

Then('user should able to see all the details under that account name', async ({}) => {
  // Step: Then user should able to see all the details under that account name
  // From: features/opportunities.feature:47:5
});
When('user clicks import opportunities', async ({}) => {
  // Step: When user clicks import opportunities
  // From: features/opportunities.feature:52:5
});

Then('user should see choose file to import option', async ({}) => {
  // Step: Then user should see choose file to import option
  // From: features/opportunities.feature:53:5
});

Given('user is on the import opportunities page', async ({}) => {
  // Step: Given user is on the import opportunities page
  // From: features/opportunities.feature:57:5
});

When('user clicks choose file', async ({}) => {
  // Step: When user clicks choose file
  // From: features/opportunities.feature:58:5
});

Then('user should be redirected to choose file from their system', async ({}) => {
  // Step: Then user should be redirected to choose file from their system
  // From: features/opportunities.feature:59:5
});

When('user clicks next', async ({}) => {
  // Step: When user clicks next
  // From: features/opportunities.feature:64:5
});

Then('It throws an error that {string}', async ({}, arg) => {
  // Step: Then It throws an error that 'no file chosen'
  // From: features/opportunities.feature:65:5
});
