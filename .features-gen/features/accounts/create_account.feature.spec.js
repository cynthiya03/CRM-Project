// Generated from: features\accounts\create_account.feature
import { test } from "../../../src/fixtures/pageFixture.js";

test.describe('Testing account features in CRM application', () => {

  test('verify user can log in successfully', { tag: ['@accountScenario', '@userabletologin'] }, async ({ Given, When, Then, loginPage, page }) => { 
    await Given('User open a the CRM application', null, { loginPage }); 
    await When('User enters username and password', null, { loginPage }); 
    await Then('User able to login successfully', null, { page }); 
  });

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

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\accounts\\create_account.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":["@accountScenario","@userabletologin"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User open a the CRM application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User enters username and password","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User able to login successfully","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":12,"tags":["@accountScenario","@verifyuserabletonavigatetohomepage","@TC001"],"steps":[{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given User logged into the CRM application","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When User view the top navigation menu","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to Home page","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":18,"tags":["@accountScenario","@AccounttabDisplay","@TC002"],"steps":[{"pwStepLine":19,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given User Logged into CRM application","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When user mouse hover the \"Account\" tab","stepMatchArguments":[{"group":{"start":21,"value":"\"Account\"","children":[{"start":22,"value":"Account","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User should see create Account","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":24,"tags":["@accountScenario","@AccountfieldisDisplayed","@TC003"],"steps":[{"pwStepLine":25,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given User Logged into CRM","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When user mouse hover the \"Account\" tab","stepMatchArguments":[{"group":{"start":21,"value":"\"Account\"","children":[{"start":22,"value":"Account","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then User should see view Accounts","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":30,"tags":["@accountScenario","@VerifyViewAccountsfieldisDisplayed","@TC004"],"steps":[{"pwStepLine":31,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given User Logged into CRM","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When user mouse hover the \"Account\" tab","stepMatchArguments":[{"group":{"start":21,"value":"\"Account\"","children":[{"start":22,"value":"Account","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then User should see view Accounts field","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":36,"tags":["@accountScenario","@VerifyimportAccountsfieldisDisplayed","@TC005"],"steps":[{"pwStepLine":37,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given User Logged into CRM","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When user mouse hover the \"Account\" tab","stepMatchArguments":[{"group":{"start":21,"value":"\"Account\"","children":[{"start":22,"value":"Account","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then User should see import Account","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":42,"tags":["@accountScenario","@createaccountscreen","@TC006"],"steps":[{"pwStepLine":43,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"Given User signed in application and mouse hover \"Account\"","stepMatchArguments":[{"group":{"start":43,"value":"\"Account\"","children":[{"start":44,"value":"Account","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"When user click create Account field","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to Create Account page","stepMatchArguments":[]}]},
  {"pwTestLine":48,"pickleLine":48,"tags":["@accountScenario","@createaccount","@TC007"],"steps":[{"pwStepLine":49,"gherkinStepLine":49,"keywordType":"Context","textWithKeyword":"Given User logged in application and click the Create Account screen","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":50,"keywordType":"Context","textWithKeyword":"And Create Account screen is open","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When User inspect the form","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then User should see the Overview tab","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"And User should see More Information","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"And User should see Other tabs","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"And User should see Name field","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"And User should see Website field","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"And User should see Office Phone","stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"And User should see Assigned To fields","stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"And User should see email","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"And User should see billing address sections","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"And User should see shipping address sections","stepMatchArguments":[]}]},
  {"pwTestLine":64,"pickleLine":64,"tags":["@accountScenario","@Verifymandatoryfieldsdisplayanasterisk","@TC008"],"steps":[{"pwStepLine":65,"gherkinStepLine":65,"keywordType":"Context","textWithKeyword":"Given User land on create Account page","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"When User view the Name field label","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then user should see asterisk \"*\" beside the Name label","stepMatchArguments":[{"group":{"start":25,"value":"\"*\"","children":[{"start":26,"value":"*","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":70,"pickleLine":71,"tags":["@accountScenario","@Preventsavingwithoutanaccountname","@TC009"],"steps":[{"pwStepLine":71,"gherkinStepLine":72,"keywordType":"Context","textWithKeyword":"Given User land on create Account page","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":73,"keywordType":"Context","textWithKeyword":"And name field is empty","stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":74,"keywordType":"Action","textWithKeyword":"When User click Save","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":75,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Missing required field: Name\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Missing required field: Name\"","children":[{"start":17,"value":"Missing required field: Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":75,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"And Name should be highlighted as invalid","stepMatchArguments":[]}]},
  {"pwTestLine":78,"pickleLine":79,"tags":["@accountScenario","@Rejectanaccountnamecontainingonlyspaces","@TC010"],"steps":[{"pwStepLine":79,"gherkinStepLine":80,"keywordType":"Context","textWithKeyword":"Given User land on create Account page","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":81,"keywordType":"Context","textWithKeyword":"And Create Account screen is open","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":82,"keywordType":"Action","textWithKeyword":"When User enter only spaces in Name","stepMatchArguments":[]},{"pwStepLine":82,"gherkinStepLine":83,"keywordType":"Action","textWithKeyword":"And User click Save","stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":84,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Missing required field: Name\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Missing required field: Name\"","children":[{"start":17,"value":"Missing required field: Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":86,"pickleLine":87,"tags":["@accountScenario","@Createanaccountwithminimumrequiredinformation","@TC011"],"steps":[{"pwStepLine":87,"gherkinStepLine":88,"keywordType":"Context","textWithKeyword":"Given User land on create Account page","stepMatchArguments":[]},{"pwStepLine":88,"gherkinStepLine":89,"keywordType":"Action","textWithKeyword":"When User enter a unique account name","stepMatchArguments":[]},{"pwStepLine":89,"gherkinStepLine":90,"keywordType":"Action","textWithKeyword":"And Leave optional fields empty","stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":91,"keywordType":"Action","textWithKeyword":"And retain the default assignee","stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":92,"keywordType":"Action","textWithKeyword":"And Click Save","stepMatchArguments":[]},{"pwStepLine":92,"gherkinStepLine":93,"keywordType":"Outcome","textWithKeyword":"Then Exactly one account should be created","stepMatchArguments":[]}]},
  {"pwTestLine":95,"pickleLine":97,"tags":["@accountScenario","@Saveallvisibleaccountdetails","@TC012"],"steps":[{"pwStepLine":96,"gherkinStepLine":98,"keywordType":"Context","textWithKeyword":"Given User land on create Account page","stepMatchArguments":[]},{"pwStepLine":97,"gherkinStepLine":99,"keywordType":"Context","textWithKeyword":"And Create Account screen is open","stepMatchArguments":[]},{"pwStepLine":98,"gherkinStepLine":100,"keywordType":"Action","textWithKeyword":"When Pass unique value to all create account field","stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":101,"keywordType":"Outcome","textWithKeyword":"Then All values should appear in their corresponding fields","stepMatchArguments":[]}]},
  {"pwTestLine":104,"pickleLine":117,"tags":["@accountScenario","@validateEmailaddress","@TC0013"],"steps":[{"pwStepLine":105,"gherkinStepLine":105,"keywordType":"Context","textWithKeyword":"Given the Create Account screen is open","stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":106,"keywordType":"Context","textWithKeyword":"And the user has entered a unique account name","stepMatchArguments":[]},{"pwStepLine":107,"gherkinStepLine":107,"keywordType":"Context","textWithKeyword":"And the user has entered \"primary@example.com\" in the first email row","stepMatchArguments":[{"group":{"start":21,"value":"\"primary@example.com\"","children":[{"start":22,"value":"primary@example.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":108,"gherkinStepLine":108,"keywordType":"Action","textWithKeyword":"When the user clicks the add email button","stepMatchArguments":[]},{"pwStepLine":109,"gherkinStepLine":109,"keywordType":"Action","textWithKeyword":"And the user enters \"secondary@example.com\" in the new row","stepMatchArguments":[{"group":{"start":16,"value":"\"secondary@example.com\"","children":[{"start":17,"value":"secondary@example.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":110,"gherkinStepLine":110,"keywordType":"Action","textWithKeyword":"And the user clicks Save","stepMatchArguments":[]},{"pwStepLine":111,"gherkinStepLine":111,"keywordType":"Action","textWithKeyword":"And the user reopens the account","stepMatchArguments":[]},{"pwStepLine":112,"gherkinStepLine":112,"keywordType":"Outcome","textWithKeyword":"Then the first email row should contain \"primary@example.com\"","stepMatchArguments":[{"group":{"start":35,"value":"\"primary@example.com\"","children":[{"start":36,"value":"primary@example.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":113,"gherkinStepLine":113,"keywordType":"Outcome","textWithKeyword":"Then the second email row should contain \"secondary@example.com\"","stepMatchArguments":[{"group":{"start":36,"value":"\"secondary@example.com\"","children":[{"start":37,"value":"secondary@example.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":116,"pickleLine":118,"tags":["@accountScenario","@validateEmailaddress","@TC0013"],"steps":[{"pwStepLine":117,"gherkinStepLine":105,"keywordType":"Context","textWithKeyword":"Given the Create Account screen is open","stepMatchArguments":[]},{"pwStepLine":118,"gherkinStepLine":106,"keywordType":"Context","textWithKeyword":"And the user has entered a unique account name","stepMatchArguments":[]},{"pwStepLine":119,"gherkinStepLine":107,"keywordType":"Context","textWithKeyword":"And the user has entered \"alice.smith@example.com\" in the first email row","stepMatchArguments":[{"group":{"start":21,"value":"\"alice.smith@example.com\"","children":[{"start":22,"value":"alice.smith@example.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":120,"gherkinStepLine":108,"keywordType":"Action","textWithKeyword":"When the user clicks the add email button","stepMatchArguments":[]},{"pwStepLine":121,"gherkinStepLine":109,"keywordType":"Action","textWithKeyword":"And the user enters \"\" in the new row","stepMatchArguments":[{"group":{"start":16,"value":"\"\"","children":[{"start":17,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":122,"gherkinStepLine":110,"keywordType":"Action","textWithKeyword":"And the user clicks Save","stepMatchArguments":[]},{"pwStepLine":123,"gherkinStepLine":111,"keywordType":"Action","textWithKeyword":"And the user reopens the account","stepMatchArguments":[]},{"pwStepLine":124,"gherkinStepLine":112,"keywordType":"Outcome","textWithKeyword":"Then the first email row should contain \"alice.smith@example.com\"","stepMatchArguments":[{"group":{"start":35,"value":"\"alice.smith@example.com\"","children":[{"start":36,"value":"alice.smith@example.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":125,"gherkinStepLine":113,"keywordType":"Outcome","textWithKeyword":"Then the second email row should contain \"\"","stepMatchArguments":[{"group":{"start":36,"value":"\"\"","children":[{"start":37,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":128,"pickleLine":119,"tags":["@accountScenario","@validateEmailaddress","@TC0013"],"steps":[{"pwStepLine":129,"gherkinStepLine":105,"keywordType":"Context","textWithKeyword":"Given the Create Account screen is open","stepMatchArguments":[]},{"pwStepLine":130,"gherkinStepLine":106,"keywordType":"Context","textWithKeyword":"And the user has entered a unique account name","stepMatchArguments":[]},{"pwStepLine":131,"gherkinStepLine":107,"keywordType":"Context","textWithKeyword":"And the user has entered \"sales+primary@\" in the first email row","stepMatchArguments":[{"group":{"start":21,"value":"\"sales+primary@\"","children":[{"start":22,"value":"sales+primary@","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":132,"gherkinStepLine":108,"keywordType":"Action","textWithKeyword":"When the user clicks the add email button","stepMatchArguments":[]},{"pwStepLine":133,"gherkinStepLine":109,"keywordType":"Action","textWithKeyword":"And the user enters \"support+secondary@example.net\" in the new row","stepMatchArguments":[{"group":{"start":16,"value":"\"support+secondary@example.net\"","children":[{"start":17,"value":"support+secondary@example.net","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":134,"gherkinStepLine":110,"keywordType":"Action","textWithKeyword":"And the user clicks Save","stepMatchArguments":[]},{"pwStepLine":135,"gherkinStepLine":111,"keywordType":"Action","textWithKeyword":"And the user reopens the account","stepMatchArguments":[]},{"pwStepLine":136,"gherkinStepLine":112,"keywordType":"Outcome","textWithKeyword":"Then the first email row should contain \"sales+primary@\"","stepMatchArguments":[{"group":{"start":35,"value":"\"sales+primary@\"","children":[{"start":36,"value":"sales+primary@","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":137,"gherkinStepLine":113,"keywordType":"Outcome","textWithKeyword":"Then the second email row should contain \"support+secondary@example.net\"","stepMatchArguments":[{"group":{"start":36,"value":"\"support+secondary@example.net\"","children":[{"start":37,"value":"support+secondary@example.net","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":140,"pickleLine":120,"tags":["@accountScenario","@validateEmailaddress","@TC0013"],"steps":[{"pwStepLine":141,"gherkinStepLine":105,"keywordType":"Context","textWithKeyword":"Given the Create Account screen is open","stepMatchArguments":[]},{"pwStepLine":142,"gherkinStepLine":106,"keywordType":"Context","textWithKeyword":"And the user has entered a unique account name","stepMatchArguments":[]},{"pwStepLine":143,"gherkinStepLine":107,"keywordType":"Context","textWithKeyword":"And the user has entered \"\" in the first email row","stepMatchArguments":[{"group":{"start":21,"value":"\"\"","children":[{"start":22,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":144,"gherkinStepLine":108,"keywordType":"Action","textWithKeyword":"When the user clicks the add email button","stepMatchArguments":[]},{"pwStepLine":145,"gherkinStepLine":109,"keywordType":"Action","textWithKeyword":"And the user enters \"backup456@example.com\" in the new row","stepMatchArguments":[{"group":{"start":16,"value":"\"backup456@example.com\"","children":[{"start":17,"value":"backup456@example.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":146,"gherkinStepLine":110,"keywordType":"Action","textWithKeyword":"And the user clicks Save","stepMatchArguments":[]},{"pwStepLine":147,"gherkinStepLine":111,"keywordType":"Action","textWithKeyword":"And the user reopens the account","stepMatchArguments":[]},{"pwStepLine":148,"gherkinStepLine":112,"keywordType":"Outcome","textWithKeyword":"Then the first email row should contain \"\"","stepMatchArguments":[{"group":{"start":35,"value":"\"\"","children":[{"start":36,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":149,"gherkinStepLine":113,"keywordType":"Outcome","textWithKeyword":"Then the second email row should contain \"backup456@example.com\"","stepMatchArguments":[{"group":{"start":36,"value":"\"backup456@example.com\"","children":[{"start":37,"value":"backup456@example.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":154,"pickleLine":124,"tags":["@accountScenario","@saveBillingAddress","@TC0014"],"steps":[{"pwStepLine":155,"gherkinStepLine":125,"keywordType":"Context","textWithKeyword":"Given the Create Account screen is open","stepMatchArguments":[]},{"pwStepLine":156,"gherkinStepLine":126,"keywordType":"Context","textWithKeyword":"And the user has entered a unique account name","stepMatchArguments":[]},{"pwStepLine":157,"gherkinStepLine":127,"keywordType":"Action","textWithKeyword":"When the user enters the billing address details","stepMatchArguments":[]},{"pwStepLine":158,"gherkinStepLine":128,"keywordType":"Action","textWithKeyword":"And the user saves the account","stepMatchArguments":[]},{"pwStepLine":159,"gherkinStepLine":129,"keywordType":"Action","textWithKeyword":"And the user reopens the account","stepMatchArguments":[]},{"pwStepLine":160,"gherkinStepLine":130,"keywordType":"Outcome","textWithKeyword":"Then the billing address values should match the entered values","stepMatchArguments":[]}]},
  {"pwTestLine":163,"pickleLine":133,"tags":["@accountScenario","@saveshippingaddress","@TC0015"],"steps":[{"pwStepLine":164,"gherkinStepLine":134,"keywordType":"Context","textWithKeyword":"Given the Create Account screen is open","stepMatchArguments":[]},{"pwStepLine":165,"gherkinStepLine":135,"keywordType":"Context","textWithKeyword":"And the user has entered a unique account name","stepMatchArguments":[]},{"pwStepLine":166,"gherkinStepLine":136,"keywordType":"Action","textWithKeyword":"When the user enters the following shipping address:","stepMatchArguments":[]},{"pwStepLine":167,"gherkinStepLine":143,"keywordType":"Action","textWithKeyword":"And the user clicks Save","stepMatchArguments":[]},{"pwStepLine":168,"gherkinStepLine":144,"keywordType":"Action","textWithKeyword":"And the user reopens the account","stepMatchArguments":[]},{"pwStepLine":169,"gherkinStepLine":145,"keywordType":"Outcome","textWithKeyword":"Then the shipping address should match the entered values","stepMatchArguments":[]}]},
  {"pwTestLine":172,"pickleLine":149,"tags":["@accountScenario","@confirmingduplicateaccountpolicy","@TC016"],"steps":[{"pwStepLine":173,"gherkinStepLine":150,"keywordType":"Context","textWithKeyword":"Given User land on create Account page","stepMatchArguments":[]},{"pwStepLine":174,"gherkinStepLine":151,"keywordType":"Context","textWithKeyword":"And An account with the entered name already exists","stepMatchArguments":[]},{"pwStepLine":175,"gherkinStepLine":152,"keywordType":"Context","textWithKeyword":"And Duplicate account names are prohibited","stepMatchArguments":[]},{"pwStepLine":176,"gherkinStepLine":153,"keywordType":"Action","textWithKeyword":"When User enter that existing account name","stepMatchArguments":[]},{"pwStepLine":177,"gherkinStepLine":154,"keywordType":"Action","textWithKeyword":"And User click Save","stepMatchArguments":[]},{"pwStepLine":178,"gherkinStepLine":155,"keywordType":"Outcome","textWithKeyword":"Then User should see a duplicate account validation message","stepMatchArguments":[]}]},
]; // bdd-data-end