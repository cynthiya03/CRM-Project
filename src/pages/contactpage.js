import { expect } from '@playwright/test';
import { BasePage } from './Basepage.js';
import { ExcelHelper } from '../utils/ExcelHelper.js';

export class ContactPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;


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
this.salutation = page.locator('select').filter({has: page.locator('option[value="Mrs."]'),
});


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

//   async openCreateContactFromVCard() {
//     await this.contactFromVCardLink.click();
//   }

//   async openImportContact() {
//     await this.importContactLink.click();
//   }

//   async openContactList() {
//     await this.viewContactsLink.click();
//   }

  async expectRequiredIndicator(expectedSymbol = '*') {
    await expect(this.requiredIndicator).toHaveText(expectedSymbol);
  }

async selectDropdown(locator, value) {
  await locator.selectOption({ value });
  await expect(locator).toHaveValue(value);
}

async searchDropdown(inputLocator, searchText) {
  await inputLocator.fill(searchText);
}

async selectDropdownResult(optionLocator) {
  await optionLocator.click();
}
  
//   async fillAddress(data = {}) {
//     if (!data || Object.keys(data).length === 0) {
//       return;
//     }

//     const street = data.Street || data.street;
//     const postalCode = data['Postal Code'] || data.postalCode;
//     const city = data.City || data.city;
//     const state = data.State || data.state;
//     const country = data.Country || data.country;

//     const inputs = [
//       { locator: this.page.locator('textarea, input').filter({ hasText: /Street|street/i }).first(), value: street },
//       { locator: this.page.locator('input').filter({ hasText: /Postal|postal|Zip/i }).first(), value: postalCode },
//       { locator: this.page.locator('input').filter({ hasText: /City|city/i }).first(), value: city },
//       { locator: this.page.locator('input').filter({ hasText: /State|state/i }).first(), value: state },
//       { locator: this.page.locator('input').filter({ hasText: /Country|country/i }).first(), value: country },
//     ];

//     for (const entry of inputs) {
//       if (entry.value) {
//         await entry.locator.fill(entry.value);
//       }
//     }
//   }


}
