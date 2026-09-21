Feature: Menu Dropdown Options
  As a user logged into the CRM application
  I want to view all options in the Menu dropdown
  So that I can navigate to any module in the CRM

  Scenario: Verify all menu dropdown options
    Given user is logged in to CRM application
    When user clicks on the Menu option in the menu bar
    Then dropdown should display below options
      | Home                |
      | Contacts            |
      | Opportunities       |
      | Leads               |
      | Quotes              |
      | Calendar            |
      | Documents           |
      | Emails              |
      | Campaigns           |
      | Calls               |
      | Meetings            |
      | Tasks               |
      | Notes               |
      | Invoices            |
      | Contracts           |
      | Cases               |
      | Targets             |
      | Targets - Lists     |
      | Projects            |
      | Projects - Templates|
      | Events              |
      | Locations           |
      | Products            |
      | Products - Categories|
      | PDF - Templates     |
      | Reports             |
      | Knowledge Base      |
      | KB - Categories     |
      | Email - Templates   |
      | Surveys             |
