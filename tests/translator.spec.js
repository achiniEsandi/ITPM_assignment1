// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Singlish ↔ English Translator/);
});

test('help popup', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Click the Help button
  const helpButton = page.getByRole('button', { name: 'Help' });
  await helpButton.click();

  // Wait for the popup to appear by checking for a heading inside it
  const helpPopupHeading = page.getByRole('heading', { name: 'Singlish Character Mapping', level: 2 });
  await expect(helpPopupHeading).toBeVisible();
});



