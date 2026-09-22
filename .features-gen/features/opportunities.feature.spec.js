// Generated from: features/opportunities.feature
import { test } from "playwright-bdd";

test.describe('testing opportunities feature in CRM application', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('User must have logged into the crm application'); 
  });
  
  test('opportunities display page', { tag: ['@createopportunity'] }, async ({ Given, When, Then }) => { 
    await Given('User is on the CRM home page'); 
    await When('User clicks the opportunities section'); 
    await Then('User should see the opportunities landing page'); 
  });

  test('Create opportunities', { tag: ['@createopportunity'] }, async ({ Given, When, Then }) => { 
    await Given('User is on the opportunities page'); 
    await When('User clicks create opportunities button from dropdown'); 
    await Then('User should see the new opportunities form where the user can enter details'); 
  });

  test('Created opportunity successfully', { tag: ['@createopportunity'] }, async ({ Given, When, Then }) => { 
    await Given('User is on the opportunities page'); 
    await When('User enters valid details on the form including Opportunity name, account name , amount and selects one sales stage and closing date and click save button'); 
    await Then('New Opportunity should be created successfully'); 
  });

  test('create opportunity with missing mandatory field', { tag: ['@createopportunity'] }, async ({ Given, When, Then }) => { 
    await Given('User is on the create opportunities page'); 
    await When('User missed to enter mandatory information and clicks save'); 
    await Then('It throws validation error "unable to perform action"'); 
  });

  test('verify that page displays list of opportunities', { tag: ['@viewopportunity'] }, async ({ Given, When, Then }) => { 
    await Given('user is on the opportunities page'); 
    await When('user selects view opportunities'); 
    await Then('user should see the list of opportunities'); 
  });

  test('verify that user can able to view opportunity name details', { tag: ['@viewopportunity'] }, async ({ Given, When, Then }) => { 
    await Given('user is on the view opportunities page'); 
    await When('user clicks any opportunity name on the list'); 
    await Then('user should able to see all the details under that name'); 
  });

  test('verify that user can able to view account name details', { tag: ['@viewopportunity'] }, async ({ Given, When, Then }) => { 
    await Given('user is on the view opportunities page'); 
    await When('user clicks any opportunity account name on the list'); 
    await Then('user should able to see all the details under that account name'); 
  });

  test('verify that user can able to see information on import opportunities page', { tag: ['@importopportunity'] }, async ({ Given, When, Then }) => { 
    await Given('user is on the opportunities page'); 
    await When('user clicks import opportunities'); 
    await Then('user should see choose file to import option'); 
  });

  test('verify that user can able to click choose file option', { tag: ['@importopportunity'] }, async ({ Given, When, Then }) => { 
    await Given('user is on the import opportunities page'); 
    await When('user clicks choose file'); 
    await Then('user should be redirected to choose file from their system'); 
  });

  test('verify that it throws an error if user did not uploaded any file', { tag: ['@importopportunity'] }, async ({ Given, When, Then }) => { 
    await Given('user is on the import opportunities page'); 
    await When('user clicks next'); 
    await Then('It throws an error that \'no file chosen\''); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/opportunities.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@createopportunity"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User is on the CRM home page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When User clicks the opportunities section","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then User should see the opportunities landing page","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":["@createopportunity"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given User is on the opportunities page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When User clicks create opportunities button from dropdown","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then User should see the new opportunities form where the user can enter details","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":20,"tags":["@createopportunity"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given User is on the opportunities page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When User enters valid details on the form including Opportunity name, account name , amount and selects one sales stage and closing date and click save button","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then New Opportunity should be created successfully","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":26,"tags":["@createopportunity"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given User is on the create opportunities page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When User missed to enter mandatory information and clicks save","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then It throws validation error \"unable to perform action\"","stepMatchArguments":[{"group":{"start":27,"value":"\"unable to perform action\"","children":[{"start":28,"value":"unable to perform action","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":34,"pickleLine":32,"tags":["@viewopportunity"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":33,"keywordType":"Context","textWithKeyword":"Given user is on the opportunities page","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When user selects view opportunities","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then user should see the list of opportunities","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":38,"tags":["@viewopportunity"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":39,"keywordType":"Context","textWithKeyword":"Given user is on the view opportunities page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"When user clicks any opportunity name on the list","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then user should able to see all the details under that name","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":44,"tags":["@viewopportunity"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":45,"keywordType":"Context","textWithKeyword":"Given user is on the view opportunities page","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"When user clicks any opportunity account name on the list","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then user should able to see all the details under that account name","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":50,"tags":["@importopportunity"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":51,"keywordType":"Context","textWithKeyword":"Given user is on the opportunities page","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When user clicks import opportunities","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then user should see choose file to import option","stepMatchArguments":[]}]},
  {"pwTestLine":58,"pickleLine":56,"tags":["@importopportunity"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":57,"keywordType":"Context","textWithKeyword":"Given user is on the import opportunities page","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":58,"keywordType":"Action","textWithKeyword":"When user clicks choose file","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then user should be redirected to choose file from their system","stepMatchArguments":[]}]},
  {"pwTestLine":64,"pickleLine":62,"tags":["@importopportunity"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":63,"keywordType":"Context","textWithKeyword":"Given user is on the import opportunities page","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"When user clicks next","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then It throws an error that 'no file chosen'","stepMatchArguments":[{"group":{"start":24,"value":"'no file chosen'","children":[{"children":[{}]},{"start":25,"value":"no file chosen","children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end