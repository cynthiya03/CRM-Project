import { expect } from '@playwright/test';

export class DocumentsPage {
  constructor(page) {
    this.page = page;
    this.documentsMenu = page.locator('a').filter({ hasText: /^Documents$/ }).first();
    this.createDocumentLink = page.getByText('Create Document', { exact: true });
    this.viewDocumentLink = page.getByRole('link', { name: 'View Documents' });
    this.saveButton = page.getByRole('button', { name: /^save$/i });
  }

  async openDocumentsMenu() {
    await this.documentsMenu.hover();
  }

  async expectMenuOption(option) {
      const optionLocator = this.page.getByRole('link', {
        name: option,
        exact: true,
      });
    
      await expect(optionLocator).toBeVisible();
    }
  

  async openCreateDocument() {
    await this.createDocumentLink.click();
    await expect(this.page).toHaveURL('https://suite8demo.suiteondemand.com/#/documents/edit?return_module=Documents&return_action=DetailView');
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

//   async fillDocument(fields) {
//     for (const { Field, Value } of fields) {
//       if (Field === 'File') {
//         await this.page.getByLabel('File', { exact: true }).setInputFiles(Value);
//         continue;
//       }
// await page.getByRole('link', { name: 'Create Document' }).click();
//       if (Field === 'Template?') {
//         await this.page.getByLabel('Template?', { exact: true }).selectOption({ label: Value });
//         continue;
//       }

//       const field = this.page.getByLabel(Field, { exact: true });
//       const tagName = await field.evaluate((element) => element.tagName);
//       if (tagName === 'SELECT') {
//         await field.selectOption({ label: Value });
//       } else {
//         await field.fill(Value);
//       }
//     }
//   }

  async save() {
    await this.saveButton.click();
  }

  async expectDocumentCreated(name) {
    await expect(this.page.locator('scrm-dynamic-label').getByText(name, { exact: true })).toBeVisible();
  }

  async openViewDocuments() {
    await this.viewDocumentLink.click();
    await expect(this.page).toHaveURL(/documents/);
  }

  async expectDocumentFields(fields) {
    for (const field of fields) {
      await expect(this.page.getByText(field, { exact: true })).toBeVisible();
    }
  }
}