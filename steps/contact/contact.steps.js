import { Given, When, Then, BeforeScenario } from '../../src/fixtures/pageFixture.js';
import { expect } from '@playwright/test';


// TC51
Given('User land on Homepage', async ({ }) => {
   //await page.waitForLoadState('domcontentloaded');
});

When('the user hovers over the Contact tab', async ({ homePage }) => {
  await homePage.hoverTab(homePage.contactstab)
});

Then('the user should see Create Contact', async ({ contactPage }) => {
  await contactPage.verifyVisible(contactPage.createContactfield)
});

//TC52

When('the user clicks Create Contact', async ({ contactPage }) => {
  await contactPage.openCreateContact();
});

Then('the user should be redirected to the Create Contact page', async ({ contactPage }) => {
 await contactPage.verifyVisible(contactPage.createContactTitle);
});

// TC53
Given('the Create Contact page is open', async ({  }) => {
 // await contactPage.verifyVisible(contactPage.createContactTitle)
});

When('the user inspects the form', async ({ contactPage }) => {
  await contactPage.verifyVisible(contactPage.createContactTitle);
  
});

Then('the user should see the Overview tab', async ({ contactPage }) => {
  await contactPage.verifyVisible(contactPage.overview); 

});

Then('the user should see More Information', async ({ contactPage }) => {
  await contactPage.verifyVisible(contactPage.moreinfo);

});

Then('the user should see Other tabs', async ({ contactPage }) => {
  await contactPage.verifyVisible(contactPage.other);
  
});

//TC54

When('the user views the Last Name field label', async ({ contactPage }) => {
  await contactPage.verifyVisible(contactPage.LastName)
  
});

Then('the user should see an asterisk {string} beside the Name label', async ({ contactPage }, arg) => {
  await contactPage.expectRequiredIndicator(arg);
});

// TC55

When('the Last Name field is empty', async ({ contactPage }) => {
  await contactPage.fillField(contactPage.LastName, '   '); 

});

When('user click save', async ({contactPage}) => {
   await contactPage.clickSaveButton(contactPage.saveButton);
 });


Then('the user should see {string}', async ({ contactPage }, expectedMessage) => {
  await expect(contactPage.errorMessage).toContainText(expectedMessage);
});

Then('the Last Name field should be highlighted as invalid', async ({ contactPage }) => {
  await expect(contactPage.LastName).toHaveCSS(
  'border-color',
  'rgb(220, 53, 69)'
);
});

//TC56

When('the user enters a first name', async ({ contactPage }) => {
 await contactPage.fillFIRSTName();  
});

When('the user enters a unique last name', async ({ contactPage }) => {
 await contactPage.filluniquelastName();  
});

Then('exactly one contact should be created', async ({ contactPage }) => {
 await expect(contactPage.createdcontact).toHaveCount(1);
})

//TC57

When(
  'the user select {string} from dropdown', async ({ contactPage }, value) => {
    await contactPage.selectDropdown(contactPage.salutation, value);
  }
);

Then('the selected honorific should be {string}', async ({ contactPage }, value) => {
  await expect(contactPage.salutation).toHaveValue(value);
});

