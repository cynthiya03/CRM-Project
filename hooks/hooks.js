import { BeforeScenario } from '../src/fixtures/pageFixture.js';

BeforeScenario(async ({ loginPage }) => {
const username = process.env.TEST_USERNAME;
const password = process.env.TEST_PASSWORD;
await loginPage.openURL(process.env.BASE_URL);
await loginPage.dologin(username, password);
});