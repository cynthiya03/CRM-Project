import { Given, When, Then, expect } from '../../src/fixtures/pageFixture.js';

When('user navigates to view document page and can view the mentioned fields below', async ({ documentPage }, dataTable) => {
  await documentPage.openViewDocuments();
  await documentPage.expectDocumentFields(dataTable.raw().flat());
});

Then('user should be redirected to the view document page and able to see existing document', async ({ page }) => {
  await expect(page).toHaveURL(/documents/);
});
