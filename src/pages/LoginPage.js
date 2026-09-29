export class LoginPage {
  constructor(page) {
    this.page = page;
  }
  async openURL(url) {
    await this.page.goto(url);
  }

  async dologin(username, password) {
    // Adjust selectors to match your login form
    await this.page.fill('input[name="user_name"], input[name="username"], input#username', username || '');
    await this.page.fill('input[name="user_password"], input#password', password || '');
    await Promise.all([
      this.page.click('button:has-text("Login"), input[type="submit"]'),
      this.page.waitForLoadState('networkidle'),
    ]).catch(() => {});
  }
}
