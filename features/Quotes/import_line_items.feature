Feature: Testing Upload Import file page in SuiteCRM

@importlineitem 

Scenario:Download import file template
Given User is in the Import Line Items page
When user clicks the Download Import File link
Then the application should initiate a file download for the template file

Scenario:Successfully upload file and proceed with default import mode
Given User is in the Import Line Items page
When the user uploads a valid file via the file picker and the user verifies that Create new records only is selected by default the user clicks the Next  button
Then the application should proceed to next Step of the import

Scenario:Change import configuration mode to update existing data
Given User is in the Import Line Items page
When the user uploads a valid file via the file picker and the user selects the Create new records and update existing records option And the user clicks the Next button
Then the application should proceed to next step configured for updating records

Scenario:Prevent processing when no file is selected
Given User is in the Import Line Items page the file picker displays no file selected
When the user clicks the Next button
Then a validation message should be displayed alerting the user to select a file to upload

