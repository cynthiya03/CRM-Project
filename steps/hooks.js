import {
  BeforeScenario,
  AfterScenario,
} from '../src/fixtures/pageFixture.js';


// Runs before every scenario in the tagged feature.
BeforeScenario(
  { tags: '@AccountfieldisDisplayed or @AccountNavigation or @ContactsNavigation' },
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
    
if (!process.env.createAccount_URL) {
      throw new Error('CREATE_ACCOUNTS_URL is missing.');
    }
    await page.goto(process.env.createAccount_URL);
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
  

BeforeScenario({ tags:'@importAccount'}, async ({ page }) => {
  
  if (!process.env.importAccount_URL) {
    throw new Error('importAccount_URL is missing.');
  }
 //await page.goto(viewAccount_URL);
  await page.goto(process.env.importAccount_URL);
  console.log('Current URL:', page.url());
});

BeforeScenario(
  { tags: '@Contacts or @contact' },
  async ({ page }) => {
    await page.goto(process.env.BASE_URL || 'https://suite8demo.suiteondemand.com/#/home');
    await page.waitForLoadState('domcontentloaded');
    console.log('Current URL:', page.url());
  }
);

BeforeScenario(
  { tags: '@createContact' },
  async ({ page }) => {
    await page.goto(process.env.createContact_URL);
    await page.waitForLoadState('domcontentloaded');
    console.log('Current URL:', page.url());
  }
);

AfterScenario(
  { tags: '@TC017' },
  async ({ page }) => {
    await page.frameLocator('iframe').locator('#undo').click();
    console.log('Cleanup after TC017');
  }
);