

export class ViewQuotePage{

    constructor(page){
        this.page =page;
        this.viewQuoteSubMenu =page.getByRole('link', { name: 'View Quotes' });
        this.titleofPage =page.getByText('QUOTES', { exact: true });
        this.quoteTitleLink=page.getByRole('link', { name: 'QuoteTitle' });
        this.phonecalllogButton =page.getByRole('button', { name: 'Log Call' });
        this.scheduleMeetingButton =page.getByRole('button', { name: 'Schedule Meeting' });
        this.createTaskButton =page.getByRole('button', { name: 'Create Task' });
        this.composeEmailButton =page.getByRole('button', { name: 'Compose Email' });
        this.pagetitleafterclickingonQuoteTitlelink =page.locator('iframe').contentFrame().getByText('Quotes');

        this.titleofPageonclickingCallLog =page.locator('iframe').contentFrame().getByText('CREATE Create');
        this.titleofPageonclickingMeetingButton =page.locator('iframe').contentFrame().getByText('Meetings');
        this.titleofPageonclickingonTaskButton =page.locator(getByText('Create', { exact: true }));
        this.titleofPageonclickingonComposeEmailButton =page.locator('div').filter({ hasText: /^New Email$/ });
    }

        async clickOnViewQuoteSubMenu(){
            await this.viewQuoteSubMenu.click();
        }

        async clickoncalllogButton(){
            await this.phonecalllogButton.click();

        }
        async clickonscheduleMeetingButton(){
            await this.scheduleMeetingButton.click();

        }
        async clickoncreateTaskButton(){
            await this.createTaskButton.click();


        }
        async clickoncomposeEmailButton(){
            await this.composeEmailButton.click();
        }
        async pagedisplaycalllog(){
            await expect(this.titleofPageonclickingCallLog).toBeVisible();
        }
        async pagedisplayedonSchedulemeeting(){
            await expect(this.titleofPageonclickingMeetingButton).toBeVisible();

        }
        async pagedisplayoncreateTask(){
            await expect(this.titleofPageonclickingonTaskButton).toBeVisible();

        }
        async quoteTitlelinkpage(){
            await expect(this.pagetitleafterclickingonQuoteTitlelink).toBeVisible();
        }
        async clickquoteTitleLink(){
            await this.quoteTitleLink.click();
        }

            
}
        
    




    
    
    
    
    
    
