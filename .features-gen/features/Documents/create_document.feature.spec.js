// Generated from: features\Documents\create_document.feature
import { test } from "../../../src/fixtures/pageFixture.js";

test.describe('Create Document', () => {

  test('Verify that Documents option in menu bar have create document as dropdown value', { tag: ['@documentScenario', '@DocumentfieldisDisplayed', '@TC001'] }, async ({ When, Then, documentPage, logger }) => { 
    await When('user clicks on the Documents option in the menu bar', null, { documentPage, logger }); 
    await Then('the dropdown should display "Create Document" as an option', null, { documentPage, logger }); 
  });

  test('Verify that the user can create a new document from the Documents dropdown', { tag: ['@documentScenario', '@DocumentfieldisDisplayed', '@TC002'] }, async ({ When, Then, documentPage, logger }) => { 
    await When('user clicks on the Documents option in the menu bar', null, { documentPage, logger }); 
    await Then('user should be redirected to the create document page', null, { documentPage, logger }); 
  });

  test('Verify that the user can successfully create a new document', { tag: ['@documentScenario', '@createdocument', '@TC003'] }, async ({ When, Then, And, documentPage, logger }) => { 
    await When('user navigates to the create document page and fills in the following fields', {"dataTable":{"rows":[{"cells":[{"value":"Field"},{"value":"Value"}]},{"cells":[{"value":"File"},{"value":"./test-data/sample-document.txt"}]},{"cells":[{"value":"Document Name"},{"value":"Sample Document"}]},{"cells":[{"value":"Publish Date"},{"value":"2026-09-20"}]},{"cells":[{"value":"Revision"},{"value":"1.0"}]},{"cells":[{"value":"Document Type"},{"value":"Mail Merge"}]},{"cells":[{"value":"Category"},{"value":"Marketing"}]},{"cells":[{"value":"Assigned to"},{"value":"will"}]},{"cells":[{"value":"Status"},{"value":"Active"}]},{"cells":[{"value":"Template?"},{"value":"No"}]},{"cells":[{"value":"Expiration Date"},{"value":"2027-09-20"}]},{"cells":[{"value":"Sub Category"},{"value":"Marketing Collateral"}]}]}}, { documentPage, logger }); 
    await And('user clicks the save button', null, { documentPage, logger }); 
    await Then('new document should be created successfully', null, { documentPage, logger }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, loginPage, page }) => $runScenarioHooks('before', { loginPage, page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Documents\\create_document.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":8,"tags":["@documentScenario","@DocumentfieldisDisplayed","@TC001"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When user clicks on the Documents option in the menu bar","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the dropdown should display \"Create Document\" as an option","stepMatchArguments":[{"group":{"start":28,"value":"\"Create Document\"","children":[{"start":29,"value":"Create Document","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":11,"pickleLine":13,"tags":["@documentScenario","@DocumentfieldisDisplayed","@TC002"],"steps":[{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When user clicks on the Documents option in the menu bar","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then user should be redirected to the create document page","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":18,"tags":["@documentScenario","@createdocument","@TC003"],"steps":[{"pwStepLine":17,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When user navigates to the create document page and fills in the following fields","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"And user clicks the save button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then new document should be created successfully","stepMatchArguments":[]}]},
]; // bdd-data-end