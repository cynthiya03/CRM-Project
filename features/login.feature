Feature: Testing user able to Successful CRM login

  @login_success
  Scenario: Log in with valid credentials
    Given User opens the CRM login page
    When User logs in with valid credentials
    Then User should be redirected to the CRM home page


  @login_invalid_password
  Scenario: Reject login with an incorrect password
    Given User opens the CRM login page
    When User logs in with a valid username and an incorrect password
    Then User should see an invalid credentials message
    And User should remain on the CRM login page

  @login_empty_fields
  Scenario: Require username and password before login
    Given User opens the CRM login page
    When User submits the login form without entering credentials
    Then User should see validation for the required username and password
    And User should remain on the CRM login page