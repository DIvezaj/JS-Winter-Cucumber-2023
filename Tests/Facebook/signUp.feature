@regression @signUp
Feature: Sign Up

  Background: 
    And I click on Create New Account button

  @smoke @signup-1 @test @testAllure
  Scenario Outline: Verify user gets error when does not mention gender
    When I enter "<fName>" as Firstname
    And I enter "<lName>" as Lastname
    And I enter "<mobileNumber>" as phone number
    And I enter "<newPwd>" as New password
    And I select "<dob>" as birthdate
    And I click "Sign Up" button
    Then I verify gender error is displayed

    Examples: 
      | fName | lName | mobileNumber | newPwd       | dob         |
      | JOhn  | Kial  |   8767564532 | abcd@9012#   | Jul 20 2018 |
      | Henry | Reel  |   9798979897 | passwo0d@123 | Jul 20 2018 |

  @signUpBirthDateError @signup-2
  Scenario: Verify user gets error when does not mention birthdate
    When I enter "Henry" as Firstname
    And I enter "Reel" as Lastname
    And I enter 9798979897 as phone number
    And I enter "passwo0d@123" as New password
    And I select "Female" as gender
    And I click "Sign Up" button
    Then I verify birthdate error is displayed

  @signUpSanity @signup-3 @test
  Scenario: Verify default state of signup form
    Then I verify firstname field is empty
    And I verify lastname field is empty
    And I verify phone number field is empty
    And I verify new password field is empty
    And I verify current date is selected
    And I verify no gender is selected


  Scenario Outline: Verify user can make payment using <card> card
    Given I am on amazon homepage
    And I add items in the cart
    When I click on checkout
    And I select payment option as <card> card
    And I select shipping address
    And I click on place order button
    Then I verify order is placed successfully

    Examples: 
      | card   |
      | credit |
      | debit  |