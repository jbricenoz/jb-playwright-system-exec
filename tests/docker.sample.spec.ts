import { test, expect } from '../fixtures/Base';
import { mathMethod } from '../modules/Command';
import { Execute } from '../modules/Execute';
import { scenario } from '../fixtures/Scenarios';



test.describe('Docker Calculator', {
  tag: '@scenarios'
}, () => {

  let terminal = new Execute();

  test.beforeAll(async () => {
    expect(await terminal.isDockerInstallationPresent()).toContain('Docker');
    await terminal.dockerStart();
    expect(await terminal.isDockerDaemonActive()).not.toContain('Cannot connect to the Docker daemon at');
    expect(await terminal.isDockerImagePulled()).toBeTruthy();
  });

  scenario.add.forEach((data) => {
    test(`Run scenario add calculus method - Iteration: ${data.test}`, {
      tag: `@cmd @add @add${data.test}`,
    }, async ({ execute }) => {
      expect(await execute.dockerCalculate(data.paramOne, data.paramTwo, mathMethod.ADD)).toBe(data.expected);
    });
  })

  scenario.divide.forEach((data) => {
    test(`Run scenario divide calculus method - Iteration: ${data.test}`, {
      tag: `@cmd @divide @divide${data.test}`,
    }, async ({ execute }) => {
      expect(await execute.dockerCalculate(data.paramOne, data.paramTwo, mathMethod.ADD)).toBe(data.expected);
    });
  })

  scenario.multiply.forEach((data) => {
    test(`Run scenario multiply calculus method - Iteration: ${data.test}`, {
      tag: `@cmd @multiply @multiply${data.test}`,
    }, async ({ execute }) => {
      expect(await execute.dockerCalculate(data.paramOne, data.paramTwo, mathMethod.ADD)).toBe(data.expected);
    });
  })

  scenario.subtract.forEach((data) => {
    test(`Run scenario subtract calculus method - Iteration: ${data.test}`, {
      tag: `@cmd @subtract @subtract${data.test}`,
    }, async ({ execute }) => {
      expect(await execute.dockerCalculate(data.paramOne, data.paramTwo, mathMethod.ADD)).toBe(data.expected);
    });
  })

});