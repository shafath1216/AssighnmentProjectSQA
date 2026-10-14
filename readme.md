
SQA Automation Assignment

This repository contains UI automation tests using Playwright and API tests using Postman and Newman.

Project Contents

UI Automation - Playwright tests written in JavaScript.
API Automation - Postman collection executed using Newman.
Test Scenarios - Locked-out user, standard user, performance glitch user, and API request validation.

How to Run

1. Clone the Repository

git clone https://github.com/shafath1216/AssighnmentProjectSQA.git
cd AssighnmentProjectSQA

2. Install Dependencies

npm install

3. Install Playwright Browsers

npx playwright install

UI Automation Tests

Run all tests:

npx playwright test

Run individual tests:

Q1 - Locked-out User

npx playwright test Q1locked_out_user.spec.js

Q2 - Standard User

npx playwright test Q2standard_user.spec.js

Q3 - Performance Glitch User

npx playwright test Q3performance_glitch_user.spec.js

To run a test with a visible browser window, add the --headed flag.

Example:

npx playwright test Q1locked_out_user.spec.js --headed

View the Playwright HTML report:

npx playwright show-report

API Automation Tests

The Postman collection is located at:

APIPostmanFolder/APIAssignmentQuestions.postman_collection

Run the API test collection:

npx newman run APIPostmanFolder/APIAssignmentQuestions.postman_collection

Generate an HTML API test report:

npx newman run APIPostmanFolder/APIAssignmentQuestions.postman_collection -r cli,htmlextra --reporter-htmlextra-export reports/APIAssignmentReport.html

Requirements

Node.js and npm
Playwright
Newman
Newman HTML Extra Reporter