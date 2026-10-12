// Generated from: features\Documents\view_documents.feature
import { test } from "../../../src/fixtures/pageFixture.js";

test.describe('View Document', () => {

  test('Verify that Documents option in menu bar have view document as dropdown value', { tag: ['@documentScenario', '@DocumentfieldisDisplayed', '@TC001'] }, async ({ When, Then, documentPage, logger }) => { 
    await When('user clicks on the Documents option in the menu bar', null, { documentPage, logger }); 
    await Then('the dropdown should display "View Documents" as an option', null, { documentPage, logger }); 
  });

  test('Verify that the user can view an existing document', { tag: ['@documentScenario', '@viewdocument', '@TC002'] }, async ({ When, Then, And, documentPage, logger, page }) => { 
    await When('user clicks on the Documents option in the menu bar', null, { documentPage, logger }); 
    await And('user navigates to view document page and can view the mentioned fields below', {"dataTable":{"rows":[{"cells":[{"value":"Document Name"}]},{"cells":[{"value":"File"}]},{"cells":[{"value":"Category"}]},{"cells":[{"value":"Sub Category"}]},{"cells":[{"value":"Revision Date"}]},{"cells":[{"value":"Expiration Date"}]},{"cells":[{"value":"User"}]}]}}, { documentPage }); 
    await Then('user should be redirected to the view document page and able to see existing document', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, loginPage, page }) => $runScenarioHooks('before', { loginPage, page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Documents\\view_documents.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":8,"tags":["@documentScenario","@DocumentfieldisDisplayed","@TC001"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When user clicks on the Documents option in the menu bar","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the dropdown should display \"View Documents\" as an option","stepMatchArguments":[{"group":{"start":28,"value":"\"View Documents\"","children":[{"start":29,"value":"View Documents","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":11,"pickleLine":13,"tags":["@documentScenario","@viewdocument","@TC002"],"steps":[{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When user clicks on the Documents option in the menu bar","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And user navigates to view document page and can view the mentioned fields below","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then user should be redirected to the view document page and able to see existing document","stepMatchArguments":[]}]},
]; // bdd-data-end