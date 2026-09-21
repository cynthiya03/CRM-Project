// Generated from: features\contacts\view_contact.feature
import { test } from "playwright-bdd";

test.describe('Testing contacts features in CRM application', () => {

  test('Verify View Contact field is displayed', { tag: ['@contact', '@TC115'] }, async ({ Given, When, Then }) => { 
    await Given('User land on Home page'); 
    await When('the user hovers over the Contact tab'); 
    await Then('the user should see Import Contact'); 
  });

  test('Navigate to the contact list page', { tag: ['@contact', '@TC116'] }, async ({ Given, When, Then }) => { 
    await Given('the user is on the Contact page'); 
    await When('the user clicks View Contacts'); 
    await Then('the user should be redirected to the Contact List page'); 
  });

  test('Display the contact list controls', { tag: ['@contact', '@TC117'] }, async ({ Given, When, Then }) => { 
    await Given('the user is on the Contact List page'); 
    await When('the user views the contact list toolbar'); 
    await Then('the select-all checkbox should be displayed'); 
    await Then('the Bulk Action dropdown should be displayed'); 
    await Then('the Filter button should be displayed'); 
    await Then('the Column button should be displayed'); 
    await Then('the pagination controls should be displayed'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\contacts\\view_contact.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@contact","@TC115"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User land on Home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the user hovers over the Contact tab","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the user should see Import Contact","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":["@contact","@TC116"],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given the user is on the Contact page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user clicks View Contacts","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the Contact List page","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":17,"tags":["@contact","@TC117"],"steps":[{"pwStepLine":19,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given the user is on the Contact List page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When the user views the contact list toolbar","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then the select-all checkbox should be displayed","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then the Bulk Action dropdown should be displayed","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then the Filter button should be displayed","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then the Column button should be displayed","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then the pagination controls should be displayed","stepMatchArguments":[]}]},
]; // bdd-data-end