import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();



Given('The user navigates to the Create Meetings page', async ({}) => {
  // Step: Given The user navigates to the Create Meetings page
  // From: features/create_meeting.feature:6:1
});

When('The user enters all the necesssary fields', async ({}) => {
  // Step: When The user enters all the necesssary fields
  // From: features/create_meeting.feature:7:1
});

Then('The meeting should be successfully created', async ({}) => {
  // Step: Then The meeting should be successfully created
  // From: features/create_meeting.feature:8:1
});

When('the user leaves the Subject, Start Date, and End Date fields empty And the user clicks the Save button', async ({}) => {
  // Step: When the user leaves the Subject, Start Date, and End Date fields empty And the user clicks the Save button
  // From: features/create_meeting.feature:12:1
});

Then('The system should display a validation error message for mandatory fields and the meeting should not be created', async ({}) => {
  // Step: Then The system should display a validation error message for mandatory fields and the meeting should not be created
  // From: features/create_meeting.feature:13:1
});

Given('The form has a default reminder action Popup set to thirty minutes prior', async ({}) => {
  // Step: Given The form has a default reminder action Popup set to thirty minutes prior
  // From: features/create_meeting.feature:16:1
});

When('the user clicks the X icon next to the Email invitees reminder', async ({}) => {
  // Step: When the user clicks the X icon next to the Email invitees reminder
  // From: features/create_meeting.feature:17:1
});

Then('Email invitees reminder block should be removed', async ({}) => {
  // Step: Then Email invitees reminder block should be removed
  // From: features/create_meeting.feature:18:1
});

When('the user clicks the  Add reminder button', async ({}) => {
  // Step: When the user clicks the  Add reminder button
  // From: features/create_meeting.feature:22:1
});

Then('a new reminder configurations row should appear on the page', async ({}) => {
  // Step: Then a new reminder configurations row should appear on the page
  // From: features/create_meeting.feature:23:1
});

When('the user clicks the - Remove reminder button', async ({}) => {
  // Step: When the user clicks the - Remove reminder button
  // From: features/create_meeting.feature:27:1
});

Then('the added reminder configurations row should be removed', async ({}) => {
  // Step: Then the added reminder configurations row should be removed
  // From: features/create_meeting.feature:28:1
});

Given('The user navigates to the Meetings Create page and checks the Other section', async ({}) => {
  // Step: Given The user navigates to the Meetings Create page and checks the Other section
  // From: features/create_meeting.feature:31:1
});

When('the user fills all details and click on Search', async ({}) => {
  // Step: When the user fills all details and click on Search
  // From: features/create_meeting.feature:32:1
});

Then('matching contact or lead results should be displayed in the search grid', async ({}) => {
  // Step: Then matching contact or lead results should be displayed in the search grid
  // From: features/create_meeting.feature:33:1
});

When('The user scrolls down to the Create an invitee section and the user clicks the As Contact button', async ({}) => {
  // Step: When The user scrolls down to the Create an invitee section and the user clicks the As Contact button
  // From: features/create_meeting.feature:37:1
});


Then('Fields to create a new contact  First Name, Last Name and Email should appear along with Create & Add button and Cancel button', async ({}) => {
  // Step: Then Fields to create a new contact  First Name, Last Name and Email should appear along with Create & Add button and Cancel button
  // From: features/create_meeting.feature:38:1
});

Given('he user navigates to the Create Meetings page', async ({}) => {
  // Step: Given he user navigates to the Create Meetings page
  // From: features/create_meeting.feature:41:1
});

When('The user enters data into the Subject field And the user clicks the Cancel button', async ({}) => {
  // Step: When The user enters data into the Subject field And the user clicks the Cancel button
  // From: features/create_meeting.feature:42:1
});

Then('the system should discard all unsaved changes', async ({}) => {
  // Step: Then the system should discard all unsaved changes
  // From: features/create_meeting.feature:43:1

});


