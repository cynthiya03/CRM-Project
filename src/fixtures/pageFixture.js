import { test as base, createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage.js';
import { DocumentsPage } from '../pages/DocumentsPage.js';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  documentPage: async ({ page }, use) => {
    const documentPage = new DocumentsPage(page);
    await use(documentPage);
  },
  logger: async ({}, use) => {
    await use({ info: (message) => console.log(`[INFO] ${message}`) });
  },
});

export const { Given, When, Then, BeforeScenario } = createBdd(test);
export { expect } from '@playwright/test';