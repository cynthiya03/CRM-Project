import {
  BeforeScenario,
  AfterScenario,
} from '../src/fixtures/pageFixture.js';
import { expect } from '@playwright/test';

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
  { tags: ' @createaccount or @createaccountform'},
  async ({ page }) => { 
    const createaccountsUrl = 'https://suite8demo.suiteondemand.com/#/accounts/edit?return_module=Accounts&return_action=DetailView';
if (!createaccountsUrl) {
      throw new Error('CREATE_ACCOUNTS_URL is missing.');
    }
    await page.goto(createaccountsUrl);
    console.log('Current URL:', page.url());
});

BeforeScenario({ tags:'@ViewAccountpage'}, async ({ page }) => {
  
  if (!process.env.viewAccount_URL) {
    throw new Error('viewAccount_URL is missing.');
  }

  //await page.goto(viewAccount_URL);
  await page.goto(process.env.viewAccount_URL);
  console.log('Current URL:', page.url());
});
  