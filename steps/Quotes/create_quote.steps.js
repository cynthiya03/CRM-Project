import { Given, When, Then, BeforeScenario } from '../../src/fixtures/pageFixture.js';
import { expect } from '@playwright/test';


// 2. Pass your custom 'test' extension into createBdd so the steps can see 'createQuotePage'
const { Given, When, Then } = createBdd(test);


Given('User is logged into the application and Quotes menu is visible', async ({createquotePage}) => {
  await expect(createquotePage.createQuoteSubMenu).toBeVisible();
});

When('User clicks on the Create Quote sub-menu', async ({createquotePage}) => {
await createquotePage.createQuoteSubMenu.click();
});

Then('Create Quotes page is displayed', async ({createquotePage}) => {
  await expect(createquotePage.titleofPage).toBeVisible();
});

Given('User is in the Create Quotes page', async ({createquotePage}) => {
  await expect(createquotePage.titleofPage).toBeVisible();
});

When('User inspects the mandatory fields displayed in the overview section', async ({createquotePage}) => {
  
});

Then('Title,Valid Until,Quote Stage fields should be displayed as mandatory by displaying * asterisk  next to it.', async ({createquotePage}) => {

  await expect(createquotePage.titleMandatoryField).toBeVisible();
  await expect(createquotePage.validUntilMandatoryField).toBeVisible();
  await expect(createquotePage.quoteStageMandatoryField).toBeVisible();  

});

When('User clicks the calendar icon', async ({createquotePage}) => {
  await createquotePage.calendarIcon.click();
});

Then('The Calendar should be displayed with Select Date,Close at the top right corner Today button at the top center', async ({createquotePage}) => {
  // Step: Then The Calendar should be displayed with Select Date,Close at the top right corner Today button at the top center
  // From: features/create_quote.feature:18:1
});

When('user enters all the mandatory and non mandatory fields and click on Save button', async ({createquotePage, quoteData}) => {
   const formData = quoteData.rowsHash();
   await createquotePage.fillQuoteForm(quoteData);
  await createquotePage.QuoteSaveButton();
});

Then('The Quote should be saved and the user has to be directed to the quotes page', async ({createquotePage}) => {
  await expect(createquotePage.pagetitledisplayedonsave).toBeVisible();
});

When('user enters all the mandatory and non mandatory fields and click on Cancel button', async ({createquotePage, quoteData}) => {
  const formData = quoteData.rowsHash();
   await createquotePage.fillQuoteForm(quoteData);
  await createquotePage.QuoteCancelButton();
});

Then('The quote should not be saved and user is directed to the Quotes page', async ({createquotePage}) => {
  // Step: Then The quote should not be saved and user is directed to the Quotes page
  // From: features/create_quote.feature:28:1
});

When('User doesnt enter any of the mandatory fields and clicks on the Save button', async ({createquotePage}) => {
  await createquotePage.QuoteSaveButton();
});

Then('User should be displayed a warning message saying {string}', async ({createquotePage}, arg) => {
  await expect(createquotePage.errorMessageDisplayed()).toBeVisible();
});
