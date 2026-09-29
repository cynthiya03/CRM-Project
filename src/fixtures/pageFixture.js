import { test as base, createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage.js';
import { HomePage } from '../pages/homePage.js';
import { Account } from '../pages/Account/create_account.js';
import {viewaccount} from '../pages/Account/view_account.js';
import { importaccount} from '../pages/Account/import_account.js';
import { once } from 'node:events';
import { createTestLogger } from '../utils/logger.js';
import {createquotePage} from '../pages/create_quote.js';


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
  viewAccount: async ({ page, logger}, use) => {
    const viewAccount = new viewaccount(page, logger);
    await use(viewAccount);
  },
   ImportAccount: async ({ page }, use) => {
    const ImportAccount = new importaccount(page);
    await use(ImportAccount);
  },
  createquotePage: async ({ page }, use) => {
    const createquotePage = new createquotePage(page);
    await use(createquotePage);
  },


logger: async ({}, use, testInfo) => {
  const logger = createTestLogger(testInfo);

  logger.info('Scenario started');

  try {
    await use(logger);
  } finally {
    logger.info(`Scenario finished: ${testInfo.status}`);

    // Wait for pending log messages to be written.
    const finished = once(logger, 'finish');
    logger.end();
    await finished;

    await testInfo.attach('Execution log', {
      path: testInfo.outputPath('execution.log'),
      contentType: 'text/plain',
    });
  }
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