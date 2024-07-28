# 🎭 Playwright Terminal Test Runner By Joshua Briceno

## Installation

Playwright has its own test runner for end-to-end tests, install the dependencies first.

```Shell
# Run from your project's root directory
yarn add or npm i
```

### Running Tests

The test are validating you have a active Docker Installation on beforeAll hook, make sure you have the requirements in place.  

The easiest way to get started with jb-playwright-system-exce Test is to run the init command.

```Shell
# Run from your project's root directory to runn ant test tagged with @cmd
npx playwright test --grep=@cmd
# or use normal pw test command to run all
npx playwright test
```

