"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)("test", async ({ page }) => {
    // 1. Launch URL
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    //2. Click on the Make Appointment
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await (0, test_1.expect)(page.getByText("Please login to make")).toBeVisible();
    //3. Login
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();
    // 4. Assert a text
    await (0, test_1.expect)(page.locator("h2")).toContainText("Make Appointment");
});
