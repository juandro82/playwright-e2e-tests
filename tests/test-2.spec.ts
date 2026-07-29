import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  // Login
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await page.getByLabel('Username').fill('John Doe');
  await page.getByLabel('Password').fill('ThisIsNotAPassword');
  await page.getByRole('button', { name: 'Login' }).click();
  
  // Make appointment
  await expect(page.locator('h2')).toContainText('Make Appointment');
  await page.getByLabel('Facility').selectOption('Seoul CURA Healthcare Center');
  await page.locator('.input-group-addon').click();
  
  
  await page.getByRole('cell', { name: '31' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('TEst comment');
  
  //Appointment confirmation
  await page.getByRole('button', { name: 'Book Appointment' }).click();
  await expect(page.getByRole('heading', { name: 'Appointment Confirmation' })).toBeVisible();
});