import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './',
  testMatch: '**/*.spec.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['list']],
  use: {
    baseURL: process.env.TMS_BASE_URL || 'https://tms-qa.fewapos.com',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'edge',
      use: { ...devices['Desktop Edge'] },
    },
  ],
});