import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

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
