import { expect } from '@playwright/test';
import { BasePage } from '../Basepage.js';
export class importaccount extends BasePage {

constructor(page) {
     super(page);
this.page = page;
}
async open() {
  const url = process.env.ACCOUNTS_LIST_URL;

  if (!url) {
    throw new Error('ACCOUNTS_LIST_URL is missing.');
  }

  await this.page.goto(url);
}



}