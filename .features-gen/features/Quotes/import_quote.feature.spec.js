// Generated from: features\Quotes\import_quote.feature
import { test } from "playwright-bdd";

test.describe('Testing Import Quote page in SuiteCRM', () => {

  test('Successfully download the import file template', { tag: ['@importquote'] }, async ({ Given, When, Then }) => { 
    await Given('User is in the Import page'); 
    await When('the user clicks the Download Import File Template link in the import quotes page'); 
    await Then('the application should download a template file to the user\'s local machine'); 
  });

  test('Successfully upload a valid file and select record option', async ({ Given, When, Then }) => { 
    await Given('User is in the Import page'); 
    await When('the user uploads a valid file using the Choose File picker and the user selects the Create new records only radio option and the user clicks the Next button'); 
    await Then('the user should be advanced to next step of the import process'); 
  });

  test('Choose to update existing records during import', async ({ Given, When, Then }) => { 
    await Given('User is in the Import page'); 
    await When('the user uploads a valid file using the Choose File picker ,the user selects the Create new records and update existing records radio option And the user clicks the Next  button'); 
    await Then('the user should be advanced to next step of the import process'); 
  });

  test('Attempt to proceed without selecting a file', async ({ Given, When, Then }) => { 
    await Given('User is in the Import page'); 
    await When('no file has been selected in the Select file picker, the user clicks the Next button'); 
    await Then('the system should display a validation error message indicating a file is requiredAnd the user should remain on Step one'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Quotes\\import_quote.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@importquote"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in the Import page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user clicks the Download Import File Template link in the import quotes page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the application should download a template file to the user's local machine","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is in the Import page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When the user uploads a valid file using the Choose File picker and the user selects the Create new records only radio option and the user clicks the Next button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the user should be advanced to next step of the import process","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given User is in the Import page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When the user uploads a valid file using the Choose File picker ,the user selects the Create new records and update existing records radio option And the user clicks the Next  button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then the user should be advanced to next step of the import process","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given User is in the Import page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When no file has been selected in the Select file picker, the user clicks the Next button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then the system should display a validation error message indicating a file is requiredAnd the user should remain on Step one","stepMatchArguments":[]}]},
]; // bdd-data-end