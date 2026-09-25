
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
}}