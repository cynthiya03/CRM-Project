// Generated from: features\accounts\view_account.feature
import { test } from "../../../src/fixtures/pageFixture.js";

test.describe('Testing view account features in CRM application', () => {

  test('Verify the account list column headings', { tag: ['@view_accountScenario', '@ViewAccountpage', '@TC01'] }, async ({ Given, When, Then, And }) => { 
    await Given('User Land on view Account page'); 
    await When('User view the account list'); 
    await Then('User should see Name column be displayed'); 
    await And('City column should be displayed'); 
    await And('Billing Country column should be displayed'); 
    await And('Phone column should be displayed'); 
    await And('User column should be displayed'); 
    await And('Email Address column should be displayed'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\accounts\\view_account.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":["@view_accountScenario","@ViewAccountpage","@TC01"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User Land on view Account page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User view the account list","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User should see Name column be displayed","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And City column should be displayed","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And Billing Country column should be displayed","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"And Phone column should be displayed","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And User column should be displayed","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And Email Address column should be displayed","stepMatchArguments":[]}]},
]; // bdd-data-end