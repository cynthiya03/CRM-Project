export class createquotePage{

    constructor(page){
        this.page =page;
        this.createQuoteSubMenu = page.locator(getByRole('link', { name: 'Create Quote' }));;
        this.titleofPage = page.locator('iframe').contentFrame().getByText('CREATE', { exact: true });
        this.overviewButton =page.locator('iframe').contentFrame().getByRole('button', { name: '− Overview' });
        this.overviewSection =page.locator('iframe').contentFrame().getByText('Overview');
        this.saveButton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Save' });
        this.cancelButton =page.locator('iframe').contentFrame().getByRole('button', { name: 'Cancel' });

        this.titleField =page.locator('iframe').contentFrame().locator('#name');
        this.validUntilField =page.locator('iframe').contentFrame().locator('#expiration');
        this.assignedToField =page.llocator('iframe').contentFrame().locator('#assigned_user_name');
        this.approvalStatusdropdown =page.locator('iframe').contentFrame().locator('#approval_status');

        this.opportunityNameField =page.locator('iframe').contentFrame().locator('#opportunity');
        this.quoteStageDropdown =page.locator('iframe').contentFrame().locator('#stage');
        this.invoiceStatusDropdown =page.locator('iframe').contentFrame().locator('#invoice_status');

        this.paymentTermsDropdown =page.locator('iframe').contentFrame().locator('#term');
        this.approvalIssuesField =page.locator('iframe').contentFrame().locator('#approval_issue');
        this.addressInformationButton =page.locator('iframe').contentFrame().getByRole('button', { name: '− Address Information' });
        this.accountNameField =page.locator('iframe').contentFrame().locator('#billing_account');
        this.comtactNameField =page.locator('iframe').contentFrame().locator('#billing_contact');

        this.billingAddressStreet =page.locator('iframe').contentFrame().getByRole('group', { name: 'Billing Address' }).getByLabel('Street:');
        this.billingAddressCity =page.locator('iframe').contentFrame().getByRole('group', { name: 'Billing Address' }).getByLabel('City:');
        this.billingAddressState =page.locator('iframe').contentFrame().getByRole('group', { name: 'Billing Address' }).getByLabel('State/Region:');
        this.billingAddressPostalCode =page.locator('iframe').contentFrame().getByRole('group', { name: 'Billing Address' }).getByLabel('Postal Code:');
        this.billingAddressCountry =page.locator('iframe').contentFrame().getByRole('group', { name: 'Billing Address' }).getByLabel('Country:');

        this.shippingAddressStreet =page.locator('iframe').contentFrame().getByRole('group', { name: 'Shipping Address' }).getByLabel('Street:');
        this.shippingAddressCity =page.locator('iframe').contentFrame().getByRole('group', { name: 'Shipping Address' }).getByLabel('City:');
        this.shippingAddresState =page.locator('iframe').contentFrame().getByRole('group', { name: 'Shipping Address' }).getByLabel('State/Region:');
        this.shippingAddressPostalCode =page.locator('iframe').contentFrame().getByRole('group', { name: 'Shipping Address' }).getByLabel('Postal Code:');
        this.shippingAddressCountry =page.locator('iframe').contentFrame().getByRole('group', { name: 'Shipping Address' }).getByLabel('Country:');
        this.copyAddressfromLeftcheckbox =page.locator('iframe').contentFrame().locator('#shipping_checkbox');
    
        this.lineitemsButton =page.locator('iframe').contentFrame().getByRole('button', { name: '− Line Items' });
        this.currencyDropdown =page.locator('iframe').contentFrame().locator('#currency_id_select');
        this.addGroupButton =page.locator('iframe').contentFrame().getByRole('button', { name: 'Add Group' });
        this.totalField =page.locator('iframe').contentFrame().locator('#total_amt');
        this.discountField =page.locator('iframe').contentFrame().locator('#discount_amount');
        this.subtotalField =page.locator('iframe').contentFrame().locator('#subtotal_amount');
        this.shippingField =page.locator('iframe').contentFrame().locator('#shipping_amount');
        this.shippingTaxField =page.locator('iframe').contentFrame().locator('#shipping_tax_amt');
        this.taxField =page.locator('iframe').contentFrame().locator('#tax_amount');
        this.totalField =page.locator('iframe').contentFrame().locator('#total_amount');

        this.titleFieldMandatoryField =page.locator('iframe').contentFrame().getByText('*').first();
        this.validUntilMandatoryField =page.locator('iframe').contentFrame().getByText('*').nth(2);
        this.quoteStageMandatoryField =page.locator('iframe').contentFrame().getByText('*').nth(1);
        this.calendarIcon =page.locator('iframe').contentFrame().locator('#Fill-3');

        this.pagetitledisplayedonsave =page.locator('iframe').contentFrame().getByText('Quotes');
    }

        async clickOnCreateQuoteSubMenu(){
            await this.createQuoteSubMenu.click();
        }

        async QuoteSaveButton()
        {
            await this.saveButton.click();
        }
        
        async QuoteCancelButton()
        {
            await this.cancelButton.click();
        }

        async QuoteCalendarIcon() {
            await this.calendarIcon.click();
        }

        async QuoteCopyAddressFromLeftCheckbox(){
            await this.copyAddressfromLeftcheckbox.click();
        }   

        async quoteAddGroupButton()
        {
            await this.addGroupButton.click();
        }

    async fillQuoteDetails(data = {}) {
        if (data.title) await this.titleField.fill(data.title);
        if (data.validUntilField) await this.validUntilField.fill(data.validUntilField);
        if (data.assignedToField) await this.assignedToField.fill(data.assignedToField);
        if (data.opportunityNameField) await this.opportunityNameField.fill(data.opportunityNameField);
        if (data.approvalIssuesField) await this.approvalIssuesField.fill(data.approvalIssuesField);
        if (data.approvalStatus) await this.approvalStatusdropdown.selectOption({ label: data.approvalStatus });
        if (data.quoteStage) await this.quoteStageDropdown.selectOption({ label: data.quoteStage });
        if (data.invoiceStatus) await this.invoiceStatusDropdown.selectOption({ label: data.invoiceStatus });
        if (data.paymentTerms) await this.paymentTermsDropdown.selectOption({ label: data.paymentTerms });
    }

    async errorMessageDisplayed(){
        await expect(this.page.locator('iframe').contentFrame().getByText('Missing required field: Title'), { exact: true }).toBeVisible();
    }

    }




