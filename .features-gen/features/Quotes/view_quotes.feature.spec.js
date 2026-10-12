// Generated from: features\Quotes\view_quotes.feature
import { test } from "../../../src/fixtures/pageFixture.js";

test.describe('Testing View Quote page in SuiteCRM', () => {

  test('Navigate to a specific quote details page', { tag: ['@ViewQuote', '@Quotetitlelink', '@TC801'] }, async ({ Given, When, Then, viewquotePage }) => { 
    await Given('User is in the View Quotes page', null, { viewquotePage }); 
    await When('the user clicks on the quote title link', null, { viewquotePage }); 
    await Then('the system should display the detail view page for the quote selected', null, { viewquotePage }); 
  });

  test('Use inline row shortcuts-Create Call', { tag: ['@ViewQuote', '@Createcallshortcut', '@TC802'] }, async ({ Given, When, Then, viewquotePage }) => { 
    await Given('User is in the View Quotes page', null, { viewquotePage }); 
    await When('the user clicks the phone icon shortcut on the quote title row', null, { viewquotePage }); 
    await Then('Create Call page should be opened', null, { viewquotePage }); 
  });

  test('Use inline row shortcuts-Create Meetings', { tag: ['@ViewQuote', '@CreateMeetingsshortcut', '@TC803'] }, async ({ Given, When, Then, viewquotePage }) => { 
    await Given('User is in the View Quotes page', null, { viewquotePage }); 
    await When('the user clicks the calendar icon shortcut on the quote title row', null, { viewquotePage }); 
    await Then('Create Meetings page should be opened', null, { viewquotePage }); 
  });

  test('Use inline row shortcuts-Create Task', { tag: ['@ViewQuote', '@CreateTaskshortcut', '@TC804'] }, async ({ Given, When, Then, viewquotePage }) => { 
    await Given('User is in the View Quotes page', null, { viewquotePage }); 
    await When('the user clicks the create task icon shortcut on the quote title row', null, { viewquotePage }); 
    await Then('Create Task should be opened', null, { viewquotePage }); 
  });

  test('Use inline row shortcuts-New Email', { tag: ['@ViewQuote', '@Createnewemailshortcut', '@TC805'] }, async ({ Given, When, Then, viewquotePage }) => { 
    await Given('User is in the View Quotes page', null, { viewquotePage }); 
    await When('the user clicks the compose email icon shortcut on the quote title row', null, { viewquotePage }); 
    await Then('New Email window should be opened', null, { viewquotePage }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Quotes\\view_quotes.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@ViewQuote","@Quotetitlelink","@TC801"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User is in the View Quotes page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the user clicks on the quote title link","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the system should display the detail view page for the quote selected","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":["@ViewQuote","@Createcallshortcut","@TC802"],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given User is in the View Quotes page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user clicks the phone icon shortcut on the quote title row","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Create Call page should be opened","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":17,"tags":["@ViewQuote","@CreateMeetingsshortcut","@TC803"],"steps":[{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given User is in the View Quotes page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When the user clicks the calendar icon shortcut on the quote title row","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then Create Meetings page should be opened","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":23,"tags":["@ViewQuote","@CreateTaskshortcut","@TC804"],"steps":[{"pwStepLine":25,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given User is in the View Quotes page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When the user clicks the create task icon shortcut on the quote title row","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then Create Task should be opened","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":29,"tags":["@ViewQuote","@Createnewemailshortcut","@TC805"],"steps":[{"pwStepLine":31,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given User is in the View Quotes page","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When the user clicks the compose email icon shortcut on the quote title row","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then New Email window should be opened","stepMatchArguments":[]}]},
]; // bdd-data-end