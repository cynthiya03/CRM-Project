Feature: Testing Create Call page in SuiteCRM

@CreateCall

Scenario:Successfully fill out all fields and save a call record
Given The user is logged into the application And the user navigates to the Create Calls page
When the user fills in all necessary details
Then call record should be successfully created

Scenario:Add and remove configuration rows for reminders
Given the reminders section displays default reminder actions
When the user clicks the Add reminder button
Then a new row for configuring a reminder should be appended to the list

Scenario:Add and remove configuration rows for reminders
Given the reminders section displays default reminder actions
When the user clicks the Remove reminder button
Then the last added reminder configuration row should be removed from the view

Scenario:Cancel call creation process
Given The user is logged into the application And the user navigates to the Create Calls page
When the user enters data into the Subject fiel dAnd the user clicks the Cancel button
Then the system should discard all unsaved entries And the user should be redirected back to the Calls dashboard view


