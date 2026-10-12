// Generated from: features\opportunities\opportunities.feature
import { test } from "../../../src/fixtures/pageFixture.js";

test.describe('testing opportunities feature in CRM application', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('User must have logged into the crm application', null, { page }); 
  });
  
  test('opportunities display page', { tag: ['@createopportunity', '@TC201'] }, async ({ Given, When, Then, page }) => { 
    await Given('User is on the CRM home page', null, { page }); 
    await When('User clicks the opportunities section', null, { page }); 
    await Then('User should see the opportunities landing page', null, { page }); 
  });

  test('Create opportunities', { tag: ['@createopportunity', '@TC202'] }, async ({ Given, When, Then, page }) => { 
    await Given('User is on the opportunities page', null, { page }); 
    await When('User clicks create opportunities button from dropdown', null, { page }); 
    await Then('User should see the new opportunities form where the user can enter details', null, { page }); 
  });

  test('Created opportunity successfully', { tag: ['@createopportunity', '@TC203'] }, async ({ Given, When, Then, page }) => { 
    await Given('User is on the create opportunities page', null, { page }); 
    await When('User enters valid details on the form including Opportunity name, account name , amount and selects one sales stage and closing date and click save button', null, { page }); 
    await Then('New Opportunity should be created successfully', null, { page }); 
  });

  test('create opportunity with missing mandatory field', { tag: ['@createopportunity', '@TC204'] }, async ({ Given, When, Then, page }) => { 
    await Given('User is on the create opportunities page', null, { page }); 
    await When('User missed to enter mandatory information and clicks save', null, { page }); 
    await Then('It throws validation error "unable to perform action"', null, { page }); 
  });

  test('verify that page displays list of opportunities', { tag: ['@viewopportunity', '@TC205'] }, async ({ Given, When, Then, page }) => { 
    await Given('user is on the opportunities page', null, { page }); 
    await When('user selects view opportunities', null, { page }); 
    await Then('user should see the list of opportunities', null, { page }); 
  });

  test('verify that user can able to view opportunity name details', { tag: ['@viewopportunity', '@TC206'] }, async ({ Given, When, Then, page }) => { 
    await Given('user is on the view opportunities page', null, { page }); 
    await When('user clicks any opportunity name on the list', null, { page }); 
    await Then('user should able to see all the details under that name', null, { page }); 
  });

  test('verify that user can able to view account name details', { tag: ['@viewopportunity', '@TC207'] }, async ({ Given, When, Then, page }) => { 
    await Given('user is on the view opportunities page', null, { page }); 
    await When('user clicks any opportunity account name on the list', null, { page }); 
    await Then('user should able to see all the details under that account name', null, { page }); 
  });

  test('verify that user can able to see information on import opportunities page', { tag: ['@importopportunity', '@TC208'] }, async ({ Given, When, Then, page }) => { 
    await Given('user is on the opportunities page', null, { page }); 
    await When('user clicks import opportunities', null, { page }); 
    await Then('user should see steps for upload import file', null, { page }); 
  });

  test('verify that user can able to click choose file option', { tag: ['@importopportunity', '@TC209'] }, async ({ Given, When, Then, page }) => { 
    await Given('user is on the import opportunities page', null, { page }); 
    await When('user clicks choose file', null, { page }); 
    await Then('user should be redirected to choose file from their system', null, { page }); 
  });

  test('verify that it throws an error if user did not uploaded any file', { tag: ['@importopportunity', '@TC210'] }, async ({ Given, When, Then, page }) => { 
    await Given('user is on the import opportunities page', null, { page }); 
    await When('user clicks next', null, { page }); 
    await Then('It throws an error that \'Missing required fields: Select a file to upload.\'', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\opportunities\\opportunities.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@createopportunity","@TC201"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User is on the CRM home page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When User clicks the opportunities section","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then User should see the opportunities landing page","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":["@createopportunity","@TC202"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given User is on the opportunities page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When User clicks create opportunities button from dropdown","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then User should see the new opportunities form where the user can enter details","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":20,"tags":["@createopportunity","@TC203"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given User is on the create opportunities page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When User enters valid details on the form including Opportunity name, account name , amount and selects one sales stage and closing date and click save button","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then New Opportunity should be created successfully","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":26,"tags":["@createopportunity","@TC204"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given User is on the create opportunities page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When User missed to enter mandatory information and clicks save","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then It throws validation error \"unable to perform action\"","stepMatchArguments":[{"group":{"start":27,"value":"\"unable to perform action\"","children":[{"start":28,"value":"unable to perform action","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":34,"pickleLine":32,"tags":["@viewopportunity","@TC205"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":33,"keywordType":"Context","textWithKeyword":"Given user is on the opportunities page","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When user selects view opportunities","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then user should see the list of opportunities","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":38,"tags":["@viewopportunity","@TC206"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":39,"keywordType":"Context","textWithKeyword":"Given user is on the view opportunities page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"When user clicks any opportunity name on the list","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then user should able to see all the details under that name","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":44,"tags":["@viewopportunity","@TC207"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":45,"keywordType":"Context","textWithKeyword":"Given user is on the view opportunities page","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"When user clicks any opportunity account name on the list","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then user should able to see all the details under that account name","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":50,"tags":["@importopportunity","@TC208"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":51,"keywordType":"Context","textWithKeyword":"Given user is on the opportunities page","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When user clicks import opportunities","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then user should see steps for upload import file","stepMatchArguments":[]}]},
  {"pwTestLine":58,"pickleLine":56,"tags":["@importopportunity","@TC209"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":57,"keywordType":"Context","textWithKeyword":"Given user is on the import opportunities page","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":58,"keywordType":"Action","textWithKeyword":"When user clicks choose file","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then user should be redirected to choose file from their system","stepMatchArguments":[]}]},
  {"pwTestLine":64,"pickleLine":62,"tags":["@importopportunity","@TC210"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":63,"keywordType":"Context","textWithKeyword":"Given user is on the import opportunities page","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"When user clicks next","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then It throws an error that 'Missing required fields: Select a file to upload.'","stepMatchArguments":[{"group":{"start":24,"value":"'Missing required fields: Select a file to upload.'","children":[{"children":[{}]},{"start":25,"value":"Missing required fields: Select a file to upload.","children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end