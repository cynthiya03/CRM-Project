import { expect } from '@playwright/test';
import { BasePage } from '../Basepage.js';
export class Account extends BasePage {

constructor(page) {
     super(page);
this.page = page;

this.createAccountTitle = page.getByText('Create', { exact: true }).first();
this.overviewTab = page.getByRole('tab', { name: 'OVERVIEW' });
this.moreInformationTab = page.getByRole('tab', { name: 'MORE INFORMATION' });
this.othersTab = page.getByRole('tab', { name: 'OTHER' });
this.nameField = page.getByRole('textbox').nth(1);
this.namemandatory = page.getByText('*', { exact: true })
this.website = page.getByRole('textbox').nth(2);
this.email = page.getByRole('textbox').nth(4);

this.BillingStreet = page.locator(`//div/scrm-text-edit/textarea`).first()
this.BillingPostalCode = page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-billing_address_postalcode > div > .d-flex > .flex-grow-1 > .form-control');
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
this.backbutton = page.getByRole('button').nth(1);
this.billingaddress = page.locator(`//form[position()=1]/div[position()=4]/div[position()=1]/div[position()=1]/div[position()=2]`)
this.shippingaddress = page.locator(`//form[position()=1]/div[position()=4]/div[position()=2]/div[position()=1]/div[position()=2]`)
}

accountNameText(accountName) {
  return this.page.locator('scrm-varchar-detail').filter({
    hasText: accountName,
  });
}

async returnToAccountsList() {
  await this.backbutton.click();
}

async verifyVisible(locator) {
    await expect(locator).toBeVisible({ timeout: 30000 });
  }

  async fillField(locator, value) {
  await locator.fill(value);
}

async EnteruniqueName() {
await expect(this.nameField).toBeVisible({ timeout: 30000 });
const number = Math.floor(1000 + Math.random() * 9000);
this.createdAccountName = `TestUser_${number}`;
await this.fillField(this.nameField, this.createdAccountName);

}

async clickSaveButton() {
  await this.saveButton.click();
}

async fillAccountForm(data) {
    if (data['Website']) {
      await this.website.fill(data['Website']);
    }
    if (data['Office Phone']) {
      await this.officePhone.fill(data['Office Phone']);
    }
    if (data['Assigned To']) {
      await this.assignedTo.click();
      await this.page.getByRole('option', { name: data['Assigned To'], exact: true }).click();
    }
    
    if (data['Billing Address']) {
      await this.BillingStreet.fill(data['Billing Address']);
    }
    if (data['Shipping Address']) {
      await this.ShippingStreet.fill(data['Shipping Address']);
    }
  }

  async verifySavedAccount(accountName) {
  const savedAccountName = this.page
    .getByRole('tabpanel', { name: 'OVERVIEW' })
    .getByText(accountName, { exact: true });

  await expect(savedAccountName).toHaveCount(1);
  await expect(savedAccountName).toBeVisible();
}

 

async enterBillingAddressDetails() {
  this.expectedBillingAddress = {
    street: '123 Main Street',
    postalCode: '02108',
    city: 'Boston',
    state: 'Massachusetts',
    country: 'United States',
  };

  await this.BillingStreet.fill(this.expectedBillingAddress.street);
  await this.BillingPostalCode.fill(this.expectedBillingAddress.postalCode);
  await this.BillingCity.fill(this.expectedBillingAddress.city);
  await this.BillingState.fill(this.expectedBillingAddress.state);
  await this.BillingCountry.fill(this.expectedBillingAddress.country);
}

async reopenSavedAccount() {
  await this.page.getByRole('button', { name: 'Edit', exact: true }).click();
  
}


async verifyBillingAddress() {
  const expectedValues = [
    '123 Main Street',
    '02108',
    'Boston',
    'Massachusetts',
    'United States',
  ];

  for (const value of expectedValues) {
    await expect(this.billingaddress).toContainText(value);
  }
}

async fillShippingAddress(data) {
  if (data['Street']) {
    await this.ShippingStreet.fill(data['Street']);
  }

  if (data['Postal Code']) {
    await this.ShippingPostal.fill(data['Postal Code']);
  }

  if (data['City']) {
    await this.ShippingCity.fill(data['City']);
  }

  if (data['State']) {
    await this.ShippingState.fill(data['State']);
  }

  if (data['Country']) {
    await this.ShippingCountry.fill(data['Country']);
  }

  //this.expectedShippingAddress = { ...data };
}

async verifyShippingAddress() {
  const expectedValues = [
    '987 Main Street',
    '02108',
    'Tampa',
    'Florida',
    'United States',
  ];
for (const value of expectedValues) {
    await expect(this.shippingaddress).toContainText(value);
  }

}

}
