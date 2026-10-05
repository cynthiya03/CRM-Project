import { expect } from '@playwright/test';
import { Given, When, Then, BeforeScenario} from '../../src/fixtures/pageFixture.js';



//const { Given, When, Then } = createBdd();


Given('User is in the View Quotes page', async ({viewquotePage}) => {
 
await viewquotePage.openViewQuotesPage();
});

When('the user clicks on the quote title link', async ({viewquotePage}) => {
  await viewquotePage.clickquoteTitleLink();

});

Then('the system should display the detail view page for the quote selected', async ({viewquotePage}) => {
 await viewquotePage.quoteTitlelinkpage();
});

When('the user clicks the phone icon shortcut on the quote title row', async ({viewquotePage}) => {
await viewquotePage.clickoncalllogButton();
});

Then('Create Call page should be opened', async ({viewquotePage}) => {
  await viewquotePage.pagedisplaycalllog();
});

When('the user clicks the calendar icon shortcut on the quote title row', async ({viewquotePage}) => {
  await viewquotePage.clickonscheduleMeetingButton();
});


Then('Create Meetings page should be opened', async ({viewquotePage}) => {
 await viewquotePage.pagedisplayedonSchedulemeeting();
});

When('the user clicks the create task icon shortcut on the quote title row', async ({viewquotePage}) => {
  await viewquotePage.clickoncreateTaskButton();
});

Then('Create Task should be opened', async ({viewquotePage}) => {
  await viewquotePage.pagedisplayoncreateTask();
});

When('the user clicks the compose email icon shortcut on the quote title row', async ({viewquotePage}) => {
await viewquotePage.clickoncomposeEmailButton();
});

Then('New Email window should be opened', async ({viewquotePage}) => {
   await viewquotePage.pagedisplayoncomposeEmail();
});

