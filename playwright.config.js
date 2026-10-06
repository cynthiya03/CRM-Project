import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

dotenv.config({
  path: fileURLToPath(new URL('./config/QA.env', import.meta.url)),
});

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: [
    'steps/**/*.js',
    'src/fixtures/pageFixture.js',
  ],
});

const browserProfiles = [
  { name: 'chromium', device: 'Desktop Chrome' },
  { name: 'firefox', device: 'Desktop Firefox' },
  { name: 'webkit', device: 'Desktop Safari' },
];

export default defineConfig({
  testDir,
  timeout: 90000,

  expect: {
    timeout: 30000,
  },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['allure-playwright', {
      resultsDir: 'allure-results',
    }],
  ],

  use: {
  baseURL: process.env.BASE_URL,
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'on-first-retry',
},

  projects: browserProfiles.flatMap(({ name, device }) => [
    {
      name: `setup-${name}`,
      testDir: './setup',
      testMatch: /auth\.setup\.js$/,
      use: {
        ...devices[device],
        
        storageState: { cookies: [], origins: [] },
      },
    },
    {
      name,
      dependencies: [`setup-${name}`],
      use: {
     ...devices[device], 
    ...(name === 'webkit' 
? { viewport: { width: 1920, height: 1080 } } 
: {}), 
      },
    },
  ]),
});
