import { Given, When, Then, BeforeScenario } from '../../src/fixtures/pageFixture.js';
import { expect } from '@playwright/test';

// TC014
Given('User Logged into CRM', async ({  }) => {
	});

When('user click on import account page', async ({ ImportAccount }) => {
	await ImportAccount.ImportAccountclick();
});

Then('User should be redirected to import account page', async ({ ImportAccount }) => {
	await ImportAccount.verifyVisible(ImportAccount.importTitle)
})

// TC015

Given('User land on import account page', async ({}) => {
  
});

When('user click choose file and able to import the file', async ({ ImportAccount }) => {
	await ImportAccount.selectAccountImportFile();
});

Then('User should see account file selected on choose file option', async ({ ImportAccount }) => {
	await ImportAccount.verifyAccountFileSelected();
});

//TC016

When('user select Create new records only option', async ({ ImportAccount }) => {
	await ImportAccount.selectCreateNewRecordsOnly();
});

Then('User should see Create new records only should be selected', async ({ ImportAccount }) => {
	await ImportAccount.verifyCreateNewRecordsOnlySelected();
});

Then('Create new records and update existing records should not be selected', async ({ ImportAccount}) => {
	await ImportAccount.verifyCreateAndUpdateRecordsNotSelected();
});

// TC017


When('the user selects the account import file', async ({ ImportAccount }) => {
  await ImportAccount.selectAccountImportFile();
  await ImportAccount.verifyAccountFileSelected();
});

When('the user clicks Next', async ({ ImportAccount }) => {
  await ImportAccount.doClick(ImportAccount.uploadimportNext1);
});

When(
  'the user confirms the import file properties and clicks Next',
  async ({ ImportAccount }) => {
    await ImportAccount.doClick(ImportAccount.confirmimportNext2);
  }
);

When(
  'the user confirms the field mappings and clicks Next',
  async ({ ImportAccount }) => {
    await ImportAccount.doClick(ImportAccount.fieldmappingNext3);
});

When(
  'the user reviews the possible duplicate settings and starts the import',
  async ({ ImportAccount }) => {
   //await ImportAccount.doClick(ImportAccount.)
  await ImportAccount.doClick(ImportAccount.importnow4);
  }
);

Then(
  'the user should see a confirmation that the records were created',
  async ({ ImportAccount }) => {
    await ImportAccount.verifyVisible(ImportAccount.importconfirmsuccessmsg)
});

