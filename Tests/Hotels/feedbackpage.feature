@feedBackHotels
Feature: Feedback Form Flow

@TC-24
Scenario: Verify display of error message upon submission of empty feedback form
Given I am on the hotels.com homepage
When I click on the Sign In Link
Then click on "Feedback"
And I submit the form without filling any required fields
Then I should see an error message "Please fill in the required information highlighted below."
And a red-dotted line should appear around the star-section.

@TC-25
Scenario: Verify successful submission of feedback after filling out the form
Given I am on the hotels.com homepage
When I click on the Sign In Link and then click on "Feedback"
And I fill out the feedback form by selecting a star-rating, entering comments, and answering all questions
And I click on the Submit button
Then I should see a confirmation message "THANK YOU FOR YOUR FEEDBACK."