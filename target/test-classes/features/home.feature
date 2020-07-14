@web
Feature: As an user I want to select best itenary based on the fastest and cheapest travel

  Scenario Outline: Verify Search results page
    Given User on home page
    When User search with source "<source>" and destination "<destination>"
    And User verify title of the search page
    Then User select fastest and cheapest ticket
  Examples:
    |source| destination|
    |EDI   |DOH         |
    |EDI   |LHR         |

