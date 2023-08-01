Feature: As a user when I forget a password I can send my data to reset it

@forgotPassword
  Scenario: Page content is accurate
    Given I am on the forgot password page
    When I see the page
    Then I see title "Forgot password?" and description "Enter your details below to request an Envato account password reset."

@forgotPassword
  Scenario: User name and email inputs are required
    Given I am on the forgot password page
    When I click "submit" button
    Then I see error messages for username "Username is required", email "Email is required"

@forgotPassword
  Scenario: Invalid email format is validated
    Given I am on the forgot password page
    When I enter invalid email into email input
    When I click "submit" button
    Then I see error message for email input "Email is invalid"

@forgotPassword
  Scenario: Invalid email error message disappears after format is changed to valid
    Given I am on the forgot password page
    When I enter invalid email into email input
    When I click "submit" button
    When I enter valid email into email input
    Then Error message for email input disappears

@forgotPassword
  Scenario: Error messages disappear after page refresh
    Given I am on the forgot password page
    When I click "submit" button
    When I refresh the page
    Then Error messages are gone
