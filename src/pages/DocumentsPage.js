import { expect } from '@playwright/test';

export class DocumentsPage {
  constructor(page) {
    this.page = page;
    this.documentsMenu = page.locator('a').filter({ hasText: /^Documents$/ }).first();
    this.createDocumentLink = page.getByRole('link', { name: 'Create Document', exact: true });
    this.viewDocumentLink = page.getByRole('link', { name: 'View Documents' });
    this.saveButton = page.getByRole('button', { name: /^save$/i });
  }

  async openDocumentsMenu() {
    await this.documentsMenu.hover();
  }

  // An app error banner can cover the nav and intercept clicks.
  async dismissAlerts() {
    const alert = this.page.getByRole('alert').first();
    if (await alert.isVisible()) {
      console.log('Dismissing alert:', (await alert.innerText()).trim());
      await alert.getByRole('button').first().click({ timeout: 5000 }).catch(() => {});
      await expect(alert).toBeHidden({ timeout: 15000 });
    }
  }

  async expectMenuOption(option) {
      const optionLocator = this.page.getByRole('link', {
        name: option,
        exact: true,
      });
    
      await expect(optionLocator).toBeVisible();
    }
  

  async openCreateDocument() {
    await this.dismissAlerts();
    await this.openDocumentsMenu();
    await expect(this.createDocumentLink).toBeVisible();
    await this.createDocumentLink.click();
    await expect(this.page).toHaveURL(
      'https://suite8demo.suiteondemand.com/#/documents/edit?return_module=Documents&return_action=DetailView',
      { timeout: 15000 }
    );
  }


   async fillDocument(fields) {
    const values = Object.fromEntries(fields.map(({ Field, Value }) => [Field, Value]));
    const fieldWrapper = (label) =>
      this.page
        .getByText(new RegExp(`^${label.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}$`, 'i'))
        .locator('xpath=ancestor::div[.//input or .//select][1]');

    if (values.File) {
      await this.page.setInputFiles('input[type="file"]', values.File);
    }
    await fieldWrapper('Document Name').locator('input').fill(values['Document Name']);
    await fieldWrapper('Publish Date').locator('input').fill(values['Publish Date']);
    await fieldWrapper('Revision').locator('input').fill(values.Revision);
    await fieldWrapper('Document Type').locator('select').selectOption({ label: values['Document Type'] });
    await fieldWrapper('Category').locator('select').selectOption({ label: values.Category });
    await fieldWrapper('Status').locator('select').selectOption({ label: values.Status });
    await fieldWrapper('Expiration Date').locator('input').fill(values['Expiration Date']);
    await fieldWrapper('Sub Category').locator('select').selectOption({ label: values['Sub Category'] });
  }

  async save() {
    await this.saveButton.click();
  }

  async expectDocumentCreated(name) {
    await expect(this.page.locator('scrm-dynamic-label').getByText(name, { exact: true })).toBeVisible();
  }

  async openViewDocuments() {
    await this.viewDocumentLink.click();
    await expect(this.page).toHaveURL(/documents/, { timeout: 15000 });
  }

  async expectDocumentFields(fields) {
    for (const field of fields) {
      await expect(this.page.getByText(field, { exact: true })).toBeVisible();
    }
  }
}