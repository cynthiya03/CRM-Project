

export class LoginPage{ 
/**
   * @param {import('@playwright/test').Page} page
   */
constructor(page) {
this.page = page;
 this.username = page.getByRole('textbox', { name: 'Username' })
 this.password = page.getByRole('textbox', { name: 'Password' })
this.loginButton = page.getByRole('button', { name: 'Log In' })

}


async openURL(url){
     await this.page.goto(url);
 }
// // const username = process.env.CRM_USERNAME;
//  // const password = process.env.CRM_PASSWORD;
async dologin(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}

