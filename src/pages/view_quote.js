import { expect } from '@playwright/test';

export class ViewQuotePage {

    constructor(page) {
        this.page = page;
        this.quotesMenu = page.locator('a').filter({ hasText: /^Quotes$/ });
        this.viewQuoteSubMenu = page.getByRole('link', { name: 'View Quotes' });
        this.titleofPage = page.getByText('QUOTES', { exact: true }).first();
        this.quoteTitleLink = page.getByRole('link', { name: 'Auto Quote 001' }).first();   // a quote created by your Save scenario
        this.phonecalllogButton = page.getByRole('button', { name: 'Log Call' }).first();
        this.scheduleMeetingButton = page.getByRole('button', { name: 'Schedule Meeting' }).first();
        this.createTaskButton = page.getByRole('button', { name: 'Create Task' }).first();
        this.composeEmailButton = page.getByRole('button', { name: 'Compose Email' }).first();

        this.pagetitleafterclickingonQuoteTitlelink = page.locator('iframe').contentFrame().getByText('Quotes').first();
        this.titleofPageonclickingCallLog = page.locator('iframe').contentFrame().getByText('CREATE Create');
        this.titleofPageonclickingMeetingButton = page.locator('iframe').contentFrame().getByText('Meetings').first();
        this.titleofPageonclickingonTaskButton = page.getByText('Create', { exact: true }).first();
        this.titleofPageonclickingonComposeEmailButton = page.locator('div').filter({ hasText: /^New Email$/ }).first();
    }

    async openViewQuotesPage() {
        await this.quotesMenu.hover();
        await this.viewQuoteSubMenu.click();
        await expect(this.titleofPage).toBeVisible();
    }

    async clickOnViewQuoteSubMenu() { await this.viewQuoteSubMenu.click(); }
    async clickoncalllogButton() { await this.phonecalllogButton.click(); }
    async clickonscheduleMeetingButton() { await this.scheduleMeetingButton.click(); }
    async clickoncreateTaskButton() { await this.createTaskButton.click(); }
    async clickoncomposeEmailButton() { await this.composeEmailButton.click(); }
    async clickquoteTitleLink() { await this.quoteTitleLink.click(); }

    async pagedisplaycalllog() { await expect(this.titleofPageonclickingCallLog).toBeVisible(); }
    async pagedisplayedonSchedulemeeting() { await expect(this.titleofPageonclickingMeetingButton).toBeVisible(); }
    async pagedisplayoncreateTask() { await expect(this.titleofPageonclickingonTaskButton).toBeVisible(); }
    async pagedisplayoncomposeEmail() { await expect(this.titleofPageonclickingonComposeEmailButton).toBeVisible(); }
    async quoteTitlelinkpage() { await expect(this.pagetitleafterclickingonQuoteTitlelink).toBeVisible(); }
}
