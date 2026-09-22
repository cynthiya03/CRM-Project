import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('user is logged in to CRM application', async ({}) => {
  // Step: Given user is logged in to CRM application
  // From: features\Documents\create_document.feature:7:5
});

When('user clicks on the Documents option in the menu bar', async ({}) => {
  // Step: When user clicks on the Documents option in the menu bar
  // From: features\Documents\create_document.feature:8:5
});

Then('the dropdown should display "Create Document" as an option', async ({}) => {
  // Step: Then the dropdown should display "Create Document" as an option
  // From: features\Documents\create_document.feature:9:5
});

Then('user should be redirected to the create document page', async ({}) => {
  // Step: Then user should be redirected to the create document page
  // From: features\Documents\create_document.feature:13:5
});

When('user navigates to the create document page and fills in the following fields', async ({}, dataTable) => {
  // Step: When user navigates to the create document page and fills in the following fields
  // From: features\Documents\create_document.feature:16:5
  const formData = dataTable.hashes();
  console.log('Document form data:', formData);
});

When('user clicks the save button', async ({}) => {
  // Step: And user clicks the save button
  // From: features\Documents\create_document.feature:28:5
});

Then('new document should be created successfully', async ({}) => {
  // Step: Then new document should be created successfully
  // From: features\Documents\create_document.feature:29:5
});

Then('the dropdown should display "View Document" as an option', async ({}) => {
  // Step: Then the dropdown should display "View Document" as an option
  // From: features\Documents\create_document.feature:32:5
});

When('user navigates to view document page and can view the mentioned fields below', async ({}, dataTable) => {
  // Step: And user navigates to view document page and can view the mentioned fields below
  // From: features\Documents\create_document.feature:36:5
  const fields = dataTable.rawTable.flat().map((value) => value.trim());
  console.log('Document fields to verify:', fields);
});

Then('user should be redirected to the view document page and able to see existing document', async ({}) => {
  // Step: Then user should be redirected to the view document page and able to see existing document
  // From: features\Documents\create_document.feature:41:5
});
