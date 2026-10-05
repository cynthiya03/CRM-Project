import { Given, When, Then } from '../../src/fixtures/pageFixture.js';
import { ExcelHelper } from '../../src/utils/excelHelper.js';

const TASK_FILE = 'TaskData.xlsx';
const TASK_SHEET = 'CreateTask';
const getTask = (id) => ExcelHelper.getRow(TASK_FILE, TASK_SHEET, 'TestCaseID', id);


Given('the user is logged into the applicationAnd the user navigates to the Create Task page', async ({createtaskPage}) => {
   async ({ createtaskPage }) => { await createtaskPage.openCreateTaskPage(); }
});

When('the user enters necessary details and clicks on Save button', async ({createtaskPage}) => {
  await createtaskPage.fillTaskDetails(getTask('task1'));
  await createtaskPage.clickSave();
});

Then('the task should be successfully created', async ({}) => {
  // Step: Then the task should be successfully created
  // From: features/Calendar/create_task.feature:8:1
});

Given('the user is logged into the applicationAnd the user navigates to the Ceate Task page', async ({createtaskPage}) => {
  await createtaskPage.verifyTaskSaved();
});

When('the user enter necessary details, and the user links accounts record name using the relationship selectionfield and links contact record name using contact selection and clicks Save button', async ({createtaskPage}) => {
  async ({ createtaskPage }) => {
    await createtaskPage.fillTaskDetails(getTask('task2'));
    await createtaskPage.clickSave();}
  });

Then('the task record should be saved', async ({createtaskPage}) => {
    await createtaskPage.verifyTaskSaved();

});

When('the user leaves the Subject field completely blank And the user leaves the Priority dropdown unselected And the user clicks the Save button', async ({createtaskPage}) => {
  async ({ createtaskPage }) => {
    await createtaskPage.fillTaskDetails(getTask('task3'));   // subject is blank
    await createtaskPage.clickSave();}
  });

Then('the error message should be displayed to enter the mandatory fields', async ({createtaskPage}) => {
    await createtaskPage.verifyMandatoryErrorDisplayed();

});

When('the user enters text into the Subject field And the user clicks the Cancel button', async ({createtaskPage}) => {
  async ({ createtaskPage }) => {
    await createtaskPage.fillTaskDetails(getTask('task4'));
    await createtaskPage.clickCancel();}
  });

Then('No data should be saved', async ({createtaskPage}) => {
  await createtaskPage.verifyNothingSaved();
});





