import { expect } from '@playwright/test';
import path from 'node:path';

export class ImportQuotePage {

    constructor(page) {
        this.page = page;
        this.lastDownload = null;
        this.lastDialogMessage = null;

        const frame = page.locator('iframe').contentFrame();

        this.quotesMenu = page.locator('a').filter({ hasText: /^Quotes$/ });
        this.importQuoteSubMenu = page.getByRole('link', { name: 'Import', exact: true });

        this.titleofImportPage = frame.getByRole('heading', { name: 'Step 1: Upload Import File' });
        this.downloadLink = frame.getByRole('link', { name: 'Download Import File Template' });
        this.fileInput = frame.locator('input[type="file"]');
        this.createNewRecordsRadioButton = frame.locator('#import_create');
        this.createNewandUpdateExistingRadioButton = frame.locator('#import_update');
        this.nextButton = frame.getByRole('button', { name: 'Next >' });
        this.step2Title = frame.getByRole('heading', { name: 'Step 2: Confirm Import File' });
        this.fileRequiredError = frame.getByText('Missing required fields:');
    }

    async openImportPage() {
        await expect(this.quotesMenu).toBeVisible();
        await this.quotesMenu.hover();
        await this.importQuoteSubMenu.click();
        await expect(this.titleofImportPage).toBeVisible();
    }

    async verifyImportPageDisplayed() {
        await expect(this.titleofImportPage).toBeVisible();
    }
    async verifydownloadlink(){
      await expect(this.clickdownload).l
    }

    async clickdownload() {
    await this.downloadLink.click();
    await this.page.waitForTimeout(5000);      // debug only
    
    
  }
  async verifyDownloadLinkClickable() {
    await expect(this.downloadLink).toBeVisible();
    await expect(this.downloadLink).toBeEnabled();
}

    async verifyTemplateDownloaded() {
        expect(this.lastDownload, 'No download was captured').not.toBeNull();
        expect(this.lastDownload.suggestedFilename()).toMatch(/\.(csv|xlsx?)$/i);
    }

    async uploadFile(fileName) {
        const filePath = path.resolve(process.cwd(), 'Data', fileName);
        await this.fileInput.setInputFiles(filePath);
    }

    async selectcreateNewRecordsRadioButton() {
        await this.createNewRecordsRadioButton.check();
        await expect(this.createNewRecordsRadioButton).toBeChecked();
    }

    async selectcreateNewandUpdateExistingRadioButton() {
        await this.createNewandUpdateExistingRadioButton.check();
        await expect(this.createNewandUpdateExistingRadioButton).toBeChecked();
    }

    async clickNextButton() {
    this.lastDialogMessage = null;
    this.page.once('dialog', async (dialog) => {
        this.lastDialogMessage = dialog.message();
        await dialog.accept();                 // OK / continue
    });
    await this.nextButton.click();
}

async verifyNextStepDisplayed() {
    await expect(this.step2Title).toBeVisible();
}

async verifyFileRequiredErrorAndStillOnStep1() {
    await expect(this.titleofImportPage).toBeVisible();
     await expect.poll(
        async () => (await this.fileRequiredError.isVisible()) || this.lastDialogMessage !== null,
        { message: 'Expected a "file required" validation message' }
    ).toBeTruthy();
}
}
