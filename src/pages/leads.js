import { expect } from "@playwright/test";  
class LeadsPage {
constructor(page) {
    this.page = page;
    this.leadsLink = page.locator('a').filter({ hasText: /^Leads$/ });
    //this.leadsLink = page.getByRole('link', { name: 'Leads', exact: true });
    this.leadsPageTitle = page.getByText('LEADS', { exact: true }).last();
    this.createLeadLink = page.getByRole('link', { name: 'Create Lead', exact: true });
    this.createLeadForm = page.getByText('Create', { exact: true }).last();
    this.overviewTab = page.getByRole('tab', { name: 'OVERVIEW' });
    this.moreInformationTab = page.getByRole('tab', { name: 'MORE INFORMATION' });
    this.otherInformationTab = page.getByRole('tab', { name: 'OTHER' });
    this.firstNameField = page.getByRole('textbox').nth(1);
    this.lastNameField = page.getByRole('textbox').nth(2);
    this.jobTitleField = page.getByRole('textbox').nth(3);
    this.departmentField = page.getByRole('textbox').nth(5);
    this.accountNameField = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-account_name > div > .d-flex > .flex-grow-1 > .form-control');
    this.primaryAddressField = page.locator('scrm-group-field').filter({ hasText: 'Primary Address Street' }).locator('textarea');
    this.emailAddressField = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-email_address > div > .d-flex > .flex-grow-1 > .form-control');
    this.mobilePhoneField = page.getByRole('textbox').nth(4);
    this.emailOptOutField = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-opt_out > div > .d-flex > .flex-grow-1 > .pb-4 > .checkbox-container > .checkmark');
    this.descriptionField = page.locator('textarea').nth(2);
    this.whoseAssignedField = page.getByRole('combobox', { name: 'WillWestin' });
    this.officePhoneField = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-phone_work > div > .d-flex > .flex-grow-1 > .form-control');
    this.websiteField = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-website > div > .d-flex > .flex-grow-1 > .form-control');
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.validationErrorPopup = page.getByText('There are validation errors,');
    this.createLeadVcardLink = page.getByRole('link', { name: 'Create Lead From vCard'});
    this.importVCardHeading = page.locator('iframe') .contentFrame().getByRole('heading', { name: 'Import vCard' });
    this.autoCreateVCardText = page .locator('iframe') .contentFrame().getByText('Automatically create a new');
    this.chooseFileButton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Choose File' });
    this.importVcardButton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Import vCard' });
    //this.importedFirstName = page.getByText('Sam', { exact: true });
    this.importedLeadTitle = page.locator('scrm-dynamic-label').getByText('Sam Adam', { exact: true });
    this.viewLeadsLink = page.getByRole('link', { name: 'View Leads' });
    this.leadsListNameColumn = page.getByText('Name', { exact: true });
    this.nameColumn = page.getByRole('columnheader', { name: 'Name' , exact: true});
    this.statusColumn = page.getByRole('columnheader', { name: 'Status' });
    this.accountColumn = page.getByRole('columnheader', { name: 'Account Name' });
    this.officePhoneColumn = page.getByRole('columnheader', { name: 'Office Phone' });
    this.emailColumn = page.getByRole('columnheader', { name: 'Email' });
    this.userColumn = page.getByRole('columnheader', { name: 'User' });
    //this.firstLeadName = page.getByRole('link', { name: 'Sam Adam' }).first();
    //this.leadDetailName =page .locator('scrm-dynamic-label') .getByText('Sam Adam', { exact: true });
    this.firstLeadName = page .getByRole('row') .nth(1) .getByRole('link') .first();
    //this.createdLeadName = page.getByRole('tabpanel', { name: 'OVERVIEW' }) .locator('span') .filter({ hasText: 'adam' });
    this.importLeadsLink = page.getByRole('link', { name: 'Import Leads' });
    this.importFileHeading = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 1: Upload Import File' });
    this.nextButton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
    this.missingFileError = page.locator('iframe').contentFrame().getByText('Missing required fields:', { exact: false });

    

}

async clickLeads() {
    await this.leadsLink.click();
  }
async checkLeadsLandingPage() {
    await expect(this.leadsPageTitle).toBeVisible();
}
async hoverLeads() {
  await this.leadsLink.hover();
}
async clickCreateLead() {
  await this.createLeadLink.click();
}
async checkCreateLeadForm() {
  await expect(this.createLeadForm).toBeVisible();
}
async checkOverviewTab() {
  await expect(this.overviewTab).toBeVisible();
}
async checkLeadInformationTabs() {
  await expect(this.overviewTab).toBeVisible();
  await expect(this.moreInformationTab).toBeVisible();
  await expect(this.otherInformationTab).toBeVisible();
}
async checkLeadOverviewFields() {
  await expect(this.firstNameField).toBeVisible();
  await expect(this.lastNameField).toBeVisible();
  await expect(this.jobTitleField).toBeVisible();
  await expect(this.departmentField).toBeVisible();
  await expect(this.accountNameField).toBeVisible();
  await expect(this.primaryAddressField).toBeVisible();
  await expect(this.emailAddressField).toBeVisible();
  await expect(this.mobilePhoneField).toBeVisible();
}
async checkAdditionalLeadFields() {
  await expect(this.emailOptOutField).toBeVisible();
  await expect(this.descriptionField).toBeVisible();
  await expect(this.whoseAssignedField).toBeVisible();
  await expect(this.mobilePhoneField).toBeVisible();
  await expect(this.officePhoneField).toBeVisible();
  await expect(this.websiteField).toBeVisible();
}
async clickSave() {
  await this.saveButton.click();
}
async enterValidLeadDetails() {
  await this.firstNameField.fill('Sam');
}
//async checkLeadCreatedSuccessfully(leadName) {
  //const createdLead = this.page.locator('scrm-dynamic-label') .getByText(leadName, { exact: true });
  //await expect(createdLead).toBeVisible();
//}
async checkLeadCreatedSuccessfully() {
  await expect(this.overviewTab).toBeVisible();
}
async checkValidationError() {
  await expect(this.validationErrorPopup).toBeVisible();
}
async clickCreateLeadFromVcard() {
  await this.createLeadVcardLink.click();
}
async checkImportVCardPage() {
  await expect(this.importVCardHeading).toBeVisible();
  await expect(this.autoCreateVCardText).toBeVisible();
}
async chooseVCardFile() {
  const fileChooserPromise = this.page.waitForEvent('filechooser');

  await this.chooseFileButton.click();

  const fileChooser = await fileChooserPromise;

  await fileChooser.setFiles('Data/Lead.vcf');
}
async clickImportVCard() {
  await this.importVcardButton.click();
}
//async checkVCardImported() {
  //await expect(this.importedFirstName).toBeVisible();
//}
async checkVCardImported() {
  await expect(this.importedLeadTitle).toBeVisible();
}
async clickViewLeads() {
  await this.viewLeadsLink.click();
}
async checkViewLeadsPage() {
  await expect(this.leadsListNameColumn).toBeVisible();
}

async checkViewLeadColumns() {
  await expect(this.nameColumn).toBeVisible();
  await expect(this.statusColumn).toBeVisible();
  await expect(this.accountColumn).toBeVisible();
  await expect(this.officePhoneColumn).toBeVisible();
  await expect(this.emailColumn).toBeVisible();
  await expect(this.userColumn).toBeVisible();
}
async clickLeadName() {
  await this.firstLeadName.click();
}
//async checkLeadDetailPage() {
//  await expect(this.leadDetailName).toBeVisible();
//}
async checkLeadDetailPage() {
  await expect(this.overviewTab).toBeVisible();
}
async clickImportLeads() {
  await this.importLeadsLink.click();
}
async checkImportLeadsSteps() {
  await expect(this.importFileHeading).toBeVisible();
}
async clickNextWithoutFile() {
  await this.nextButton.click();
}
async checkMissingFileError(errorMessage) {
  const error = this.page.locator('iframe') .contentFrame() .getByText(errorMessage, { exact: false });
  await expect(error).toBeVisible();
}
}
export default LeadsPage;
