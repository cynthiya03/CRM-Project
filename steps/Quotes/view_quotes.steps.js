import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();


Given('User is in the View Quotes page', async ({}) => {
  // Step: Given User is in the View Quotes page
  // From: features/view_quotes.feature:6:1
});

When('the user clicks on the quote title link', async ({}) => {
  // Step: When the user clicks on the quote title link
  // From: features/view_quotes.feature:7:1
});

Then('the system should display the detail view page for the quote selected', async ({}) => {
  // Step: Then the system should display the detail view page for the quote selected
  // From: features/view_quotes.feature:8:1
});

When('the user clicks the phone icon shortcut on the quote title row', async ({}) => {
  // Step: When the user clicks the phone icon shortcut on the quote title row
  // From: features/view_quotes.feature:12:1
});

Then('Create Call page should be opened', async ({}) => {
  // Step: Then Create Call page should be opened
  // From: features/view_quotes.feature:13:1
});

When('the user clicks the calendar icon shortcut on the quote title row', async ({}) => {
  // Step: When the user clicks the calendar icon shortcut on the quote title row
  // From: features/view_quotes.feature:17:1
});

Then('Create Meetings page should be opened', async ({}) => {
  // Step: Then Create Meetings page should be opened
  // From: features/view_quotes.feature:18:1
});

When('the user clicks the create task icon shortcut on the quote title row', async ({}) => {
  // Step: When the user clicks the create task icon shortcut on the quote title row
  // From: features/view_quotes.feature:22:1
});

Then('Create Task should be opened', async ({}) => {
  // Step: Then Create Task should be opened
  // From: features/view_quotes.feature:23:1
});

When('the user clicks the compose email icon shortcut on the quote title row', async ({}) => {
  // Step: When the user clicks the compose email icon shortcut on the quote title row
  // From: features/view_quotes.feature:27:1
});

Then('New Email window should be opened', async ({}) => {
  // Step: Then New Email window should be opened
  // From: features/view_quotes.feature:28:1
});

Given('User is in the Import page', async ({}) => {
  // Step: Given User is in the Import page
  // From: features/view_quotes.feature:31:1
});

When('the user clicks the Download Import File Template link', async ({}) => {
  // Step: When the user clicks the Download Import File Template link
  // From: features/view_quotes.feature:32:1
});

Then('the application should download a template file to the user\'s local machine', async ({}) => {
  // Step: Then the application should download a template file to the user's local machine
  // From: features/view_quotes.feature:33:1
});

When('the user uploads a valid file using the Choose File picker and the user selects the Create new records only radio option and the user clicks the Next >button', async ({}) => {
  // Step: When the user uploads a valid file using the Choose File picker and the user selects the Create new records only radio option and the user clicks the Next >button
  // From: features/view_quotes.feature:37:1
});

Then('the user should be advanced to Step {int} of the import process', async ({}, arg) => {
  // Step: Then the user should be advanced to Step 2 of the import process
  // From: features/view_quotes.feature:38:1
});

When('the user uploads a valid file using the Choose File picker ,the user selects the Create new records and update existing records radio option And the user clicks the Next > button', async ({}) => {
  // Step: When the user uploads a valid file using the Choose File picker ,the user selects the Create new records and update existing records radio option And the user clicks the Next > button
  // From: features/view_quotes.feature:42:1
});

When('no file has been selected in the Select file picker, the user clicks the {string} button', async ({}, arg) => {
  // Step: When no file has been selected in the Select file picker, the user clicks the "Next >" button
  // From: features/view_quotes.feature:47:1
});

Then('the system should display a validation error message indicating a file is requiredAnd the user should remain on Step {int}', async ({}, arg) => {
  // Step: Then the system should display a validation error message indicating a file is requiredAnd the user should remain on Step 1
  // From: features/view_quotes.feature:48:1
});

