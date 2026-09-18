import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();  

Given('the user is logged in to the CRM application', async ({}) => {
  // Step: Given the user is logged in to the CRM application
  // From: features\contact.feature:6:5
});

Then('the user should see Create Contact', async ({}) => {
  // Step: Then the user should see Create Contact
  // From: features\contact.feature:11:5
});

When('the user clicks Create Contact', async ({}) => {
  // Step: When the user clicks Create Contact
  // From: features\contact.feature:16:5
});

Then('the user should be redirected to the Create Contact page', async ({}) => {
  // Step: Then the user should be redirected to the Create Contact page
  // From: features\contact.feature:17:5
});

Given('the Create Contact page is open', async ({}) => {
  // Step: Given the Create Contact page is open
  // From: features\contact.feature:22:5
});

When('the user inspects the form', async ({}) => {
  // Step: When the user inspects the form
  // From: features\contact.feature:23:5
});

Then('the user should see the Overview tab', async ({}) => {
  // Step: Then the user should see the Overview tab
  // From: features\contact.feature:24:5
});

Then('the user should see More Information', async ({}) => {
  // Step: Then the user should see More Information
  // From: features\contact.feature:25:5
});

Then('the user should see Other tabs', async ({}) => {
  // Step: Then the user should see Other tabs
  // From: features\contact.feature:26:5
});

When('the user views the Last Name field label', async ({}) => {
  // Step: When the user views the Last Name field label
  // From: features\contact.feature:32:5
});

Then('the user should see an asterisk {string} beside the Name label', async ({}, arg) => {
  // Step: Then the user should see an asterisk "*" beside the Name label
  // From: features\contact.feature:33:5
});

Given('the Last Name field is empty', async ({}) => {
  // Step: And the Last Name field is empty
  // From: features\contact.feature:39:5
});

Then('the user should see {string}', async ({}, arg) => {
  // Step: Then the user should see "Missing required field: Last Name"
  // From: features\contact.feature:41:5
});

Then('the Last Name field should be highlighted as invalid', async ({}) => {
  // Step: Then the Last Name field should be highlighted as invalid
  // From: features\contact.feature:42:5
});

When('the user enters a unique last name', async ({}) => {
  // Step: When the user enters a unique last name
  // From: features\contact.feature:48:5
});

When('the user leaves optional fields empty', async ({}) => {
  // Step: And the user leaves optional fields empty
  // From: features\contact.feature:49:5
});

When('the user retains the default assignee', async ({}) => {
  // Step: And the user retains the default assignee
  // From: features\contact.feature:50:5
});

Then('exactly one contact should be created', async ({}) => {
  // Step: Then exactly one contact should be created
  // From: features\contact.feature:52:5
});

Then('the entered name and default assignee should be retained', async ({}) => {
  // Step: Then the entered name and default assignee should be retained
  // From: features\contact.feature:53:5
});

When('the user enters a unique value in every visible contact creation field', async ({}) => {
  // Step: When the user enters a unique value in every visible contact creation field
  // From: features\contact.feature:59:5
});

Then('all values should appear in their corresponding fields', async ({}) => {
  // Step: Then all values should appear in their corresponding fields
  // From: features\contact.feature:60:5
});

When('the user changes Assigned To from the default assignee to administrator', async ({}) => {
  // Step: When the user changes Assigned To from the default assignee to administrator
  // From: features\contact.feature:66:5
});

Then('the user should be able to select administrator as the assignee', async ({}) => {
  // Step: Then the user should be able to select administrator as the assignee
  // From: features\contact.feature:67:5
});

Given('the user has entered a unique last name', async ({}) => {
  // Step: And the user has entered a unique last name
  // From: features\contact.feature:73:5
});

When('the Primary field is unselected', async ({}) => {
  // Step: When the Primary field is unselected
  // From: features\contact.feature:75:5
});

Then('the user should see the error message {string}', async ({}, arg) => {
  // Step: Then the user should see the error message "One Valid Email Address should be marked as primary"
  // From: features\contact.feature:76:5
});

When('the user enters the following Other Address:', async ({}, dataTable) => {
  // Step: When the user enters the following Other Address:
  // From: features\contact.feature:83:5
});

When('the user reopens the contact', async ({}) => {
  // Step: And the user reopens the contact
  // From: features\contact.feature:91:5
});

Then('the alternate address should match the entered values', async ({}) => {
  // Step: Then the alternate address should match the entered values
  // From: features\contact.feature:92:5
});

Given('the user has entered all contact creation fields', async ({}) => {
  // Step: And the user has entered all contact creation fields
  // From: features\contact.feature:98:5
});

Then('the user should be redirected to the Edit Contact page', async ({}) => {
  // Step: Then the user should be redirected to the Edit Contact page
  // From: features\contact.feature:100:5
});

