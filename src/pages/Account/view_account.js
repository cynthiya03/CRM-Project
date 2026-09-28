
import { BasePage } from '../Basepage.js';
export class viewaccount extends BasePage {

constructor(page) {
super(page);
this.page = page;
this.name = page.getByText('Name', { exact: true }).first();
this.city = page.getByText('City', { exact: true }).first();
this.billingCountry = page.getByText('Billing Country', { exact: true }).first();
this.phone = page.getByText('Phone', { exact: true }).first();
this.user = page.getByText('User', { exact: true }).first();
this.emailAddress = page.getByText('Email Address', { exact: true }).first();
this.accountlistTitle = page.getByText('ACCOUNTS', { exact: true }).first()
}

}