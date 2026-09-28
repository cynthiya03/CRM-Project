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
     this.uploadimportNext1 = page.frameLocator('iframe').getByRole('button', { name: 'Next >' })
     this.confirmimportNext2 =page.frameLocator('iframe').locator(`//input[@id='gonext']`)
     this.importconfirmsuccessmsg = page.frameLocator('iframe').locator(`span:has-text("records were created")`)
     this.fieldmappingNext3 = page.frameLocator('iframe').locator('#gonext');
     this.importnow4 = page.frameLocator('iframe').locator('#importnow')
     };

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
  'data/AccountsData.csv'
);
}

async verifyAccountFileSelected() {
     await expect(this.choosefile).toHaveValue(/AccountsData.csv$/);
}


//
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

}