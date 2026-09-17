@scenario

Feature: testing opportunities feature in CRM application
user will be able to create opportunities in CRM application

background:
Given User must have logged into the crm application

scenario: opportunities display page

Given User is on the CRM home page 
When User clicks the opportunities section
Then User should see the opportunities landing page

scenario: Create opportunities

Given User is on the opportunities page 
When User clicks create opportunities button from dropdown
Then User should see the new opportunities form where the user can enter details
When User enters valid details on the form including Opportunity name, account name , amount and selects one sales stage and closing date 
and click save button
Then New Opportunity should be created successfully

scenario: View opportunities

Given user is on the opportunities page
When user selects view opportunities 
Then user should see the list of opportunities
When user clicks any opportunity name on the list 
Then user should able to see all the details under that name 
When user clicks any opportunity account name on the list 
Then user should able to see all the details under that account name 

scenario: import opportunities

Given user is on the opportunities page
when user clicks import opportunities
Then user should see choose file to import file option
when user clicks choose file
Then user should be redirected to choose file from their system

scenario: create opportunity with missing mandatory field

Given User is on the create opportunities page
When user missed to enter mandatory information and clicks save
Then It throws validation error "unable to perform action"