# 🎭 Playwright Terminal Test Runner By Joshua Briceno

## Installation

Ensure you have installed:

1. NodeJs (LTS) follow the official instructions here https://nodejs.org/en/download/package-manager
2. Docker follow the instructions here https://docs.docker.com/get-docker/
3. Visual Studio Code. Download and install from https://code.visualstudio.com/download

Verify or ensure your pre-installations are loaded correctly. 
```
node -v & docker -v
```
The output needs to be something like this: 
```
[1] 71508X
v14.17.3
[1]  + 71508X done       node -v
Docker version 25.0.3, build 4debf41
```

Install project dependencies:
Now you can navigate to your project root folder in the terminal and install the dependencies needed.
```Shell
cd <path to your project folder>
# Run from your project's root directory
npm install
```
After installing the dependencies it will output something similar to this:
```
up to date, audited 7 packages in 553ms

found 0 vulnerabilities
```


Then 

### Running Tests

The test validates you have an active Docker Installation on beforeAll hook, make sure you have the requirements in place.  

The easiest way to start with jb-playwright-system-exce Test is to run the init command.

The first time if the Docker daemon is not active it will fail, but the system will open the Docker for you at that attempt, you will need to try again running the test command.  
```Shell
# Run from your project's root directory to run and test tagged with @cmd
npx playwright test --grep=@cmd
# or use normal pw test command to run all
npx playwright test
```
Output will be similar to this:
```
Running 12 tests using 4 workers

  ✓  1 [chromium] › docker.sample.spec.ts:46:9 › Docker Calculator › Run scenario subtract calculus method - Iteration: 1 (2.4s)
     2 [chromium] › docker.sample.spec.ts:30:9 › Docker Calculator › Run scenario divide calculus method - Iteration: 1
  ✓  2 [chromium] › docker.sample.spec.ts:30:9 › Docker Calculator › Run scenario divide calculus method - Iteration: 1 (2.5s)
  ✓  3 [chromium] › docker.sample.spec.ts:38:9 › Docker Calculator › Run scenario multiply calculus method - Iteration: 1 (1.9s)
  ✓  4 [chromium] › docker.sample.spec.ts:22:9 › Docker Calculator › Run scenario add calculus method - Iteration: 1 (2.5s)
What's Next?
  View a summary of image vulnerabilities and recommendations → docker scout quickview public.ecr.aws/l4q9w4c5/loanpro-calculator-cli:latest

What's Next?
  View a summary of image vulnerabilities and recommendations → docker scout quickview public.ecr.aws/l4q9w4c5/loanpro-calculator-cli:latest

What's Next?
  View a summary of image vulnerabilities and recommendations → docker scout quickview public.ecr.aws/l4q9w4c5/loanpro-calculator-cli:latest

What's Next?
  View a summary of image vulnerabilities and recommendations → docker scout quickview public.ecr.aws/l4q9w4c5/loanpro-calculator-cli:latest

     5 [chromium] › docker.sample.spec.ts:46:9 › Docker Calculator › Run scenario subtract calculus method - Iteration: 2
  ✓  6 [chromium] › docker.sample.spec.ts:38:9 › Docker Calculator › Run scenario multiply calculus method - Iteration: 2 (1.1s)
  ✓  5 [chromium] › docker.sample.spec.ts:46:9 › Docker Calculator › Run scenario subtract calculus method - Iteration: 2 (1.6s)
  ✓  7 [chromium] › docker.sample.spec.ts:22:9 › Docker Calculator › Run scenario add calculus method - Iteration: 2 (1.6s)

  ✓  8 [chromium] › docker.sample.spec.ts:30:9 › Docker Calculator › Run scenario divide calculus method - Iteration: 2 (1.6s)
  ✓  9 [chromium] › docker.sample.spec.ts:38:9 › Docker Calculator › Run scenario multiply calculus method - Iteration: 3 (1.0s)
  ✓  10 [chromium] › docker.sample.spec.ts:22:9 › Docker Calculator › Run scenario add calculus method - Iteration: 3 (1.1s)
  ✘  11 [chromium] › docker.sample.spec.ts:46:9 › Docker Calculator › Run scenario subtract calculus method - Iteration: 3 (1.3s)
  ✘  12 [chromium] › docker.sample.spec.ts:30:9 › Docker Calculator › Run scenario divide calculus method - Iteration: 3 (1.2s)


  1) [chromium] › docker.sample.spec.ts:30:9 › Docker Calculator › Run scenario divide calculus method - Iteration: 3 

    Error: expect(received).toBe(expected) // Object.is equality

    Expected: 0
    Received: 1

      31 |       tag: `@cmd @divide @divide${data.test}`,
      32 |     }, async ({ execute }) => {
    > 33 |       expect(await execute.dockerCalculate(data.paramOne, data.paramTwo, mathMethod.DIVIDE)).toBe(data.expected);
         |                                                                                              ^
      34 |     });
      35 |   })
      36 |

```

## Some of the test scenarios will fail on purpose. 
