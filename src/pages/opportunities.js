import { expect } from "@playwright/test";  
class OpportunitiesPage {
constructor(page) {
    this.page = page;
    this.opportunitiesLink = page.locator('a', { hasText: 'Opportunities' });
    this.createOpportunityLink = page.locator('a', { hasText: 'Create Opportunity' });
    this.createOpportunityForm = page.locator('label', { hasText: 'OPPORTUNITY NAME' });
    this.opportunitiesList = page.locator('scrm-label', { hasText: 'Name' });
    this.opportunityNameInput = page.locator('scrm-field.field-name-name input');
    this.accountNameDropdown = page.locator('scrm-field.field-name-account_name [role="combobox"]');
    this.amountInput = page.locator('scrm-currency-edit input');
    this.salesStageDropdown = page.locator( 'scrm-field.field-name-sales_stage select');
    this.expectedCloseDateInput = page.locator( 'scrm-field.field-name-date_closed input');  
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.createdOpportunityName = (opportunityName) => page.getByRole('tabpanel', { name: 'BASIC' }).getByText(opportunityName, { exact: true });
    this.validationError = page.getByRole('alert');
    this.viewOpportunityLink = page.getByRole('link', { name: 'View Opportunities' })
    this.viewOpportunitiesName = page.getByRole('link', { name: 'Kaos Trading Ltd - 500 units' });
    this.viewOpportunitiesNameDetails = page.getByRole('tabpanel', { name: 'BASIC' }).getByText('Kaos Trading Ltd - 500 units');
    this.viewAccountName = page.getByRole('link', { name: 'Kaos Trading Ltd', exact: true });
    this.viewAccountNameDetails = page.getByRole('tabpanel', { name: 'OVERVIEW' }).getByText('Kaos Trading Ltd');
    this.importOpportunitiesLink = page.getByRole('link', { name: 'Import Opportunities' });
    this.importOpportunitiesDetails = page.locator('iframe').contentFrame().getByRole('heading', { name: 'Step 1: Upload Import File' });
    //this.chooseFileButton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Select file:' });
    this.fileInput = page.locator('iframe').contentFrame().locator('#userfile');
    this.nextButton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Next >' });
    this.importErrorMessage = page.locator('iframe').contentFrame().getByText('Missing required fields:');

     
}

//this.createOpportunityName= page.locator(getByText('OPPORTUNITY NAME'));
//this.createOpportunityName = page.getByRole('textbox').nth(1);   //locator('div').filter({ hasText: /^\*OPPORTUNITY NAME$/ }).nth(2)
//this.accountNameField = page.locator('#pn_id_1').getByRole('combobox', { name: 'Select an item' }); // getByRole('combobox', { name: 'Kaos Trading Ltd' })
//this.amountField = page.locator('scrm-currency-edit').getByRole('textbox');
//this.salesStageField =page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Prospecting Qualification' }).getByRole('combobox');
//this.expectedCloseDateField = page.getByRole('textbox', { name: 'yyyy-mm-dd' });
    

    async clickOpportunities() {
        await this.opportunitiesLink.click();
    
    }
    async hoverOpportunities() {
        await this.opportunitiesLink.hover();
    }
    async clickCreateOpportunity() {
        await this.createOpportunityLink.click();

    }
    async enterOpportunityName(opportunityName) {
        await this.opportunityNameInput.fill(opportunityName);

    }
    async enterAmount(amount) {
        await this.amountInput.fill(amount);
    }
    async selectSalesStage(salesStage) {
        await this.salesStageDropdown.selectOption({ label: salesStage });
    }

    async closingDate(expectedCloseDate) {
        await this.expectedCloseDateInput.fill(expectedCloseDate);
    }

    async selectAccountName(accountName) {
        await this.accountNameDropdown.click();
        await this.page.getByRole('option', { name: accountName, exact: true }).click();
    }
    async clickSaveButton() {
        await this.saveButton.click();
    }

    async checkOpportunityCreated(opportunityName) {
        return await this.createdOpportunityName(opportunityName).isVisible();
    }
    async checkValidationError(expectedMessage) {
         await expect (this.validationError).toContainText(expectedMessage);
    }

    async checkOpportunitiesList() {
        return await this.opportunitiesList.isVisible();
    }
    async checkCreateOpportunityForm() {
        return await this.createOpportunityForm.isVisible();
    }

    async clickViewOpportunities() {
        await this.viewOpportunitiesLink.click();
    }
    async checkOpportunityNameDetails() {
        return await this.viewOpportunitiesNameDetails.isVisible();
    }
    async clickViewOpportunitiesName() {
        await this.viewOpportunitiesName.click();
    }
    async clickViewAccountName() {
        await this.viewAccountName.click();
    }
    async checkAccountNameDetails() {
        return await this.viewAccountNameDetails.isVisible();

    }
    async clickImportOpportunities(){
        await this.importOpportunitiesLink.click();
    }
    async checkImportOpportunitiesDetails() {
        return await this.importOpportunitiesDetails.isVisible();
    }
    async clickChooseFile(filePath) {
        await this.fileInput.setInputFiles(filePath);
}
    async checkFileSelected() {
        return await this.fileInput.inputValue();
    }
    async clickNextButton() {
        await this.nextButton.click();
    }
    async checkImportErrorMessage(expectedMessage) {
    await expect(this.importErrorMessage).toContainText(expectedMessage);
}
}
export { OpportunitiesPage };