import { createBdd } from 'playwright-bdd';
// 1. MUST import your custom test wrapper that holds the 'createQuotePage' fixture
import { test } from '../fixtures/quotesfixture.js'; 
import { expect } from '@playwright/test';

// 2. Pass your custom 'test' extension into createBdd so the steps can see 'createQuotePage'
const { Given, When, Then } = createBdd(test);


Given('User is logged into the application and Quotes menu is visible', async ({createQuotePage}) => {
  // Step: Given User is logged into the application and Quotes menu is visible
  // From: features/create_quote.feature:6:1
  await expect(createQuotePage).toBeVisible();
});

When('User clicks on the Create Quote sub-menu', async ({createQuotePage}) => {
  // Step: When User clicks on the Create Quote sub-menu
  // From: features/create_quote.feature:7:1
  await createQuotePage.createQuoteSubMenu.click();
});

Then('Create Quotes page is displayed', async ({createQuotePage}) => {
  // Step: Then Create Quotes page is displayed
  // From: features/create_quote.feature:8:1
  await expect(createQuotePage.titleofPage).toBeVisible();
});

Given('User is in the Create Quotes page', async ({createQuotePage}) => {
  // Step: Given User is in the Create Quotes page
  // From: features/create_quote.feature:11:1
});

When('User inspects the mandatory fields displayed in the overview section', async ({createQuotePage}) => {
  // Step: When User inspects the mandatory fields displayed in the overview section
  // From: features/create_quote.feature:12:1
});

Then('Title,Valid Until,Quote Stage fields should be displayed as mandatory by displaying * asterisk  next to it.', async ({createQuotePage}) => {
  // Step: Then Title,Valid Until,Quote Stage fields should be displayed as mandatory by displaying * asterisk  next to it.
  // From: features/create_quote.feature:13:1
  await expect(createQuotePage.titleMandatoryField).toBeVisible();
  await expect(createQuotePage.validUntilMandatoryField).toBeVisible();
  await expect(createQuotePage.quoteStageMandatoryField).toBeVisible();  

});

When('User clicks the calendar icon', async ({createQuotePage}) => {
  // Step: When User clicks the calendar icon
  // From: features/create_quote.feature:17:1

  await createQuotePage.calendarIcon.click();
});

Then('The Calendar should be displayed with Select Date,Close at the top right corner Today button at the top center', async ({createQuotePage}) => {
  // Step: Then The Calendar should be displayed with Select Date,Close at the top right corner Today button at the top center
  // From: features/create_quote.feature:18:1
});

When('user enters all the mandatory and non mandatory fields and click on Save button', async ({createQuotePage}) => {
  // Step: When user enters all the mandatory and non mandatory fields and click on Save button
  // From: features/create_quote.feature:22:1
});

Then('The Quote should be saved and the user has to be directed to the quotes page', async ({createQuotePage}) => {
  // Step: Then The Quote should be saved and the user has to be directed to the quotes page
  // From: features/create_quote.feature:23:1
});

When('user enters all the mandatory and non mandatory fields and click on Cancel button', async ({createQuotePage}) => {
  // Step: When user enters all the mandatory and non mandatory fields and click on Cancel button
  // From: features/create_quote.feature:27:1
});

Then('The quote should not be saved and user is directed to the Quotes page', async ({createQuotePage}) => {
  // Step: Then The quote should not be saved and user is directed to the Quotes page
  // From: features/create_quote.feature:28:1
});

When('User doesnt enter any of the mandatory fields and clicks on the Save button', async ({createQuotePage}) => {
  // Step: When User doesnt enter any of the mandatory fields and clicks on the Save button
  // From: features/create_quote.feature:22:1
});

Then('User should be displayed a warning message saying {string}', async ({createQuotePage}, arg) => {
  // Step: Then User should be displayed a warning message saying "Missing required field: Title"
  // From: features/create_quote.feature:23:1
});
