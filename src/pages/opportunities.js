class OpportunitiesPage {
constructor(page) {
    this.page = page;
    this.opportunitiesLink = page.getByRole('link', { name: 'Opportunities' });
    }
    async clickOpportunities() {
        await this.opportunitiesLink.click();
    
}
}
exports { OpportunitiesPage };