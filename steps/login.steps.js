//import{test, expect} from  '@playwright/test'

import { test } from '/../src/fixtures/pageFixture.js';
import { createBdd } from 'playwright-bdd';


const { BeforeScenario } = createBdd(test);

BeforeScenario({ tags: '@login' }, async ({ loginPage }) => {
  await loginPage.dologin(process.env.TEST_USERNAME, process.env.TEST_PASSWORD)
});

const { Given, When, Then } = createBdd();
Given('User opens the CRM login page', async ({}) => {

});

When('User logs in with valid credentials', async ({}) => {
  // Step: When User logs in with valid credentials
  // From: features\login.feature:6:5
});

Then('User should be redirected to the CRM home page', async ({}) => {
  // Step: Then User should be redirected to the CRM home page
  // From: features\login.feature:7:5
});

When('User logs in with a valid username and an incorrect password', async ({}) => {
  // Step: When User logs in with a valid username and an incorrect password
  // From: features\login.feature:13:5
});

Then('User should see an invalid credentials message', async ({}) => {
  // Step: Then User should see an invalid credentials message
  // From: features\login.feature:14:5
});

Then('User should remain on the CRM login page', async ({}) => {
  // Step: And User should remain on the CRM login page
  // From: features\login.feature:15:5
});

When('User submits the login form without entering credentials', async ({}) => {
  // Step: When User submits the login form without entering credentials
  // From: features\login.feature:20:5
});

Then('User should see validation for the required username and password', async ({}) => {
  // Step: Then User should see validation for the required username and password
  // From: features\login.feature:21:5
});
