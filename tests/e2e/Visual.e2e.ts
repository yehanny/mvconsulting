import percySnapshot from '@percy/playwright';
import { expect, test } from '@playwright/test';

test.describe('Visual testing', () => {
  test.describe('Static pages', () => {
    test('should take screenshot of the homepage', async ({ page }) => {
      await page.goto('/');

      await expect(page.getByText('MV Consulting')).toBeVisible();

      await percySnapshot(page, 'Homepage');
    });

    test('should take screenshot of the Spanish homepage', async ({ page }) => {
      await page.goto('/es');

      await expect(page.getByText('MV Consulting')).toBeVisible();

      await percySnapshot(page, 'Homepage - Spanish');
    });
  });
});
