import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();


Given('User is in the Import Line Items page', async ({}) => {
  // Step: Given User is in the Import Line Items page
  // From: features/import_line_items.feature:6:1
});

When('user clicks the Download Import File link', async ({}) => {
  // Step: When user clicks the Download Import File link
  // From: features/Quotes/import_line_items.feature:7:1
});


Then('the application should initiate a file download for the template file', async ({}) => {
  // Step: Then the application should initiate a file download for the template file
  // From: features/import_line_items.feature:8:1
});

When('the user uploads a valid file via the file picker and the user verifies that Create new records only is selected by default the user clicks the Next  button', async ({}) => {
  // Step: When the user uploads a valid file via the file picker and the user verifies that Create new records only is selected by default the user clicks the Next  button
  // From: features/import_line_items.feature:12:1
});

Then('the application should proceed to next Step of the import', async ({}) => {
  // Step: Then the application should proceed to next Step of the import
  // From: features/import_line_items.feature:13:1
});

When('the user uploads a valid file via the file picker and the user selects the Create new records and update existing records option And the user clicks the Next button', async ({}) => {
  // Step: When the user uploads a valid file via the file picker and the user selects the Create new records and update existing records option And the user clicks the Next button
  // From: features/import_line_items.feature:17:1
});

Then('the application should proceed to next step configured for updating records', async ({}) => {
  // Step: Then the application should proceed to next step configured for updating records
  // From: features/import_line_items.feature:18:1
});

Given('User is in the Import Line Items page the file picker displays no file selected', async ({}) => {
  // Step: Given User is in the Import Line Items page the file picker displays no file selected
  // From: features/import_line_items.feature:21:1
});

When('the user clicks the Next button', async ({}) => {
  // Step: When the user clicks the Next button
  // From: features/import_line_items.feature:22:1
});

Then('a validation message should be displayed alerting the user to select a file to upload', async ({}) => {
  // Step: Then a validation message should be displayed alerting the user to select a file to upload
  // From: features/import_line_items.feature:23:1
});
