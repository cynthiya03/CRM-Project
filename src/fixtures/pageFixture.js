import { test as base, createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage.js';
import { HomePage } from '../pages/homePage.js';
import { Account } from '../pages/Account/create_account.js';
import {viewaccount} from '../pages/Account/view_account.js';
import { importaccount} from '../pages/Account/import_account.js';


export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  createAccount: async ({ page }, use) => {
    const createAccount = new Account(page);
    await use(createAccount);
  },
  viewAccount: async ({ page }, use) => {
    const viewAccount = new viewaccount(page);
    await use(viewAccount);
  },
   ImportAccount: async ({ page }, use) => {
    const ImportAccount = new importaccount(page);
    await use(ImportAccount);
  },


  
});

export const {
  Given,
  When,
  Then,
  BeforeScenario,
  AfterScenario,
} = createBdd(test);
export { expect } from '@playwright/test';