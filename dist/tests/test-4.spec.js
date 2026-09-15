"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('test', async ({ page }) => {
    //Launch URL
    await page.goto('https://admin-demo.nopcommerce.com/');
    //Login
    await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com');
    await page.getByRole('textbox', { name: 'Password:' }).fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();
    // Assert the URL
    await (0, test_1.expect)(page).toHaveURL('https://admin-demo.nopcommerce.com/admin/');
});
