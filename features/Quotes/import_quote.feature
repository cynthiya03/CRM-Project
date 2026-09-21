Feature: Testing Import Quote page in SuiteCRM

@importquote 
Scenario:Successfully download the import file template
Given User is in the Import page
When the user clicks the Download Import File Template link in the import quotes page
Then the application should download a template file to the user's local machine

Scenario:Successfully upload a valid file and select record option
Given User is in the Import page
When the user uploads a valid file using the Choose File picker and the user selects the Create new records only radio option and the user clicks the Next button
Then the user should be advanced to next step of the import process

Scenario:Choose to update existing records during import
Given User is in the Import page
When the user uploads a valid file using the Choose File picker ,the user selects the Create new records and update existing records radio option And the user clicks the Next  button
Then the user should be advanced to next step of the import process

Scenario:Attempt to proceed without selecting a file
Given User is in the Import page
When no file has been selected in the Select file picker, the user clicks the Next button
Then the system should display a validation error message indicating a file is requiredAnd the user should remain on Step one

