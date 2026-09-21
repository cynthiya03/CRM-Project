// Generated from: features\contacts\import_contact.feature
import { test } from "playwright-bdd";

test.describe('Testing contacts features in CRM application', () => {

  test('Navigate to the Import Contact page', { tag: ['@contact', '@TC118'] }, async ({ Given, When, Then }) => { 
    await Given('the user is on the Contact page'); 
    await When('the user clicks Import Contact'); 
    await Then('the user should be redirected to the Import Contact page'); 
  });

  test('Choose a contact import file', { tag: ['@contact', '@TC119'] }, async ({ Given, When, Then, And }) => { 
    await Given('the user is on the import file page'); 
    await When('the user clicks Choose File'); 
    await And('the user selects a contact file to import'); 
    await Then('the selected contact file should be shown in the Choose File option'); 
  });

  test('Select Create new records only', { tag: ['@contact', '@TC220'] }, async ({ Given, When, Then }) => { 
    await Given('the user is on the import file page'); 
    await When('the user selects "Create new records only"'); 
    await Then('"Create new records only" should be selected'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\contacts\\import_contact.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@contact","@TC118"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is on the Contact page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the user clicks Import Contact","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the Import Contact page","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":["@contact","@TC119"],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given the user is on the import file page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user clicks Choose File","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And the user selects a contact file to import","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then the selected contact file should be shown in the Choose File option","stepMatchArguments":[]}]},
  {"pwTestLine":19,"pickleLine":18,"tags":["@contact","@TC220"],"steps":[{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given the user is on the import file page","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When the user selects \"Create new records only\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Create new records only\"","children":[{"start":18,"value":"Create new records only","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then \"Create new records only\" should be selected","stepMatchArguments":[{"group":{"start":0,"value":"\"Create new records only\"","children":[{"start":1,"value":"Create new records only","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end