export class Account {

constructor(page) {
this.page = page;
 this.account = page.locator('a').filter({ hasText: /^Accounts$/ });
 this.create_account =  page.getByRole('link', { name: 'Create Account' })
 this.view_account = page.getByText('View Accounts', { exact: true }).first()
 this.import_account = page.getByText('Import Accounts', { exact: true })
     
   

}

}