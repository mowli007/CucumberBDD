$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("home.feature");
formatter.feature({
  "line": 2,
  "name": "As an user I want to select best itenary based on the fastest and cheapest travel",
  "description": "",
  "id": "as-an-user-i-want-to-select-best-itenary-based-on-the-fastest-and-cheapest-travel",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify Search results page",
  "description": "",
  "id": "as-an-user-i-want-to-select-best-itenary-based-on-the-fastest-and-cheapest-travel;verify-search-results-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User search with source \"\u003csource\u003e\" and destination \"\u003cdestination\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User verify title of the search page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User select fastest and cheapest ticket",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "as-an-user-i-want-to-select-best-itenary-based-on-the-fastest-and-cheapest-travel;verify-search-results-page;",
  "rows": [
    {
      "cells": [
        "source",
        "destination"
      ],
      "line": 10,
      "id": "as-an-user-i-want-to-select-best-itenary-based-on-the-fastest-and-cheapest-travel;verify-search-results-page;;1"
    },
    {
      "cells": [
        "EDI",
        "DOH"
      ],
      "line": 11,
      "id": "as-an-user-i-want-to-select-best-itenary-based-on-the-fastest-and-cheapest-travel;verify-search-results-page;;2"
    },
    {
      "cells": [
        "EDI",
        "LHR"
      ],
      "line": 12,
      "id": "as-an-user-i-want-to-select-best-itenary-based-on-the-fastest-and-cheapest-travel;verify-search-results-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3337351922,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify Search results page",
  "description": "",
  "id": "as-an-user-i-want-to-select-best-itenary-based-on-the-fastest-and-cheapest-travel;verify-search-results-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User search with source \"EDI\" and destination \"DOH\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User verify title of the search page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User select fastest and cheapest ticket",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeStep.user_on_home_page()"
});
formatter.result({
  "duration": 144734037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EDI",
      "offset": 25
    },
    {
      "val": "DOH",
      "offset": 47
    }
  ],
  "location": "HomeStep.search_flights(String,String)"
});
formatter.result({
  "duration": 27677653712,
  "status": "passed"
});
formatter.match({
  "location": "HomeStep.verify_title_of_the_page()"
});
formatter.result({
  "duration": 20826183362,
  "status": "passed"
});
formatter.match({
  "location": "HomeStep.user_select_faster_cheapest_flight_ticket()"
});
formatter.result({
  "duration": 2828427396,
  "status": "passed"
});
formatter.before({
  "duration": 1673876150,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify Search results page",
  "description": "",
  "id": "as-an-user-i-want-to-select-best-itenary-based-on-the-fastest-and-cheapest-travel;verify-search-results-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User search with source \"EDI\" and destination \"LHR\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User verify title of the search page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User select fastest and cheapest ticket",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeStep.user_on_home_page()"
});
formatter.result({
  "duration": 938916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EDI",
      "offset": 25
    },
    {
      "val": "LHR",
      "offset": 47
    }
  ],
  "location": "HomeStep.search_flights(String,String)"
});
formatter.result({
  "duration": 12787526052,
  "status": "passed"
});
formatter.match({
  "location": "HomeStep.verify_title_of_the_page()"
});
formatter.result({
  "duration": 20407799144,
  "status": "passed"
});
formatter.match({
  "location": "HomeStep.user_select_faster_cheapest_flight_ticket()"
});
formatter.result({
  "duration": 5234313559,
  "status": "passed"
});
});