// Generated from: features\leads\leads.feature
import { test } from "playwright-bdd";

test.describe('testing lead feature in CRM application', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('User must have logged into the crm application'); 
  });
  
  test('Verify that user should able to see Leads page', { tag: ['@leads', '@TC101'] }, async ({ Given, When, Then }) => { 
    await Given('User is on the CRM home page'); 
    await When('User clicks the Leads section'); 
    await Then('User should see the leads landing page'); 
  });

  test('Verify that leads section has dropdown option to create lead', { tag: ['@createlead', '@TC102'] }, async ({ Given, When, Then }) => { 
    await Given('User is on the leads page'); 
    await When('User clicks create lead button from dropdown'); 
    await Then('User should see the new leads form where the user can enter details'); 
  });

  test('Verify that user can able to see all the columns on the create lead page', { tag: ['@createlead', '@TC103'] }, async ({ Given, When, Then }) => { 
    await Given('User is on the leads page'); 
    await When('User clicks create lead button from dropdown'); 
    await Then('User should see overview, more information and other information options'); 
  });

  test('Verify that create lead page has all the neccessary information', { tag: ['@createlead', '@TC104'] }, async ({ Given, When, Then }) => { 
    await Given('User is on the Create leads page'); 
    await When('User clicks overview'); 
    await Then('User should see first name,last name,job title,department,account name,primary address and email address fields'); 
    await Then('User should see email opt out option,description box,whose assigned,mobile and office phone fields,website field'); 
  });

  test('Verify that new leads can be created', { tag: ['@createlead', '@TC105'] }, async ({ Given, When, Then }) => { 
    await Given('User is on the Create leads page'); 
    await When('User enters valid details on the form'); 
    await Then('New lead should be created successfully'); 
  });

  test('Verify whether it throws an error msg if user missed to enter any required field on create lead page', { tag: ['@createlead', '@TC106'] }, async ({ Given, When, Then }) => { 
    await Given('User is on the Create leads page'); 
    await When('user leaves any manadatory fields blank and clicks save button'); 
    await Then('user should see the error msg " missing required field"'); 
  });

  test('Verify whether user can see all the information on create lead by Vcard page', { tag: ['@createlead', '@TC107'] }, async ({ Given, When, Then }) => { 
    await Given('User is on the leads page'); 
    await When('user lands on Create Lead by Vcard'); 
    await Then('user should see import V card'); 
  });

  test('Verify whether user can able to choose file for importing', { tag: ['@createlead', '@TC108'] }, async ({ Given, When, Then }) => { 
    await Given('User is on the create lead from Vcard page'); 
    await When('user clicks choose file option'); 
    await Then('File can be imported'); 
  });

  test('verify that page displays view leads from leads drop down', { tag: ['@viewleads', '@TC109'] }, async ({ Given, When, Then }) => { 
    await Given('user is on the leads page'); 
    await When('user selects view leads from dropdown'); 
    await Then('user should land on viewleads page'); 
  });

  test('Verify that user can able to see all the columns on the view leads page', { tag: ['@viewleads', '@TC110'] }, async ({ Given, When, Then }) => { 
    await Given('user is on the view leads page'); 
    await When('user sees information on the view leads page'); 
    await Then('user should see name,status,account,phone,email and user details'); 
  });

  test('verify that user can able to click name on view lead page and see information', { tag: ['@viewleads', '@TC111'] }, async ({ Given, When, Then }) => { 
    await Given('user is on the view leads page'); 
    await When('user clicks on any name on view leads page'); 
    await Then('user should see the information for that particular name'); 
  });

  test('Verify whether user can able to select import leads option from drop down', { tag: ['@importleads', '@TC112'] }, async ({ Given, When, Then }) => { 
    await Given('user is on the leads page'); 
    await When('user selects import leads from dropdown'); 
    await Then('user should redirected to that particular page'); 
  });

  test('Verify whether user can see all the information in import leads page', { tag: ['@importleads', '@TC113'] }, async ({ Given, When, Then }) => { 
    await Given('user is on the leads page'); 
    await When('user lands on import leads page'); 
    await Then('user should see steps for import file'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\leads\\leads.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@leads","@TC101"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User is on the CRM home page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When User clicks the Leads section","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then User should see the leads landing page","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":["@createlead","@TC102"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given User is on the leads page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When User clicks create lead button from dropdown","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then User should see the new leads form where the user can enter details","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":20,"tags":["@createlead","@TC103"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given User is on the leads page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When User clicks create lead button from dropdown","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then User should see overview, more information and other information options","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":26,"tags":["@createlead","@TC104"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given User is on the Create leads page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When User clicks overview","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then User should see first name,last name,job title,department,account name,primary address and email address fields","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then User should see email opt out option,description box,whose assigned,mobile and office phone fields,website field","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":33,"tags":["@createlead","@TC105"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given User is on the Create leads page","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When User enters valid details on the form","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then New lead should be created successfully","stepMatchArguments":[]}]},
  {"pwTestLine":41,"pickleLine":39,"tags":["@createlead","@TC106"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given User is on the Create leads page","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When user leaves any manadatory fields blank and clicks save button","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then user should see the error msg \" missing required field\"","stepMatchArguments":[{"group":{"start":30,"value":"\" missing required field\"","children":[{"start":31,"value":" missing required field","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":47,"pickleLine":46,"tags":["@createlead","@TC107"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":47,"keywordType":"Context","textWithKeyword":"Given User is on the leads page","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"When user lands on Create Lead by Vcard","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then user should see import V card","stepMatchArguments":[]}]},
  {"pwTestLine":53,"pickleLine":52,"tags":["@createlead","@TC108"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":53,"keywordType":"Context","textWithKeyword":"Given User is on the create lead from Vcard page","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When user clicks choose file option","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then File can be imported","stepMatchArguments":[]}]},
  {"pwTestLine":59,"pickleLine":58,"tags":["@viewleads","@TC109"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":59,"keywordType":"Context","textWithKeyword":"Given user is on the leads page","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When user selects view leads from dropdown","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then user should land on viewleads page","stepMatchArguments":[]}]},
  {"pwTestLine":65,"pickleLine":64,"tags":["@viewleads","@TC110"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":65,"keywordType":"Context","textWithKeyword":"Given user is on the view leads page","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"When user sees information on the view leads page","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then user should see name,status,account,phone,email and user details","stepMatchArguments":[]}]},
  {"pwTestLine":71,"pickleLine":70,"tags":["@viewleads","@TC111"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":71,"keywordType":"Context","textWithKeyword":"Given user is on the view leads page","stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":72,"keywordType":"Action","textWithKeyword":"When user clicks on any name on view leads page","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":73,"keywordType":"Outcome","textWithKeyword":"Then user should see the information for that particular name","stepMatchArguments":[]}]},
  {"pwTestLine":77,"pickleLine":76,"tags":["@importleads","@TC112"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":77,"keywordType":"Context","textWithKeyword":"Given user is on the leads page","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":78,"keywordType":"Action","textWithKeyword":"When user selects import leads from dropdown","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":79,"keywordType":"Outcome","textWithKeyword":"Then user should redirected to that particular page","stepMatchArguments":[]}]},
  {"pwTestLine":83,"pickleLine":82,"tags":["@importleads","@TC113"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User must have logged into the crm application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":83,"keywordType":"Context","textWithKeyword":"Given user is on the leads page","stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":84,"keywordType":"Action","textWithKeyword":"When user lands on import leads page","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":85,"keywordType":"Outcome","textWithKeyword":"Then user should see steps for import file","stepMatchArguments":[]}]},
]; // bdd-data-end