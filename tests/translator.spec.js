// @ts-check
import { test, expect } from '@playwright/test';

// Navigate to SwiftTranslator before each test
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Singlish ↔ English Translator/);
});

test('Neg_Fun_010 - Verify translation of English short form', async ({ page }) => {
  const inputText = 'Oyaage cgpa eka kiiyadha?';
  const expectedTranslation = 'ඔයාගෙ gpa එක කීයද?';

  // Type into the input box
  const inputBox = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await inputBox.fill(inputText);

  // Locate the output box
  const outputBox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');

  // Wait for the translation to appear and assert its value
  await expect(outputBox).toHaveText(expectedTranslation, { timeout: 5000 });
});


test('Pos_UI_001 - help popup', async ({ page }) => {
  // Click the Help button
  const helpButton = page.getByRole('button', { name: 'Help' });
  await helpButton.click();

  // Wait for the popup to appear by checking for a heading inside it
  const helpPopupHeading = page.getByRole('heading', { name: 'Singlish Character Mapping', level: 2 });
  await expect(helpPopupHeading).toBeVisible();
});




