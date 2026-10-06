import { expect } from '@playwright/test';
import { BasePage } from './Basepage.js';
import { ExcelHelper } from '../utils/ExcelHelper.js';

export class ContactPage extends BasePage {
  constructor(page) {
    super(page);
    
this.contact = page.getByText('Contacts', { exact: true }).first();
this.createContactfield = page.getByRole('link', { name: 'Create Contact' }).first();
this.createContactTitle =  page.getByText('Create', { exact: true }).first();
this.overview = page.getByRole('tab', { name: 'OVERVIEW' })
this.moreinfo =  page.getByRole('tab', { name: 'MORE INFORMATION'})
this.other = page.getByRole('tab', { name: 'OTHER' });
this.requiredIndicator = page.getByText('*', { exact: true });
 this.LastName = page.getByRole('textbox').nth(2);
 this.errorMessage = page.getByText('Missing required field: Last Name', { exact: true }).first(); 
 this.firstNameField = page.locator('.form-control.form-control-sm').first();
this.createdcontact = page.locator('.dynamic-label');
this.saveButton = page.getByText('Save', { exact: true }).first();
this.dropdownLocator = page.locator('.custom-select.custom-select-sm');
this.salutation = page.locator('select').filter({has: page.locator('option[value="Mrs."]'),});
this.accountName1 =page.getByRole('combobox', { name: 'Select an item' })
this.accountNameInput = page.locator('.p-inputtext.p-component');
this.searchButton = page.locator('.p-dropdown-items-wrapper');
this.accountOption = page.getByRole('combobox', { name: 'Bay Funding Co' });
this.officePhone = page.getByRole('textbox').nth(3)
this.jobTitle = page.getByRole('textbox').nth(5)
this.accountName = page.getByRole('combobox', { name: 'Select an item' })
this.emailAddress = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-email_address > div > .d-flex > .flex-grow-1 > .form-control')
this.primaryAddressStreet = page.locator('scrm-group-field').filter({ hasText: 'Primary Address Street' }).locator('textarea')
this.primaryAddressPostalCode = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_postalcode > div > .d-flex > .flex-grow-1 > .form-control')
this.primaryAddressCity = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_city > div > .d-flex > .flex-grow-1 > .form-control')
this.primaryAddressState = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_state > div > .d-flex > .flex-grow-1 > .form-control')
this.primaryAddressCountry = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_country > div > .d-flex > .flex-grow-1 > .form-control')
this.description = page.locator('textarea').nth(2)
this.mobile = page.getByRole('textbox').nth(4)
this.department = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-department > div > .d-flex > .flex-grow-1 > .form-control')
this.alternateAddressStreet = page.locator('scrm-group-field').filter({ hasText: 'Alternate Address Street' }).locator('textarea')
this.alternateAddressPostalCode = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-alt_address_postalcode > div > .d-flex > .flex-grow-1 > .form-control')
this.alternateAddressCity = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-alt_address_city > div > .d-flex > .flex-grow-1 > .form-control')
this.alternateAddressState = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-alt_address_state > div > .d-flex > .flex-grow-1 > .form-control')
this.alternateAddressCountry = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-alt_address_country > div > .d-flex > .flex-grow-1 > .form-control')
this.bulkAction = page.locator('scrm-table-header').getByRole('button', { name: 'Bulk Action' })
this.delete = page.locator('a').filter({ hasText: 'Delete' }).nth(1)
this.proceed = page.getByRole('button', { name: 'Proceed' })
this.deleteSuccess = page.getByText('Record(s) deleted')

this.contactFields = {
  'firstname': this.firstNameField,
  'unique lastname': this.LastName,
  'office phone': this.officePhone,
  'job title': this.jobTitle,
  'Email address': this.emailAddress,

  'primary address street': this.primaryAddressStreet,
  'primary address postal code': this.primaryAddressPostalCode,
  'Primary Address City': this.primaryAddressCity,
  'Primary Address State': this.primaryAddressState,
  'Primary Address Country': this.primaryAddressCountry,

  'DESCRIPTION': this.description,
  'MOBILE': this.mobile,
  'DEPARTMENT': this.department,

  'Alternate Address Street': this.alternateAddressStreet,
  'Alternate Address Postal Code': this.alternateAddressPostalCode,
  'Alternate Address City': this.alternateAddressCity,
  'Alternate Address State': this.alternateAddressState,
  'Alternate Address Country': this.alternateAddressCountry,
};
  }


async fillContactDetails(data) {
    await this.fillFields(this.contactFields, data);
  }

  async verifyContactDetails(data) {
    await this.verifyFields(this.contactFields, data);
  }

async filluniquelastName() {
  const number = Math.floor(1000 + Math.random() * 9000);
  this.createdLastName = `Ninja_${number}`;
 await this.fillField(this.LastName, this.createdLastName);
}


  async fillFIRSTName() {
    await this.firstNameField.fill('Numpy');
  }

  async openCreateContact() {
    await this.createContactfield.click();
  }

 async openCreateContactFromVCard() {
     await this.contactFromVCardLink.click();
   }

   async openImportContact() {
     await this.importContactLink.click();
   }

   async openContactList() {
     await this.viewContactsLink.click();
   }

  async expectRequiredIndicator(expectedSymbol = '*') {
    await expect(this.requiredIndicator).toHaveText(expectedSymbol);
  }

async selectDropdown(locator, value) {
  await locator.selectOption({ value });
  await expect(locator).toHaveValue(value);
}

async searchDropdown(inputLocator, searchText) {
    await this.accountName1.click();
   //await inputLocator.fill(searchText);
   await inputLocator.fill('');
  await inputLocator.pressSequentially(searchText, { delay: 100 });
  }
async selectDropdownResult(optionLocator) {
  await optionLocator.click();
}
async fillContactDetails(data) {
  await this.fillFields(this.contactFields, data);
}

async verifyContactDetails(data) {
  await this.verifyFields(this.contactFields, data);
}

async openContactsList() {
  await this.page.goto('#/contacts/index?return_module=Contacts&return_action=DetailView');
  
}


}

