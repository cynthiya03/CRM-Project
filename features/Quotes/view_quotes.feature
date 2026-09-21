Feature: Testing Create Quote page in SuiteCRM


@viewquote @TS002
Scenario:Navigate to a specific quote details page
Given User is in the View Quotes page
When the user clicks on the quote title link 
Then the system should display the detail view page for the quote selected

Scenario:Use inline row shortcuts-Create Call
Given User is in the View Quotes page
When the user clicks the phone icon shortcut on the quote title row
Then Create Call page should be opened

Scenario:Use inline row shortcuts-Create Meetings
Given User is in the View Quotes page
When the user clicks the calendar icon shortcut on the quote title row
Then Create Meetings page should be opened

Scenario:Use inline row shortcuts-Create Task
Given User is in the View Quotes page
When the user clicks the create task icon shortcut on the quote title row
Then Create Task should be opened

Scenario:Use inline row shortcuts-New Email
Given User is in the View Quotes page
When the user clicks the compose email icon shortcut on the quote title row
Then New Email window should be opened

Scenario:Successfully download the import file template
Given User is in the Import page
When the user clicks the Download Import File Template link
Then the application should download a template file to the user's local machine

Scenario:Successfully upload a valid file and select record option
Given User is in the Import page
When the user uploads a valid file using the Choose File picker and the user selects the Create new records only radio option and the user clicks the Next >button
Then the user should be advanced to Step 2 of the import process

Scenario:Choose to update existing records during import
Given User is in the Import page
When the user uploads a valid file using the Choose File picker ,the user selects the Create new records and update existing records radio option And the user clicks the Next > button
Then the user should be advanced to Step 2 of the import process

Scenario:Attempt to proceed without selecting a file
Given User is in the Import page
When no file has been selected in the Select file picker, the user clicks the "Next >" button
Then the system should display a validation error message indicating a file is requiredAnd the user should remain on Step 1

