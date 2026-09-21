// Generated from: features/view_quotes.feature
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

  test('Successfully download the import file template', async ({ Given, When, Then }) => { 
    await Given('User is in the Import page'); 
    await When('the user clicks the Download Import File Template link'); 
    await Then('the application should download a template file to the user\'s local machine'); 
  });

  test('Successfully upload a valid file and select record option', async ({ Given, When, Then }) => { 
    await Given('User is in the Import page'); 
    await When('the user uploads a valid file using the Choose File picker and the user selects the Create new records only radio option and the user clicks the Next >button'); 
    await Then('the user should be advanced to Step 2 of the import process'); 
  });

  test('Choose to update existing records during import', async ({ Given, When, Then }) => { 
    await Given('User is in the Import page'); 
    await When('the user uploads a valid file using the Choose File picker ,the user selects the Create new records and update existing records radio option And the user clicks the Next > button'); 
    await Then('the user should be advanced to Step 2 of the import process'); 
  });

  test('Attempt to proceed without selecting a file', async ({ Given, When, Then }) => { 
    await Given('User is in the Import page'); 
    await When('no file has been selected in the Select file picker, the user clicks the "Next >" button'); 
    await Then('the system should display a validation error message indicating a file is requiredAnd the user should remain on Step 1'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/view_quotes.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@viewquote","@TS002"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User is in the View Quotes page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the user clicks on the quote title link","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the system should display the detail view page for the quote selected","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given User is in the View Quotes page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user clicks the phone icon shortcut on the quote title row","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Create Call page should be opened","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given User is in the View Quotes page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When the user clicks the calendar icon shortcut on the quote title row","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Create Meetings page should be opened","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given User is in the View Quotes page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When the user clicks the create task icon shortcut on the quote title row","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then Create Task should be opened","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given User is in the View Quotes page","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When the user clicks the compose email icon shortcut on the quote title row","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then New Email window should be opened","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":37,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given User is in the Import page","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When the user clicks the Download Import File Template link","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then the application should download a template file to the user's local machine","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":35,"tags":[],"steps":[{"pwStepLine":43,"gherkinStepLine":36,"keywordType":"Context","textWithKeyword":"Given User is in the Import page","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When the user uploads a valid file using the Choose File picker and the user selects the Create new records only radio option and the user clicks the Next >button","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then the user should be advanced to Step 2 of the import process","stepMatchArguments":[{"group":{"start":36,"value":"2"},"parameterTypeName":"int"}]}]},
  {"pwTestLine":48,"pickleLine":40,"tags":[],"steps":[{"pwStepLine":49,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"Given User is in the Import page","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When the user uploads a valid file using the Choose File picker ,the user selects the Create new records and update existing records radio option And the user clicks the Next > button","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then the user should be advanced to Step 2 of the import process","stepMatchArguments":[{"group":{"start":36,"value":"2"},"parameterTypeName":"int"}]}]},
  {"pwTestLine":54,"pickleLine":45,"tags":[],"steps":[{"pwStepLine":55,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given User is in the Import page","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When no file has been selected in the Select file picker, the user clicks the \"Next >\" button","stepMatchArguments":[{"group":{"start":73,"value":"\"Next >\"","children":[{"start":74,"value":"Next >","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":57,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then the system should display a validation error message indicating a file is requiredAnd the user should remain on Step 1","stepMatchArguments":[{"group":{"start":117,"value":"1"},"parameterTypeName":"int"}]}]},
]; // bdd-data-end