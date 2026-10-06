import { expect } from '@playwright/test';

export class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page, logger) {
    this.page = page;
    this.logger = logger;
  }

  async hoverTab(locator) {
    await expect(locator).toBeVisible();
    await locator.hover();
  }


 async verifyVisible(locator){
    await expect(locator).toBeVisible();
    
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


async fillFields(fieldMap, data) {
  for (const [column, locator] of Object.entries(fieldMap)) {
    if (!Object.hasOwn(data, column)) {
      throw new Error(`Excel column not found: ${column}`);
    }

    await locator.fill(String(data[column] ?? ''));
  }
}

async verifyFields(fieldMap, data) {
  for (const [column, locator] of Object.entries(fieldMap)) {
    if (!Object.hasOwn(data, column)) {
      throw new Error(`Excel column not found: ${column}`);
    }

    await expect(locator, `Verify field: ${column}`)
      .toHaveValue(String(data[column] ?? ''));
  }
}
}