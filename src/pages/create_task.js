export class CreateTaskPage{

    constructor(page)
    {
        this.page =page;
        this.createtaskSubmenu =page.getByRole('link', { name: 'Create Task' });
        this.titleofPage =page.getByText('Create', { exact: true });
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.cancelButton =page.getByRole('button', { name: 'Cancel' });

        // Task Overview fields
        this.subjectField = page.getByRole('tabpanel', { name: 'TASK OVERVIEW' }).locator('input[type="text"]').first();
        this.startDate = page.getByRole('textbox', { name: 'yyyy-mm-dd hh:mm' }).first();
        this.dueDate = page.getByRole('textbox', { name: 'yyyy-mm-dd hh:mm' }).nth(1);
        this.priorityDropdown = page.locator('scrm-dropdownenum-edit').filter({ hasText: 'High Medium Low' }).getByRole('combobox');
        this.status = page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Not Started In Progress' }).getByRole('combobox');
        this.description = page.locator('textarea');

        // Account (type dropdown + record) and Contact
        this.accountDropdown = page.locator('scrm-group-field select');
        this.accountRecord = page.locator('#pn_id_1').getByRole('combobox', { name: 'Select an item' });
        this.contact = page.locator('#pn_id_3').getByRole('combobox', { name: 'Select an item' });

        // Validation message 
        this.requiredError = page.getByText('Missing required field: Subject');
        this.errorforPriority =page.getByText('Missing required field: Priority');
    }

    // ---- navigation ----
    async openCreateTaskPage() {
        await this.createtaskSubmenu.click();
        await expect(this.titleofPage).toBeVisible();
        await expect(this.subjectField).toBeVisible();
    }

    async verifyCreateTaskPageDisplayed() {
        await expect(this.titleofPage).toBeVisible();
    }

    // ---- generic helpers ----
    async selectFromDropdown(dropdown, optionText) {
        await dropdown.click();
        await this.page.getByRole('option', { name: optionText, exact: true }).click();
    }

    async selectRelatedRecord(field, recordName) {
        await field.click();
        await this.page.keyboard.type(recordName, { delay: 50 });
        await this.page.getByRole('option', { name: recordName }).first().click();
    }

    
    async enterSubject(value) {
        if (!value) return;
        await this.subjectField.fill(value);
        this.currentSubject = value;
    }
    async selectStatus(value) { if (value) await this.selectFromDropdown(this.status, value); }
    async enterStartDate(value) {
        if (!value) return;
        await this.startDate.fill(value);
        await this.startDate.press('Tab');       // closes the date picker and commits the value
    }
    async enterDueDate(value) {
        if (!value) return;
        await this.dueDate.fill(value);
        await this.dueDate.press('Tab');
    }
    async selectPriority(value) { if (value) await this.selectFromDropdown(this.priorityDropdown, value); }
    async enterDescription(value) { if (value) await this.description.fill(value); }
    async selectAccountType(value) { if (value) await this.accountDropdown.selectOption({ label: value }); }
    async selectAccount(value) { if (value) await this.selectRelatedRecord(this.accountRecord, value); }
    async selectContact(value) { if (value) await this.selectRelatedRecord(this.contact, value); }

    // ---- data driven: fills every field that has a value in the Excel row ----
    async fillTaskDetails(data = {}) {
        await this.enterSubject(data.subject);
        await this.selectStatus(data.status);
        await this.enterStartDate(data.startDate);
        await this.enterDueDate(data.dueDate);
        await this.selectPriority(data.priority);
        await this.enterDescription(data.description);
        await this.selectAccountType(data.accountType);
        await this.selectAccount(data.account);
        await this.selectContact(data.contact);
    }

    async clickSave() { await this.saveButton.click(); }
    async clickCancel() { await this.cancelButton.click(); }

    // ---- verifications ----
    async verifyTaskSaved() {
        await expect(this.saveButton).toBeHidden();                              // left the edit form
        await expect(this.page.getByText(this.currentSubject).first()).toBeVisible();   // detail view shows the subject
    }

    async verifyMandatoryErrorDisplayed() {
        await expect(this.requiredError).toBeVisible();
        await expect(this.saveButton).toBeVisible();                             
    }

    async verifyNothingSaved() {
        await expect(this.saveButton).toBeHidden();
        await expect(this.page.getByText(this.currentSubject)).toHaveCount(0);
    }
}



