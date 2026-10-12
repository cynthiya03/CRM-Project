// Generated from: features\contacts\contact.feature
import { test } from "../../../src/fixtures/pageFixture.js";

test.describe('Testing contacts features in CRM application', () => {

  test('Verify Contact tab is displayed', { tag: ['@ContactsNavigation', '@TC51'] }, async ({ Given, When, Then, contactPage, homePage }) => { 
    await Given('User land on Homepage'); 
    await When('the user hovers over the Contact tab', null, { homePage }); 
    await Then('the user should see Create Contact', null, { contactPage }); 
  });

  test('Navigate to the Create Contact page', { tag: ['@ContactsNavigation', '@TC52'] }, async ({ Given, When, Then, contactPage, homePage }) => { 
    await Given('the user hovers over the Contact tab', null, { homePage }); 
    await When('the user clicks Create Contact', null, { contactPage }); 
    await Then('the user should be redirected to the Create Contact page', null, { contactPage }); 
  });

  test('Display the contact creation form tabs', { tag: ['@createContact', '@TC53'] }, async ({ Given, When, Then, contactPage }) => { 
    await Given('the Create Contact page is open'); 
    await When('the user inspects the form', null, { contactPage }); 
    await Then('the user should see the Overview tab', null, { contactPage }); 
    await Then('the user should see More Information', null, { contactPage }); 
    await Then('the user should see Other tabs', null, { contactPage }); 
  });

  test('Verify mandatory fields display an asterisk', { tag: ['@createContact', '@TC54'] }, async ({ Given, When, Then, contactPage }) => { 
    await Given('the Create Contact page is open'); 
    await When('the user views the Last Name field label', null, { contactPage }); 
    await Then('the user should see an asterisk "*" beside the Name label', null, { contactPage }); 
  });

  test('Prevent saving without a last name', { tag: ['@createContact', '@TC55'] }, async ({ Given, When, Then, And, contactPage }) => { 
    await Given('the Create Contact page is open'); 
    await When('the Last Name field is empty', null, { contactPage }); 
    await And('user click save', null, { contactPage }); 
    await Then('the user should see "Missing required field: Last Name"', null, { contactPage }); 
    await Then('the Last Name field should be highlighted as invalid', null, { contactPage }); 
  });

  test('Create a contact with minimum required information', { tag: ['@createContact', '@TC56'] }, async ({ Given, When, Then, And, contactPage }) => { 
    await Given('the Create Contact page is open'); 
    await When('the user enters a first name', null, { contactPage }); 
    await And('the user enters a unique last name', null, { contactPage }); 
    await And('user click save', null, { contactPage }); 
    await Then('exactly one contact should be created', null, { contactPage }); 
  });

  test('verify user able to select honorific', { tag: ['@createContact', '@TC57'] }, async ({ Given, When, Then, contactPage }) => { 
    await Given('the Create Contact page is open'); 
    await When('the user select "Mrs." from dropdown', null, { contactPage }); 
    await Then('the selected honorific should be "Mrs."', null, { contactPage }); 
  });

  test('user able to search and select account name', { tag: ['@createContact', '@TC58'] }, async ({ Given, When, Then, contactPage, page }) => { 
    await Given('the Create Contact page is open'); 
    await When('the user search the account name start with "Ba"', null, { contactPage }); 
    await Then('user able to select "Bay Funding Co" from dropdown', null, { contactPage, page }); 
  });

  test.describe('Fill and verify contact fields', () => {

    test('Example #1', { tag: ['@createContact', '@contactExcel', '@TC59'] }, async ({ Given, When, Then, contactPage }) => { 
      await Given('the Create Contact page is open'); 
      await When('the user fills contact details from Excel for "Ninja_4827"', null, { contactPage }); 
      await Then('all contact fields should match the Excel data', null, { contactPage }); 
    });

    test('Example #2', { tag: ['@createContact', '@contactExcel', '@TC59'] }, async ({ Given, When, Then, contactPage }) => { 
      await Given('the Create Contact page is open'); 
      await When('the user fills contact details from Excel for "Ninja_6392"', null, { contactPage }); 
      await Then('all contact fields should match the Excel data', null, { contactPage }); 
    });

    test('Example #3', { tag: ['@createContact', '@contactExcel', '@TC59'] }, async ({ Given, When, Then, contactPage }) => { 
      await Given('the Create Contact page is open'); 
      await When('the user fills contact details from Excel for "Ninja_7154"', null, { contactPage }); 
      await Then('all contact fields should match the Excel data', null, { contactPage }); 
    });

    test('Example #4', { tag: ['@createContact', '@contactExcel', '@TC59'] }, async ({ Given, When, Then, contactPage }) => { 
      await Given('the Create Contact page is open'); 
      await When('the user fills contact details from Excel for "Ninja_8263"', null, { contactPage }); 
      await Then('all contact fields should match the Excel data', null, { contactPage }); 
    });

    test('Example #5', { tag: ['@createContact', '@contactExcel', '@TC59'] }, async ({ Given, When, Then, contactPage }) => { 
      await Given('the Create Contact page is open'); 
      await When('the user fills contact details from Excel for "Ninja_9571"', null, { contactPage }); 
      await Then('all contact fields should match the Excel data', null, { contactPage }); 
    });

  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\contacts\\contact.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":["@ContactsNavigation","@TC51"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User land on Homepage","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When the user hovers over the Contact tab","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the user should see Create Contact","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":12,"tags":["@ContactsNavigation","@TC52"],"steps":[{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given the user hovers over the Contact tab","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When the user clicks Create Contact","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the Create Contact page","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":18,"tags":["@createContact","@TC53"],"steps":[{"pwStepLine":19,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given the Create Contact page is open","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When the user inspects the form","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then the user should see the Overview tab","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then the user should see More Information","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then the user should see Other tabs","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":26,"tags":["@createContact","@TC54"],"steps":[{"pwStepLine":27,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given the Create Contact page is open","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When the user views the Last Name field label","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then the user should see an asterisk \"*\" beside the Name label","stepMatchArguments":[{"group":{"start":32,"value":"\"*\"","children":[{"start":33,"value":"*","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":33,"tags":["@createContact","@TC55"],"steps":[{"pwStepLine":33,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given the Create Contact page is open","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When the Last Name field is empty","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"And user click save","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then the user should see \"Missing required field: Last Name\"","stepMatchArguments":[{"group":{"start":20,"value":"\"Missing required field: Last Name\"","children":[{"start":21,"value":"Missing required field: Last Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then the Last Name field should be highlighted as invalid","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":42,"tags":["@createContact","@TC56"],"steps":[{"pwStepLine":41,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"Given the Create Contact page is open","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"When the user enters a first name","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"And the user enters a unique last name","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"And user click save","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then exactly one contact should be created","stepMatchArguments":[]}]},
  {"pwTestLine":48,"pickleLine":51,"tags":["@createContact","@TC57"],"steps":[{"pwStepLine":49,"gherkinStepLine":52,"keywordType":"Context","textWithKeyword":"Given the Create Contact page is open","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":53,"keywordType":"Action","textWithKeyword":"When the user select \"Mrs.\" from dropdown","stepMatchArguments":[{"group":{"start":16,"value":"\"Mrs.\"","children":[{"start":17,"value":"Mrs.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":51,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then the selected honorific should be \"Mrs.\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Mrs.\"","children":[{"start":34,"value":"Mrs.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":54,"pickleLine":58,"tags":["@createContact","@TC58"],"steps":[{"pwStepLine":55,"gherkinStepLine":59,"keywordType":"Context","textWithKeyword":"Given the Create Contact page is open","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When the user search the account name start with \"Ba\"","stepMatchArguments":[{"group":{"start":44,"value":"\"Ba\"","children":[{"start":45,"value":"Ba","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":57,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then user able to select \"Bay Funding Co\" from dropdown","stepMatchArguments":[{"group":{"start":20,"value":"\"Bay Funding Co\"","children":[{"start":21,"value":"Bay Funding Co","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":62,"pickleLine":71,"tags":["@createContact","@contactExcel","@TC59"],"steps":[{"pwStepLine":63,"gherkinStepLine":65,"keywordType":"Context","textWithKeyword":"Given the Create Contact page is open","stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"When the user fills contact details from Excel for \"Ninja_4827\"","stepMatchArguments":[{"group":{"start":46,"value":"\"Ninja_4827\"","children":[{"start":47,"value":"Ninja_4827","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":65,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then all contact fields should match the Excel data","stepMatchArguments":[]}]},
  {"pwTestLine":68,"pickleLine":72,"tags":["@createContact","@contactExcel","@TC59"],"steps":[{"pwStepLine":69,"gherkinStepLine":65,"keywordType":"Context","textWithKeyword":"Given the Create Contact page is open","stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"When the user fills contact details from Excel for \"Ninja_6392\"","stepMatchArguments":[{"group":{"start":46,"value":"\"Ninja_6392\"","children":[{"start":47,"value":"Ninja_6392","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":71,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then all contact fields should match the Excel data","stepMatchArguments":[]}]},
  {"pwTestLine":74,"pickleLine":73,"tags":["@createContact","@contactExcel","@TC59"],"steps":[{"pwStepLine":75,"gherkinStepLine":65,"keywordType":"Context","textWithKeyword":"Given the Create Contact page is open","stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"When the user fills contact details from Excel for \"Ninja_7154\"","stepMatchArguments":[{"group":{"start":46,"value":"\"Ninja_7154\"","children":[{"start":47,"value":"Ninja_7154","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":77,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then all contact fields should match the Excel data","stepMatchArguments":[]}]},
  {"pwTestLine":80,"pickleLine":74,"tags":["@createContact","@contactExcel","@TC59"],"steps":[{"pwStepLine":81,"gherkinStepLine":65,"keywordType":"Context","textWithKeyword":"Given the Create Contact page is open","stepMatchArguments":[]},{"pwStepLine":82,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"When the user fills contact details from Excel for \"Ninja_8263\"","stepMatchArguments":[{"group":{"start":46,"value":"\"Ninja_8263\"","children":[{"start":47,"value":"Ninja_8263","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":83,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then all contact fields should match the Excel data","stepMatchArguments":[]}]},
  {"pwTestLine":86,"pickleLine":75,"tags":["@createContact","@contactExcel","@TC59"],"steps":[{"pwStepLine":87,"gherkinStepLine":65,"keywordType":"Context","textWithKeyword":"Given the Create Contact page is open","stepMatchArguments":[]},{"pwStepLine":88,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"When the user fills contact details from Excel for \"Ninja_9571\"","stepMatchArguments":[{"group":{"start":46,"value":"\"Ninja_9571\"","children":[{"start":47,"value":"Ninja_9571","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":89,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then all contact fields should match the Excel data","stepMatchArguments":[]}]},
]; // bdd-data-end