@import_accountScenario
Feature: Testing user able to import account features in CRM application
 

@AccountNavigation @TC014
  Scenario: confirming user able to land on Import Account page
    Given User Logged into CRM 
    When user click on import account page
    Then User should be redirected to import account page

@importAccount @TC015
  Scenario: confirming user able to upload a file using choose upload option
    Given User land on import account page
    When user click choose file and able to import the file
    Then User should see account file selected on choose file option

@importAccount @TC016
  Scenario: Verify the create new records only option can be selected
    Given User land on import account page
     When user select Create new records only option
    Then User should see Create new records only should be selected
    And Create new records and update existing records should not be selected
    
  @importAccount @TC017  
    Scenario: Verify user can import accounts from a file
      Given User land on import account page
      When the user selects the account import file
      And the user clicks Next
      And the user confirms the import file properties and clicks Next
      And the user confirms the field mappings and clicks Next
      And the user reviews the possible duplicate settings and starts the import
      Then the user should see a confirmation that the records were created

