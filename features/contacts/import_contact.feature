Feature: Testing contacts features in CRM application
  User will be able to import contacts in CRM application

@contact @TC118
Scenario: Navigate to the Import Contact page
    Given the user is on the Contact page
    When the user clicks Import Contact
    Then the user should be redirected to the Import Contact page

@contact @TC119
Scenario: Choose a contact import file
    Given the user is on the import file page
    When the user clicks Choose File
    And the user selects a contact file to import
    Then the selected contact file should be shown in the Choose File option

@contact @TC220    
Scenario: Select Create new records only
    Given the user is on the import file page
    When the user selects "Create new records only"
    Then "Create new records only" should be selected