import { createBdd } from 'playwright-bdd';
// Import the test wrapper that provides `loginPage` fixture
import { test } from '../src/fixtures/pageFixture.js';

// Extract BeforeScenario linked to your custom fixtures
const { BeforeScenario } = createBdd(test);

BeforeScenario(async ({ loginPage }) => {
  const username = process.env.TEST_USERNAME;
  const password = process.env.TEST_PASSWORD;

  await loginPage.openURL(process.env.BASE_URL);
  await loginPage.dologin(username, password);
});

