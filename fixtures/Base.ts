
import { test as base } from '@playwright/test';
import { Execute } from '../modules/Execute';

type SessionFixture = {
    execute: Execute;
};

export const test = base.extend<SessionFixture>({  
    execute: async ({ page }, use) => {
      await use(new Execute());
    },
  });
  export { expect } from '@playwright/test';