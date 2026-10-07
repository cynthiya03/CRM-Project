import { Given, When, Then } from '../../src/fixtures/pageFixture.js';
import { expect } from '@playwright/test';
import { ExcelHelper } from '../../src/utils/ExcelHelper.js';

const QUOTE_FILE = 'QuoteData.xlsx';
const QUOTE_SHEET = 'CreateQuote';

// strips hidden tabs/spaces/line breaks from headers and values
const clean = (row) =>
  Object.fromEntries(
    Object.entries(row).map(([k, v]) => [k.trim(), typeof v === 'string' ? v.trim() : v])
  );

function getQuote(testCaseId) {
  const rows = ExcelHelper.readExcel(QUOTE_FILE, QUOTE_SHEET).map(clean);
  const matches = rows.filter((r) => r.TestCaseID === testCaseId);
  if (matches.length !== 1) {
    throw new Error(`Expected one row with TestCaseID "${testCaseId}", found ${matches.length}`);
  }
  return matches[0];
}

Given('User is logged into the application and Quotes menu is visible', async ({ createquotePage }) => {
  await expect(createquotePage.quotesMenu).toBeVisible();
});
When('User clicks on the Create Quote sub-menu', async ({ createquotePage }) => {
  await createquotePage.quotesMenu.hover();
  await createquotePage.createQuoteSubMenu.click();
});

Then('Create Quotes page is displayed', async ({ createquotePage }) => {
  await expect(createquotePage.titleofPage).toBeVisible();
});

Given('User is in the Create Quotes page', async ({ createquotePage }) => {
   
  await createquotePage.quotesMenu.hover();
  await createquotePage.createQuoteSubMenu.click();
  await expect(createquotePage.titleofPage).toBeVisible();
});


When('User inspects the mandatory fields displayed in the overview section', async ({ createquotePage }) => {
  await expect(createquotePage.mandatoryFieldTitle).toBeVisible();
  await expect(createquotePage.mandatoryFieldValidUntil).toBeVisible();
  await expect(createquotePage.mandatoryFieldQuoteStage).toBeVisible();
});

Then('Title,Valid Until,Quote Stage fields should be displayed as mandatory by displaying * asterisk  next to it.', async ({ createquotePage }) => {
  await expect(createquotePage.titleFieldMandatoryField).toBeVisible();
  await expect(createquotePage.validUntilMandatoryField).toBeVisible();
  await expect(createquotePage.quoteStageMandatoryField).toBeVisible();
});

When('User clicks the calendar icon', async ({ createquotePage }) => {
  await createquotePage.calendarIcon.click();
});

Then('The Calendar should be displayed with Select Date,Close at the top right corner Today button at the top center', async ({ createquotePage }) => {
  // TODO: add a locator for the calendar popup and assert it is visible
});

When('user enters all the mandatory and non mandatory fields and click on Save button', async ({ createquotePage }) => {
   const data = getQuote('quote1');
  await createquotePage.fillQuoteDetails(data);
  await createquotePage.QuoteSaveButton();
 
});

Then('The Quote should be saved and the user has to be directed to the quotes page', async ({ createquotePage }) => {
  await expect(createquotePage.pagetitledisplayedonsave).toBeVisible();
});

When('user enters all the mandatory and non mandatory fields and click on Cancel button', async ({ createquotePage }) => {
 const data = getQuote('quote2');
  await createquotePage.fillQuoteDetails(data);
  await createquotePage.QuoteCancelButton();
});

Then('The quote should not be saved and user is directed to the Quotes page', async ({ createquotePage }) => {
  // TODO: assert the Quotes list page is shown and the new quote title is not in it
});

When('User doesnt enter any of the mandatory fields and clicks on the Save button', async ({ createquotePage }) => {
  await createquotePage.QuoteSaveButton();
});

Then('User should be displayed a warning message saying {string}', async ({ createquotePage }, message) => {
  await expect(createquotePage.errorMessage).toBeVisible();
});
