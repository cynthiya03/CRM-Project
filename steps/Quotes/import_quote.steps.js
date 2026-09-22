import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

When('user clicks the Download Import File link', async ({}) => {
  // Step: When user clicks the Download Import File link
  // From: features/Quotes/import_line_items.feature:7:1
});

Given('User is in the Import page', async ({}) => {
  // Step: Given User is in the Import page
  // From: features/Quotes/import_quote.feature:5:1
});

When('the user clicks the Download Import File Template link in the import quotes page', async ({}) => {
  // Step: When the user clicks the Download Import File Template link in the import quotes page
  // From: features/Quotes/import_quote.feature:6:1
});

Then('the application should download a template file to the user\'s local machine', async ({}) => {
  // Step: Then the application should download a template file to the user's local machine
  // From: features/Quotes/import_quote.feature:7:1
});

Given('User is in the Import quote page', async ({}) => {
  // Step: Given User is in the Import quote page
  // From: features/Quotes/import_quote.feature:10:1
});

When('the user uploads a valid file using the Choose File picker and the user selects the Create new records only radio option and the user clicks the Next button', async ({}) => {
  // Step: When the user uploads a valid file using the Choose File picker and the user selects the Create new records only radio option and the user clicks the Next button
  // From: features/Quotes/import_quote.feature:11:1
});

Then('the user should be advanced to next step of the import process', async ({}) => {
  // Step: Then the user should be advanced to next step of the import process
  // From: features/Quotes/import_quote.feature:12:1
});

When('the user uploads a valid file using the Choose File picker ,the user selects the Create new records and update existing records radio option And the user clicks the Next  button', async ({}) => {
  // Step: When the user uploads a valid file using the Choose File picker ,the user selects the Create new records and update existing records radio option And the user clicks the Next  button
  // From: features/Quotes/import_quote.feature:16:1
});

When('no file has been selected in the Select file picker, the user clicks the Next button', async ({}) => {
  // Step: When no file has been selected in the Select file picker, the user clicks the Next button
  // From: features/Quotes/import_quote.feature:21:1
});
