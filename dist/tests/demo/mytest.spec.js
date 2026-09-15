"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const constants_json_1 = __importDefault(require("../../data/constants.json"));
const logger_js_1 = require("../helpers/logger.js");
(0, test_1.test)("Should load homepage with correct tittle", async ({ page }) => {
    //1. Go to home page
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    //2. Assert if the title is correct
    await (0, test_1.expect)(page).toHaveTitle("CURA Healthcare Service");
    // 3. Assert header text
    await (0, test_1.expect)(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});
(0, test_1.test)("Should do something", { tag: "@smoke" }, async ({ page }, testInfo) => {
    //1. Go to home page
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    //2. Click the page heading
    await page.locator("//h1").click();
});
(0, test_1.test)("Should demo locators", async ({ page }) => {
    // `pagez.getBy*()` and `page.locator()` methods returns the `locator` object
    // The above methods not to be `awaited`
    // The type of locator is an `object`
    // Locators are LAZY until an action is fired on them
    // 1. Launch URL
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    //2. Click on the Make Appointment
    let makeAppmtBtn = page.getByRole("link", { name: "Invalid Locator" });
    //console.log(`>> The type of locator: ${typeof makeAppmtBtn}, The value of the locator is: ${JSON.stringify(makeAppmtBtn)}`);
    //await makeAppmtBtn.click();
    // await expect(page.getByText("Please login to make")).toBeVisible();
    await page
        .getByRole("heading", { name: "We Care About Your Health" })
        .click();
});
(0, test_1.test)("Should demo config file", async ({ page }, testInfo) => {
    console.log(`>> Config at runtime: ${JSON.stringify(testInfo.config)}`);
});
(0, test_1.test)("Should demo fixtures", async ({ page, browserName }, testInfo) => {
    console.log(`>> Browser Name: ${browserName}`);
});
(0, test_1.test)("Should demo devices", async ({ page }, testInfo) => {
    console.log(`>> The list of devices: ${Object.keys(test_1.devices)}`);
});
(0, test_1.test)("Should demo parallel run 1", { tag: "@demo" }, async ({ page }, testInfo) => {
    await page.goto("https://www.google.com");
});
(0, test_1.test)("Should demo parallel run 2", { tag: "@demo" }, async ({ page }, testInfo) => {
    await page.goto("https://www.google.com");
});
(0, test_1.test)("Should demo constant data", async ({ page }, testInfo) => {
    console.log(`>> Constant data: ${JSON.stringify(constants_json_1.default.STATUSCODES)}`);
});
test_1.test.only("Should click action", async ({ page }, testInfo) => {
    //Default action
    //await page.goto("https://katalon-demo-cura.herokuapp.com/");
    let ele = page.getByRole("link", { name: "Make-Appointment" });
    //await ele.click();
    // Base page action
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    try {
        await (0, test_1.expect)(ele).toBeVisible({ timeout: 10_000 }); // Custom timeout: Default - 5 seconds
        await ele.click();
    }
    catch (error) {
        await (0, logger_js_1.log)("error", `Failed to click element: ${ele.toString()}, original error: ${error}`);
        throw error;
    }
});
