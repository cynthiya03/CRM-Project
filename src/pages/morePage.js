
export class morePage {
  constructor(page) {
    this.page = page;
    this.moreMenu = page.locator('a').filter({ hasText: 'More' })
   
  }
}
