import { expect } from '@playwright/test';
import { BasePage } from './Basepage.js';
export class HomePage extends BasePage {
    
  constructor(page) {
    super(page);
    this.page = page;

    this.Accountpage = page.getByText('Accounts', { exact: true }).first();
    this.create_accounts = page.getByRole('link', { name: 'Create Account' });
    this.view_accounts = page.getByRole('link', { name: 'View Accounts' });
    this.import_accounts = page.getByRole('link', { name: 'Import Accounts' });
    this.createAccountTitle = page.getByText('Create', { exact: true }).first();
    
  }


async accountclick() {
  await expect(this.Accountpage).toBeVisible();
  await this.Accountpage.click();
}

  async verifyVisible(locator) {
    await expect(locator).toBeVisible();
  }
  
}