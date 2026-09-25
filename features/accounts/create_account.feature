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
    Then user should see asterisk "*" beside the Name label


@createaccount  @TC007
  Scenario: Prevent saving without an account name
    Given User land on create Account page
    And name field is empty
    When User click Save
    Then User should see "Missing required field: Name"
    And Name should be highlighted as invalid

@createaccount @TC008
  Scenario: Prevent saving an account name with only spaces
    Given User land on create Account page
    When User enter only spaces in Name
    And User click Save
    Then User should see "Missing required field: Name"
    And Name should be highlighted as invalid
  
@Createanaccountwithminimumrequiredinformation @TC009
  Scenario: Create an account with minimum required information
    Given User land on create Account page
    When User enter a unique account name
    And Leave optional fields empty
    And retain the default assignee
    And Click Save
    Then Exactly one account should be created
   

@Saveallvisibleaccountdetails @TC012
  Scenario: Save all visible account details
    Given User land on create Account page
    And Create Account screen is open
    When Pass unique value to all create account field
    Then All values should appear in their corresponding fields

  @validateEmailaddress @TC0013
  Scenario Outline: Save and verify primary and secondary email addresses
    Given the Create Account screen is open
    And the user has entered a unique account name
    And the user has entered "<primary_email>" in the first email row
    When the user clicks the add email button
    And the user enters "<secondary_email>" in the new row
    And the user clicks Save
    And the user reopens the account
    Then the first email row should contain "<primary_email>"
    Then the second email row should contain "<secondary_email>"

    Examples:
      | primary_email             | secondary_email                | error
      | primary@example.com       | secondary@example.com          | 
      | alice.smith@example.com   |           |
      | sales+primary@            | support+secondary@example.net  |
      |                           | backup456@example.com          |


@saveBillingAddress  @TC0014
Scenario: Save Billing address information
    Given the Create Account screen is open
    And the user has entered a unique account name
    When the user enters the billing address details
    And the user saves the account
    And the user reopens the account
    Then the billing address values should match the entered values

@saveshippingaddress @TC0015
    Scenario: Save Shipping address information
    Given the Create Account screen is open
    And the user has entered a unique account name
    When the user enters the following shipping address:
      | Field       | Value         |
      | Street      | 123 Main Street |
      | Postal Code | 02108         |
      | City        | Boston        |
      | State       | Massachusetts |
      | Country     | United States |
    And the user clicks Save
    And the user reopens the account
    Then the shipping address should match the entered values


@confirmingduplicateaccountpolicy @TC016
  Scenario: confirming duplicate account policy
    Given User land on create Account page
    And An account with the entered name already exists
    And Duplicate account names are prohibited
    When User enter that existing account name
    And User click Save
    Then User should see a duplicate account validation message

