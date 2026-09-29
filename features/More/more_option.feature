Feature: Menu Dropdown Options
  As a user logged into the CRM application
  I want to view all options in the Menu dropdown
  So that I can navigate to any module in the CRM

  Scenario: Verify all menu dropdown options
    When user hovers on the Menu option in the menu bar
    Then dropdown should display below options
      | Home                |
      | Emails              |
      | Calls               |
