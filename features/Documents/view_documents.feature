@documentScenario
Feature: View Document
  As a user logged into the CRM application
  I want to view a document
  So that I can manage documents within the CRM

  @DocumentfieldisDisplayed @TC001
  Scenario: Verify that Documents option in menu bar have view document as dropdown value
    When user clicks on the Documents option in the menu bar
    Then the dropdown should display "View Documents" as an option

  @viewdocument @TC002
  Scenario: Verify that the user can view an existing document
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

