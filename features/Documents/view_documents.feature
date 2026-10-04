Feature: Create Document
  As a user logged into the CRM application
  I want to view a document
  So that I can manage documents within the CRM

  Scenario: Verify that Documents option in menu bar have view document as dropdown value
    Given user is logged in to CRM application
    When user clicks on the Documents option in the menu bar
    Then the dropdown should display "View Document" as an option

  Scenario: Verify that the user can view an existing document
    Given user is logged in to CRM application
    When user clicks on the Documents option in the menu bar
    And user navigates to view document page and can view the mentioned fields below
      | Document Name   |
      | File            |
      | Category        |
      | Sub Category     |
      | Revision Date   |
      | Expiration Date |
      | User            |
    Then user should be redirected to the view document page and able to see existing document

