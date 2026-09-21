import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('the user is logged into the applicationAnd the user navigates to the Create Task page', async ({}) => {
  // Step: Given the user is logged into the applicationAnd the user navigates to the Create Task page
  // From: features/Calendar/create_task.feature:6:1
});

When('the user enters necessary details and clicks on Save button', async ({}) => {
  // Step: When the user enters necessary details and clicks on Save button
  // From: features/Calendar/create_task.feature:7:1
});

Then('the task should be successfully created', async ({}) => {
  // Step: Then the task should be successfully created
  // From: features/Calendar/create_task.feature:8:1
});

Given('the user is logged into the applicationAnd the user navigates to the Ceate Task page', async ({}) => {
  // Step: Given the user is logged into the applicationAnd the user navigates to the Ceate Task page
  // From: features/Calendar/create_task.feature:11:1
});

When('the user enter necessary details, and the user links accounts record name using the relationship selectionfield and links contact record name using contact selection and clicks Save button', async ({}) => {
  // Step: When the user enter necessary details, and the user links accounts record name using the relationship selectionfield and links contact record name using contact selection and clicks Save button
  // From: features/Calendar/create_task.feature:12:1
});

Then('the task record should be saved', async ({}) => {
  // Step: Then the task record should be saved
  // From: features/Calendar/create_task.feature:13:1
});

When('the user leaves the Subject field completely blank And the user leaves the Priority dropdown unselected And the user clicks the Save button', async ({}) => {
  // Step: When the user leaves the Subject field completely blank And the user leaves the Priority dropdown unselected And the user clicks the Save button
  // From: features/Calendar/create_task.feature:17:1
});

Then('the error message should be displayed to enter the mandatory fields', async ({}) => {
  // Step: Then the error message should be displayed to enter the mandatory fields
  // From: features/Calendar/create_task.feature:18:1
});

When('the user enters text into the Subject field And the user clicks the Cancel button', async ({}) => {
  // Step: When the user enters text into the Subject field And the user clicks the Cancel button
  // From: features/Calendar/create_task.feature:22:1
});

Then('No data should be saved', async ({}) => {
  // Step: Then No data should be saved
  // From: features/Calendar/create_task.feature:23:1
});




