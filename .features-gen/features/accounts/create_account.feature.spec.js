// Generated from: features/accounts/create_account.feature
import { test } from "../../../src/fixtures/pageFixture.js";

test.describe('Testing account features in CRM application', () => {

  test('Verify create Account field is Displayed', { tag: ['@accountScenario', '@AccountfieldisDisplayed', '@TC001'] }, async ({ Given, When, Then, homePage, page }) => { 
    await Given('User Logged into CRM application', null, { page }); 
    await When('user click the Accounts tab', null, { homePage }); 
    await Then('User should see create Account field', null, { homePage }); 
  });

  test('Verify View Accounts field is Displayed', { tag: ['@accountScenario', '@AccountfieldisDisplayed', '@TC002'] }, async ({ Given, When, Then, homePage, page }) => { 
    await Given('User Logged into CRM application', null, { page }); 
    await When('user click the Accounts tab', null, { homePage }); 
    await Then('User should see view Accounts field', null, { homePage }); 
  });

  test('Verify import Accounts field is Displayed', { tag: ['@accountScenario', '@AccountfieldisDisplayed', '@TC003'] }, async ({ Given, When, Then, homePage, page }) => { 
    await Given('User Logged into CRM application', null, { page }); 
    await When('user click the Accounts tab', null, { homePage }); 
    await Then('User should see import Account', null, { homePage }); 
  });

  test('Verify user able to land on create account screen', { tag: ['@accountScenario', '@AccountfieldisDisplayed', '@TC004'] }, async ({ Given, When, Then, homePage, page }) => { 
    await Given('User Logged into CRM application', null, { page }); 
    await When('user click create Account field', null, { homePage }); 
    await Then('User should be redirected to Create Account page', null, { homePage }); 
  });

  test('Display the account creation form', { tag: ['@accountScenario', '@createaccount', '@TC005'] }, async ({ Given, When, Then, And, createAccount }) => { 
    await Given('User land on create Account page'); 
    await When('User inspect the form', null, { createAccount }); 
    await Then('User should see the Overview tab', null, { createAccount }); 
    await And('User should see More Information', null, { createAccount }); 
    await And('User should see Other tabs', null, { createAccount }); 
    await And('User should see Name field', null, { createAccount }); 
    await And('User should see Website field', null, { createAccount }); 
    await And('User should see Office Phone', null, { createAccount }); 
    await And('User should see Assigned To fields', null, { createAccount }); 
    await And('User should see email', null, { createAccount }); 
    await And('User should see billing address sections', null, { createAccount }); 
    await And('User should see shipping address sections', null, { createAccount }); 
  });

  test('Verify mandatory fields display an asterisk', { tag: ['@accountScenario', '@createaccount', '@TC006'] }, async ({ Given, When, Then, createAccount }) => { 
    await Given('User land on create Account page'); 
    await When('User view the Name field label', null, { createAccount }); 
    await Then('user should see "*" beside the Name label', null, { createAccount }); 
  });

  test('Prevent saving without an account name', { tag: ['@accountScenario', '@createaccount', '@TC007'] }, async ({ Given, When, Then, And, createAccount }) => { 
    await Given('User land on create Account page'); 
    await And('name field is empty', null, { createAccount }); 
    await When('User click Save', null, { createAccount }); 
    await Then('User should see "Missing required field: Name"', null, { createAccount }); 
    await And('Name should be highlighted as invalid', null, { createAccount }); 
  });

  test('Create an account with only a name', { tag: ['@accountScenario', '@createaccount', '@TC008'] }, async ({ Given, When, Then, createAccount }) => { 
    await Given('User enter only spaces in Name', null, { createAccount }); 
    await When('User click Save', null, { createAccount }); 
    await Then('User should see "Missing required field: Name"', null, { createAccount }); 
  });

  test('Create an account with minimum required information', { tag: ['@accountScenario', '@TC009', '@createaccount'] }, async ({ Given, When, Then, And, createAccount }) => { 
    await Given('User land on create Account page'); 
    await When('User enter a unique account name', null, { createAccount }); 
    await And('User saves the account', null, { createAccount }); 
    await And('User returns to the accounts list', null, { createAccount }); 
    await Then('Exactly one account should be created', null, { createAccount }); 
  });

  test('Fill out the account creation form', { tag: ['@accountScenario', '@createaccountform', '@TC010'] }, async ({ Given, When, Then, And, createAccount, viewAccount }) => { 
    await Given('User land on create Account page'); 
    await When('User enter a unique account name', null, { createAccount }); 
    await When('User fills in the account form with the following details:', {"dataTable":{"rows":[{"cells":[{"value":"Field"},{"value":"Value"}]},{"cells":[{"value":"Website"},{"value":"https://acme.com"}]},{"cells":[{"value":"Office Phone"},{"value":"555-0199"}]},{"cells":[{"value":"Assigned To"},{"value":"WillWestin"}]},{"cells":[{"value":"Billing Address"},{"value":"123 Main St, NY 10001"}]},{"cells":[{"value":"Shipping Address"},{"value":"123 Main St, NY 10001"}]}]}}, { createAccount }); 
    await And('User submits the account creation form', null, { createAccount }); 
    await Then('User should see the account created successfully', null, { createAccount, viewAccount }); 
  });

  test('Save Billing address information', { tag: ['@accountScenario', '@createaccount', '@saveBillingAddress', '@TC011'] }, async ({ Given, When, Then, And, createAccount }) => { 
    await Given('User land on create Account page'); 
    await And('User enter a unique account name', null, { createAccount }); 
    await When('the user enters the billing address details', null, { createAccount }); 
    await And('the user saves the account', null, { createAccount }); 
    await Then('the billing address values should match the entered values', null, { createAccount }); 
  });

  test('Save Shipping address information', { tag: ['@accountScenario', '@createaccount', '@saveshippingaddress', '@TC012'] }, async ({ Given, When, Then, And, createAccount }) => { 
    await Given('User land on create Account page'); 
    await And('User enter a unique account name', null, { createAccount }); 
    await When('the user enters the following shipping address:', {"dataTable":{"rows":[{"cells":[{"value":"Field"},{"value":"Value"}]},{"cells":[{"value":"Street"},{"value":"987 Main Street"}]},{"cells":[{"value":"Postal Code"},{"value":"02108"}]},{"cells":[{"value":"City"},{"value":"Tampa"}]},{"cells":[{"value":"State"},{"value":"Florida"}]},{"cells":[{"value":"Country"},{"value":"United States"}]}]}}, { createAccount }); 
    await And('the user saves the shipping address information', null, { createAccount }); 
    await Then('the shipping address should match the entered values', null, { createAccount }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/accounts/create_account.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@accountScenario","@AccountfieldisDisplayed","@TC001"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User Logged into CRM application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When user click the Accounts tab","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then User should see create Account field","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":13,"tags":["@accountScenario","@AccountfieldisDisplayed","@TC002"],"steps":[{"pwStepLine":13,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given User Logged into CRM application","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When user click the Accounts tab","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then User should see view Accounts field","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":19,"tags":["@accountScenario","@AccountfieldisDisplayed","@TC003"],"steps":[{"pwStepLine":19,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given User Logged into CRM application","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When user click the Accounts tab","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then User should see import Account","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":25,"tags":["@accountScenario","@AccountfieldisDisplayed","@TC004"],"steps":[{"pwStepLine":25,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given User Logged into CRM application","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When user click create Account field","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to Create Account page","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":32,"tags":["@accountScenario","@createaccount","@TC005"],"steps":[{"pwStepLine":31,"gherkinStepLine":33,"keywordType":"Context","textWithKeyword":"Given User land on create Account page","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When User inspect the form","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then User should see the Overview tab","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"And User should see More Information","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"And User should see Other tabs","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"And User should see Name field","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"And User should see Website field","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"And User should see Office Phone","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"And User should see Assigned To fields","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"And User should see email","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"And User should see billing address sections","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"And User should see shipping address sections","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":47,"tags":["@accountScenario","@createaccount","@TC006"],"steps":[{"pwStepLine":46,"gherkinStepLine":48,"keywordType":"Context","textWithKeyword":"Given User land on create Account page","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"When User view the Name field label","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then user should see \"*\" beside the Name label","stepMatchArguments":[{"group":{"start":16,"value":"\"*\"","children":[{"start":17,"value":"*","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":51,"pickleLine":53,"tags":["@accountScenario","@createaccount","@TC007"],"steps":[{"pwStepLine":52,"gherkinStepLine":54,"keywordType":"Context","textWithKeyword":"Given User land on create Account page","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":55,"keywordType":"Context","textWithKeyword":"And name field is empty","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":56,"keywordType":"Action","textWithKeyword":"When User click Save","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Missing required field: Name\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Missing required field: Name\"","children":[{"start":17,"value":"Missing required field: Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":56,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"And Name should be highlighted as invalid","stepMatchArguments":[]}]},
  {"pwTestLine":59,"pickleLine":61,"tags":["@accountScenario","@createaccount","@TC008"],"steps":[{"pwStepLine":60,"gherkinStepLine":62,"keywordType":"Context","textWithKeyword":"Given User enter only spaces in Name","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"When User click Save","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Missing required field: Name\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Missing required field: Name\"","children":[{"start":17,"value":"Missing required field: Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":65,"pickleLine":68,"tags":["@accountScenario","@TC009","@createaccount"],"steps":[{"pwStepLine":66,"gherkinStepLine":69,"keywordType":"Context","textWithKeyword":"Given User land on create Account page","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":70,"keywordType":"Action","textWithKeyword":"When User enter a unique account name","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"And User saves the account","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":72,"keywordType":"Action","textWithKeyword":"And User returns to the accounts list","stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":73,"keywordType":"Outcome","textWithKeyword":"Then Exactly one account should be created","stepMatchArguments":[]}]},
  {"pwTestLine":73,"pickleLine":77,"tags":["@accountScenario","@createaccountform","@TC010"],"steps":[{"pwStepLine":74,"gherkinStepLine":78,"keywordType":"Context","textWithKeyword":"Given User land on create Account page","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":79,"keywordType":"Action","textWithKeyword":"When User enter a unique account name","stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":80,"keywordType":"Action","textWithKeyword":"When User fills in the account form with the following details:","stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":87,"keywordType":"Action","textWithKeyword":"And User submits the account creation form","stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":88,"keywordType":"Outcome","textWithKeyword":"Then User should see the account created successfully","stepMatchArguments":[]}]},
  {"pwTestLine":81,"pickleLine":92,"tags":["@accountScenario","@createaccount","@saveBillingAddress","@TC011"],"steps":[{"pwStepLine":82,"gherkinStepLine":93,"keywordType":"Context","textWithKeyword":"Given User land on create Account page","stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":94,"keywordType":"Context","textWithKeyword":"And User enter a unique account name","stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":95,"keywordType":"Action","textWithKeyword":"When the user enters the billing address details","stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":96,"keywordType":"Action","textWithKeyword":"And the user saves the account","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":97,"keywordType":"Outcome","textWithKeyword":"Then the billing address values should match the entered values","stepMatchArguments":[]}]},
  {"pwTestLine":89,"pickleLine":100,"tags":["@accountScenario","@createaccount","@saveshippingaddress","@TC012"],"steps":[{"pwStepLine":90,"gherkinStepLine":101,"keywordType":"Context","textWithKeyword":"Given User land on create Account page","stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":102,"keywordType":"Context","textWithKeyword":"And User enter a unique account name","stepMatchArguments":[]},{"pwStepLine":92,"gherkinStepLine":103,"keywordType":"Action","textWithKeyword":"When the user enters the following shipping address:","stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":110,"keywordType":"Action","textWithKeyword":"And the user saves the shipping address information","stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":111,"keywordType":"Outcome","textWithKeyword":"Then the shipping address should match the entered values","stepMatchArguments":[]}]},
]; // bdd-data-end