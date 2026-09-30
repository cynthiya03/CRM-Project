
Feature: Testing contacts features in CRM application
  User will be able to navigate, create, view and import contacts in CRM application

@ContactsNavigation @TC51
  Scenario: Verify Contact tab is displayed
   Given User land on Homepage
    When the user hovers over the Contact tab
    Then the user should see Create Contact

@Contacts @TC52
  Scenario: Navigate to the Create Contact page
    Given the user hovers over the Contact tab
    When the user clicks Create Contact
    Then the user should be redirected to the Create Contact page


