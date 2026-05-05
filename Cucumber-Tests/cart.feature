# Cucumber BDD Test Suite
# Author: Brian McCarthy

Feature: Shopping Cart Functionality
  Scenario: Adding a plant to the cart
    Given I am on the product listing page
    When I click "Add to Cart" on a plant
    Then the cart icon count should increase by 1
    And the button should be disabled

  # ... 14 more scenarios
