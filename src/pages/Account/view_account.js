import { expect } from '@playwright/test';
import { BasePage } from '../Basepage.js';
export class viewaccount extends BasePage {

constructor(page) {
     super(page);
this.page = page;
}

// AccountsListPage.js
async open() {
  const url =  process.env.viewAccount_URL;

  if (!url) {
    throw new Error('viewAccount_URL is missing.');
  }

  await this.page.goto(url);
}


}