import { expect } from '@playwright/test';

export class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

async verifyVisible(locator) {
    await expect(locator).toBeVisible({ timeout: 15000 });
  }

  async fillField(locator, value) {
  await locator.fill(value);
}

async clickSaveButton() {
  await this.saveButton.click();
}

async openAccount(uniqueName) {
  await this.page.getByRole('link', {
    name: uniqueName,
    exact: true,
  }).click();
}

}