// Generated from: features\More\more_option.feature
import { test } from "../../../src/fixtures/pageFixture.js";

test.describe('Menu Dropdown Options', () => {

  test('Verify all menu dropdown options', { tag: ['@moreScenario', '@moreOptions', '@TC001'] }, async ({ When, Then, page }) => { 
    await When('user hovers on the Menu option in the menu bar', null, { page }); 
    await Then('dropdown should display below options', {"dataTable":{"rows":[{"cells":[{"value":"Home"}]},{"cells":[{"value":"Emails"}]},{"cells":[{"value":"Calls"}]}]}}, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, loginPage, page }) => $runScenarioHooks('before', { loginPage, page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\More\\more_option.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":8,"tags":["@moreScenario","@moreOptions","@TC001"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When user hovers on the Menu option in the menu bar","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then dropdown should display below options","stepMatchArguments":[]}]},
]; // bdd-data-end