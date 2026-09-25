
@login
Feature: verify CRM login using Excel data

  Scenario Outline: Verify CRM login for <testCase>
    Given User opens the CRM login page
    When User submits login credentials from Excel for "<testCase>"
    Then User should see the Excel login result for "<testCase>"

    Examples:
      | testCase               |
      | TC001_valid_login      |
      | TC002_invalid_password |
      | TC003_invalid_username |
      | TC004_empty_username   |
      | TC005_empty_password   |
