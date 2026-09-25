import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();


Given('user land on Homepage', async ({}) => {
  // Step: Given user land on Homepage
  // From: features\importContact_Vcard.feature:5:5
});

When('the user hovers over the Contact tab', async ({}) => {
  // Step: When the user hovers over the Contact tab
  // From: features\importContact_Vcard.feature:6:5
});

Then('the user should see importcontactfromVcard', async ({}) => {
  // Step: Then the user should see importcontactfromVcard
  // From: features\importContact_Vcard.feature:7:5
});

When('the user clicks Create Contact from vCard', async ({}) => {
  // Step: When the user clicks Create Contact from vCard
  // From: features\importContact_Vcard.feature:12:5
});

Then('the user should be redirected to the Import vCard page', async ({}) => {
  // Step: Then the user should be redirected to the Import vCard page
  // From: features\importContact_Vcard.feature:13:5
});

Given('the user is on the Import vCard page', async ({}) => {
  // Step: Given the user is on the Import vCard page
  // From: features\importContact_Vcard.feature:17:5
});

When('the user selects a vCard file', async ({}) => {
  // Step: And the user selects a vCard file
  // From: features\importContact_Vcard.feature:19:5
});

Then('the chosen file should appear on the page', async ({}) => {
  // Step: Then the chosen file should appear on the page
  // From: features\importContact_Vcard.feature:20:5
});