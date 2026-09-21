// Generated from: features\Documents\create_document.feature
import { test } from "playwright-bdd";

test.describe('Create Document', () => {

  test('Verify that Documents option in menu bar have create document as dropdown value', async ({ Given, When, Then }) => { 
    await Given('user is logged in to CRM application'); 
    await When('user clicks on the Documents option in the menu bar'); 
    await Then('the dropdown should display "Create Document" as an option'); 
  });

  test('Verify that the user can create a new document from the Documents dropdown', async ({ Given, When, Then }) => { 
    await Given('user is logged in to CRM application'); 
    await When('user clicks on the Documents option in the menu bar'); 
    await Then('user should be redirected to the create document page'); 
  });

  test('Verify that the user can successfully create a new document', async ({ Given, When, Then, And }) => { 
    await Given('user is logged in to CRM application'); 
    await When('user navigates to the create document page and fills in the following fields', {"dataTable":{"rows":[{"cells":[{"value":"Field"},{"value":"Value"}]},{"cells":[{"value":"File"},{"value":"./test-data/sample-document.txt"}]},{"cells":[{"value":"Document Name"},{"value":"Sample Document"}]},{"cells":[{"value":"Publish Date"},{"value":"2026-09-20"}]},{"cells":[{"value":"Revision"},{"value":"1.0"}]},{"cells":[{"value":"Document Type"},{"value":"Mail Merge"}]},{"cells":[{"value":"Category"},{"value":"Marketing"}]},{"cells":[{"value":"Assigned to"},{"value":"will"}]},{"cells":[{"value":"Status"},{"value":"Active"}]},{"cells":[{"value":"Template?"},{"value":"No"}]},{"cells":[{"value":"Expiration Date"},{"value":"2027-09-20"}]},{"cells":[{"value":"Sub Category"},{"value":"Marketing Collateral"}]}]}}); 
    await And('user clicks the save button'); 
    await Then('new document should be created successfully'); 
  });

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
  $uri: [({}, use) => use('features\\Documents\\create_document.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given user is logged in to CRM application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When user clicks on the Documents option in the menu bar","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the dropdown should display \"Create Document\" as an option","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given user is logged in to CRM application","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When user clicks on the Documents option in the menu bar","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then user should be redirected to the create document page","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given user is logged in to CRM application","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When user navigates to the create document page and fills in the following fields","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"And user clicks the save button","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then new document should be created successfully","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":34,"tags":[],"steps":[{"pwStepLine":26,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given user is logged in to CRM application","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When user clicks on the Documents option in the menu bar","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then the dropdown should display \"View Document\" as an option","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":39,"tags":[],"steps":[{"pwStepLine":32,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given user is logged in to CRM application","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When user clicks on the Documents option in the menu bar","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"And user navigates to view document page and can view the mentioned fields below","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then user should be redirected to the view document page and able to see existing document","stepMatchArguments":[]}]},
]; // bdd-data-end