import { createBdd } from 'playwright-bdd';

const { Given, When, Then, And } = createBdd();

Given('user is logged in to CRM application', async ({}) => {
  // Step: Given user is logged in to CRM application
  // From: features\Documents\view_documents.feature:7:5
});

When('user clicks on the Documents option in the menu bar', async ({}) => {
  // Step: When user clicks on the Documents option in the menu bar
  // From: features\Documents\view_documents.feature:8:5
});

Then('the dropdown should display "View Document" as an option', async ({}) => {
  // Step: Then the dropdown should display "View Document" as an option
  // From: features\Documents\view_documents.feature:9:5
});

And('user navigates to view document page and can view the mentioned fields below', async ({}, dataTable) => {
  // Step: And user navigates to view document page and can view the mentioned fields below
  // From: features\Documents\view_documents.feature:13:5
  const fields = dataTable.rawTable.flat().map((value) => value.trim());
  console.log('Document fields to verify:', fields);
});

Then('user should be redirected to the view document page and able to see existing document', async ({}) => {
  // Step: Then user should be redirected to the view document page and able to see existing document
  // From: features\Documents\view_documents.feature:19:5
});
