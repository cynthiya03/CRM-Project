export class ImportQuotePage{

     constructor(page){
        this.page =page;
        this.importQuoteSubMenu =page.getByRole('link', { name: 'Import', exact: true });
        this.titleofImportPage =page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 1: Upload Import File' });
        this.downloadLink =page.locator('iframe').contentFrame().getByRole('link', { name: 'Download Import File Template' });
        this.chooseFileButton =page.locator('iframe').contentFrame().getByRole('button', { name: 'Select file:' });
        this.fileChoosenButton =page.locator('iframe').contentFrame().getByRole('button', { name: 'Select file:' });
        this.createNewRecordsRadioButton =page.locator('iframe').contentFrame().locator('#import_create');
        this.createNewandUpdateExistingRadioButton= page.locator('iframe').contentFrame().locator('#import_update');
        this.nextButton =page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
        this.steptwotitleofpage =page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 2: Confirm Import File' });
        this.fileRequiredError =page.locator('iframe').contentFrame().getByText('Missing required fields:');
     }

        

        async clickchooseFileButton(){
            await this.chooseFileButton.click();
        
        }
        async selectcreateNewRecordsRadioButton(){
            await this.createNewRecordsRadioButton.check();


        }

        async openImportPage() {
    await this.importQuoteSubMenu.click();
    await expect(this.titleofImportPage).toBeVisible();
  }

  async verifyImportPageDisplayed() {
    await expect(this.titleofImportPage).toBeVisible();
  }

  async clickdownload() {
    const downloadPromise = this.page.waitForEvent('download');
    await this.downloadLink.click();
    this.lastDownload = await downloadPromise;
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
    await this.nextButton.click();
  }

  async verifyNextStepDisplayed() {
    await expect(this.step2Title).toBeVisible();
  }

  async verifyFileRequiredErrorAndStillOnStep1() {
    await expect(this.fileRequiredError).toBeVisible();
    await expect(this.titleofImportPage).toBeVisible();
  }
}


    


