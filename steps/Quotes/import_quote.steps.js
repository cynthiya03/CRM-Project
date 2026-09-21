import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();


Given('User is in the Import page', async ({}) => {
  // Step: Given User is in the Import page
  // From: features/view_quotes.feature:31:1
});

When('the user clicks the Download Import File Template link', async ({}) => {
  // Step: When the user clicks the Download Import File Template link
  // From: features/view_quotes.feature:32:1
});

When('the user clicks the Download Import File Template link in the import quotes page', async ({}) => {
  // Step: When the user clicks the Download Import File Template link in the import quotes page
});

Then('the application should download a template file to the user\'s local machine', async ({}) => {
  // Step: Then the application should download a template file to the user's local machine
  // From: features/view_quotes.feature:33:1
});

When('the user uploads a valid file using the Choose File picker and the user selects the Create new records only radio option and the user clicks the Next >button', async ({}) => {
  // Step: When the user uploads a valid file using the Choose File picker and the user selects the Create new records only radio option and the user clicks the Next >button
  // From: features/view_quotes.feature:37:1
});

When('the user uploads a valid file using the Choose File picker and the user selects the Create new records only radio option and the user clicks the Next button', async ({}) => {
  // Step: When the user uploads a valid file using the Choose File picker and the user selects the Create new records only radio option and the user clicks the Next button
});

Then('the user should be advanced to Step {int} of the import process', async ({}, arg) => {
  // Step: Then the user should be advanced to Step 2 of the import process
  // From: features/view_quotes.feature:38:1
});

Then('the user should be advanced to next step of the import process', async ({}) => {
  // Step: Then the user should be advanced to next step of the import process
});

When('the user uploads a valid file using the Choose File picker ,the user selects the Create new records and update existing records radio option And the user clicks the Next > button', async ({}) => {
  // Step: When the user uploads a valid file using the Choose File picker ,the user selects the Create new records and update existing records radio option And the user clicks the Next > button
  // From: features/view_quotes.feature:42:1
});

When('the user uploads a valid file using the Choose File picker ,the user selects the Create new records and update existing records radio option And the user clicks the Next  button', async ({}) => {
  // Step: When the user uploads a valid file using the Choose File picker ,the user selects the Create new records and update existing records radio option And the user clicks the Next  button
});

When('no file has been selected in the Select file picker, the user clicks the {string} button', async ({}, arg) => {
  // Step: When no file has been selected in the Select file picker, the user clicks the "Next >" button
  // From: features/view_quotes.feature:47:1
});

When('no file has been selected in the Select file picker, the user clicks the Next button', async ({}) => {
  // Step: When no file has been selected in the Select file picker, the user clicks the Next button
});

Then('the system should display a validation error message indicating a file is requiredAnd the user should remain on Step {int}', async ({}, arg) => {
  // Step: Then the system should display a validation error message indicating a file is requiredAnd the user should remain on Step 1
  // From: features/view_quotes.feature:48:1
});

Then('the system should display a validation error message indicating a file is requiredAnd the user should remain on Step one', async ({}) => {
  // Step: Then the system should display a validation error message indicating a file is requiredAnd the user should remain on Step one
});


