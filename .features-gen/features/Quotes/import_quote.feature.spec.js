// Generated from: features/Quotes/import_quote.feature
import { test } from "../../../src/fixtures/pageFixture.js";

test.describe('Testing Import Quote page in SuiteCRM', () => {

  test('Successfully download the import file template', { tag: ['@ImportQuote', '@importquote'] }, async ({ Given, When, Then, importquotePage }) => { 
    await Given('User is in the Import page', null, { importquotePage }); 
    await When('the user clicks the Download Import File Template link in the import quotes page', null, { importquotePage }); 
    await Then('the application should download a template file to the users local machine', null, { importquotePage }); 
  });

  test('Successfully upload a valid file and select record option', { tag: ['@ImportQuote'] }, async ({ Given, When, Then, importquotePage }) => { 
    await Given('User is in the Import quote page', null, { importquotePage }); 
    await When('the user uploads a valid file using the Choose File picker and the user selects the Create new records only radio option and the user clicks the Next button', null, { importquotePage }); 
    await Then('the user should be advanced to next step of the import process', null, { importquotePage }); 
  });

  test('Choose to update existing records during import', { tag: ['@ImportQuote'] }, async ({ Given, When, Then, importquotePage }) => { 
    await Given('User is in the Import page', null, { importquotePage }); 
    await When('the user uploads a valid file using the Choose File picker ,the user selects the Create new records and update existing records radio option And the user clicks the Next button', null, { importquotePage }); 
    await Then('the user should be advanced to next step of the import process', null, { importquotePage }); 
  });

  test('Attempt to proceed without selecting a file', { tag: ['@ImportQuote'] }, async ({ Given, When, Then, importquotePage }) => { 
    await Given('User is in the Import page', null, { importquotePage }); 
    await When('no file has been selected in the Select file picker, the user clicks the Next button', null, { importquotePage }); 
    await Then('the system should display a validation error message indicating a file is requiredAnd the user should remain on Step one', null, { importquotePage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/Quotes/import_quote.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@ImportQuote","@importquote"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User is in the Import page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the user clicks the Download Import File Template link in the import quotes page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the application should download a template file to the users local machine","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":["@ImportQuote"],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given User is in the Import quote page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user uploads a valid file using the Choose File picker and the user selects the Create new records only radio option and the user clicks the Next button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the user should be advanced to next step of the import process","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":15,"tags":["@ImportQuote"],"steps":[{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given User is in the Import page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When the user uploads a valid file using the Choose File picker ,the user selects the Create new records and update existing records radio option And the user clicks the Next button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the user should be advanced to next step of the import process","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":20,"tags":["@ImportQuote"],"steps":[{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given User is in the Import page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When no file has been selected in the Select file picker, the user clicks the Next button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then the system should display a validation error message indicating a file is requiredAnd the user should remain on Step one","stepMatchArguments":[]}]},
]; // bdd-data-end