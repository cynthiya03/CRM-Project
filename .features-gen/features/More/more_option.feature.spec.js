// Generated from: features\More\more_option.feature
import { test } from "playwright-bdd";

test.describe('Menu Dropdown Options', () => {

  test('Verify all menu dropdown options', async ({ Given, When, Then }) => { 
    await Given('user is logged in to CRM application'); 
    await When('user clicks on the Menu option in the menu bar'); 
    await Then('dropdown should display below options', {"dataTable":{"rows":[{"cells":[{"value":"Home"}]},{"cells":[{"value":"Contacts"}]},{"cells":[{"value":"Opportunities"}]},{"cells":[{"value":"Leads"}]},{"cells":[{"value":"Quotes"}]},{"cells":[{"value":"Calendar"}]},{"cells":[{"value":"Documents"}]},{"cells":[{"value":"Emails"}]},{"cells":[{"value":"Campaigns"}]},{"cells":[{"value":"Calls"}]},{"cells":[{"value":"Meetings"}]},{"cells":[{"value":"Tasks"}]},{"cells":[{"value":"Notes"}]},{"cells":[{"value":"Invoices"}]},{"cells":[{"value":"Contracts"}]},{"cells":[{"value":"Cases"}]},{"cells":[{"value":"Targets"}]},{"cells":[{"value":"Targets - Lists"}]},{"cells":[{"value":"Projects"}]},{"cells":[{"value":"Projects - Templates"}]},{"cells":[{"value":"Events"}]},{"cells":[{"value":"Locations"}]},{"cells":[{"value":"Products"}]},{"cells":[{"value":"Products - Categories"}]},{"cells":[{"value":"PDF - Templates"}]},{"cells":[{"value":"Reports"}]},{"cells":[{"value":"Knowledge Base"}]},{"cells":[{"value":"KB - Categories"}]},{"cells":[{"value":"Email - Templates"}]},{"cells":[{"value":"Surveys"}]}]}}); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\More\\more_option.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given user is logged in to CRM application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When user clicks on the Menu option in the menu bar","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then dropdown should display below options","stepMatchArguments":[]}]},
]; // bdd-data-end