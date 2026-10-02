
Feature: Testing contacts features in CRM application
  User will be able to navigate, create, view and import contacts in CRM application

@ContactsNavigation @TC51
  Scenario: Verify Contact tab is displayed
   Given User land on Homepage
    When the user hovers over the Contact tab
    Then the user should see Create Contact

@ContactsNavigation @TC52
  Scenario: Navigate to the Create Contact page
    Given the user hovers over the Contact tab
    When the user clicks Create Contact
    Then the user should be redirected to the Create Contact page

@createContact @TC53
  Scenario: Display the contact creation form tabs
    Given the Create Contact page is open
    When the user inspects the form
    Then the user should see the Overview tab
    Then the user should see More Information
    Then the user should see Other tabs

@createContact @TC54
  Scenario: Verify mandatory fields display an asterisk
    Given the Create Contact page is open
    When the user views the Last Name field label
    Then the user should see an asterisk "*" beside the Name label


@createContact @TC55
  Scenario: Prevent saving without a last name
    Given the Create Contact page is open
    When the Last Name field is empty
    And user click save
    Then the user should see "Missing required field: Last Name"
    Then the Last Name field should be highlighted as invalid

    
@createContact @TC56
  Scenario: Create a contact with minimum required information
    Given the Create Contact page is open
    When the user enters a first name
    And the user enters a unique last name
    And user click save
    Then exactly one contact should be created

  
@createContact @TC57
  Scenario: verify user able to select honorific
    Given the Create Contact page is open
    When the user select "Mrs." from dropdown
   Then the selected honorific should be "Mrs."


@createContact @TC58
  Scenario: user able to search and select account name
    Given the Create Contact page is open
    When the user search the account name start with "Ba"
    Then user able to select "Bay Funding Co" from dropdown 

@createContact @contactExcel @TC59
Scenario Outline: Fill and verify contact fields
  Given the Create Contact page is open
  When the user fills contact details from Excel for "<lastName>"
  Then all contact fields should match the Excel data

  Examples:
    | lastName   |
    | Ninja_4827 |
    | Ninja_6392 |
    | Ninja_7154 |
    | Ninja_8263 |
    | Ninja_9571 |

  


    






