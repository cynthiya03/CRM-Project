import { createBdd } from "playwright-bdd";
const{ Given,When, Then } = createBdd();

When('User clicks the Leads section', async ({}) => {
  // Step: When User clicks the Leads section
  // From: features/leads.feature:10:3
});

Then('User should see the leads landing page', async ({}) => {
  // Step: Then User should see the leads landing page
  // From: features/leads.feature:11:3
});

Given('User is on the leads page', async ({}) => {
  // Step: Given User is on the leads page
  // From: features/leads.feature:15:3
});

When('User clicks create lead button from dropdown', async ({}) => {
  // Step: When User clicks create lead button from dropdown
  // From: features/leads.feature:16:3
});

Then('User should see the new leads form where the user can enter details', async ({}) => {
  // Step: Then User should see the new leads form where the user can enter details
  // From: features/leads.feature:17:3
});

Then('User should see overview, more information and other information options', async ({}) => {
  // Step: Then User should see overview, more information and other information options
  // From: features/leads.feature:23:3
});

Given('User is on the Create leads page', async ({}) => {
  // Step: Given User is on the Create leads page
  // From: features/leads.feature:27:3
});

When('User clicks overview', async ({}) => {
  // Step: When User clicks overview
  // From: features/leads.feature:28:3
});

Then('User should see first name,last name,job title,department,account name,primary address and email address fields', async ({}) => {
  // Step: Then User should see first name,last name,job title,department,account name,primary address and email address fields
  // From: features/leads.feature:29:3
});

Then('User should see email opt out option,description box,whose assigned,mobile and office phone fields,website field', async ({}) => {
  // Step: Then User should see email opt out option,description box,whose assigned,mobile and office phone fields,website field
  // From: features/leads.feature:30:3
});
When('User enters valid details on the form', async ({}) => {
  // Step: When User enters valid details on the form
  // From: features/leads.feature:35:3
});

Then('New lead should be created successfully', async ({}) => {
  // Step: Then New lead should be created successfully
  // From: features/leads.feature:36:3
});

When('user leaves any manadatory fields blank and clicks save button', async ({}) => {
  // Step: When user leaves any manadatory fields blank and clicks save button
  // From: features/leads.feature:41:3
});

Then('user should see the error msg {string}', async ({}, arg) => {
  // Step: Then user should see the error msg " missing required field"
  // From: features/leads.feature:42:3
});

When('user lands on Create Lead by Vcard', async ({}) => {
  // Step: When user lands on Create Lead by Vcard
  // From: features/leads.feature:48:3
});

Then('user should see import V card', async ({}) => {
  // Step: Then user should see import V card
  // From: features/leads.feature:49:3
});

Given('User is on the create lead from Vcard page', async ({}) => {
  // Step: Given User is on the create lead from Vcard page
  // From: features/leads.feature:53:3
});

When('user clicks choose file option', async ({}) => {
  // Step: When user clicks choose file option
  // From: features/leads.feature:54:3
});

Then('File can be imported', async ({}) => {
  // Step: Then File can be imported
  // From: features/leads.feature:55:3
});

Given('user is on the leads page', async ({}) => {
  // Step: Given user is on the leads page
  // From: features/leads.feature:59:3
});
When('user selects view leads from dropdown', async ({}) => {
  // Step: When user selects view leads from dropdown
  // From: features/leads.feature:60:3
});

Then('user should land on viewleads page', async ({}) => {
  // Step: Then user should land on viewleads page
  // From: features/leads.feature:61:3
});

Given('user is on the view leads page', async ({}) => {
  // Step: Given user is on the view leads page
  // From: features/leads.feature:65:3
});

When('user sees information on the view leads page', async ({}) => {
  // Step: When user sees information on the view leads page
  // From: features/leads.feature:66:3
});

Then('user should see name,status,account,phone,email and user details', async ({}) => {
  // Step: Then user should see name,status,account,phone,email and user details
  // From: features/leads.feature:67:3
});

When('user clicks on any name on view leads page', async ({}) => {
  // Step: When user clicks on any name on view leads page
  // From: features/leads.feature:72:3
});

Then('user should see the information for that particular name', async ({}) => {
  // Step: Then user should see the information for that particular name
  // From: features/leads.feature:73:3
});

When('user selects import leads from dropdown', async ({}) => {
  // Step: When user selects import leads from dropdown
  // From: features/leads.feature:78:3
});

Then('user should redirected to that particular page', async ({}) => {
  // Step: Then user should redirected to that particular page
  // From: features/leads.feature:79:3
});

When('user lands on import leads page', async ({}) => {
  // Step: When user lands on import leads page
  // From: features/leads.feature:84:3
});
Then('user should see steps for import file', async ({}) => {
  // Step: Then user should see steps for import file
  // From: features/leads.feature:85:3
});
