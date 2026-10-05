import { test as base, createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage.js';
import { HomePage } from '../pages/homePage.js';
import { Account } from '../pages/Account/create_account.js';
import {viewaccount} from '../pages/Account/view_account.js';
import { importaccount} from '../pages/Account/import_account.js';
import { once } from 'node:events';
import { ContactPage } from '../pages/contactpage.js';
import { createTestLogger } from '../utils/logger.js';
import {CreateQuotePage} from '../pages/create_quote.js';
import { ViewQuotePage } from '../pages/view_quote.js';
import { ImportQuotePage } from '../pages/import_quote.js';
import { CreateTaskPage } from '../pages/create_task.js';


export const test = base.extend({
  storageState: async ({ browserName }, use, testInfo) => {
  const startLoggedOut =
    testInfo.tags.includes('@login') ||
    testInfo.project.name.startsWith('setup-');

  await use(
    startLoggedOut
      ? { cookies: [], origins: [] }
      : `playwright/.auth/${browserName}.json`
  );
},

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
  contactPage: async ({ page }, use) => {
    const contactPage = new ContactPage(page);
    await use(contactPage);
  },
  createquotePage: async ({ page }, use) => {
  const createquotePage = new CreateQuotePage(page);
  await use(createquotePage);
},
  
  viewquotePage : async ({ page }, use) => {
    const viewquotePage = new ViewQuotePage(page);
    await use(viewquotePage);

  },
  importquotePage : async ({ page }, use) => {
    const importquotePage = new ImportQuotePage(page);
    await use(importquotePage);
  },  

  createtaskPage : async ({ page }, use) => {
    const createtaskPage = new CreateTaskPage(page);
    await use(createtaskPage);
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
