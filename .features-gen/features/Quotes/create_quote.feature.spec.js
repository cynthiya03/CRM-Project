// Generated from: features\Quotes\create_quote.feature
import { test } from "../../../src/fixtures/pageFixture.js";

test.describe('Testing Create Quote page in SuiteCRM', () => {

  test('Verify Create Quotes page is displayed', { tag: ['@CreateQuote', '@createquotemenudisplay', '@TC601'] }, async ({ Given, When, Then, createquotePage }) => { 
    await Given('User is logged into the application and Quotes menu is visible', null, { createquotePage }); 
    await When('User clicks on the Create Quote sub-menu', null, { createquotePage }); 
    await Then('Create Quotes page is displayed', null, { createquotePage }); 
  });

  test('Verify the mandatory fields displayed in the Overview section of the Create Quotes page.', { tag: ['@CreateQuote', '@Mandatoryfields', '@TC602'] }, async ({ Given, When, Then, createquotePage }) => { 
    await Given('User is in the Create Quotes page', null, { createquotePage }); 
    await When('User inspects the mandatory fields displayed in the overview section', null, { createquotePage }); 
    await Then('Title,Valid Until,Quote Stage fields should be displayed as mandatory by displaying * asterisk  next to it.', null, { createquotePage }); 
  });

  test('Verify the user is able to click on Calendar icon and it opens', { tag: ['@CreateQuote', '@Calendaricon', '@TC603'] }, async ({ Given, When, Then, createquotePage }) => { 
    await Given('User is in the Create Quotes page', null, { createquotePage }); 
    await When('User clicks the calendar icon', null, { createquotePage }); 
    await Then('The Calendar should be displayed with Select Date,Close at the top right corner Today button at the top center', null, { createquotePage }); 
  });

  test('Not allow User to save when mandatory fields are not entered', { tag: ['@CreateQuote', '@SaveonNomandatoryfields', '@TC604'] }, async ({ Given, When, Then, createquotePage }) => { 
    await Given('User is in the Create Quotes page', null, { createquotePage }); 
    await When('User doesnt enter any of the mandatory fields and clicks on the Save button', null, { createquotePage }); 
    await Then('User should be displayed a warning message saying "Missing required field: Title"', null, { createquotePage }); 
  });

  test('Successfully save the quote by entering all the fields', { tag: ['@CreateQuote', '@Savemandatoryfields', '@TC605'] }, async ({ Given, When, Then, createquotePage }) => { 
    await Given('User is in the Create Quotes page', null, { createquotePage }); 
    await When('user enters all the mandatory and non mandatory fields and click on Save button', null, { createquotePage }); 
    await Then('The Quote should be saved and the user has to be directed to the quotes page', null, { createquotePage }); 
  });

  test('Cancel the quote', { tag: ['@CreateQuote', '@Cancelquote', '@TC606'] }, async ({ Given, When, Then, createquotePage }) => { 
    await Given('User is in the Create Quotes page', null, { createquotePage }); 
    await When('user enters all the mandatory and non mandatory fields and click on Cancel button', null, { createquotePage }); 
    await Then('The quote should not be saved and user is directed to the Quotes page', null, { createquotePage }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Quotes\\create_quote.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@CreateQuote","@createquotemenudisplay","@TC601"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User is logged into the application and Quotes menu is visible","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When User clicks on the Create Quote sub-menu","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Create Quotes page is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":["@CreateQuote","@Mandatoryfields","@TC602"],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given User is in the Create Quotes page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User inspects the mandatory fields displayed in the overview section","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Title,Valid Until,Quote Stage fields should be displayed as mandatory by displaying * asterisk  next to it.","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":17,"tags":["@CreateQuote","@Calendaricon","@TC603"],"steps":[{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given User is in the Create Quotes page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When User clicks the calendar icon","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then The Calendar should be displayed with Select Date,Close at the top right corner Today button at the top center","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":23,"tags":["@CreateQuote","@SaveonNomandatoryfields","@TC604"],"steps":[{"pwStepLine":25,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given User is in the Create Quotes page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When User doesnt enter any of the mandatory fields and clicks on the Save button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then User should be displayed a warning message saying \"Missing required field: Title\"","stepMatchArguments":[{"group":{"start":50,"value":"\"Missing required field: Title\"","children":[{"start":51,"value":"Missing required field: Title","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":29,"tags":["@CreateQuote","@Savemandatoryfields","@TC605"],"steps":[{"pwStepLine":31,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given User is in the Create Quotes page","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When user enters all the mandatory and non mandatory fields and click on Save button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then The Quote should be saved and the user has to be directed to the quotes page","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":35,"tags":["@CreateQuote","@Cancelquote","@TC606"],"steps":[{"pwStepLine":37,"gherkinStepLine":36,"keywordType":"Context","textWithKeyword":"Given User is in the Create Quotes page","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When user enters all the mandatory and non mandatory fields and click on Cancel button","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then The quote should not be saved and user is directed to the Quotes page","stepMatchArguments":[]}]},
]; // bdd-data-end