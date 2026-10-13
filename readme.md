# SQA Automation Assignment

This repository contains UI automation tests using Playwright and API automation tests using Postman/Newman.

## Project Contents

- **UI Automation:** Playwright tests written in JavaScript.
- **API Automation:** Postman collection executed using Newman.
- **Test Scenarios:** Locked-out user, standard user, performance glitch user, and API request validation.

## How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/shafath1216/AssighnmentProjectSQA.git
cd AssighnmentProjectSQA
```

### 2. Install Dependencies

Install all project dependencies:

```bash
npm install
```

### 3. Install Playwright Browsers

Install the browsers required to run the UI automation tests:

```bash
npx playwright install
```

## UI Automation Tests

### Run All UI Tests

```bash
npx playwright test
```

### Run Individual Tests

**Q1 – Locked-Out User**

```bash
npx playwright test Q1locked_out_user.spec.js
```

**Q2 – Standard User**

```bash
npx playwright test Q2standard_user.spec.js
```

**Q3 – Performance Glitch User**

```bash
npx playwright test Q3performance_glitch_user.spec.js
```

### Run Tests in Headed Mode

To run a test with a visible browser window, add the `--headed` flag.

Example:

```bash
npx playwright test Q1locked_out_user.spec.js --headed
```

The same flag can be used with the other test files.

### View the Playwright HTML Report

After running the tests, view the HTML report with:

```bash
npx playwright show-report
```

## API Automation Tests

The API test collection is located at:

`APIPostmanFolder/APIAssignmentQuestions.postman_collection`

### Run the API Test Collection

```bash
npx newman run APIPostmanFolder/APIAssignmentQuestions.postman_collection
```

### Generate an HTML API Test Report

```bash
npx newman run APIPostmanFolder/APIAssignmentQuestions.postman_collection -r cli,htmlextra --reporter-htmlextra-export reports/APIAssignmentReport.html
```



## Requirements

- Node.js and npm
- Playwright
- Newman
- Newman HTML Extra Reporter

