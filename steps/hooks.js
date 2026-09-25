import {
  BeforeScenario,
  AfterScenario,
} from '../src/fixtures/pageFixture.js';

// Runs before every scenario in the tagged feature.
BeforeScenario(
  { tags: '@AccountfieldisDisplayed' },
  async ({ page }) => {
   if (!process.env.ACCOUNTS_URL) {
      throw new Error('ACCOUNTS_URL is missing.');
    }
    await page.goto(process.env.ACCOUNTS_URL);
    console.log('Current URL:', page.url());
});

// run before @createaccount
BeforeScenario(
  { tags: '@createaccount' },
  async ({ page }) => { 
    const createaccountsUrl = 'https://suite8demo.suiteondemand.com/#/accounts/edit?return_module=Accounts&return_action=DetailView';
if (!process.env.ACCOUNTS_URL) {
      throw new Error('ACCOUNTS_URL is missing.');
    }
    await page.goto(createaccountsUrl);
    console.log('Current URL:', page.url());
});

