// Generated from: features/accounts/create_account.feature
import { test } from "../../../src/fixtures/pageFixture.js";

test.describe('Testing account features in CRM application', () => {

  test('verify user able to navigate to home page', { tag: ['@accountScenario', '@verifyuserabletonavigatetohomepage', '@TC001'] }, async ({ Given, When, Then }) => { 
    await Given('User logged into the CRM application'); 
    await When('User view the top navigation menu'); 
    await Then('User should be redirected to Home page'); 
  });

  test('Verify Account tab is displayed', { tag: ['@accountScenario', '@AccounttabDisplay', '@TC002'] }, async ({ Given, When, Then }) => { 
    await Given('User Logged into CRM application'); 
    await When('user mouse hover the "Account" tab'); 
    await Then('User should see create Account'); 
  });

  test('Verify create Account field is Displayed', { tag: ['@accountScenario', '@AccountfieldisDisplayed', '@TC003'] }, async ({ Given, When, Then }) => { 
    await Given('User Logged into CRM'); 
    await When('user mouse hover the "Account" tab'); 
    await Then('User should see view Accounts'); 
  });

  test('Verify View Accounts field is Displayed', { tag: ['@accountScenario', '@VerifyViewAccountsfieldisDisplayed', '@TC004'] }, async ({ Given, When, Then }) => { 
    await Given('User Logged into CRM'); 
    await When('user mouse hover the "Account" tab'); 
    await Then('User should see view Accounts field'); 
  });

  test('Verify import Accounts field is Displayed', { tag: ['@accountScenario', '@VerifyimportAccountsfieldisDisplayed', '@TC005'] }, async ({ Given, When, Then }) => { 
    await Given('User Logged into CRM'); 
    await When('user mouse hover the "Account" tab'); 
    await Then('User should see import Account'); 
  });

  test('Verify user able to land on create account screen', { tag: ['@accountScenario', '@createaccountscreen', '@TC006'] }, async ({ Given, When, Then }) => { 
    await Given('User signed in application and mouse hover "Account"'); 
    await When('user click create Account field'); 
    await Then('User should be redirected to Create Account page'); 
  });

  test('Display the account creation form', { tag: ['@accountScenario', '@createaccount', '@TC007'] }, async ({ Given, When, Then, And }) => { 
    await Given('User logged in application and click the Create Account screen'); 
    await And('Create Account screen is open'); 
    await When('User inspect the form'); 
    await Then('User should see the Overview tab'); 
    await And('User should see More Information'); 
    await And('User should see Other tabs'); 
    await And('User should see Name field'); 
    await And('User should see Website field'); 
    await And('User should see Office Phone'); 
    await And('User should see Assigned To fields'); 
    await And('User should see email'); 
    await And('User should see billing address sections'); 
    await And('User should see shipping address sections'); 
  });

  test('Verify mandatory fields display an asterisk', { tag: ['@accountScenario', '@Verifymandatoryfieldsdisplayanasterisk', '@TC008'] }, async ({ Given, When, Then }) => { 
    await Given('User land on create Account page'); 
    await When('User view the Name field label'); 
    await Then('user should see asterisk "*" beside the Name label'); 
  });

  test('Prevent saving without an account name', { tag: ['@accountScenario', '@Preventsavingwithoutanaccountname', '@TC009'] }, async ({ Given, When, Then, And }) => { 
    await Given('User land on create Account page'); 
    await And('name field is empty'); 
    await When('User click Save'); 
    await Then('User should see "Missing required field: Name"'); 
    await And('Name should be highlighted as invalid'); 
  });

  test('Reject an account name containing only spaces', { tag: ['@accountScenario', '@Rejectanaccountnamecontainingonlyspaces', '@TC010'] }, async ({ Given, When, Then, And }) => { 
    await Given('User land on create Account page'); 
    await And('Create Account screen is open'); 
    await When('User enter only spaces in Name'); 
    await And('User click Save'); 
    await Then('User should see "Missing required field: Name"'); 
  });

  test('Create an account with minimum required information', { tag: ['@accountScenario', '@Createanaccountwithminimumrequiredinformation', '@TC011'] }, async ({ Given, When, Then, And }) => { 
    await Given('User land on create Account page'); 
    await When('User enter a unique account name'); 
    await And('Leave optional fields empty'); 
    await And('retain the default assignee'); 
    await And('Click Save'); 
    await Then('Exactly one account should be created'); 
  });

  test('Save all visible account details', { tag: ['@accountScenario', '@Saveallvisibleaccountdetails', '@TC012'] }, async ({ Given, When, Then, And }) => { 
    await Given('User land on create Account page'); 
    await And('Create Account screen is open'); 
    await When('Pass unique value to all create account field'); 
    await Then('All values should appear in their corresponding fields'); 
  });

  test.describe('Save and verify primary and secondary email addresses', () => {

    test('Example #1', { tag: ['@accountScenario', '@validateEmailaddress', '@TC0013'] }, async ({ Given, When, Then, And }) => { 
      await Given('the Create Account screen is open'); 
      await And('the user has entered a unique account name'); 
      await And('the user has entered "primary@example.com" in the first email row'); 
      await When('the user clicks the add email button'); 
      await And('the user enters "secondary@example.com" in the new row'); 
      await And('the user clicks Save'); 
      await And('the user reopens the account'); 
      await Then('the first email row should contain "primary@example.com"'); 
      await Then('the second email row should contain "secondary@example.com"'); 
    });

    test('Example #2', { tag: ['@accountScenario', '@validateEmailaddress', '@TC0013'] }, async ({ Given, When, Then, And }) => { 
      await Given('the Create Account screen is open'); 
      await And('the user has entered a unique account name'); 
      await And('the user has entered "alice.smith@example.com" in the first email row'); 
      await When('the user clicks the add email button'); 
      await And('the user enters "" in the new row'); 
      await And('the user clicks Save'); 
      await And('the user reopens the account'); 
      await Then('the first email row should contain "alice.smith@example.com"'); 
      await Then('the second email row should contain ""'); 
    });

    test('Example #3', { tag: ['@accountScenario', '@validateEmailaddress', '@TC0013'] }, async ({ Given, When, Then, And }) => { 
      await Given('the Create Account screen is open'); 
      await And('the user has entered a unique account name'); 
      await And('the user has entered "sales+primary@" in the first email row'); 
      await When('the user clicks the add email button'); 
      await And('the user enters "support+secondary@example.net" in the new row'); 
      await And('the user clicks Save'); 
      await And('the user reopens the account'); 
      await Then('the first email row should contain "sales+primary@"'); 
      await Then('the second email row should contain "support+secondary@example.net"'); 
    });

    test('Example #4', { tag: ['@accountScenario', '@validateEmailaddress', '@TC0013'] }, async ({ Given, When, Then, And }) => { 
      await Given('the Create Account screen is open'); 
      await And('the user has entered a unique account name'); 
      await And('the user has entered "" in the first email row'); 
      await When('the user clicks the add email button'); 
      await And('the user enters "backup456@example.com" in the new row'); 
      await And('the user clicks Save'); 
      await And('the user reopens the account'); 
      await Then('the first email row should contain ""'); 
      await Then('the second email row should contain "backup456@example.com"'); 
    });

  });

  test('Save Billing address information', { tag: ['@accountScenario', '@saveBillingAddress', '@TC0014'] }, async ({ Given, When, Then, And }) => { 
    await Given('the Create Account screen is open'); 
    await And('the user has entered a unique account name'); 
    await When('the user enters the billing address details'); 
    await And('the user saves the account'); 
    await And('the user reopens the account'); 
    await Then('the billing address values should match the entered values'); 
  });

  test('Save Shipping address information', { tag: ['@accountScenario', '@saveshippingaddress', '@TC0015'] }, async ({ Given, When, Then, And }) => { 
    await Given('the Create Account screen is open'); 
    await And('the user has entered a unique account name'); 
    await When('the user enters the following shipping address:', {"dataTable":{"rows":[{"cells":[{"value":"Field"},{"value":"Value"}]},{"cells":[{"value":"Street"},{"value":"123 Main Street"}]},{"cells":[{"value":"Postal Code"},{"value":"02108"}]},{"cells":[{"value":"City"},{"value":"Boston"}]},{"cells":[{"value":"State"},{"value":"Massachusetts"}]},{"cells":[{"value":"Country"},{"value":"United States"}]}]}}); 
    await And('the user clicks Save'); 
    await And('the user reopens the account'); 
    await Then('the shipping address should match the entered values'); 
  });

  test('confirming duplicate account policy', { tag: ['@accountScenario', '@confirmingduplicateaccountpolicy', '@TC016'] }, async ({ Given, When, Then, And }) => { 
    await Given('User land on create Account page'); 
    await And('An account with the entered name already exists'); 
    await And('Duplicate account names are prohibited'); 
    await When('User enter that existing account name'); 
    await And('User click Save'); 
    await Then('User should see a duplicate account validation message'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, loginPage }) => $runScenarioHooks('before', { loginPage }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/accounts/create_account.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":["@accountScenario","@verifyuserabletonavigatetohomepage","@TC001"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User logged into the CRM application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User view the top navigation menu","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to Home page","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":12,"tags":["@accountScenario","@AccounttabDisplay","@TC002"],"steps":[{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given User Logged into CRM application","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When user mouse hover the \"Account\" tab","stepMatchArguments":[{"group":{"start":21,"value":"\"Account\"","children":[{"start":22,"value":"Account","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then User should see create Account","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":18,"tags":["@accountScenario","@AccountfieldisDisplayed","@TC003"],"steps":[{"pwStepLine":19,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given User Logged into CRM","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When user mouse hover the \"Account\" tab","stepMatchArguments":[{"group":{"start":21,"value":"\"Account\"","children":[{"start":22,"value":"Account","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User should see view Accounts","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":24,"tags":["@accountScenario","@VerifyViewAccountsfieldisDisplayed","@TC004"],"steps":[{"pwStepLine":25,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given User Logged into CRM","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When user mouse hover the \"Account\" tab","stepMatchArguments":[{"group":{"start":21,"value":"\"Account\"","children":[{"start":22,"value":"Account","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then User should see view Accounts field","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":30,"tags":["@accountScenario","@VerifyimportAccountsfieldisDisplayed","@TC005"],"steps":[{"pwStepLine":31,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given User Logged into CRM","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When user mouse hover the \"Account\" tab","stepMatchArguments":[{"group":{"start":21,"value":"\"Account\"","children":[{"start":22,"value":"Account","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then User should see import Account","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":36,"tags":["@accountScenario","@createaccountscreen","@TC006"],"steps":[{"pwStepLine":37,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given User signed in application and mouse hover \"Account\"","stepMatchArguments":[{"group":{"start":43,"value":"\"Account\"","children":[{"start":44,"value":"Account","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When user click create Account field","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to Create Account page","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":42,"tags":["@accountScenario","@createaccount","@TC007"],"steps":[{"pwStepLine":43,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"Given User logged in application and click the Create Account screen","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"And Create Account screen is open","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"When User inspect the form","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then User should see the Overview tab","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"And User should see More Information","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"And User should see Other tabs","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"And User should see Name field","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"And User should see Website field","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"And User should see Office Phone","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"And User should see Assigned To fields","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"And User should see email","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"And User should see billing address sections","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"And User should see shipping address sections","stepMatchArguments":[]}]},
  {"pwTestLine":58,"pickleLine":58,"tags":["@accountScenario","@Verifymandatoryfieldsdisplayanasterisk","@TC008"],"steps":[{"pwStepLine":59,"gherkinStepLine":59,"keywordType":"Context","textWithKeyword":"Given User land on create Account page","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When User view the Name field label","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then user should see asterisk \"*\" beside the Name label","stepMatchArguments":[{"group":{"start":25,"value":"\"*\"","children":[{"start":26,"value":"*","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":64,"pickleLine":65,"tags":["@accountScenario","@Preventsavingwithoutanaccountname","@TC009"],"steps":[{"pwStepLine":65,"gherkinStepLine":66,"keywordType":"Context","textWithKeyword":"Given User land on create Account page","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":67,"keywordType":"Context","textWithKeyword":"And name field is empty","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":68,"keywordType":"Action","textWithKeyword":"When User click Save","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Missing required field: Name\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Missing required field: Name\"","children":[{"start":17,"value":"Missing required field: Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":69,"gherkinStepLine":70,"keywordType":"Outcome","textWithKeyword":"And Name should be highlighted as invalid","stepMatchArguments":[]}]},
  {"pwTestLine":72,"pickleLine":73,"tags":["@accountScenario","@Rejectanaccountnamecontainingonlyspaces","@TC010"],"steps":[{"pwStepLine":73,"gherkinStepLine":74,"keywordType":"Context","textWithKeyword":"Given User land on create Account page","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":75,"keywordType":"Context","textWithKeyword":"And Create Account screen is open","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":76,"keywordType":"Action","textWithKeyword":"When User enter only spaces in Name","stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":77,"keywordType":"Action","textWithKeyword":"And User click Save","stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":78,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Missing required field: Name\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Missing required field: Name\"","children":[{"start":17,"value":"Missing required field: Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":80,"pickleLine":81,"tags":["@accountScenario","@Createanaccountwithminimumrequiredinformation","@TC011"],"steps":[{"pwStepLine":81,"gherkinStepLine":82,"keywordType":"Context","textWithKeyword":"Given User land on create Account page","stepMatchArguments":[]},{"pwStepLine":82,"gherkinStepLine":83,"keywordType":"Action","textWithKeyword":"When User enter a unique account name","stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":84,"keywordType":"Action","textWithKeyword":"And Leave optional fields empty","stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":85,"keywordType":"Action","textWithKeyword":"And retain the default assignee","stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":86,"keywordType":"Action","textWithKeyword":"And Click Save","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":87,"keywordType":"Outcome","textWithKeyword":"Then Exactly one account should be created","stepMatchArguments":[]}]},
  {"pwTestLine":89,"pickleLine":91,"tags":["@accountScenario","@Saveallvisibleaccountdetails","@TC012"],"steps":[{"pwStepLine":90,"gherkinStepLine":92,"keywordType":"Context","textWithKeyword":"Given User land on create Account page","stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":93,"keywordType":"Context","textWithKeyword":"And Create Account screen is open","stepMatchArguments":[]},{"pwStepLine":92,"gherkinStepLine":94,"keywordType":"Action","textWithKeyword":"When Pass unique value to all create account field","stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":95,"keywordType":"Outcome","textWithKeyword":"Then All values should appear in their corresponding fields","stepMatchArguments":[]}]},
  {"pwTestLine":98,"pickleLine":111,"tags":["@accountScenario","@validateEmailaddress","@TC0013"],"steps":[{"pwStepLine":99,"gherkinStepLine":99,"keywordType":"Context","textWithKeyword":"Given the Create Account screen is open","stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":100,"keywordType":"Context","textWithKeyword":"And the user has entered a unique account name","stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":101,"keywordType":"Context","textWithKeyword":"And the user has entered \"primary@example.com\" in the first email row","stepMatchArguments":[{"group":{"start":21,"value":"\"primary@example.com\"","children":[{"start":22,"value":"primary@example.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":102,"gherkinStepLine":102,"keywordType":"Action","textWithKeyword":"When the user clicks the add email button","stepMatchArguments":[]},{"pwStepLine":103,"gherkinStepLine":103,"keywordType":"Action","textWithKeyword":"And the user enters \"secondary@example.com\" in the new row","stepMatchArguments":[{"group":{"start":16,"value":"\"secondary@example.com\"","children":[{"start":17,"value":"secondary@example.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":104,"gherkinStepLine":104,"keywordType":"Action","textWithKeyword":"And the user clicks Save","stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":105,"keywordType":"Action","textWithKeyword":"And the user reopens the account","stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":106,"keywordType":"Outcome","textWithKeyword":"Then the first email row should contain \"primary@example.com\"","stepMatchArguments":[{"group":{"start":35,"value":"\"primary@example.com\"","children":[{"start":36,"value":"primary@example.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":107,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"Then the second email row should contain \"secondary@example.com\"","stepMatchArguments":[{"group":{"start":36,"value":"\"secondary@example.com\"","children":[{"start":37,"value":"secondary@example.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":110,"pickleLine":112,"tags":["@accountScenario","@validateEmailaddress","@TC0013"],"steps":[{"pwStepLine":111,"gherkinStepLine":99,"keywordType":"Context","textWithKeyword":"Given the Create Account screen is open","stepMatchArguments":[]},{"pwStepLine":112,"gherkinStepLine":100,"keywordType":"Context","textWithKeyword":"And the user has entered a unique account name","stepMatchArguments":[]},{"pwStepLine":113,"gherkinStepLine":101,"keywordType":"Context","textWithKeyword":"And the user has entered \"alice.smith@example.com\" in the first email row","stepMatchArguments":[{"group":{"start":21,"value":"\"alice.smith@example.com\"","children":[{"start":22,"value":"alice.smith@example.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":114,"gherkinStepLine":102,"keywordType":"Action","textWithKeyword":"When the user clicks the add email button","stepMatchArguments":[]},{"pwStepLine":115,"gherkinStepLine":103,"keywordType":"Action","textWithKeyword":"And the user enters \"\" in the new row","stepMatchArguments":[{"group":{"start":16,"value":"\"\"","children":[{"start":17,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":116,"gherkinStepLine":104,"keywordType":"Action","textWithKeyword":"And the user clicks Save","stepMatchArguments":[]},{"pwStepLine":117,"gherkinStepLine":105,"keywordType":"Action","textWithKeyword":"And the user reopens the account","stepMatchArguments":[]},{"pwStepLine":118,"gherkinStepLine":106,"keywordType":"Outcome","textWithKeyword":"Then the first email row should contain \"alice.smith@example.com\"","stepMatchArguments":[{"group":{"start":35,"value":"\"alice.smith@example.com\"","children":[{"start":36,"value":"alice.smith@example.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":119,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"Then the second email row should contain \"\"","stepMatchArguments":[{"group":{"start":36,"value":"\"\"","children":[{"start":37,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":122,"pickleLine":113,"tags":["@accountScenario","@validateEmailaddress","@TC0013"],"steps":[{"pwStepLine":123,"gherkinStepLine":99,"keywordType":"Context","textWithKeyword":"Given the Create Account screen is open","stepMatchArguments":[]},{"pwStepLine":124,"gherkinStepLine":100,"keywordType":"Context","textWithKeyword":"And the user has entered a unique account name","stepMatchArguments":[]},{"pwStepLine":125,"gherkinStepLine":101,"keywordType":"Context","textWithKeyword":"And the user has entered \"sales+primary@\" in the first email row","stepMatchArguments":[{"group":{"start":21,"value":"\"sales+primary@\"","children":[{"start":22,"value":"sales+primary@","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":126,"gherkinStepLine":102,"keywordType":"Action","textWithKeyword":"When the user clicks the add email button","stepMatchArguments":[]},{"pwStepLine":127,"gherkinStepLine":103,"keywordType":"Action","textWithKeyword":"And the user enters \"support+secondary@example.net\" in the new row","stepMatchArguments":[{"group":{"start":16,"value":"\"support+secondary@example.net\"","children":[{"start":17,"value":"support+secondary@example.net","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":128,"gherkinStepLine":104,"keywordType":"Action","textWithKeyword":"And the user clicks Save","stepMatchArguments":[]},{"pwStepLine":129,"gherkinStepLine":105,"keywordType":"Action","textWithKeyword":"And the user reopens the account","stepMatchArguments":[]},{"pwStepLine":130,"gherkinStepLine":106,"keywordType":"Outcome","textWithKeyword":"Then the first email row should contain \"sales+primary@\"","stepMatchArguments":[{"group":{"start":35,"value":"\"sales+primary@\"","children":[{"start":36,"value":"sales+primary@","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":131,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"Then the second email row should contain \"support+secondary@example.net\"","stepMatchArguments":[{"group":{"start":36,"value":"\"support+secondary@example.net\"","children":[{"start":37,"value":"support+secondary@example.net","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":134,"pickleLine":114,"tags":["@accountScenario","@validateEmailaddress","@TC0013"],"steps":[{"pwStepLine":135,"gherkinStepLine":99,"keywordType":"Context","textWithKeyword":"Given the Create Account screen is open","stepMatchArguments":[]},{"pwStepLine":136,"gherkinStepLine":100,"keywordType":"Context","textWithKeyword":"And the user has entered a unique account name","stepMatchArguments":[]},{"pwStepLine":137,"gherkinStepLine":101,"keywordType":"Context","textWithKeyword":"And the user has entered \"\" in the first email row","stepMatchArguments":[{"group":{"start":21,"value":"\"\"","children":[{"start":22,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":138,"gherkinStepLine":102,"keywordType":"Action","textWithKeyword":"When the user clicks the add email button","stepMatchArguments":[]},{"pwStepLine":139,"gherkinStepLine":103,"keywordType":"Action","textWithKeyword":"And the user enters \"backup456@example.com\" in the new row","stepMatchArguments":[{"group":{"start":16,"value":"\"backup456@example.com\"","children":[{"start":17,"value":"backup456@example.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":140,"gherkinStepLine":104,"keywordType":"Action","textWithKeyword":"And the user clicks Save","stepMatchArguments":[]},{"pwStepLine":141,"gherkinStepLine":105,"keywordType":"Action","textWithKeyword":"And the user reopens the account","stepMatchArguments":[]},{"pwStepLine":142,"gherkinStepLine":106,"keywordType":"Outcome","textWithKeyword":"Then the first email row should contain \"\"","stepMatchArguments":[{"group":{"start":35,"value":"\"\"","children":[{"start":36,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":143,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"Then the second email row should contain \"backup456@example.com\"","stepMatchArguments":[{"group":{"start":36,"value":"\"backup456@example.com\"","children":[{"start":37,"value":"backup456@example.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":148,"pickleLine":118,"tags":["@accountScenario","@saveBillingAddress","@TC0014"],"steps":[{"pwStepLine":149,"gherkinStepLine":119,"keywordType":"Context","textWithKeyword":"Given the Create Account screen is open","stepMatchArguments":[]},{"pwStepLine":150,"gherkinStepLine":120,"keywordType":"Context","textWithKeyword":"And the user has entered a unique account name","stepMatchArguments":[]},{"pwStepLine":151,"gherkinStepLine":121,"keywordType":"Action","textWithKeyword":"When the user enters the billing address details","stepMatchArguments":[]},{"pwStepLine":152,"gherkinStepLine":122,"keywordType":"Action","textWithKeyword":"And the user saves the account","stepMatchArguments":[]},{"pwStepLine":153,"gherkinStepLine":123,"keywordType":"Action","textWithKeyword":"And the user reopens the account","stepMatchArguments":[]},{"pwStepLine":154,"gherkinStepLine":124,"keywordType":"Outcome","textWithKeyword":"Then the billing address values should match the entered values","stepMatchArguments":[]}]},
  {"pwTestLine":157,"pickleLine":127,"tags":["@accountScenario","@saveshippingaddress","@TC0015"],"steps":[{"pwStepLine":158,"gherkinStepLine":128,"keywordType":"Context","textWithKeyword":"Given the Create Account screen is open","stepMatchArguments":[]},{"pwStepLine":159,"gherkinStepLine":129,"keywordType":"Context","textWithKeyword":"And the user has entered a unique account name","stepMatchArguments":[]},{"pwStepLine":160,"gherkinStepLine":130,"keywordType":"Action","textWithKeyword":"When the user enters the following shipping address:","stepMatchArguments":[]},{"pwStepLine":161,"gherkinStepLine":137,"keywordType":"Action","textWithKeyword":"And the user clicks Save","stepMatchArguments":[]},{"pwStepLine":162,"gherkinStepLine":138,"keywordType":"Action","textWithKeyword":"And the user reopens the account","stepMatchArguments":[]},{"pwStepLine":163,"gherkinStepLine":139,"keywordType":"Outcome","textWithKeyword":"Then the shipping address should match the entered values","stepMatchArguments":[]}]},
  {"pwTestLine":166,"pickleLine":143,"tags":["@accountScenario","@confirmingduplicateaccountpolicy","@TC016"],"steps":[{"pwStepLine":167,"gherkinStepLine":144,"keywordType":"Context","textWithKeyword":"Given User land on create Account page","stepMatchArguments":[]},{"pwStepLine":168,"gherkinStepLine":145,"keywordType":"Context","textWithKeyword":"And An account with the entered name already exists","stepMatchArguments":[]},{"pwStepLine":169,"gherkinStepLine":146,"keywordType":"Context","textWithKeyword":"And Duplicate account names are prohibited","stepMatchArguments":[]},{"pwStepLine":170,"gherkinStepLine":147,"keywordType":"Action","textWithKeyword":"When User enter that existing account name","stepMatchArguments":[]},{"pwStepLine":171,"gherkinStepLine":148,"keywordType":"Action","textWithKeyword":"And User click Save","stepMatchArguments":[]},{"pwStepLine":172,"gherkinStepLine":149,"keywordType":"Outcome","textWithKeyword":"Then User should see a duplicate account validation message","stepMatchArguments":[]}]},
]; // bdd-data-end