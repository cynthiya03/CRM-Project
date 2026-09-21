import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();


Given('The user is logged into the application And the user navigates to the Create Calls page', async ({}) => {
  // Step: Given The user is logged into the application And the user navigates to the Create Calls page
  // From: features/create_call.feature:6:1
});

When('the user fills in all necessary details', async ({}) => {
  // Step: When the user fills in all necessary details
  // From: features/create_call.feature:7:1
});

Then('call record should be successfully created', async ({}) => {
  // Step: Then call record should be successfully created
  // From: features/create_call.feature:8:1
});

Given('the reminders section displays default reminder actions', async ({}) => {
  // Step: Given the reminders section displays default reminder actions
  // From: features/create_call.feature:11:1
});

When('the user clicks the Add reminder button', async ({}) => {
  // Step: When the user clicks the Add reminder button
  // From: features/create_call.feature:12:1
});

Then('a new row for configuring a reminder should be appended to the list', async ({}) => {
  // Step: Then a new row for configuring a reminder should be appended to the list
  // From: features/create_call.feature:13:1
});

When('the user clicks the Remove reminder button', async ({}) => {
  // Step: When the user clicks the Remove reminder button
  // From: features/create_call.feature:17:1
});

Then('the last added reminder configuration row should be removed from the view', async ({}) => {
  // Step: Then the last added reminder configuration row should be removed from the view
  // From: features/create_call.feature:18:1
});

When('the user enters data into the Subject fiel dAnd the user clicks the Cancel button', async ({}) => {
  // Step: When the user enters data into the Subject fiel dAnd the user clicks the Cancel button
  // From: features/create_call.feature:22:1
});

Then('the system should discard all unsaved entries And the user should be redirected back to the Calls dashboard view', async ({}) => {
  // Step: Then the system should discard all unsaved entries And the user should be redirected back to the Calls dashboard view
  // From: features/create_call.feature:23:1
});

