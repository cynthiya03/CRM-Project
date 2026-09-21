const { createBdd } = require('playwright-bdd');
const { Given, When, Then } = createBdd();


Given('User Land on view Account page', async ({}) => {
  // Step: Given User Land on view Account page
  // From: features\View_account.feature:7:5
});

When('User view the account list', async ({}) => {
  // Step: When User view the account list
  // From: features\View_account.feature:8:5
});

Then('User should see Name column be displayed', async ({}) => {
  // Step: Then User should see Name column be displayed
  // From: features\View_account.feature:9:5
});

Then('City column should be displayed', async ({}) => {
  // Step: And City column should be displayed
  // From: features\View_account.feature:10:5
});

Then('Billing Country column should be displayed', async ({}) => {
  // Step: And Billing Country column should be displayed
  // From: features\View_account.feature:11:5
});

Then('Phone column should be displayed', async ({}) => {
  // Step: And Phone column should be displayed
  // From: features\View_account.feature:12:5
});

Then('User column should be displayed', async ({}) => {
  // Step: And User column should be displayed
  // From: features\View_account.feature:13:5
});

Then('Email Address column should be displayed', async ({}) => {
  // Step: And Email Address column should be displayed
  // From: features\View_account.feature:14:5
});
