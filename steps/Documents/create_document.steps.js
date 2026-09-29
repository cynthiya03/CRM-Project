import { Given, When, Then, expect } from '../../src/fixtures/pageFixture.js';

When('user clicks on the Documents option in the menu bar', async ({ documentPage }) => {
  await documentPage.openDocumentsMenu();
});

Then('the dropdown should display {string} as an option', async ({ documentPage }, option) => {
  await documentPage.expectMenuOption(option);
  await documentPage.page.waitForTimeout(15000);
  await expect(documentPage.viewDocumentLink).toBeVisible();
});

Then('user should be redirected to the create document page', async ({ documentPage }) => {
  await documentPage.openCreateDocument();
});

When('user navigates to the create document page and fills in the following fields', async ({ documentPage }, dataTable) => {
  await documentPage.openDocumentsMenu();
  await documentPage.openCreateDocument();
  await documentPage.fillDocument(dataTable.hashes());
});

When('user clicks the save button', async ({ documentPage }) => {
  await documentPage.save();
});

Then('new document should be created successfully', async ({ documentPage }) => {
  await documentPage.expectDocumentCreated('Sample Document');
});

When('user navigates to view document page and can view the mentioned fields below', async ({ documentPage }, dataTable) => {
  await documentPage.openViewDocuments();
  await documentPage.expectDocumentFields(dataTable.raw().flat());
});

Then('user should be redirected to the view document page and able to see existing document', async ({ page }) => {
  await expect(page).toHaveURL(/documents/);
});
