Feature: testing lead feature in CRM application
user will be able to create,view and import leads in CRM application

Background: 
    Given User must have logged into the crm application

@leads @TC101
 Scenario: Verify that user should able to see Leads page
  Given User is on the CRM home page 
  When User clicks the Leads section
  Then User should see the leads landing page

@createlead @TC102
 Scenario: Verify that leads section has dropdown option to create lead 
  Given User is on the leads page 
  When User clicks create lead button from dropdown
  Then User should see the new leads form where the user can enter details

@createlead @TC103
 Scenario: Verify that user can able to see all the columns on the create lead page
  Given User is on the leads page
  When User clicks create lead button from dropdown
  Then User should see overview, more information and other information options 

@createlead @TC104
 Scenario: Verify that create lead page has all the neccessary information
  Given User is on the Create leads page
  When User clicks overview
  Then User should see first name,last name,job title,department,account name,primary address and email address fields
  Then User should see email opt out option,description box,whose assigned,mobile and office phone fields,website field
  
@createlead @TC105
 Scenario: Verify that new leads can be created
  Given User is on the Create leads page
  When User enters valid details on the form
  Then New lead should be created successfully

@createlead @TC106
 Scenario: Verify whether it throws an error msg if user missed to enter any required field on create lead page
  Given User is on the Create leads page
  When user leaves any manadatory fields blank and clicks save button
  Then user should see the error msg " missing required field"


@createlead @TC107
 Scenario: Verify whether user can see all the information on create lead by Vcard page
  Given User is on the leads page
  When user lands on Create Lead by Vcard
  Then user should see import V card

@createlead @TC108
 Scenario: Verify whether user can able to choose file for importing
  Given User is on the create lead from Vcard page 
  When user clicks choose file option 
  Then File can be imported 

@viewleads @TC109
 Scenario: verify that page displays view leads from leads drop down
  Given user is on the leads page
  When user selects view leads from dropdown
  Then user should land on viewleads page

@viewleads @TC110
 Scenario: Verify that user can able to see all the columns on the view leads page
  Given user is on the view leads page 
  When user sees information on the view leads page
  Then user should see name,status,account,phone,email and user details 

@viewleads @TC111
 Scenario: verify that user can able to click name on view lead page and see information
  Given user is on the view leads page 
  When user clicks on any name on view leads page 
  Then user should see the information for that particular name 

@importleads @TC112
 Scenario: Verify whether user can able to select import leads option from drop down
  Given user is on the leads page 
  When user selects import leads from dropdown
  Then user should redirected to that particular page 

@importleads @TC113
 Scenario: Verify whether user can see all the information in import leads page
  Given user is on the leads page 
  When user lands on import leads page
  Then user should see steps for import file 
