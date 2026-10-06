import { Given, When, Then } from '../../src/fixtures/pageFixture.js';
import { ExcelHelper } from '../../src/utils/ExcelHelper.js';
import { expect } from '@playwright/test';

const TASK_FILE = 'TaskData.xlsx';
const TASK_SHEET = 'CreateTask';

// strips hidden tabs/spaces from headers and values
const clean = (row) =>
  Object.fromEntries(
    Object.entries(row).map(([k, v]) => [k.trim(), typeof v === 'string' ? v.trim() : v])
  );

function getTask(id) {
  const rows = ExcelHelper.readExcel(TASK_FILE, TASK_SHEET).map(clean);
  const matches = rows.filter((r) => r.TestCaseID === id);
  if (matches.length !== 1) {
    throw new Error(`Expected one row with TestCaseID "${id}", found ${matches.length}`);
  }
  return matches[0];
}

// Scenario 1
Given('the user is logged into the applicationAnd the user navigates to the Create Task page', async ({ createtaskPage }) => {
  await createtaskPage.openCreateTaskPage();
});

When('the user enters necessary details and clicks on Save button', async ({ createtaskPage }) => {
  await createtaskPage.fillTaskDetails(getTask('task1'));
  await createtaskPage.clickSave();
});

Then('the task should be successfully created', async ({ createtaskPage }) => {
  await createtaskPage.verifyTaskSaved();
});

// Scenarios 2, 3 and 4 share this Given (the feature spells "Create" as "Ceate")
Given('the user is logged into the applicationAnd the user navigates to the Ceate Task page', async ({ createtaskPage }) => {
  await createtaskPage.openCreateTaskPage();
});

// Scenario 2
When('the user enter necessary details, and the user links accounts record name using the relationship selectionfield and links contact record name using contact selection and clicks Save button', async ({ createtaskPage }) => {
  await createtaskPage.fillTaskDetails(getTask('task2'));
  await createtaskPage.clickSave();
});

Then('the task record should be saved', async ({ createtaskPage }) => {
  await createtaskPage.verifyTaskSaved();
});

// Scenario 3
When('the user leaves the Subject field completely blank And the user leaves the Priority dropdown unselected And the user clicks the Save button', async ({ createtaskPage }) => {
  await createtaskPage.fillTaskDetails(getTask('task3'));   // subject is blank
  await createtaskPage.clickSave();
});

Then('the error message should be displayed to enter the mandatory fields', async ({ createtaskPage }) => {
  await createtaskPage.verifyMandatoryErrorDisplayed();
});

// Scenario 4
When('the user enters text into the Subject field And the user clicks the Cancel button', async ({ createtaskPage }) => {
  await createtaskPage.fillTaskDetails(getTask('task4'));
  await createtaskPage.clickCancel();
});

Then('No data should be saved', async ({ createtaskPage }) => {
  await createtaskPage.verifyNothingSaved();
});
