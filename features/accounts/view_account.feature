
@view_accountScenario
Feature: Testing view account features in CRM application
  User will be able to see details in listed accounts
@ViewAccountpage @TC01
  Scenario: Verify the account list column headings
    Given User Land on view Account page
    When User view the account list
    Then User should see Name column be displayed
    And City column should be displayed
    And Billing Country column should be displayed
    And Phone column should be displayed
    And User column should be displayed
    And Email Address column should be displayed