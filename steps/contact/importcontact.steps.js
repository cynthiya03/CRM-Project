import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd(); 
Given('the user is on the Contact page', async ({}) => {
  // Step: Given the user is on the Contact page
  // From: features\import_contact.feature:6:5
});

When('the user clicks Import Contact', async ({}) => {
  // Step: When the user clicks Import Contact
  // From: features\import_contact.feature:7:5
});

Then('the user should be redirected to the Import Contact page', async ({}) => {
  // Step: Then the user should be redirected to the Import Contact page
  // From: features\import_contact.feature:8:5
});

Given('the user is on the import file page', async ({}) => {
  // Step: Given the user is on the import file page
  // From: features\import_contact.feature:12:5
});

When('the user clicks Choose File', async ({}) => {
  // Step: When the user clicks Choose File
  // From: features\import_contact.feature:13:5
});

When('the user selects a contact file to import', async ({}) => {
  // Step: And the user selects a contact file to import
  // From: features\import_contact.feature:14:5
});

Then('the selected contact file should be shown in the Choose File option', async ({}) => {
  // Step: Then the selected contact file should be shown in the Choose File option
  // From: features\import_contact.feature:15:5
});

When('the user selects {string}', async ({}, arg) => {
  // Step: When the user selects "Create new records only"
  // From: features\import_contact.feature:20:5
});

Then('{string} should be selected', async ({}, arg) => {
  // Step: Then "Create new records only" should be selected
  // From: features\import_contact.feature:21:5
});