import { expect } from '@playwright/test';
import { BasePage } from './Basepage.js';
import { randomUUID } from 'node:crypto';
export class Account extends BasePage {

constructor(page) {
     super(page);
this.page = page;

this.createAccountTitle = page.getByText('Create', { exact: true }).first();
this.overviewTab = page.getByRole('tab', { name: 'OVERVIEW' });
this.moreInformationTab = page.getByRole('tab', { name: 'MORE INFORMATION' });
this.othersTab = page.getByRole('tab', { name: 'OTHER' });
this.nameField = page.locator('.form-control.form-control-sm').first();
this.namemandatory = page.getByText('*', { exact: true })
this.website = page.getByRole('textbox').nth(2);
this.email = page.getByRole('textbox').nth(4);

this.BillingStreet = page.locator(`//div/scrm-text-edit/textarea`).first()
this.BillingPostal = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-billing_address_postalcode > div > .d-flex > .flex-grow-1 > .form-control');
this.BillingCity = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-billing_address_city > div > .d-flex > .flex-grow-1 > .form-control');
this.BillingState = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-billing_address_state > div > .d-flex > .flex-grow-1 > .form-control');
this.BillingCountry = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-billing_address_country > div > .d-flex > .flex-grow-1 > .form-control');
this.description = page.locator('textarea').nth(2);
this.ShippingStreet = page.getByRole('textbox').nth(10);
this.ShippingPostal = page.getByRole('textbox').nth(11);
this.ShippingCity = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-shipping_address_city > div > .d-flex > .flex-grow-1 > .form-control');
this.ShippingState = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-shipping_address_state > div > .d-flex > .flex-grow-1 > .form-control');
this.ShippingCountry = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-shipping_address_country > div > .d-flex > .flex-grow-1 > .form-control');
this.assignedTo = page.getByRole('combobox', { name: 'WillWestin' })
this.officePhone = page.getByRole('textbox').nth(3);
this.assigntobutton = page.getByRole('button', { name: /^Save$/i }).first();
this.saveButton = page.getByText('Save', { exact: true }).first();
this.errorMessage = page.getByText('Missing required field: Name', { exact: true }).first();
}

async verifyVisible(locator) {
    await expect(locator).toBeVisible();
  }

  async fillField(locator, value) {
  await locator.fill(value);
}

async fillNameField(Name) {
const Name = `TestUser_${randomUUID()}`;
await fillField(this.nameField, Name);
}

async clickSaveButton() {
  await this.saveButton.click();
}
}
