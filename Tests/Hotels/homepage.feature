@homepageSanity
Feature: Hotels.com Sign Up / Guest flow / Terms and Conditions + Privacy Statement

@TC-18
Scenario: Update number of guests on Home page
Given I am on the hotels.com homepage
When I click on the Travelers button
And I select 6 adults
And I select 3 children
And I select the first childs age as 4
And I select the second childs age as Under 1
And I select the third childs age as 7
And I click Done
Then I should see the total number of travelers matches the sum of adults and children selected

@TC-21
Scenario: See verification message for invalid sign in credentials
Given I am on the hotels.com homepage
When I click on the Sign In link
And I click on the Sign In button
And I enter an invalid email address
And I click on the Continue button
Then I should see an invalid error message displayed

@TC-22
Scenario: See error message for invalid data in SignUp form
Given I am on the hotels.com homepage
When I click on the Sign In link
And I click on the Sign Up button
And I enter an invalid email address
And I click the Continue button
Then I should should see an invalid email error message displayed
Then I should see the Continue button displayed but not enabled


@TC-28
Scenario: Verify Child-age dropdowns match number of Children selected
Given I am on the hotels.com homepage
When I click on the Travelers button
And I select 2 children
Then I should see 2 children-age dropdowns displayed
And I should see the Plus Button is enabled
And I should see the Minus Button is enabled
When I select 6 children
Then I should see 6 children-age dropdowns displayed
And I should see the Plus Button disabled
And I should see the Minus Button enabled
When I select 5 children
Then I should see 5 children-age dropdowns displayed
And I should see the Plus Button enabled
And I should see theMinus Button enabled
When I select 0 children
Then I should not see the children-age dropdown displayed
And I should see the Plus Button enabled
And I should see the Minus Button disabled

@TC-31
Scenario: Change language successfully
Given I am on the hotels.com homepage
When I click on the English language button
And I select Español in the Language dropdown
And I click the Save button
Then I should see the Español language displayed
When I click on the Español language
Then I select English in the Language dropdown
And I click the Guardar button
Then I should see the English language displayed

@TC-20
Scenario: Open Terms And Conditions and Privacy Statements in new tabs
Given I am on the hotels.com homepage
When I click on the Sign In link
And I click on the Sign Up button
And I click on the Terms and Conditions link
Then I should see the "Terms & Conditions" page open in a new tab
Then I should see the the revised date in the correct format
When I click on the Privacy link
Then I should see the "Privacy" page open in a new tab
Then I should see the updated date in the correct format in privacy tab