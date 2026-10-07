//import { createBdd } from "playwright-bdd";
import { Given, When, Then, expect } from '../../src/fixtures/pageFixture.js';
import LeadsPage from '../../src/pages/leads.js';

When('User clicks the Leads section', async ({leadsPage}) => {
  await leadsPage.clickLeads();
});

Then('User should see the leads landing page', async ({leadsPage}) => {
  await leadsPage.checkLeadsLandingPage();
});

Given('User is on the leads page', async ({leadsPage}) => {
  await leadsPage.clickLeads();
});

When('User clicks create lead button from dropdown', async ({leadsPage}) => {
  await leadsPage.hoverLeads();
  await leadsPage.clickCreateLead();
});

Then('User should see the new leads form where the user can enter details', async ({leadsPage}) => {
  await leadsPage.checkCreateLeadForm();
});

Then('User should see overview, more information and other information options', async ({leadsPage}) => {
  await leadsPage.checkLeadInformationTabs();
});

Given('User is on the Create leads page', async ({leadsPage}) => {
  await leadsPage.hoverLeads();
  await leadsPage.clickCreateLead();
});

When('User clicks overview', async ({leadsPage}) => {
  await leadsPage.overviewTab.click();
});

Then('User should see first name,last name,job title,department,account name,primary address and email address fields', async ({leadsPage}) => {
    await leadsPage.checkLeadOverviewFields();

});

Then('User should see email opt out option,description box,whose assigned,mobile and office phone fields,website field', async ({leadsPage}) => {
    await leadsPage.checkAdditionalLeadFields();
});
When('User enters valid details on the form', async ({leadsPage}) => {
    await leadsPage.clickSave();
});

Then('New lead should be created successfully', async ({leadsPage}) => {
  await leadsPage.checkLeadCreatedSuccessfully('Sam Adam');
});

When('user leaves any manadatory fields blank and clicks save button', async ({leadsPage}) => {
  await leadsPage.clickSave();
});

Then('user should see the error msg {string}', async ({leadsPage}, arg) => {
  await leadsPage.checkValidationError();
});

When('user lands on Create Lead by Vcard', async ({leadsPage}) => {
  await leadsPage.hoverLeads();
  await leadsPage.clickCreateLeadFromVcard();
});

Then('user should see import V card', async ({leadsPage}) => {
  await leadsPage.checkImportVCardPage();
});

Given('User is on the create lead from Vcard page', async ({leadsPage}) => {
  await leadsPage.hoverLeads();
  await leadsPage.clickCreateLeadFromVcard();
});

When('user clicks choose file option', async ({leadsPage}) => {
  await leadsPage.chooseVCardFile();
  await leadsPage.clickImportVCard();
});

Then('File can be imported', async ({leadsPage}) => {
  await leadsPage.checkVCardImported();
});

Given('user is on the leads page', async ({leadsPage}) => {
  await leadsPage.hoverLeads();
});
When('user selects view leads from dropdown', async ({leadsPage}) => {
  await leadsPage.hoverLeads();
  await leadsPage.clickViewLeads();
});

Then('user should land on viewleads page', async ({leadsPage}) => {
  await leadsPage.checkViewLeadsPage();
});

Given('user is on the view leads page', async ({leadsPage}) => {
  await leadsPage.hoverLeads();
  await leadsPage.clickViewLeads();
});

When('user sees information on the view leads page', async ({leadsPage}) => {
  await leadsPage.checkViewLeadsPage();
});

Then('user should see name,status,account,phone,email and user details', async ({leadsPage}) => {
  await leadsPage.checkViewLeadColumns();
});

When('user clicks on any name on view leads page', async ({leadsPage}) => {
  await leadsPage.clickLeadName();
});

Then('user should see the information for that particular name', async ({leadsPage}) => {
  await leadsPage.checkLeadDetailPage();
});

When('user selects import leads from dropdown', async ({leadsPage}) => {
  await leadsPage.hoverLeads();
  await leadsPage.clickImportLeads();
});

Then('user should redirected to that particular page', async ({leadsPage}) => {
  await leadsPage.checkImportLeadsSteps();
});

When('user lands on import leads page', async ({leadsPage}) => {
  await leadsPage.hoverLeads();
  await leadsPage.clickImportLeads();
});
Then('user should see steps for import file', async ({leadsPage}) => {
  await leadsPage.checkImportLeadsSteps();
});
Given('user is on the import leads page', async ({leadsPage}) => {
  await leadsPage.hoverLeads();
  await leadsPage.clickImportLeads();
});

When('user clicks next without uploading a file', async ({leadsPage}) => {
  await leadsPage.clickNextWithoutFile();
});

Then('user should see the missing-file validation error {string}', async ({leadsPage}, errorMessage) => {
  await leadsPage.checkMissingFileError(errorMessage);
  
});