import { Given, When, Then, BeforeScenario} from '../../src/fixtures/pageFixture.js';


const VALID_IMPORT_FILE = 'quotes_import.csv';   // placed in the Data folder



Given('User is in the Import page', async ({importquotePage}) => {
    await importquotePage.openImportPage();
});

When('the user clicks the Download Import File Template link in the import quotes page', async ({importquotePage}) => {
  await importquotePage.clickdownload();
});


//When('the user clicks the Download Import File Template link in the import quotes page', async ({}) => {
  // await importquotePage.verifyTemplateDownloaded();
//});

Then('the application should download a template file to the users local machine', async ({importquotePage}) => {
  await importquotePage.verifyTemplateDownloaded();
});

Given('User is in the Import quote page', async ({importquotePage}) => {
   await importquotePage.openImportPage();
});

When('the user uploads a valid file using the Choose File picker and the user selects the Create new records only radio option and the user clicks the Next button', async ({importquotePage}) => {
   await importquotePage.uploadFile(VALID_IMPORT_FILE);
  await importquotePage.selectcreateNewRecordsRadioButton();
  await importquotePage.clickNextButton();
});

Then('the user should be advanced to next step of the import process', async ({importquotePage}) => {
   await importquotePage.verifyNextStepDisplayed();
});

When('the user uploads a valid file using the Choose File picker ,the user selects the Create new records and update existing records radio option And the user clicks the Next button', async ({importquotePage}) => {
    await importquotePage.uploadFile(VALID_IMPORT_FILE);
  await importquotePage.selectcreateNewandUpdateExistingRadioButton();
  await importquotePage.clickNextButton();
});

When('no file has been selected in the Select file picker, the user clicks the Next button', async ({importquotePage}) => {
  await importquotePage.clickNextButton();
});

Then('the system should display a validation error message indicating a file is requiredAnd the user should remain on Step one', async ({importquotePage}) => {
  await importquotePage.verifyFileRequiredErrorAndStillOnStep1();
});


Then('the application should download a template file to the user\'s local machine', async ({importquotePage}) => {
  // Step: Then the application should download a template file to the user's local machine
  // From: features/Quotes/import_quote.feature:7:1
});

//Then('the system should display a validation error message indicating a file is requiredAnd the user shouldremain on Step one', async ({}) => {
  // Step: Then the system should display a validation error message indicating a file is requiredAnd the user should remain on Step one
  // From: features/Quotes/import_quote.feature:22:1
//}