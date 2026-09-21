// Generated from: features\contacts\importContact_Vcard.feature
import { test } from "playwright-bdd";

test.describe('Testing contacts features in CRM application', () => {

  test('Verify Create Contact from vCard field is displayed', { tag: ['@Contacts', '@TC112'] }, async ({ Given, When, Then }) => { 
    await Given('user land on Homepage'); 
    await When('the user hovers over the Contact tab'); 
    await Then('the user should see importcontactfromVcard'); 
  });

  test('Navigate to the vCard import page', { tag: ['@Contacts', '@TC113'] }, async ({ Given, When, Then }) => { 
    await Given('the user is on the Contact page'); 
    await When('the user clicks Create Contact from vCard'); 
    await Then('the user should be redirected to the Import vCard page'); 
  });

  test('Choose a vCard file', { tag: ['@Contacts', '@TC114'] }, async ({ Given, When, Then, And }) => { 
    await Given('the user is on the Import vCard page'); 
    await When('the user clicks Choose File'); 
    await And('the user selects a vCard file'); 
    await Then('the chosen file should appear on the page'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\contacts\\importContact_Vcard.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@Contacts","@TC112"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user land on Homepage","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user hovers over the Contact tab","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the user should see importcontactfromVcard","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":["@Contacts","@TC113"],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given the user is on the Contact page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user clicks Create Contact from vCard","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the Import vCard page","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":16,"tags":["@Contacts","@TC114"],"steps":[{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given the user is on the Import vCard page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When the user clicks Choose File","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"And the user selects a vCard file","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then the chosen file should appear on the page","stepMatchArguments":[]}]},
]; // bdd-data-end