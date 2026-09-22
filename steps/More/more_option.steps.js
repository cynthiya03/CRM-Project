import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

When('user clicks on the Menu option in the menu bar', async ({}) => {
  // Step: When user clicks on the Menu option in the menu bar
  // From: features\\More\\more_option.feature:8:5
});

Then('dropdown should display below options', async ({}, dataTable) => {
  // Step: Then dropdown should display below options
  // From: features\\More\\more_option.feature:9:5
  const expectedOptions = dataTable.rawTable.flat().map((value) => value.trim());
  console.log('Expected menu options:', expectedOptions);
});
