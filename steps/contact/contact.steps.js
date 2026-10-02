import { Given, When, Then } from '../../src/fixtures/pageFixture.js';
import { expect } from '@playwright/test';

const buildUniqueLastName = () => `Contact_${Date.now()}`;
// TC51
Given('User land on Homepage', async ({ }) => {
   //await page.waitForLoadState('domcontentloaded');
});

When('the user hovers over the Contact tab', async ({ homePage }) => {
  await homePage.hoverTab(homePage.contactstab)
});

Then('the user should see Create Contact', async ({ contactPage }) => {
  await contactPage.verifyVisible(contactPage.createContactfield)
});

//TC52

When('the user clicks Create Contact', async ({ contactPage }) => {
  await contactPage.openCreateContact();
});

Then('the user should be redirected to the Create Contact page', async ({ contactPage }) => {
 await contactPage.verifyVisible(contactPage.createContactTitle)
});

// TC53
