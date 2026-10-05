// Generated from: features/accounts/import_account.feature
import { test } from "../../../src/fixtures/pageFixture.js";

test.describe('Testing user able to import account features in CRM application', () => {

  test('confirming user able to land on Import Account page', { tag: ['@import_accountScenario', '@AccountNavigation', '@TC014'] }, async ({ Given, When, Then, ImportAccount }) => { 
    await Given('User Logged into CRM'); 
    await When('user click on import account page', null, { ImportAccount }); 
    await Then('User should be redirected to import account page', null, { ImportAccount }); 
  });

  test('confirming user able to upload a file using choose upload option', { tag: ['@import_accountScenario', '@importAccount', '@TC015'] }, async ({ Given, When, Then, ImportAccount }) => { 
    await Given('User land on import account page'); 
    await When('user click choose file and able to import the file', null, { ImportAccount }); 
    await Then('User should see account file selected on choose file option', null, { ImportAccount }); 
  });

  test('Verify the create new records only option can be selected', { tag: ['@import_accountScenario', '@importAccount', '@TC016'] }, async ({ Given, When, Then, And, ImportAccount }) => { 
    await Given('User land on import account page'); 
    await When('user select Create new records only option', null, { ImportAccount }); 
    await Then('User should see Create new records only should be selected', null, { ImportAccount }); 
    await And('Create new records and update existing records should not be selected', null, { ImportAccount }); 
  });

  test('Verify user can import accounts from a file', { tag: ['@import_accountScenario', '@importAccount', '@TC017'] }, async ({ Given, When, Then, And, ImportAccount }) => { 
    await Given('User land on import account page'); 
    await When('the user selects the account import file', null, { ImportAccount }); 
    await And('the user clicks Next', null, { ImportAccount }); 
    await And('the user confirms the import file properties and clicks Next', null, { ImportAccount }); 
    await And('the user confirms the field mappings and clicks Next', null, { ImportAccount }); 
    await And('the user reviews the possible duplicate settings and starts the import', null, { ImportAccount }); 
    await Then('the user should see a confirmation that the records were created', null, { ImportAccount }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('after', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/accounts/import_account.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":["@import_accountScenario","@AccountNavigation","@TC014"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User Logged into CRM","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When user click on import account page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to import account page","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":12,"tags":["@import_accountScenario","@importAccount","@TC015"],"steps":[{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given User land on import account page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When user click choose file and able to import the file","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then User should see account file selected on choose file option","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":18,"tags":["@import_accountScenario","@importAccount","@TC016"],"steps":[{"pwStepLine":19,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given User land on import account page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When user select Create new records only option","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User should see Create new records only should be selected","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"And Create new records and update existing records should not be selected","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":25,"tags":["@import_accountScenario","@importAccount","@TC017"],"steps":[{"pwStepLine":26,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given User land on import account page","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When the user selects the account import file","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"And the user clicks Next","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"And the user confirms the import file properties and clicks Next","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"And the user confirms the field mappings and clicks Next","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"And the user reviews the possible duplicate settings and starts the import","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then the user should see a confirmation that the records were created","stepMatchArguments":[]}]},
]; // bdd-data-end