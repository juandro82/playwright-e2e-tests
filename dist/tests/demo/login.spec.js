"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
test_1.test.describe("Login functionality", { tag: "@demo" }, () => {
    test_1.test.beforeEach("Go to the login page", async ({ page }) => {
        // 1. Launch URL and assert title and header
        await page.goto("https://katalon-demo-cura.herokuapp.com/");
        await (0, test_1.expect)(page).toHaveTitle("CURA Healthcare Service");
        await (0, test_1.expect)(page.locator("//h1")).toHaveText("CURA Healthcare Service");
        // 2. Click on the Make Appointment
        await page.getByRole("link", { name: "Make Appointment" }).click();
        await (0, test_1.expect)(page.getByText("Please login to make")).toBeVisible();
    });
    (0, test_1.test)("Should login successfully", { tag: "@smoke" }, async ({ page }) => {
        // Successful login
        await page.getByLabel("Username").fill("John Doe");
        await page.getByLabel("Password").fill("ThisIsNotAPassword");
        await page.getByRole("button", { name: "Login" }).click();
        // Assert a text
        await (0, test_1.expect)(page.locator("h2")).toContainText("Make Appointment");
    });
    //Negative scenario
    (0, test_1.test)("Should prevent login with incorrect creds", async ({ page }) => {
        // Unsuccessful Login
        await page.getByLabel("Username").fill("John Smith");
        await page.getByLabel("Password").fill("ThisIsNotAPassword");
        await page.getByRole("button", { name: "Login" }).click();
        // Assert an error message
        await (0, test_1.expect)(page.locator("#login")).toContainText("Login failed! Please ensure the username and password are valid.");
    });
});
