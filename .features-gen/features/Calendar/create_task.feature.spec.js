// Generated from: features\Calendar\create_task.feature
import { test } from "../../../src/fixtures/pageFixture.js";

test.describe('Testing Create Task page in SuiteCRM', () => {

  test('Successfully create a new task with minimal required data', { tag: ['@CreateTask', '@Newtask', '@TC501'] }, async ({ Given, When, Then, createtaskPage }) => { 
    await Given('the user is logged into the applicationAnd the user navigates to the Create Task page', null, { createtaskPage }); 
    await When('the user enters necessary details and clicks on Save button', null, { createtaskPage }); 
    await Then('the task should be successfully created', null, { createtaskPage }); 
  });

  test('fill out all optional details and save a task', { tag: ['@CreateTask', '@Savetask', '@TC502'] }, async ({ Given, When, Then, createtaskPage }) => { 
    await Given('the user is logged into the applicationAnd the user navigates to the Ceate Task page', null, { createtaskPage }); 
    await When('the user enter necessary details, and the user links accounts record name using the relationship selectionfield and links contact record name using contact selection and clicks Save button', null, { createtaskPage }); 
    await Then('the task record should be saved', null, { createtaskPage }); 
  });

  test('Validate mandatory fields prevent form submission', { tag: ['@CreateTask', '@Validatemandatoryfields', '@TC503'] }, async ({ Given, When, Then, createtaskPage }) => { 
    await Given('the user is logged into the applicationAnd the user navigates to the Ceate Task page', null, { createtaskPage }); 
    await When('the user leaves the Subject field completely blank And the user leaves the Priority dropdown unselected And the user clicks the Save button', null, { createtaskPage }); 
    await Then('the error message should be displayed to enter the mandatory fields', null, { createtaskPage }); 
  });

  test('Cancel out of the task creation workflow', { tag: ['@CreateTask', '@Canceltask', '@TC504'] }, async ({ Given, When, Then, createtaskPage }) => { 
    await Given('the user is logged into the applicationAnd the user navigates to the Ceate Task page', null, { createtaskPage }); 
    await When('the user enters text into the Subject field And the user clicks the Cancel button', null, { createtaskPage }); 
    await Then('No data should be saved', null, { createtaskPage }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Calendar\\create_task.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@CreateTask","@Newtask","@TC501"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged into the applicationAnd the user navigates to the Create Task page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the user enters necessary details and clicks on Save button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the task should be successfully created","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":["@CreateTask","@Savetask","@TC502"],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given the user is logged into the applicationAnd the user navigates to the Ceate Task page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user enter necessary details, and the user links accounts record name using the relationship selectionfield and links contact record name using contact selection and clicks Save button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the task record should be saved","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":17,"tags":["@CreateTask","@Validatemandatoryfields","@TC503"],"steps":[{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given the user is logged into the applicationAnd the user navigates to the Ceate Task page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When the user leaves the Subject field completely blank And the user leaves the Priority dropdown unselected And the user clicks the Save button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then the error message should be displayed to enter the mandatory fields","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":23,"tags":["@CreateTask","@Canceltask","@TC504"],"steps":[{"pwStepLine":25,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given the user is logged into the applicationAnd the user navigates to the Ceate Task page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When the user enters text into the Subject field And the user clicks the Cancel button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then No data should be saved","stepMatchArguments":[]}]},
]; // bdd-data-end