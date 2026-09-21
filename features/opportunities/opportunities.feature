Feature: testing opportunities feature in CRM application
user will be able to create opportunities in CRM application

Background: 
    Given User must have logged into the crm application

@createopportunity
Scenario:opportunities display page
    Given User is on the CRM home page 
    When User clicks the opportunities section
    Then User should see the opportunities landing page

@createopportunity
Scenario:Create opportunities
    Given User is on the opportunities page 
    When User clicks create opportunities button from dropdown
    Then User should see the new opportunities form where the user can enter details

@createopportunity
Scenario:Created opportunity successfully
    Given User is on the opportunities page
    When User enters valid details on the form including Opportunity name, account name , amount and selects one sales stage and closing date and click save button
    Then New Opportunity should be created successfully

@createopportunity
Scenario:create opportunity with missing mandatory field
    Given User is on the create opportunities page
    When User missed to enter mandatory information and clicks save
    Then It throws validation error "unable to perform action"

@viewopportunity
Scenario:verify that page displays list of opportunities 
    Given user is on the opportunities page
    When user selects view opportunities 
    Then user should see the list of opportunities

@viewopportunity
Scenario: verify that user can able to view opportunity name details 
    Given user is on the view opportunities page
    When user clicks any opportunity name on the list 
    Then user should able to see all the details under that name 

@viewopportunity
Scenario: verify that user can able to view account name details
    Given user is on the view opportunities page 
    When user clicks any opportunity account name on the list 
    Then user should able to see all the details under that account name 

@importopportunity
Scenario: verify that user can able to see information on import opportunities page
    Given user is on the opportunities page
    When user clicks import opportunities
    Then user should see choose file to import option

@importopportunity
Scenario: verify that user can able to click choose file option
    Given user is on the import opportunities page
    When user clicks choose file
    Then user should be redirected to choose file from their system

@importopportunity
Scenario: verify that it throws an error if user did not uploaded any file 
    Given user is on the import opportunities page
    When user clicks next
    Then It throws an error that 'no file chosen'
