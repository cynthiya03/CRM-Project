// Generated from: features/import_line_items.feature
import { test } from "playwright-bdd";

test.describe('Testing Upload Import file page in SuiteCRM', () => {

  test('Download import file template', { tag: ['@importlineitem'] }, async ({ Given, When, Then }) => { 
    await Given('User is in the Import Line Items page'); 
    await When('the user clicks the Download Import File Template link'); 
    await Then('the application should initiate a file download for the template file'); 
  });

  test('Successfully upload file and proceed with default import mode', async ({ Given, When, Then }) => { 
    await Given('User is in the Import Line Items page'); 
    await When('the user uploads a valid file via the file picker and the user verifies that Create new records only is selected by default the user clicks the Next  button'); 
    await Then('the application should proceed to next Step of the import'); 
  });

  test('Change import configuration mode to update existing data', async ({ Given, When, Then }) => { 
    await Given('User is in the Import Line Items page'); 
    await When('the user uploads a valid file via the file picker and the user selects the Create new records and update existing records option And the user clicks the Next button'); 
    await Then('the application should proceed to next step configured for updating records'); 
  });

  test('Prevent processing when no file is selected', async ({ Given, When, Then }) => { 
    await Given('User is in the Import Line Items page the file picker displays no file selected'); 
    await When('the user clicks the Next button'); 
    await Then('a validation message should be displayed alerting the user to select a file to upload'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/import_line_items.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@importlineitem"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User is in the Import Line Items page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the user clicks the Download Import File Template link","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the application should initiate a file download for the template file","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given User is in the Import Line Items page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user uploads a valid file via the file picker and the user verifies that Create new records only is selected by default the user clicks the Next  button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the application should proceed to next Step of the import","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given User is in the Import Line Items page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When the user uploads a valid file via the file picker and the user selects the Create new records and update existing records option And the user clicks the Next button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the application should proceed to next step configured for updating records","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given User is in the Import Line Items page the file picker displays no file selected","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When the user clicks the Next button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then a validation message should be displayed alerting the user to select a file to upload","stepMatchArguments":[]}]},
]; // bdd-data-end