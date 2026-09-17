import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('User is logged into the application and Quotes menu is visible', async ({}) => {
  // Step: Given User is logged into the application and Quotes menu is visible
  // From: features/create_quote.feature:6:1
});

When('User clicks on the Create Quote sub-menu', async ({}) => {
  // Step: When User clicks on the Create Quote sub-menu
  // From: features/create_quote.feature:7:1
});

Then('Create Quotes page is displayed', async ({}) => {
  // Step: Then Create Quotes page is displayed
  // From: features/create_quote.feature:8:1
});

Given('User is in the Create Quotes page', async ({}) => {
  // Step: Given User is in the Create Quotes page
  // From: features/create_quote.feature:11:1
});

When('User inspects the mandatory fields displayed in the overview section', async ({}) => {
  // Step: When User inspects the mandatory fields displayed in the overview section
  // From: features/create_quote.feature:12:1
});

Then('Title,Valid Until,Quote Stage fields should be displayed as mandatory by displaying * asterisk  next to it.', async ({}) => {
  // Step: Then Title,Valid Until,Quote Stage fields should be displayed as mandatory by displaying * asterisk  next to it.
  // From: features/create_quote.feature:13:1
});

When('User clicks the calendar icon', async ({}) => {
  // Step: When User clicks the calendar icon
  // From: features/create_quote.feature:17:1
});

Then('The Calendar should be displayed with Select Date,Close at the top right corner Today button at the top center', async ({}) => {
  // Step: Then The Calendar should be displayed with Select Date,Close at the top right corner Today button at the top center
  // From: features/create_quote.feature:18:1
});

When('user enters all the mandatory and non mandatory fields and click on Save button', async ({}) => {
  // Step: When user enters all the mandatory and non mandatory fields and click on Save button
  // From: features/create_quote.feature:22:1
});

Then('The Quote should be saved and the user has to be directed to the quotes page', async ({}) => {
  // Step: Then The Quote should be saved and the user has to be directed to the quotes page
  // From: features/create_quote.feature:23:1
});

When('user enters all the mandatory and non mandatory fields and click on Cancel button', async ({}) => {
  // Step: When user enters all the mandatory and non mandatory fields and click on Cancel button
  // From: features/create_quote.feature:27:1
});

Then('The quote should not be saved and user is directed to the Quotes page', async ({}) => {
  // Step: Then The quote should not be saved and user is directed to the Quotes page
  // From: features/create_quote.feature:28:1
});
