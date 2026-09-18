Feature: Testing contacts features in CRM application
  User will be able to view contacts in CRM application

@contact @TC115
 Scenario: Verify View Contact field is displayed
   Given User land on Home page
    When the user hovers over the Contact tab
    Then the user should see Import Contact

@contact @TC116
  Scenario: Navigate to the contact list page
    Given the user is on the Contact page
    When the user clicks View Contacts
    Then the user should be redirected to the Contact List page

@contact @TC117
  Scenario: Display the contact list controls
    Given the user is on the Contact List page
    When the user views the contact list toolbar
    Then the select-all checkbox should be displayed
    Then the Bulk Action dropdown should be displayed
    Then the Filter button should be displayed
    Then the Column button should be displayed
    Then the pagination controls should be displayed