@accountScenario
Feature: Testing account features in CRM application
  User will be able to navigate, create, view and import accounts in CRM application


@AccountfieldisDisplayed @TC001
  Scenario: Verify create Account field is Displayed
    Given User Logged into CRM application
    When user click the Accounts tab
    Then User should see create Account field

@AccountfieldisDisplayed @TC002
  Scenario: Verify View Accounts field is Displayed
    Given User Logged into CRM application
    When user click the Accounts tab
    Then User should see view Accounts field

@AccountfieldisDisplayed @TC003
  Scenario: Verify import Accounts field is Displayed
    Given User Logged into CRM application
    When user click the Accounts tab
    Then User should see import Account

@AccountfieldisDisplayed @TC004
  Scenario: Verify user able to land on create account screen
    Given User Logged into CRM application
    When user click create Account field
    Then User should be redirected to Create Account page
    

@createaccount @TC005
  Scenario: Display the account creation form
    Given User land on create Account page
    When User inspect the form
    Then User should see the Overview tab
    And User should see More Information
    And User should see Other tabs
    And User should see Name field
    And User should see Website field
    And User should see Office Phone
    And User should see Assigned To fields
    And User should see email
    And User should see billing address sections
    And User should see shipping address sections
    
@createaccount @TC006
  Scenario: Verify mandatory fields display an asterisk
    Given User land on create Account page
    When User view the Name field label
    Then user should see "*" beside the Name label

@createaccount  @TC007
  Scenario: Prevent saving without an account name
    Given User land on create Account page
    And name field is empty
    When User click Save
    Then User should see "Missing required field: Name"
    And Name should be highlighted as invalid

    @createaccount  @TC008
  Scenario: Create an account with only a name
    Given User enter only spaces in Name
    When User click Save
    Then User should see "Missing required field: Name"
    
  
  @TC009 @createaccount
  Scenario: Create an account with minimum required information
    Given User land on create Account page
    When User enter a unique account name
    And User saves the account
    And User returns to the accounts list
   Then Exactly one account should be created
   

@createaccountform  @TC010
  Scenario: Fill out the account creation form
  Given User land on create Account page
  When User enter a unique account name
  When User fills in the account form with the following details:
    | Field            | Value                 |
    | Website          | https://acme.com      |
    | Office Phone     | 555-0199              |
    | Assigned To      | WillWestin            |
    | Billing Address  | 123 Main St, NY 10001 |
    | Shipping Address | 123 Main St, NY 10001 |
  And User submits the account creation form
  Then User should see the account created successfully



