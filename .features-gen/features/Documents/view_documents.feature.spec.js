// Generated from: features\Documents\view_documents.feature
import { test } from "playwright-bdd";

test.describe('Create Document', () => {

  test('Verify that Documents option in menu bar have view document as dropdown value', async ({ Given, When, Then }) => { 
    await Given('user is logged in to CRM application'); 
    await When('user clicks on the Documents option in the menu bar'); 
    await Then('the dropdown should display "View Document" as an option'); 
  });

  test('Verify that the user can view an existing document', async ({ Given, When, Then, And }) => { 
    await Given('user is logged in to CRM application'); 
    await When('user clicks on the Documents option in the menu bar'); 
    await And('user navigates to view document page and can view the mentioned fields below', {"dataTable":{"rows":[{"cells":[{"value":"Document Name"}]},{"cells":[{"value":"File"}]},{"cells":[{"value":"Category"}]},{"cells":[{"value":"Sub Category"}]},{"cells":[{"value":"Revision Date"}]},{"cells":[{"value":"Expiration Date"}]},{"cells":[{"value":"User"}]}]}}); 
    await Then('user should be redirected to the view document page and able to see existing document'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Documents\\view_documents.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given user is logged in to CRM application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When user clicks on the Documents option in the menu bar","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the dropdown should display \"View Document\" as an option","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given user is logged in to CRM application","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When user clicks on the Documents option in the menu bar","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And user navigates to view document page and can view the mentioned fields below","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then user should be redirected to the view document page and able to see existing document","stepMatchArguments":[]}]},
]; // bdd-data-end