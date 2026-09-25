Feature: Testing Create Meeting page in SuiteCRM

@CreateMeeting 

Scenario:Successfully fill out and save a meeting with a reminder
Given The user navigates to the Create Meetings page
When The user enters all the necesssary fields
Then The meeting should be successfully created

Scenario:Validate mandatory fields prevent form submission
Given The user navigates to the Create Meetings page
When the user leaves the Subject, Start Date, and End Date fields empty And the user clicks the Save button
Then The system should display a validation error message for mandatory fields and the meeting should not be created

Scenario:Manage meeting reminders
Given The form has a default reminder action Popup set to thirty minutes prior
When the user clicks the X icon next to the Email invitees reminder
Then Email invitees reminder block should be removed

Scenario:Manage meeting reminders
Given The form has a default reminder action Popup set to thirty minutes prior
When the user clicks the  Add reminder button
Then a new reminder configurations row should appear on the page

Scenario:Manage meeting reminders
Given The form has a default reminder action Popup set to thirty minutes prior
When the user clicks the - Remove reminder button
Then the added reminder configurations row should be removed

Scenario:Search and add an existing invitee
Given The user navigates to the Meetings Create page and checks the Other section
When the user fills all details and click on Search
Then matching contact or lead results should be displayed in the search grid

Scenario:Create and link a brand new invitee
Given The user navigates to the Create Meetings page
When The user scrolls down to the Create an invitee section and the user clicks the As Contact button
Then Fields to create a new contact  First Name, Last Name and Email should appear along with Create & Add button and Cancel button

Scenario:Cancel meeting creation process
Given he user navigates to the Create Meetings page
When The user enters data into the Subject field And the user clicks the Cancel button
Then the system should discard all unsaved changes
