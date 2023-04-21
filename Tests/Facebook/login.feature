@regression @login
Feature: Login

    @emptyLogin @test @testAllure
    Scenario: Verify empty login flow
        When I click login button
        Then I verify login error is displayed

    @loginFieldStatus @test @testAllure
    Scenario: Verify login fields are enabled
        Then I verify login username field is enabled
        And I verify login password field is enabled
        And I verify login button is enabled

    @loginInvalid @loginSanity @test
    Scenario Outline: Verify user gets error for invalid login credentials
        When I enter <username> as login username
        And I enter <password> as login password
        And I click login button
        Then I verify login error is displayed

        Examples: 
        | username                     | password   |
        | !@#$                         | abcd@1234  |
        | deepak2@technosoftacademy.io | abcd@12342 |
        | deepak3@technosoftacademy.io | abcd@12343 |
        | deepak4@technosoftacademy.io | abcd@12344 |
        | deepak5@technosoftacademy.io | abcd@12345 |
        | deepak6@technosoftacademy.io | abcd@12346 |

    @smoke @loginSanity
    Scenario: Verify user logins with valid credentials
        When I enter user@fb.com as login username
            And I enter passw0rd as login password
            And I click login button
        Then I verify logged in is successful