//import { createBdd } from "playwright-bdd";   
import { OpportunitiesPage } from "../../src/pages/opportunities.js";
//import {LoginPage } from "../../src/pages/LoginPage.js";
import { Given, When, Then, expect} from "../../src/fixtures/pageFixture.js";

//const{ Given,When, Then } = createBdd();

Given('User must have logged into the crm application', async ({page}) => {
  //const loginPage = new LoginPage(page);
  //await loginPage.openURL(process.env.BASE_URL)
  //await loginPage.dologin(data.username, data.password);
  // Step: Given User must have logged into the crm application
  // From: features/opportunities.feature:5:5
});

Given('User is on the CRM home page', async ({page}) => {
  await page.goto(process.env.BASE_URL);
  
});

When('User clicks the opportunities section', async ({page}) => {
  console.log("Current URL:", page.url());
  const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.clickOpportunities();
  
});

Then('User should see the opportunities landing page', async ({page}) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.checkOpportunitiesList();

});

Given('User is on the opportunities page', async ({page}) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.clickOpportunities();
  
});

When('User clicks create opportunities button from dropdown', async ({page}) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.hoverOpportunities();
  await opportunitiesPage.clickCreateOpportunity();
});

Then('User should see the new opportunities form where the user can enter details', async ({page}) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.checkCreateOpportunityForm();
  //expect(await opportunitiesPage.checkCreateOpportunityForm()).toBe(true);
});

When('User enters valid details on the form including Opportunity name, account name , amount and selects one sales stage and closing date and click save button', async ({page }) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.enterOpportunityName("Opportunity 1");
  await opportunitiesPage.selectAccountName("Kaos Trading Ltd");
  await opportunitiesPage.enterAmount("1000");
  await opportunitiesPage.selectSalesStage("Prospecting");
  await opportunitiesPage.closingDate("2026-12-31");
  await opportunitiesPage.clickSaveButton();

});

Then('New Opportunity should be created successfully', async ({page}) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.checkOpportunityCreated('Opportunity 1');
  });

Given('User is on the create opportunities page', async ({page}) => {
  const opportunitiesPage = new OpportunitiesPage(page);

  await opportunitiesPage.clickOpportunities();
  await opportunitiesPage.hoverOpportunities();
  await opportunitiesPage.clickCreateOpportunity();

  
});
When('User missed to enter mandatory information and clicks save', async ({page}) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.clickSaveButton();
});

Then('It throws validation error {string}', async ({page}, arg) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.checkValidationError(arg);
  
});

Given('user is on the opportunities page', async ({page}) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.clickOpportunities();
  await opportunitiesPage.hoverOpportunities();
  
});

When('user selects view opportunities', async ({page}) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.clickViewOpportunities();
});

Then('user should see the list of opportunities', async ({page}) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.checkOpportunitiesList();

});

Given('user is on the view opportunities page', async ({page}) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.clickOpportunities();
  await opportunitiesPage.hoverOpportunities();
  await opportunitiesPage.clickViewOpportunities();
  
});

When('user clicks any opportunity name on the list', async ({page}) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.clickViewOpportunitiesName();
});

Then('user should able to see all the details under that name', async ({page}) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.checkOpportunityNameDetails();
});
  

When('user clicks any opportunity account name on the list', async ({page}) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.clickViewAccountName();
});

Then('user should able to see all the details under that account name', async ({page}) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.checkAccountNameDetails();
});

When('user clicks import opportunities', async ({page}) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.hoverOpportunities();
  await opportunitiesPage.clickImportOpportunities();
});

Then('user should see steps for upload import file', async ({page}) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.checkImportOpportunitiesDetails();
});

Given('user is on the import opportunities page', async ({page}) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.clickOpportunities();
  await opportunitiesPage.hoverOpportunities();
  await opportunitiesPage.clickImportOpportunities();
});

When('user clicks choose file', async ({page}) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  const filePath = './Data/Opportunities.csv';
  await opportunitiesPage.clickChooseFile(filePath);
});

Then('user should be redirected to choose file from their system', async ({page}) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  expect(await opportunitiesPage.checkFileSelected()).not.toBe('');
});

When('user clicks next', async ({page}) => {
  const opportunitiesPage = new OpportunitiesPage(page);
  await opportunitiesPage.clickNextButton();
});

Then('It throws an error that {string}', async ({page}, arg) => {
  const opportunitiesPage = new OpportunitiesPage(page);
   await opportunitiesPage.checkImportErrorMessage(arg);
});
