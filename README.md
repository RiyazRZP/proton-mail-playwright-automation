# Assessment Documents

Check the `documents/` folder for:

- **Test Strategy and Test Cases**
- **Test Execution Reports**
- **Defect Report**
- **Video Walkthrough**

Refer to the `documents/` folder for detailed information and supporting evidence.


# Proton Mail Playwright Automation

## 1. Project Overview

This project automates selected user flows in the Proton Mail web application using **Playwright** and **TypeScript**.

The tests cover login, sending emails, recipient validation, CC/BCC, drafts, inbox actions, search, attachments, and Undo Send.

The goal is to check that these features work as expected and to generate test execution reports.

## 2. Technology Stack

- **Playwright Test** — runs browser automation tests and provides assertions.
- **TypeScript** — language used to write the tests and page classes.
- **Chromium** — browser configured for test execution.
- **Allure** — creates a separate test report from the test results.
- **GitHub Actions** — workflow configuration is stored under `.github/workflows/`.

## 3. Project Structure

```text
Assessment_Mohammed_Riyaz_Pasha/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── POM_classes/
│   ├── ComposeEmailPage.ts
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   └── SearchEmailPage.ts
├── testData/
│   ├── AsyncBehaviourTestData.ts
│   ├── AttachmentTestData.ts
│   ├── AttachmentFile.pdf
│   ├── ComposeEmailTestData.ts
│   ├── DraftTestData.ts
│   ├── InboxTestData.ts
│   ├── LoginPageTestData.ts
│   └── SearchEmailTestData.ts
├── tests/
│   ├── AsyncBehaviourTestCase.spec.ts
│   ├── AttachmentTestCase.spec.ts
│   ├── ComposeEmailTestCases.spec.ts
│   ├── DraftsTestCases.spec.ts
│   ├── InboxTestCases.spec.ts
│   ├── Login.setup.ts
│   ├── Login2.setup.ts
│   ├── LoginPageTestCases.spec.ts
│   └── SearchTestCases.spec.ts
├── utils/
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── tsconfig.json
```

> Generated folders such as `playwright-report/`, `allure-results/`, `allure-report/`, `test-results/`, and `node_modules/` may appear after installing dependencies or running tests. They are generated output, not source code.

## 4. What Each Folder and File Does

### `tests/` — test scenarios

This folder contains the Playwright test files. Each `.spec.ts` or test case file describes actions a user performs and checks the expected result.

| File | Purpose |
|---|---|
| `LoginPageTestCases.spec.ts` | Checks login with valid credentials, invalid credentials, and logout/session behavior. |
| `ComposeEmailTestCases.spec.ts` | Checks successful sending, missing recipient validation, invalid recipient validation, and sending with CC/BCC. |
| `DraftsTestCases.spec.ts` | Checks automatic draft saving and reopening, editing, and sending a saved draft. |
| `InboxTestCases.spec.ts` | Checks opening an email and its read state, unread state, and archiving an email. |
| `SearchTestCases.spec.ts` | Checks keyword search and search using multiple conditions, such as sender and date range. |
| `AttachmentTestCase.spec.ts` | Checks attaching a file, sending the email, and verifying the attachment. |
| `AsyncBehaviourTestCase.spec.ts` | Checks the Undo Send behavior within the available undo period. |
| `Login.setup.ts` | Performs login setup and saves an authenticated browser state for tests that use it. |
| `Login2.setup.ts` | Provides a second login-state setup for the other test account. |

### `POM_classes/` — page objects

This folder uses the **Page Object Model (POM)** approach. A page class keeps locators and actions for a page or feature in one place. Test files can call these methods instead of repeating the same UI interactions.

| File | Purpose |
|---|---|
| `LoginPage.ts` | Holds login-page locators and login-related actions. |
| `HomePage.ts` | Holds common home/mailbox page locators and actions. |
| `ComposeEmailPage.ts` | Holds compose-email locators and actions, such as filling message details and sending an email. |
| `SearchEmailPage.ts` | Holds locators and actions used for email searching. |

### `testData/` — test input data

This folder keeps test values separate from the test steps. It contains data for login, composing emails, drafts, inbox actions, search, attachments, and Undo Send. `AttachmentFile.pdf` is a sample file used by the attachment test.

Keeping test data separate makes it easier to update input values without changing the main test logic.

### `utils/` — shared helpers

This folder is available for reusable helper functions shared by tests. Add a description here when helper files are present; avoid documenting helpers that are not implemented.

### `playwright.config.ts` — Playwright configuration

This is the central configuration file for the test run. In this project it:

- Sets `tests/` as the test directory.
- Configures Chromium as the browser.
- Sets the assertion timeout to 30 seconds.
- Runs with two workers and one retry.
- Captures screenshots on failure.
- Retains video and trace information for failed tests.
- Configures the list reporter, Playwright HTML reporter, and Allure reporter.
- Defines test projects and their setup/dependency arrangements.

### `package.json` and `package-lock.json`

`package.json` lists the project dependencies and npm scripts. `package-lock.json` records the resolved dependency versions so installs are more consistent.

### `tsconfig.json`

Contains TypeScript compiler settings.

### `.github/workflows/playwright.yml`

Contains the GitHub Actions workflow configuration for running automation in GitHub Actions. The workflow should be checked to confirm its triggers and required secrets before relying on it.

## 5. Prerequisites

Install the following before running the project:

- Node.js (version 20 or newer, as required by the installed Playwright version)
- npm
- Git, if cloning the repository

## 6. Installation

After cloning the repository, open a terminal in the project root and run:

```bash
npm ci
npx playwright install chromium
```

`npm ci` installs dependencies from `package-lock.json`. The second command installs the Chromium browser used by the configuration.

## 7. Authentication Setup

The project contains `Login.setup.ts` and `Login2.setup.ts`, which are intended to sign in and save browser authentication state for reuse.

Authentication state files can contain session cookies or tokens. **Do not commit `loginState.json`, `loginState2.json`, passwords, cookies, or other secrets to GitHub.** Generate the state locally when needed, and use environment variables or repository secrets for credentials. If an authentication state file was already pushed to a remote repository, remove it from tracking and invalidate the related session.

Before submitting, make sure the `.gitignore` includes at least:

```gitignore
node_modules/
test-results/
playwright-report/
allure-results/
allure-report/
loginState.json
loginState2.json
.env
```

If your setup creates authentication files in another location, ignore that path too.

## 8. Running the Tests

Run commands from the project root.

### Run the full test suite

```bash
npm test
```

In the current `package.json`, this runs the Allure cleanup script and then Playwright tests. The `posttest` script then generates an Allure report.

### Run a single test file

For example:

```bash
npx playwright test tests/LoginPageTestCases.spec.ts
```

Replace the file path with another test file to run a different set of scenarios.

### List tests without executing them

```bash
npx playwright test --list
```

## 9. Test Reports

The Playwright configuration is set up to produce both Playwright HTML output and Allure results.

### Playwright HTML report

After a test run, open the HTML report with:

```bash
npx playwright show-report
```

The report is generated in `playwright-report/`. It provides a browser-viewable summary of the execution, including passed and failed tests and available failure details.

### Allure report

The test run writes raw Allure results to `allure-results/`. Generate the HTML report with:

```bash
npm run report
```

This generates `allure-report/`. To view it locally, run:

```bash
npx allure open allure-report
```

The HTML report folders are generated artifacts. If reports are required for assessment submission, share the report output as a separate ZIP or follow the assessor's requested format. Do not include `node_modules/` in that ZIP.

## 10. Current Known Defect

During manual testing, a defect was observed in the draft-deletion flow: after a draft is permanently deleted, the compose email window remains open until the page is reloaded. A page reload has been used as a workaround in the automation. Refer to the separate defect report and screenshots for the reproduction steps and evidence.

## 11. Notes for Reviewers

- Test scenarios are grouped by feature, while reusable page interactions are kept in the `POM_classes/` folder.
- Test input values are kept in `testData/`.
- Playwright HTML and Allure are configured as separate reporting outputs.
- The test suite interacts with the live Proton Mail web application, so valid test-account access and the required authentication setup are needed to execute it.


## 12. Assessment Questions and Answers

1. Which tests did you choose not to automate, and why?
I did not automate every scenario. I focused on important features first. Filters are not covered in my current suite, so I would add them later.

2. Which 5 tests for every pull request? Which nightly?
Pull request: Login, send email, verify sent email, search email, and attach a file.
Nightly: Run the full suite, including drafts, inbox, and other implemented scenarios.
Trade-off: Pull-request tests give quick feedback; nightly tests provide wider coverage.

3. How would you diagnose a test that passes locally but fails in CI?
I would check error logs, screenshots, traces, timing, test data, and environment differences to find the root cause.

4. How would you reduce flakiness when the UI changes frequently?
I would use reliable Playwright locators, page objects, proper waits, and reusable methods.

5. How would you scale from 20 tests to 200+?
I would organize tests by feature, reuse page objects and fixtures, separate test data, and run independent tests in parallel.


