// Generated from: features/create_quote.feature
import { test } from "playwright-bdd";

test.describe('Testing Create Quote page in SuiteCRM', () => {

  test('Verify Create Quotes page is displayed', { tag: ['@CreateQuote', '@TS001'] }, async ({ Given, When, Then }) => { 
    await Given('User is logged into the application and Quotes menu is visible'); 
    await When('User clicks on the Create Quote sub-menu'); 
    await Then('Create Quotes page is displayed'); 
  });

  test('Verify the mandatory fields displayed in the Overview section of the Create Quotes page.', async ({ Given, When, Then }) => { 
    await Given('User is in the Create Quotes page'); 
    await When('User inspects the mandatory fields displayed in the overview section'); 
    await Then('Title,Valid Until,Quote Stage fields should be displayed as mandatory by displaying * asterisk  next to it.'); 
  });

  test('Verify the user is able to click on Calendar icon and it opens', async ({ Given, When, Then }) => { 
    await Given('User is in the Create Quotes page'); 
    await When('User clicks the calendar icon'); 
    await Then('The Calendar should be displayed with Select Date,Close at the top right corner Today button at the top center'); 
  });

  test('Successfully save the quote by entering all the fields', async ({ Given, When, Then }) => { 
    await Given('User is in the Create Quotes page'); 
    await When('user enters all the mandatory and non mandatory fields and click on Save button'); 
    await Then('The Quote should be saved and the user has to be directed to the quotes page'); 
  });

  test('Cancel the quote', async ({ Given, When, Then }) => { 
    await Given('User is in the Create Quotes page'); 
    await When('user enters all the mandatory and non mandatory fields and click on Cancel button'); 
    await Then('The quote should not be saved and user is directed to the Quotes page'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/create_quote.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@CreateQuote","@TS001"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User is logged into the application and Quotes menu is visible","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When User clicks on the Create Quote sub-menu","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Create Quotes page is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given User is in the Create Quotes page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User inspects the mandatory fields displayed in the overview section","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Title,Valid Until,Quote Stage fields should be displayed as mandatory by displaying * asterisk  next to it.","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given User is in the Create Quotes page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When User clicks the calendar icon","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then The Calendar should be displayed with Select Date,Close at the top right corner Today button at the top center","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given User is in the Create Quotes page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When user enters all the mandatory and non mandatory fields and click on Save button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then The Quote should be saved and the user has to be directed to the quotes page","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given User is in the Create Quotes page","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When user enters all the mandatory and non mandatory fields and click on Cancel button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then The quote should not be saved and user is directed to the Quotes page","stepMatchArguments":[]}]},
]; // bdd-data-end