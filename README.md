# 🎭 Playwright Terminal Test Runner By Joshua Briceno

## Installation

Ensure you have installed:

1. NodeJs (LTS)
2. Docker
3. Visual Studio Code. 

Playwright has its own test runner for end-to-end tests, install the dependencies first.

Ensure your pre-installations are loaded correctly. 
```
node -v & docker -v
```
The output need to be something like: 
```
[1] 71508X
v14.17.3
[1]  + 71508X done       node -v
Docker version 25.0.3, build 4debf41
```
Now you can just navigate to your project root folder in the terminal and install de dependencies needed.
```Shell
# Run from your project's root directory
npm install
```
Then 

### Running Tests

The test validates you have an active Docker Installation on beforeAll hook, make sure you have the requirements in place.  

The easiest way to get started with jb-playwright-system-exce Test is to run the init command.

First time if the Docker daemon is not active it will fail, but the system will be open the Docker for you, you will need to try again running the test command.  
```Shell
# Run from your project's root directory to run and test tagged with @cmd
npx playwright test --grep=@cmd
# or use normal pw test command to run all
npx playwright test
```
Some of the test scenarios will fail on purpose. 
