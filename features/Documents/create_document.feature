Feature: Create Document
  As a user logged into the CRM application
  I want to create a document
  So that I can manage documents within the CRM

  Scenario: Verify that Documents option in menu bar have create document as dropdown value
    Given user is logged in to CRM application
    When user clicks on the Documents option in the menu bar
    Then the dropdown should display "Create Document" as an option

  Scenario: Verify that the user can create a new document from the Documents dropdown
    Given user is logged in to CRM application
    When user clicks on the Documents option in the menu bar
    Then user should be redirected to the create document page

  Scenario: Verify that the user can successfully create a new document
    Given user is logged in to CRM application
    When user navigates to the create document page and fills in the following fields
      | Field           | Value                            |
      | File            | ./test-data/sample-document.txt  |
      | Document Name   | Sample Document                  |
      | Publish Date    | 2026-09-20                        |
      | Revision        | 1.0                               |
      | Document Type   | Mail Merge                        |
      | Category        | Marketing                         |
      | Assigned to     | will                               |
      | Status          | Active                             |
      | Template?       | No                                 |
      | Expiration Date | 2027-09-20                        |
      | Sub Category    | Marketing Collateral              |
    And user clicks the save button
    Then new document should be created successfully

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

