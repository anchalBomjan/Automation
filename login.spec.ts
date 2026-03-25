import { test } from '@playwright/test';

test('login typing fix', async ({ page }) => {
  // Get credentials from environment variables
  const username = process.env.TMS_USERNAME || '################';
  const password = process.env.TMS_PASSWORD || '******************';
  const baseUrl = process.env.TMS_BASE_URL || 'https://@@@@@@@@@@';

  await page.goto(`${baseUrl}/login`);

  const usernameField = page.getByPlaceholder('Your Username');
  const passwordField = page.getByPlaceholder('Your Password');

  await usernameField.waitFor({ state: 'visible' });
  await usernameField.fill(username);

  await passwordField.fill(password);

  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForLoadState('networkidle');

  console.log('✅ Login attempted');

  // Stay on the page - wait indefinitely
  await page.pause();
});