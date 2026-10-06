@CreateTask
Feature: Testing Create Task page in SuiteCRM

@Newtask @TC501
Scenario:Successfully create a new task with minimal required data
Given the user is logged into the applicationAnd the user navigates to the Create Task page
When the user enters necessary details and clicks on Save button
Then the task should be successfully created

@Savetask @TC502
Scenario:fill out all optional details and save a task
Given the user is logged into the applicationAnd the user navigates to the Ceate Task page
When the user enter necessary details, and the user links accounts record name using the relationship selectionfield and links contact record name using contact selection and clicks Save button
Then the task record should be saved

@Validate mandatory fields @TC503
Scenario:Validate mandatory fields prevent form submission
Given the user is logged into the applicationAnd the user navigates to the Ceate Task page
When the user leaves the Subject field completely blank And the user leaves the Priority dropdown unselected And the user clicks the Save button
Then the error message should be displayed to enter the mandatory fields

@Canceltask @TC504
Scenario:Cancel out of the task creation workflow
Given the user is logged into the applicationAnd the user navigates to the Ceate Task page
When the user enters text into the Subject field And the user clicks the Cancel button
Then No data should be saved
