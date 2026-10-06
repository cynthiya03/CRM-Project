@CreateQuote 
Feature: Testing Create Quote page in SuiteCRM

@create quote menu display @TC601
Scenario:Verify Create Quotes page is displayed
Given User is logged into the application and Quotes menu is visible
When User clicks on the Create Quote sub-menu
Then Create Quotes page is displayed

@Mandatory fields @TC602
Scenario:Verify the mandatory fields displayed in the Overview section of the Create Quotes page.
Given User is in the Create Quotes page
When User inspects the mandatory fields displayed in the overview section
Then Title,Valid Until,Quote Stage fields should be displayed as mandatory by displaying * asterisk  next to it.

@Calendar icon @TC603
Scenario:Verify the user is able to click on Calendar icon and it opens
Given User is in the Create Quotes page
When User clicks the calendar icon
Then The Calendar should be displayed with Select Date,Close at the top right corner Today button at the top center 

@Save on No mandatory fields @TC604
Scenario:Not allow User to save when mandatory fields are not entered
Given User is in the Create Quotes page
When User doesnt enter any of the mandatory fields and clicks on the Save button
Then User should be displayed a warning message saying "Missing required field: Title"

@Save with mandatory fields @TC605
Scenario:Successfully save the quote by entering all the fields
Given User is in the Create Quotes page
When user enters all the mandatory and non mandatory fields and click on Save button
Then The Quote should be saved and the user has to be directed to the quotes page

@Cancel quote @TC606
Scenario:Cancel the quote 
Given User is in the Create Quotes page
When user enters all the mandatory and non mandatory fields and click on Cancel button
Then The quote should not be saved and user is directed to the Quotes page

