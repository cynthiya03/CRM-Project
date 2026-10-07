
export class morePage {
  constructor(page) {
    this.page = page;
    this.moreMenu = page.getByText('More', { exact: true }).first()
   
  }
}
