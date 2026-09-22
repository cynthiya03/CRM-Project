import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();


Given('User is in the View Quotes page', async ({}) => {
  // Step: Given User is in the View Quotes page
  // From: features/view_quotes.feature:6:1
});

When('the user clicks on the quote title link', async ({}) => {
  // Step: When the user clicks on the quote title link
  // From: features/view_quotes.feature:7:1
});

Then('the system should display the detail view page for the quote selected', async ({}) => {
  // Step: Then the system should display the detail view page for the quote selected
  // From: features/view_quotes.feature:8:1
});

When('the user clicks the phone icon shortcut on the quote title row', async ({}) => {
  // Step: When the user clicks the phone icon shortcut on the quote title row
  // From: features/view_quotes.feature:12:1
});

Then('Create Call page should be opened', async ({}) => {
  // Step: Then Create Call page should be opened
  // From: features/view_quotes.feature:13:1
});

When('the user clicks the calendar icon shortcut on the quote title row', async ({}) => {
  // Step: When the user clicks the calendar icon shortcut on the quote title row
  // From: features/view_quotes.feature:17:1
});

Then('Create Meetings page should be opened', async ({}) => {
  // Step: Then Create Meetings page should be opened
  // From: features/view_quotes.feature:18:1
});

When('the user clicks the create task icon shortcut on the quote title row', async ({}) => {
  // Step: When the user clicks the create task icon shortcut on the quote title row
  // From: features/view_quotes.feature:22:1
});

Then('Create Task should be opened', async ({}) => {
  // Step: Then Create Task should be opened
  // From: features/view_quotes.feature:23:1
});

When('the user clicks the compose email icon shortcut on the quote title row', async ({}) => {
  // Step: When the user clicks the compose email icon shortcut on the quote title row
  // From: features/view_quotes.feature:27:1
});

Then('New Email window should be opened', async ({}) => {
  // Step: Then New Email window should be opened
  // From: features/view_quotes.feature:28:1
});