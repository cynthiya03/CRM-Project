// Generated from: features\contacts\create_contact.feature
import { test } from "../../../src/fixtures/pageFixture.js";

test.describe('Testing contacts features in CRM application', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('the user is logged in to the CRM application'); 
  });
  
  test('Verify Contact tab is displayed', { tag: ['@Contacts', '@TC101'] }, async ({ When, Then }) => { 
    await When('the user hovers over the Contact tab'); 
    await Then('the user should see Create Contact'); 
  });

  test('Navigate to the Create Contact page', { tag: ['@Contacts', '@TC102'] }, async ({ Given, When, Then }) => { 
    await Given('the user hovers over the Contact tab'); 
    await When('the user clicks Create Contact'); 
    await Then('the user should be redirected to the Create Contact page'); 
  });

  test('Display the contact creation form tabs', { tag: ['@Contacts', '@TC103'] }, async ({ Given, When, Then }) => { 
    await Given('the Create Contact page is open'); 
    await When('the user inspects the form'); 
    await Then('the user should see the Overview tab'); 
    await Then('the user should see More Information'); 
    await Then('the user should see Other tabs'); 
  });

  test('Verify mandatory fields display an asterisk', { tag: ['@Contacts', '@TC104'] }, async ({ Given, When, Then }) => { 
    await Given('the Create Contact page is open'); 
    await When('the user views the Last Name field label'); 
    await Then('the user should see an asterisk "*" beside the Name label'); 
  });

  test('Prevent saving without a last name', { tag: ['@Contacts', '@TC105'] }, async ({ Given, When, Then, And }) => { 
    await Given('the Create Contact page is open'); 
    await And('the Last Name field is empty'); 
    await When('the user clicks Save'); 
    await Then('the user should see "Missing required field: Last Name"'); 
    await Then('the Last Name field should be highlighted as invalid'); 
  });

  test('Create a contact with minimum required information', { tag: ['@Contacts', '@TC106'] }, async ({ Given, When, Then, And }) => { 
    await Given('the Create Contact page is open'); 
    await When('the user enters a unique last name'); 
    await And('the user leaves optional fields empty'); 
    await And('the user retains the default assignee'); 
    await And('the user clicks Save'); 
    await Then('exactly one contact should be created'); 
    await Then('the entered name and default assignee should be retained'); 
  });

  test('Save all visible contact details', { tag: ['@Contacts', '@TC107'] }, async ({ Given, When, Then }) => { 
    await Given('the Create Contact page is open'); 
    await When('the user enters a unique value in every visible contact creation field'); 
    await Then('all values should appear in their corresponding fields'); 
  });

  test('Change the assignee from the default to administrator', { tag: ['@Contacts', '@TC108'] }, async ({ Given, When, Then }) => { 
    await Given('the Create Contact page is open'); 
    await When('the user changes Assigned To from the default assignee to administrator'); 
    await Then('the user should be able to select administrator as the assignee'); 
  });

  test('Require a valid email address to be marked as primary', { tag: ['@Contacts', '@TC109'] }, async ({ Given, When, Then, And }) => { 
    await Given('the Create Contact page is open'); 
    await And('the user has entered a unique last name'); 
    await And('the user has entered "primary@example.com" in the first email row'); 
    await When('the Primary field is unselected'); 
    await Then('the user should see the error message "One Valid Email Address should be marked as primary"'); 
  });

  test('Save other address information', { tag: ['@Contacts', '@TC110'] }, async ({ Given, When, Then, And }) => { 
    await Given('the Create Contact page is open'); 
    await And('the user has entered a unique last name'); 
    await When('the user enters the following Other Address:', {"dataTable":{"rows":[{"cells":[{"value":"Field"},{"value":"Value"}]},{"cells":[{"value":"Street"},{"value":"123 Main Street"}]},{"cells":[{"value":"Postal Code"},{"value":"02108"}]},{"cells":[{"value":"City"},{"value":"Boston"}]},{"cells":[{"value":"State"},{"value":"Massachusetts"}]},{"cells":[{"value":"Country"},{"value":"United States"}]}]}}); 
    await And('the user clicks Save'); 
    await And('the user reopens the contact'); 
    await Then('the alternate address should match the entered values'); 
  });

  test('Create a new contact', { tag: ['@Contacts', '@TC111'] }, async ({ Given, When, Then, And }) => { 
    await Given('the Create Contact page is open'); 
    await And('the user has entered all contact creation fields'); 
    await When('the user clicks Save'); 
    await Then('the user should be redirected to the Edit Contact page'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\contacts\\create_contact.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":["@Contacts","@TC101"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged in to the CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When the user hovers over the Contact tab","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then the user should see Create Contact","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":14,"tags":["@Contacts","@TC102"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged in to the CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given the user hovers over the Contact tab","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When the user clicks Create Contact","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the Create Contact page","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":21,"tags":["@Contacts","@TC103"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged in to the CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given the Create Contact page is open","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When the user inspects the form","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then the user should see the Overview tab","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then the user should see More Information","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then the user should see Other tabs","stepMatchArguments":[]}]},
  {"pwTestLine":29,"pickleLine":30,"tags":["@Contacts","@TC104"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged in to the CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given the Create Contact page is open","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When the user views the Last Name field label","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then the user should see an asterisk \"*\" beside the Name label","stepMatchArguments":[{"group":{"start":32,"value":"\"*\"","children":[{"start":33,"value":"*","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":35,"pickleLine":37,"tags":["@Contacts","@TC105"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged in to the CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"Given the Create Contact page is open","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":39,"keywordType":"Context","textWithKeyword":"And the Last Name field is empty","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"When the user clicks Save","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then the user should see \"Missing required field: Last Name\"","stepMatchArguments":[{"group":{"start":20,"value":"\"Missing required field: Last Name\"","children":[{"start":21,"value":"Missing required field: Last Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then the Last Name field should be highlighted as invalid","stepMatchArguments":[]}]},
  {"pwTestLine":43,"pickleLine":46,"tags":["@Contacts","@TC106"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged in to the CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":47,"keywordType":"Context","textWithKeyword":"Given the Create Contact page is open","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"When the user enters a unique last name","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"And the user leaves optional fields empty","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":50,"keywordType":"Action","textWithKeyword":"And the user retains the default assignee","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"And the user clicks Save","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then exactly one contact should be created","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then the entered name and default assignee should be retained","stepMatchArguments":[]}]},
  {"pwTestLine":53,"pickleLine":57,"tags":["@Contacts","@TC107"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged in to the CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":58,"keywordType":"Context","textWithKeyword":"Given the Create Contact page is open","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":59,"keywordType":"Action","textWithKeyword":"When the user enters a unique value in every visible contact creation field","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then all values should appear in their corresponding fields","stepMatchArguments":[]}]},
  {"pwTestLine":59,"pickleLine":64,"tags":["@Contacts","@TC108"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged in to the CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":65,"keywordType":"Context","textWithKeyword":"Given the Create Contact page is open","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"When the user changes Assigned To from the default assignee to administrator","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then the user should be able to select administrator as the assignee","stepMatchArguments":[]}]},
  {"pwTestLine":65,"pickleLine":71,"tags":["@Contacts","@TC109"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged in to the CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":72,"keywordType":"Context","textWithKeyword":"Given the Create Contact page is open","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":73,"keywordType":"Context","textWithKeyword":"And the user has entered a unique last name","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":74,"keywordType":"Context","textWithKeyword":"And the user has entered \"primary@example.com\" in the first email row","stepMatchArguments":[{"group":{"start":21,"value":"\"primary@example.com\"","children":[{"start":22,"value":"primary@example.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":69,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When the Primary field is unselected","stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then the user should see the error message \"One Valid Email Address should be marked as primary\"","stepMatchArguments":[{"group":{"start":38,"value":"\"One Valid Email Address should be marked as primary\"","children":[{"start":39,"value":"One Valid Email Address should be marked as primary","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":73,"pickleLine":80,"tags":["@Contacts","@TC110"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged in to the CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":81,"keywordType":"Context","textWithKeyword":"Given the Create Contact page is open","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":82,"keywordType":"Context","textWithKeyword":"And the user has entered a unique last name","stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":83,"keywordType":"Action","textWithKeyword":"When the user enters the following Other Address:","stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":90,"keywordType":"Action","textWithKeyword":"And the user clicks Save","stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":91,"keywordType":"Action","textWithKeyword":"And the user reopens the contact","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":92,"keywordType":"Outcome","textWithKeyword":"Then the alternate address should match the entered values","stepMatchArguments":[]}]},
  {"pwTestLine":82,"pickleLine":96,"tags":["@Contacts","@TC111"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user is logged in to the CRM application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":97,"keywordType":"Context","textWithKeyword":"Given the Create Contact page is open","stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":98,"keywordType":"Context","textWithKeyword":"And the user has entered all contact creation fields","stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":99,"keywordType":"Action","textWithKeyword":"When the user clicks Save","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":100,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the Edit Contact page","stepMatchArguments":[]}]},
]; // bdd-data-end