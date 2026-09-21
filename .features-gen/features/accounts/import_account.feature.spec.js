// Generated from: features\accounts\import_account.feature
import { test } from "playwright-bdd";

test.describe('Testing user able to import account features in CRM application', () => {

  test('confirming user able to land on Import Account page', { tag: ['@import_accountScenario', '@confirminguserabletolandonImportAccountpage', '@TC01'] }, async ({ Given, When, Then, And }) => { 
    await Given('User Logged into CRM and land on import account page'); 
    await And('user land on Account page'); 
    await When('user click import account page'); 
    await Then('User should be redirected to import account page'); 
  });

  test('confirming user able to upload a file using choose upload option', { tag: ['@import_accountScenario', '@userabletouploadfile', '@TC02'] }, async ({ Given, When, Then, And }) => { 
    await Given('User Logged into CRM and land on import account page'); 
    await And('user land on import file page'); 
    await When('user click choose file and able to import the file'); 
    await Then('User should see account file selected on choose file option'); 
  });

  test('Verify the create new records only option can be selected', { tag: ['@import_accountScenario', '@importAccount', '@TC003'] }, async ({ Given, When, Then, And }) => { 
    await Given('User Logged into CRM and land on import account page'); 
    await And('user land on import file page'); 
    await When('user select Create new records only option'); 
    await Then('User should see Create new records only should be selected'); 
    await And('Create new records and update existing records should not be selected'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\accounts\\import_account.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":["@import_accountScenario","@confirminguserabletolandonImportAccountpage","@TC01"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User Logged into CRM and land on import account page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And user land on Account page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When user click import account page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to import account page","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":13,"tags":["@import_accountScenario","@userabletouploadfile","@TC02"],"steps":[{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given User Logged into CRM and land on import account page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"And user land on import file page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When user click choose file and able to import the file","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then User should see account file selected on choose file option","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":20,"tags":["@import_accountScenario","@importAccount","@TC003"],"steps":[{"pwStepLine":21,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given User Logged into CRM and land on import account page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"And user land on import file page","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When user select Create new records only option","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then User should see Create new records only should be selected","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"And Create new records and update existing records should not be selected","stepMatchArguments":[]}]},
]; // bdd-data-end