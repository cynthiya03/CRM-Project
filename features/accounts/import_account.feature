@import_accountScenario
Feature: Testing user able to import account features in CRM application
 

@confirminguserabletolandonImportAccountpage @TC01
  Scenario: confirming user able to land on Import Account page
    Given User Logged into CRM and land on import account page
    And user land on Account page
    When user click import account page
    Then User should be redirected to import account page

@userabletouploadfile @TC02
  Scenario: confirming user able to upload a file using choose upload option
    Given User Logged into CRM and land on import account page
    And user land on import file page
    When user click choose file and able to import the file
    Then User should see account file selected on choose file option

@importAccount @TC003
  Scenario: Verify the create new records only option can be selected
    Given User Logged into CRM and land on import account page
    And user land on import file page
    When user select Create new records only option
    Then User should see Create new records only should be selected
    And Create new records and update existing records should not be selected