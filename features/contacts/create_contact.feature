
Feature: Testing contacts features in CRM application
  User will be able to navigate, create, view and import contacts in CRM application

  Background:
    Given the user is logged in to the CRM application

@Contacts @TC101
  Scenario: Verify Contact tab is displayed
    When the user hovers over the Contact tab
    Then the user should see Create Contact

@Contacts @TC102
  Scenario: Navigate to the Create Contact page
    Given the user hovers over the Contact tab
    When the user clicks Create Contact
    Then the user should be redirected to the Create Contact page


@Contacts @TC103
  Scenario: Display the contact creation form tabs
    Given the Create Contact page is open
    When the user inspects the form
    Then the user should see the Overview tab
    Then the user should see More Information
    Then the user should see Other tabs


@Contacts @TC104
  Scenario: Verify mandatory fields display an asterisk
    Given the Create Contact page is open
    When the user views the Last Name field label
    Then the user should see an asterisk "*" beside the Name label


@Contacts @TC105
  Scenario: Prevent saving without a last name
    Given the Create Contact page is open
    And the Last Name field is empty
    When the user clicks Save
    Then the user should see "Missing required field: Last Name"
    Then the Last Name field should be highlighted as invalid


@Contacts @TC106
  Scenario: Create a contact with minimum required information
    Given the Create Contact page is open
    When the user enters a unique last name
    And the user leaves optional fields empty
    And the user retains the default assignee
    And the user clicks Save
    Then exactly one contact should be created
    Then the entered name and default assignee should be retained


@Contacts @TC107
  Scenario: Save all visible contact details
    Given the Create Contact page is open
    When the user enters a unique value in every visible contact creation field
    Then all values should appear in their corresponding fields


@Contacts @TC108
  Scenario: Change the assignee from the default to administrator
    Given the Create Contact page is open
    When the user changes Assigned To from the default assignee to administrator
    Then the user should be able to select administrator as the assignee


@Contacts @TC109
  Scenario: Require a valid email address to be marked as primary
    Given the Create Contact page is open
    And the user has entered a unique last name
    And the user has entered "primary@example.com" in the first email row
    When the Primary field is unselected
    Then the user should see the error message "One Valid Email Address should be marked as primary"


@Contacts @TC110
  Scenario: Save other address information
    Given the Create Contact page is open
    And the user has entered a unique last name
    When the user enters the following Other Address:
      | Field       | Value           |
      | Street      | 123 Main Street |
      | Postal Code | 02108           |
      | City        | Boston          |
      | State       | Massachusetts   |
      | Country     | United States   |
    And the user clicks Save
    And the user reopens the contact
    Then the alternate address should match the entered values


@Contacts @TC111
  Scenario: Create a new contact
    Given the Create Contact page is open
    And the user has entered all contact creation fields
    When the user clicks Save
    Then the user should be redirected to the Edit Contact page


