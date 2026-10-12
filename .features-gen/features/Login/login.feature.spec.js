// Generated from: features\Login\login.feature
import { test } from "../../../src/fixtures/pageFixture.js";

test.describe('verify CRM login using Excel data', () => {

  test.describe('Verify CRM login for <testCase>', () => {

    test('Verify CRM login for TC001_valid_login', { tag: ['@login'] }, async ({ Given, When, Then, loginPage, page }) => { 
      await Given('User opens the CRM login page', null, { loginPage, page }); 
      await When('User submits login credentials from Excel for "TC001_valid_login"', null, { loginPage }); 
      await Then('User should see the Excel login result for "TC001_valid_login"', null, { loginPage, page }); 
    });

    test('Verify CRM login for TC002_invalid_password', { tag: ['@login'] }, async ({ Given, When, Then, loginPage, page }) => { 
      await Given('User opens the CRM login page', null, { loginPage, page }); 
      await When('User submits login credentials from Excel for "TC002_invalid_password"', null, { loginPage }); 
      await Then('User should see the Excel login result for "TC002_invalid_password"', null, { loginPage, page }); 
    });

    test('Verify CRM login for TC003_invalid_username', { tag: ['@login'] }, async ({ Given, When, Then, loginPage, page }) => { 
      await Given('User opens the CRM login page', null, { loginPage, page }); 
      await When('User submits login credentials from Excel for "TC003_invalid_username"', null, { loginPage }); 
      await Then('User should see the Excel login result for "TC003_invalid_username"', null, { loginPage, page }); 
    });

    test('Verify CRM login for TC004_empty_username', { tag: ['@login'] }, async ({ Given, When, Then, loginPage, page }) => { 
      await Given('User opens the CRM login page', null, { loginPage, page }); 
      await When('User submits login credentials from Excel for "TC004_empty_username"', null, { loginPage }); 
      await Then('User should see the Excel login result for "TC004_empty_username"', null, { loginPage, page }); 
    });

    test('Verify CRM login for TC005_empty_password', { tag: ['@login'] }, async ({ Given, When, Then, loginPage, page }) => { 
      await Given('User opens the CRM login page', null, { loginPage, page }); 
      await When('User submits login credentials from Excel for "TC005_empty_password"', null, { loginPage }); 
      await Then('User should see the Excel login result for "TC005_empty_password"', null, { loginPage, page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Login\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":11,"tags":["@login"],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User opens the CRM login page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User submits login credentials from Excel for \"TC001_valid_login\"","stepMatchArguments":[{"group":{"start":46,"value":"\"TC001_valid_login\"","children":[{"start":47,"value":"TC001_valid_login","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then User should see the Excel login result for \"TC001_valid_login\"","stepMatchArguments":[{"group":{"start":43,"value":"\"TC001_valid_login\"","children":[{"start":44,"value":"TC001_valid_login","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":12,"tags":["@login"],"steps":[{"pwStepLine":15,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User opens the CRM login page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User submits login credentials from Excel for \"TC002_invalid_password\"","stepMatchArguments":[{"group":{"start":46,"value":"\"TC002_invalid_password\"","children":[{"start":47,"value":"TC002_invalid_password","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then User should see the Excel login result for \"TC002_invalid_password\"","stepMatchArguments":[{"group":{"start":43,"value":"\"TC002_invalid_password\"","children":[{"start":44,"value":"TC002_invalid_password","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":13,"tags":["@login"],"steps":[{"pwStepLine":21,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User opens the CRM login page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User submits login credentials from Excel for \"TC003_invalid_username\"","stepMatchArguments":[{"group":{"start":46,"value":"\"TC003_invalid_username\"","children":[{"start":47,"value":"TC003_invalid_username","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then User should see the Excel login result for \"TC003_invalid_username\"","stepMatchArguments":[{"group":{"start":43,"value":"\"TC003_invalid_username\"","children":[{"start":44,"value":"TC003_invalid_username","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":14,"tags":["@login"],"steps":[{"pwStepLine":27,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User opens the CRM login page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User submits login credentials from Excel for \"TC004_empty_username\"","stepMatchArguments":[{"group":{"start":46,"value":"\"TC004_empty_username\"","children":[{"start":47,"value":"TC004_empty_username","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then User should see the Excel login result for \"TC004_empty_username\"","stepMatchArguments":[{"group":{"start":43,"value":"\"TC004_empty_username\"","children":[{"start":44,"value":"TC004_empty_username","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":15,"tags":["@login"],"steps":[{"pwStepLine":33,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User opens the CRM login page","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User submits login credentials from Excel for \"TC005_empty_password\"","stepMatchArguments":[{"group":{"start":46,"value":"\"TC005_empty_password\"","children":[{"start":47,"value":"TC005_empty_password","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then User should see the Excel login result for \"TC005_empty_password\"","stepMatchArguments":[{"group":{"start":43,"value":"\"TC005_empty_password\"","children":[{"start":44,"value":"TC005_empty_password","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end