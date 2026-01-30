// @ts-check
import { test, expect } from '@playwright/test';
import testData from '../testData.js';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // small wait for dynamic scripts to finish rendering
  await page.waitForTimeout(2000);
});

test('has title', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Singlish ↔ English Translator/);
});

test.describe('Translation Tests', () => {
  for (const tc of testData) {
    if (tc.Input && tc['Expected Output']) {
      test(`${tc['TC ID']}: ${tc['Test Case Name']}`, async ({ page }) => {
        // Input textbox
        const inputBox = page.getByRole('textbox', { 
          name: 'Input Your Singlish Text Here.' 
        });

        await inputBox.fill(tc.Input);
        await page.keyboard.press('Enter');
        await page.waitForTimeout(1000);

        // Capture Sinhala output area (dynamic text)
        const outputArea = page.locator('text=Sinhala').locator('xpath=following-sibling::*[1]');

        // Wait for output to appear
        await expect(outputArea).toBeVisible();

        // Assert the expected output
        await expect(outputArea).toContainText(tc['Expected Output']);
      });
    }
  }
});


