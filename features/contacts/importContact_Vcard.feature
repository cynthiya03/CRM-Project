Feature: Testing contacts features in CRM application
  User will be able to import contacts from vCard in CRM application
@Contacts @TC112
  Scenario: Verify Create Contact from vCard field is displayed
    Given user land on Homepage
    When the user hovers over the Contact tab
    Then the user should see importcontactfromVcard

@Contacts @TC113
  Scenario: Navigate to the vCard import page
    Given the user is on the Contact page
    When the user clicks Create Contact from vCard
    Then the user should be redirected to the Import vCard page

@Contacts @TC114
 Scenario: Choose a vCard file
    Given the user is on the Import vCard page
    When the user clicks Choose File
    And the user selects a vCard file
    Then the chosen file should appear on the page