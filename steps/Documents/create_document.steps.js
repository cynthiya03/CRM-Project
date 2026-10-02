import { When, Then } from '../../src/fixtures/pageFixture.js';

When('user clicks on the Documents option in the menu bar', async ({ documentPage, logger }) => {
  logger.info('Opening the Documents menu');
  await documentPage.openDocumentsMenu();
});

Then('the dropdown should display {string} as an option', async ({ documentPage, logger }, option) => {
  logger.info(`Verifying dropdown displays option: ${option}`);
  await documentPage.expectMenuOption(option);
});

Then('user should be redirected to the create document page', async ({ documentPage ,logger}) => {
  logger.info('Navigating to the create document page');
  await documentPage.openCreateDocument();
});

When('user navigates to the create document page and fills in the following fields', async ({ documentPage, logger }, dataTable) => {
  logger.info('Navigating to the create document page');
  await documentPage.openDocumentsMenu();
  await documentPage.openCreateDocument();
  const fields = dataTable.hashes();
  logger.info(`Filling document form with fields: ${JSON.stringify(fields)}`);
  await documentPage.fillDocument(fields);
});

When('user clicks the save button', async ({ documentPage, logger }) => {
  logger.info('Clicking the save button');
  await documentPage.save();
});

Then('new document should be created successfully', async ({ documentPage, logger }) => {
  logger.info('Verifying document was created successfully');
  await documentPage.expectDocumentCreated('Sample Document');
});

