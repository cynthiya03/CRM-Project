import { expect } from '@playwright/test';
import { BasePage } from './Basepage.js';

export class ContactPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;


this.contact = page.getByText('Contacts', { exact: true }).first();
this.createContactfield = page.getByRole('link', { name: 'Create Contact' }).first();


this.createContactTitle =  page.getByText('Create', { exact: true })
this.overview = page.getByRole('tab', { name: 'OVERVIEW' })
this.moreinfo =  page.getByRole('tab', { name: 'MORE INFORMATION'})
this.other = page.getByRole('tab', { name: 'OTHER' });
this.overview =  page.getByRole('tab', { name: 'OVERVIEW' })
this.mr = page.locator('select');
this.firstname =  page.getByRole('textbox').nth(1)
this.lastname = page.getByRole('textbox').nth(2)
this.officephone = page.getByRole('textbox').nth(3)

    this.contactFromVCardLink = page.getByRole('link', { name: /Create Contact from vCard/i }).first();
    this.importContactLink = page.getByRole('link', { name: /Import Contact/i }).first();
    this.viewContactsLink = page.getByRole('link', { name: /View Contacts/i }).first();
    
    this.lastNameLabel = page.getByText('Last Name', { exact: true }).first();
    this.requiredIndicator = page.locator('span.required, .required, text=*').first();
    this.lastNameField = page.locator('input[placeholder*="Last Name"], input[name*="last_name"], textarea[name*="last_name"]').first();
    this.firstNameField = page.locator('input[placeholder*="First Name"], input[name*="first_name"]').first();
    this.emailField = page.locator('input[type="email"], input[name*="email"]').first();
    this.assignedToField = page.getByRole('combobox').first();
    this.saveButton = page.getByRole('button', { name: /^Save$/i }).first();
    this.errorMessage = page.locator('text=Missing required field: Last Name, text=Missing required field: Name, .alert-danger, .error').first();
    this.uploadInput = page.locator('input[type="file"]').first();
    this.contactListToolbar = page.locator('button, [role="button"]').filter({ hasText: /Select All|Filter|Column|Bulk Action|Next|Previous/i }).first();
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

  async fillLastName(value) {
    await this.lastNameField.fill(value);
  }

  async fillContactForm({
    firstName = 'Test',
    lastName = 'Contact',
    email = 'primary@example.com',
  } = {}) {
    if (await this.firstNameField.count()) {
      await this.firstNameField.fill(firstName);
    }
    if (await this.lastNameField.count()) {
      await this.lastNameField.fill(lastName);
    }
    if (await this.emailField.count()) {
      await this.emailField.fill(email);
    }
  }

  async clickSave() {
    await this.saveButton.click();
  }

  async fillAddress(data = {}) {
    if (!data || Object.keys(data).length === 0) {
      return;
    }

    const street = data.Street || data.street;
    const postalCode = data['Postal Code'] || data.postalCode;
    const city = data.City || data.city;
    const state = data.State || data.state;
    const country = data.Country || data.country;

    const inputs = [
      { locator: this.page.locator('textarea, input').filter({ hasText: /Street|street/i }).first(), value: street },
      { locator: this.page.locator('input').filter({ hasText: /Postal|postal|Zip/i }).first(), value: postalCode },
      { locator: this.page.locator('input').filter({ hasText: /City|city/i }).first(), value: city },
      { locator: this.page.locator('input').filter({ hasText: /State|state/i }).first(), value: state },
      { locator: this.page.locator('input').filter({ hasText: /Country|country/i }).first(), value: country },
    ];

    for (const entry of inputs) {
      if (entry.value) {
        await entry.locator.fill(entry.value);
      }
    }
  }

  async expectRequiredIndicator(expectedSymbol = '*') {
    await expect(this.requiredIndicator).toHaveText(expectedSymbol);
  }
}
