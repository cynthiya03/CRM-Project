// Generated from: features\Quotes\view_quotes.feature
import { test } from "playwright-bdd";

test.describe('Testing Create Quote page in SuiteCRM', () => {

  test('Navigate to a specific quote details page', { tag: ['@viewquote', '@TS002'] }, async ({ Given, When, Then }) => { 
    await Given('User is in the View Quotes page'); 
    await When('the user clicks on the quote title link'); 
    await Then('the system should display the detail view page for the quote selected'); 
  });

  test('Use inline row shortcuts-Create Call', async ({ Given, When, Then }) => { 
    await Given('User is in the View Quotes page'); 
    await When('the user clicks the phone icon shortcut on the quote title row'); 
    await Then('Create Call page should be opened'); 
  });

  test('Use inline row shortcuts-Create Meetings', async ({ Given, When, Then }) => { 
    await Given('User is in the View Quotes page'); 
    await When('the user clicks the calendar icon shortcut on the quote title row'); 
    await Then('Create Meetings page should be opened'); 
  });

  test('Use inline row shortcuts-Create Task', async ({ Given, When, Then }) => { 
    await Given('User is in the View Quotes page'); 
    await When('the user clicks the create task icon shortcut on the quote title row'); 
    await Then('Create Task should be opened'); 
  });

  test('Use inline row shortcuts-New Email', async ({ Given, When, Then }) => { 
    await Given('User is in the View Quotes page'); 
    await When('the user clicks the compose email icon shortcut on the quote title row'); 
    await Then('New Email window should be opened'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Quotes\\view_quotes.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@viewquote","@TS002"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User is in the View Quotes page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the user clicks on the quote title link","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the system should display the detail view page for the quote selected","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given User is in the View Quotes page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user clicks the phone icon shortcut on the quote title row","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Create Call page should be opened","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given User is in the View Quotes page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When the user clicks the calendar icon shortcut on the quote title row","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Create Meetings page should be opened","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given User is in the View Quotes page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When the user clicks the create task icon shortcut on the quote title row","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then Create Task should be opened","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given User is in the View Quotes page","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When the user clicks the compose email icon shortcut on the quote title row","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then New Email window should be opened","stepMatchArguments":[]}]},
]; // bdd-data-end