import { expect } from '@playwright/test';
import { BasePage } from '../Basepage.js';
export class importaccount extends BasePage {

constructor(page) {
     super(page);
this.page = page;
}

async verifyVisible(locator) {
    await expect(locator).toBeVisible();
  }


}