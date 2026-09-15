"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeFullPageScreenshot = takeFullPageScreenshot;
exports.takeElementScreenshot = takeElementScreenshot;
const test_1 = require("@playwright/test");
/**
 * Take a screenshot of full page
 * @param page
 * @param screenshotName - Name for the screenshot attachment
 */
/**Full page Screenshot */
async function takeFullPageScreenshot(page, screenshotName) {
    // Take screenshot of the full page
    const screenshot = await page.screenshot({ fullPage: true });
    // Attach it to the report
    await test_1.test.info().attach(screenshotName, {
        body: screenshot,
        contentType: "image/png",
    });
}
/**Element Screenshot */
async function takeElementScreenshot(element, screenshotName) {
    // Take screenshot of the element
    const screenshot = await element.screenshot();
    // Attach it to the report
    await test_1.test.info().attach(screenshotName, {
        body: screenshot,
        contentType: "image/png",
    });
}
