// Generated from: features\Calendar\create_call.feature
import { test } from "playwright-bdd";

test.describe('Testing Create Call page in SuiteCRM', () => {

  test('Successfully fill out all fields and save a call record', { tag: ['@CreateCall'] }, async ({ Given, When, Then }) => { 
    await Given('The user is logged into the application And the user navigates to the Create Calls page'); 
    await When('the user fills in all necessary details'); 
    await Then('call record should be successfully created'); 
  });

  test('Add and remove configuration rows for reminders', async ({ Given, When, Then }) => { 
    await Given('the reminders section displays default reminder actions'); 
    await When('the user clicks the Add reminder button'); 
    await Then('a new row for configuring a reminder should be appended to the list'); 
  });

  test('Add and remove configuration rows for reminders', async ({ Given, When, Then }) => { 
    await Given('the reminders section displays default reminder actions'); 
    await When('the user clicks the Remove reminder button'); 
    await Then('the last added reminder configuration row should be removed from the view'); 
  });

  test('Cancel call creation process', async ({ Given, When, Then }) => { 
    await Given('The user is logged into the application And the user navigates to the Create Calls page'); 
    await When('the user enters data into the Subject fiel dAnd the user clicks the Cancel button'); 
    await Then('the system should discard all unsaved entries And the user should be redirected back to the Calls dashboard view'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Calendar\\create_call.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@CreateCall"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The user is logged into the application And the user navigates to the Create Calls page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the user fills in all necessary details","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then call record should be successfully created","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given the reminders section displays default reminder actions","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user clicks the Add reminder button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then a new row for configuring a reminder should be appended to the list","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given the reminders section displays default reminder actions","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When the user clicks the Remove reminder button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the last added reminder configuration row should be removed from the view","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given The user is logged into the application And the user navigates to the Create Calls page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When the user enters data into the Subject fiel dAnd the user clicks the Cancel button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then the system should discard all unsaved entries And the user should be redirected back to the Calls dashboard view","stepMatchArguments":[]}]},
]; // bdd-data-end