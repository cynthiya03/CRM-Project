// Generated from: features/Calendar/create_task.feature
import { test } from "../../../src/fixtures/pageFixture.js";

test.describe('Testing Create Task page in SuiteCRM', () => {

  test('Successfully create a new task with minimal required data', { tag: ['@CreateTask'] }, async ({ Given, When, Then, createtaskPage }) => { 
    await Given('the user is logged into the applicationAnd the user navigates to the Create Task page', null, { createtaskPage }); 
    await When('the user enters necessary details and clicks on Save button', null, { createtaskPage }); 
    await Then('the task should be successfully created'); 
  });

  test('fill out all optional details and save a task', { tag: ['@CreateTask'] }, async ({ Given, When, Then, createtaskPage }) => { 
    await Given('the user is logged into the applicationAnd the user navigates to the Ceate Task page', null, { createtaskPage }); 
    await When('the user enter necessary details, and the user links accounts record name using the relationship selectionfield and links contact record name using contact selection and clicks Save button', null, { createtaskPage }); 
    await Then('the task record should be saved', null, { createtaskPage }); 
  });

  test('Validate mandatory fields prevent form submission', { tag: ['@CreateTask'] }, async ({ Given, When, Then, createtaskPage }) => { 
    await Given('the user is logged into the applicationAnd the user navigates to the Ceate Task page', null, { createtaskPage }); 
    await When('the user leaves the Subject field completely blank And the user leaves the Priority dropdown unselected And the user clicks the Save button', null, { createtaskPage }); 
    await Then('the error message should be displayed to enter the mandatory fields', null, { createtaskPage }); 
  });

  test('Cancel out of the task creation workflow', { tag: ['@CreateTask'] }, async ({ Given, When, Then, createtaskPage }) => { 
    await Given('the user is logged into the applicationAnd the user navigates to the Ceate Task page', null, { createtaskPage }); 
    await When('the user enters text into the Subject field And the user clicks the Cancel button', null, { createtaskPage }); 
    await Then('No data should be saved', null, { createtaskPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/Calendar/create_task.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@CreateTask"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged into the applicationAnd the user navigates to the Create Task page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user enters necessary details and clicks on Save button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the task should be successfully created","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":9,"tags":["@CreateTask"],"steps":[{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the user is logged into the applicationAnd the user navigates to the Ceate Task page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When the user enter necessary details, and the user links accounts record name using the relationship selectionfield and links contact record name using contact selection and clicks Save button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the task record should be saved","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":14,"tags":["@CreateTask"],"steps":[{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given the user is logged into the applicationAnd the user navigates to the Ceate Task page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When the user leaves the Subject field completely blank And the user leaves the Priority dropdown unselected And the user clicks the Save button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then the error message should be displayed to enter the mandatory fields","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":19,"tags":["@CreateTask"],"steps":[{"pwStepLine":25,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given the user is logged into the applicationAnd the user navigates to the Ceate Task page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When the user enters text into the Subject field And the user clicks the Cancel button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then No data should be saved","stepMatchArguments":[]}]},
]; // bdd-data-end