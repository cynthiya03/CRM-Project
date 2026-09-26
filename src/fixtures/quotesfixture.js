import { test as base, createBdd } from 'playwright-bdd';
import { CreateQuotePage } from '../pages/create_quote.js';

export const test = base.extend({
  createQuotePage: async ({ page }, use) => {
    await use(new CreateQuotePage(page));
  },

  // Keep any other existing fixtures here.
});

export const { Given, When, Then } = createBdd(test);
