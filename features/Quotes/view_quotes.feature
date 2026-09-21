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


