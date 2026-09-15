import { test, expect } from '@playwright/test';

test('multiple windows flow', async ({ page, context }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Multiple Windows' }).click();

  await expect(page.locator('h3')).toHaveText('Opening a new window');

  const [firstPopup] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Click Here' }).click(),
  ]);

  await firstPopup.waitForLoadState('domcontentloaded');
  await expect(firstPopup.locator('h3')).toHaveText('New Window');

  const secondLink = firstPopup.getByRole('link', { name: 'Click Here' });
  if (await secondLink.count()) {
    const [secondPopup] = await Promise.all([
      context.waitForEvent('page'),
      secondLink.click(),
    ]);

    await secondPopup.waitForLoadState('domcontentloaded');
    await expect(secondPopup.locator('h3')).toHaveText('New Window');
    await secondPopup.close();
  }

  await page.bringToFront();
  await expect(page.locator('h3')).toHaveText('Opening a new window');
});
