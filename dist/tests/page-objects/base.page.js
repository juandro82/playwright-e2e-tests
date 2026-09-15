"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const logger_js_1 = require("../helpers/logger.js");
class BasePage {
    page;
    constructor(page) {
        this.page = page;
    }
    /* All reusable actions */
    async navigateTo(path) {
        await (0, logger_js_1.log)("info", `Navigating to the path: ${path}`);
        await this.page.goto(path);
    }
    /** Click action */
    async click(ele) {
        try {
            await (0, test_1.expect)(ele).toBeVisible({ timeout: 10_000 }); // Custom timeout: Default - 5 seconds
            await ele.click();
        }
        catch (error) {
            await (0, logger_js_1.log)("error", `Failed to click element: ${ele.toString()}, original error: ${error}`);
            throw error;
        }
    }
    /** Type action */
    async typeInto(ele, text) {
        try {
            await (0, test_1.expect)(ele).toBeVisible({ timeout: 10_000 });
            await ele.fill(text);
        }
        catch (error) {
            await (0, logger_js_1.log)("error", `Failed to type into element: ${ele.toString()}, original error: ${error}`);
            throw error;
        }
    }
}
exports.default = BasePage;
