"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const pw_helper_js_1 = require("../../helpers/pw-helper.js");
test_1.test.describe("Make appointmenmt", {
    annotation: {
        type: "Story",
        description: "JIRA-1234: MAke appointment feature",
    },
}, () => {
    test_1.test.beforeEach("Login with valid creds", async ({ page }, testInfo) => {
        // 1. Launch URL and assert title and header
        await page.goto("https://katalon-demo-cura.herokuapp.com/");
        await (0, test_1.expect)(page).toHaveTitle("CURA Healthcare Service");
        await (0, test_1.expect)(page.locator("//h1")).toHaveText("CURA Healthcare Service");
        // 2. Click on the Make Appointment
        await page.getByRole("link", { name: "Make Appointment" }).click();
        await (0, test_1.expect)(page.getByText("Please login to make")).toBeVisible();
        // Successful login
        await page.getByLabel("Username").fill("John Doe");
        await page.getByLabel("Password").fill("ThisIsNotAPassword");
        await page.getByRole("button", { name: "Login" }).click();
        await (0, pw_helper_js_1.takeFullPageScreenshot)(page, "Full Page Login Screenshot");
    });
    //Test goes here
    (0, test_1.test)("Should make an appointment with non-default values", {
        annotation: { type: "Bug", description: "Defect 1234 - Does not work in Firefox" }, tag: "@smoke"
    }, async ({ page, browserName }) => {
        // Skip the test for firefox browser
        test_1.test.skip(browserName === "firefox", "Open bug ID:1234");
        //Dropdown
        await page
            .getByLabel("Facility")
            .selectOption("Hongkong CURA Healthcare Center");
        //Checkbox
        await page
            .getByRole("checkbox", { name: "Apply for hospital readmission" })
            .check();
        // Radio Button
        await page.getByRole("radio", { name: "Medicaid" }).check();
        //Date input box
        await page
            .getByRole("textbox", { name: "Visit Date (Required)" })
            .click();
        await page
            .getByRole("textbox", { name: "Visit Date (Required)" })
            .fill("05/10/2027");
        await page
            .getByRole("textbox", { name: "Visit Date (Required)" })
            .press("Enter");
        //Multi-Line comments input box
        await page.getByRole("textbox", { name: "Comment" }).click();
        await page
            .getByRole("textbox", { name: "Comment" })
            .fill("This is a multi-line comments\ncaptured by playwright codgen");
        //Button
        await page.getByRole("button", { name: "Book Appointment" }).click();
        //Assertion
        await (0, test_1.expect)(page.locator("h2")).toContainText("Appointment Confirmation");
        await (0, test_1.expect)(page.getByRole("link", { name: "Go to Homepage" })).toBeVisible();
    });
    //More tests go here...
});
