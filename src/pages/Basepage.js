
export class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }
async openPage(url) {
  if (!url) {
    throw new Error('Page URL is missing. Check your environment file.');
  }

  await this.page.goto(url);
}

async verifyVisible(locator) {
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

}