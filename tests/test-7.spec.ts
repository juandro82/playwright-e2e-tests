import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  /*
  https://admin-demo.nopcommerce.com/Admin/Customer/List
  */
  await page.getByRole('link', { name: ' Customers ' }).click();
  await page.getByRole('link', { name: ' Customers' }).click();
 
  await page.getByRole('textbox', { name: 'First name' }).fill('Alex');
  await page.getByRole('textbox', { name: 'Last name' }).fill('Thomas');
  await page.getByRole('button', { name: ' Search' }).click();
  //await page.getByRole('cell', { name: 'No data available in table' }).click();
  //Tambien podemos obtener el mismo elemento con el siguiente selector
  await page.locator("[id='search-customers']").click();


});
