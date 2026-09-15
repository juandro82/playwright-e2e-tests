import { test, expect } from "@playwright/test";

test.describe("Checkout flow", () => {
  test.beforeEach("Login with valid creds", async ({ page }) => {
    //Launch the URL
    await page.goto("https://www.saucedemo.com/");

    //Login

    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    //Assertion inventory page
    await expect(page).toHaveURL(/.*\/inventory/);
  });
  // Add to cart test
  test("Should be able to add to cart", async ({ page }) => {
        await page.locator('.inventory_item').nth(0).locator('button').click();
    // Assert the product was added to the cart by checking the button text changed to "Remove"
    await expect(
      page.locator('[data-test="remove-sauce-labs-backpack"]'),
    ).toContainText("Remove");
  });

  // Add to cart test
  test("Should be able to start the checkout flow", async ({ page }) => {
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL(/.*\/cart/);
    //await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
    await page.locator('[data-test="checkout"]').click();
    await expect(page).toHaveURL(/.*\/checkout-step-one/);
  });

  test("Should be able to complete checkout steps", async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(
      page.locator('[data-test="remove-sauce-labs-backpack"]'),
    ).toContainText("Remove");

    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    await expect(page).toHaveURL(/.*\/checkout-step-one/);
    await expect(page.locator('[data-test="firstName"]')).toBeVisible();

    //Personal Information
    await page.locator('[data-test="firstName"]').fill("Juan");
    await page.locator('[data-test="lastName"]').fill("Callejas");
    await page.locator('[data-test="postalCode"]').fill("054221");
    await page.locator('[data-test="continue"]').click();

    //Product Overview
    await expect(page).toHaveURL(/.*\/checkout-step-two/);
    await expect(
      page.locator('[data-test="inventory-item-name"]'),
    ).toContainText("Sauce Labs Backpack");

    //Checkout Complete
    await page.locator('[data-test="finish"]').click();
    await expect(page).toHaveURL(/.*\/checkout-complete/);
    await expect(page.locator('[data-test="title"]')).toContainText(
      "Checkout: Complete!",
    );
  });
});
