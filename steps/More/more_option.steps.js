import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

When('user hovers on the Menu option in the menu bar', async ({ page }) => {
  await page.getByText('More', { exact: true }).first().hover();
});

Then('dropdown should display below options', async ({ page }, dataTable) => {
  const expectedOptions = dataTable.rawTable.flat().map((value) => value.trim());

  for (const option of expectedOptions) {
    await expect(page.getByRole('link', { name: option, exact: true })).toBeVisible();
  }
});
