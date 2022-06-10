## Automated E2E Tests

## Setup
1. Clone this `e2e-tests` repository,
2. Open terminal or command prompt and cd into `e2e-tests`,
3. Install the dependancies by running the command `npm install`.

## How to run
|ID|Description| Command |
| :---: | :--- | :--- |
|1|Run all tests in non-interactive mode|`npm run cy:run` or `npx cypress run`|
|2|Generate Allure Report|`npm run allure:report`|
|3|Run tests and Generate Allure Report|`npm test`|
|4|Run all tests in interactive mode|`npx cypress open`|

## Covered Test Conditions
|ID|Description|
| :---: | :--- | :--- |
|1|Navigate to Climate Mind app|
|2|Open and accept cookies|
