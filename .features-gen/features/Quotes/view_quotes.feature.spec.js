// Generated from: features/Quotes/view_quotes.feature
import { test } from "../../../src/fixtures/pageFixture.js";

test.describe('Testing Create Quote page in SuiteCRM', () => {

  test('Navigate to a specific quote details page', { tag: ['@ViewQuote'] }, async ({ Given, When, Then, viewquotePage }) => { 
    await Given('User is in the View Quotes page', null, { viewquotePage }); 
    await When('the user clicks on the quote title link', null, { viewquotePage }); 
    await Then('the system should display the detail view page for the quote selected', null, { viewquotePage }); 
  });

  test('Use inline row shortcuts-Create Call', { tag: ['@ViewQuote'] }, async ({ Given, When, Then, viewquotePage }) => { 
    await Given('User is in the View Quotes page', null, { viewquotePage }); 
    await When('the user clicks the phone icon shortcut on the quote title row', null, { viewquotePage }); 
    await Then('Create Call page should be opened', null, { viewquotePage }); 
  });

  test('Use inline row shortcuts-Create Meetings', { tag: ['@ViewQuote'] }, async ({ Given, When, Then, viewquotePage }) => { 
    await Given('User is in the View Quotes page', null, { viewquotePage }); 
    await When('the user clicks the calendar icon shortcut on the quote title row', null, { viewquotePage }); 
    await Then('Create Meetings page should be opened', null, { viewquotePage }); 
  });

  test('Use inline row shortcuts-Create Task', { tag: ['@ViewQuote'] }, async ({ Given, When, Then, viewquotePage }) => { 
    await Given('User is in the View Quotes page', null, { viewquotePage }); 
    await When('the user clicks the create task icon shortcut on the quote title row', null, { viewquotePage }); 
    await Then('Create Task should be opened', null, { viewquotePage }); 
  });

  test('Use inline row shortcuts-New Email', { tag: ['@ViewQuote'] }, async ({ Given, When, Then, viewquotePage }) => { 
    await Given('User is in the View Quotes page', null, { viewquotePage }); 
    await When('the user clicks the compose email icon shortcut on the quote title row', null, { viewquotePage }); 
    await Then('New Email window should be opened', null, { viewquotePage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/Quotes/view_quotes.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":["@ViewQuote"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User is in the View Quotes page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When the user clicks on the quote title link","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the system should display the detail view page for the quote selected","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":["@ViewQuote"],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given User is in the View Quotes page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user clicks the phone icon shortcut on the quote title row","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Create Call page should be opened","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":16,"tags":["@ViewQuote"],"steps":[{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given User is in the View Quotes page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When the user clicks the calendar icon shortcut on the quote title row","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Create Meetings page should be opened","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":21,"tags":["@ViewQuote"],"steps":[{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given User is in the View Quotes page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When the user clicks the create task icon shortcut on the quote title row","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Create Task should be opened","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":26,"tags":["@ViewQuote"],"steps":[{"pwStepLine":31,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given User is in the View Quotes page","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When the user clicks the compose email icon shortcut on the quote title row","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then New Email window should be opened","stepMatchArguments":[]}]},
]; // bdd-data-end