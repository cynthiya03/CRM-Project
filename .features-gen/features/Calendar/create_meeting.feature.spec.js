// Generated from: features\Calendar\create_meeting.feature
import { test } from "playwright-bdd";

test.describe('Testing Create Meeting page in SuiteCRM', () => {

  test('Successfully fill out and save a meeting with a reminder', { tag: ['@CreateMeeting'] }, async ({ Given, When, Then }) => { 
    await Given('The user navigates to the Create Meetings page'); 
    await When('The user enters all the necesssary fields'); 
    await Then('The meeting should be successfully created'); 
  });

  test('Validate mandatory fields prevent form submission', async ({ Given, When, Then }) => { 
    await Given('The user navigates to the Create Meetings page'); 
    await When('the user leaves the Subject, Start Date, and End Date fields empty And the user clicks the Save button'); 
    await Then('The system should display a validation error message for mandatory fields and the meeting should not be created'); 
  });

  test('Manage meeting reminders', async ({ Given, When, Then }) => { 
    await Given('The form has a default reminder action Popup set to thirty minutes prior'); 
    await When('the user clicks the X icon next to the Email invitees reminder'); 
    await Then('Email invitees reminder block should be removed'); 
  });

  test('Manage meeting reminders', async ({ Given, When, Then }) => { 
    await Given('The form has a default reminder action Popup set to thirty minutes prior'); 
    await When('the user clicks the  Add reminder button'); 
    await Then('a new reminder configurations row should appear on the page'); 
  });

  test('Manage meeting reminders', async ({ Given, When, Then }) => { 
    await Given('The form has a default reminder action Popup set to thirty minutes prior'); 
    await When('the user clicks the - Remove reminder button'); 
    await Then('the added reminder configurations row should be removed'); 
  });

  test('Search and add an existing invitee', async ({ Given, When, Then }) => { 
    await Given('The user navigates to the Meetings Create page and checks the Other section'); 
    await When('the user fills all details and click on Search'); 
    await Then('matching contact or lead results should be displayed in the search grid'); 
  });

  test('Create and link a brand new invitee', async ({ Given, When, Then }) => { 
    await Given('The user navigates to the Create Meetings page'); 
    await When('The user scrolls down to the Create an invitee section and the user clicks the As Contact button'); 
    await Then('Fields to create a new contact  First Name, Last Name and Email should appear along with Create & Add button and Cancel button'); 
  });

  test('Cancel meeting creation process', async ({ Given, When, Then }) => { 
    await Given('he user navigates to the Create Meetings page'); 
    await When('The user enters data into the Subject field And the user clicks the Cancel button'); 
    await Then('the system should discard all unsaved changes'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Calendar\\create_meeting.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@CreateMeeting"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given The user navigates to the Create Meetings page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When The user enters all the necesssary fields","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then The meeting should be successfully created","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The user navigates to the Create Meetings page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user leaves the Subject, Start Date, and End Date fields empty And the user clicks the Save button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then The system should display a validation error message for mandatory fields and the meeting should not be created","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given The form has a default reminder action Popup set to thirty minutes prior","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When the user clicks the X icon next to the Email invitees reminder","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Email invitees reminder block should be removed","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given The form has a default reminder action Popup set to thirty minutes prior","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When the user clicks the  Add reminder button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then a new reminder configurations row should appear on the page","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given The form has a default reminder action Popup set to thirty minutes prior","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When the user clicks the - Remove reminder button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then the added reminder configurations row should be removed","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":37,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given The user navigates to the Meetings Create page and checks the Other section","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When the user fills all details and click on Search","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then matching contact or lead results should be displayed in the search grid","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":35,"tags":[],"steps":[{"pwStepLine":43,"gherkinStepLine":36,"keywordType":"Context","textWithKeyword":"Given The user navigates to the Create Meetings page","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When The user scrolls down to the Create an invitee section and the user clicks the As Contact button","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then Fields to create a new contact  First Name, Last Name and Email should appear along with Create & Add button and Cancel button","stepMatchArguments":[]}]},
  {"pwTestLine":48,"pickleLine":40,"tags":[],"steps":[{"pwStepLine":49,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"Given he user navigates to the Create Meetings page","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When The user enters data into the Subject field And the user clicks the Cancel button","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then the system should discard all unsaved changes","stepMatchArguments":[]}]},
]; // bdd-data-end