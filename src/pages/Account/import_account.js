import { expect } from '@playwright/test';
import { BasePage } from '../Basepage.js';
export class importaccount extends BasePage {

constructor(page) {
     super(page);
     this.page = page;
     this.Accountpage = page.getByText('Accounts', { exact: true }).first();
     this.importaccountlink = page.getByText('Import Accounts', { exact: true }).first();
     this.importTitle = page.frameLocator('iframe').getByRole('heading', { name: 'Step 1: Upload Import File', level: 2 })
     this.choosefile = page.frameLocator('iframe').getByLabel('Select file:');
  
     this.createNewRecordsOnly = page.frameLocator('iframe').locator('.radio').first()
     this.createAndUpdateRecords = page.frameLocator('iframe').locator('#import_update');
     const frame = page.frameLocator('iframe');

this.nextButton = frame.getByRole('button', {
  name: 'Next >',
  exact: true,
});

this.filePropertiesHeading = frame.getByRole('heading', {
  name: 'Step 2: Confirm Import File Properties',
  exact: true,
});

this.fieldMappingsHeading = frame.getByRole('heading', {
  name: 'Step 3: Confirm Field Mappings',
  exact: true,
  level: 2,
});

this.possibleDuplicatesHeading = frame.getByRole('heading', {
  name: 'Step 4: Check for Possible Duplicates',
  exact: true,
  level: 2,
});

this.importNowButton = frame.getByRole('button', {
  name: 'Import Now',
  exact: true,
});

// Your existing success-message locator; verify it matches the results page.
this.importSuccessMessage = page
  .frameLocator('iframe')
  .getByText('records were created', { exact: false });


    
}
async ImportAccountclick() {
  await expect(this.Accountpage).toBeVisible({ timeout: 15000 });
  await this.Accountpage.click();
  await this.importaccountlink.click();
}

async verifyImportPage() {
    await expect(this.importTitle).toBeVisible();
     await expect(this.choosefile).toBeVisible();
}

async selectAccountImportFile() {
     await this.choosefile.setInputFiles(
  'Data/AccountsData.csv'
);
}

async verifyAccountFileSelected() {
     await expect(this.choosefile).toHaveValue(/AccountsData.csv$/);
}

async selectCreateNewRecordsOnly() {
     await this.createNewRecordsOnly.check();
}

async verifyCreateNewRecordsOnlySelected() {
     await expect(this.createNewRecordsOnly).toBeChecked();
}

async verifyCreateAndUpdateRecordsNotSelected() {
     await expect(this.createAndUpdateRecords).not.toBeChecked();
}

 async doClick(locator) {
    await locator.click({ timeout: 15000 });
  }

  async clickNextAndVerify(button, expectedElement, timeout = 15000) {
  await button.click({ timeout });
  await expect(expectedElement).toBeVisible({ timeout });
}
}