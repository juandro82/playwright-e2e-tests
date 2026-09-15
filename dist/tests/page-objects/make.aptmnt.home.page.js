"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const base_page_js_1 = __importDefault(require("./base.page.js"));
const logger_js_1 = require("../helpers/logger.js");
class MakeAppointmentHomePage extends base_page_js_1.default {
    // Constructor
    constructor(page) {
        super(page);
    }
    /** Elements */
    get makeAptmntBtn() {
        return this.page.getByRole("link", { name: "Make Appointment" });
    }
    /** Page Actions */
    async navigateHome(url) {
        await (0, logger_js_1.log)("info", `Navigating to ${url}`);
        //Navigate Home
        await this.navigateTo(url);
        await (0, test_1.expect)(this.page).toHaveTitle("CURA Healthcare Service");
        await (0, test_1.expect)(this.page.locator("//h1")).toHaveText("CURA Healthcare Service");
        await this.click(this.makeAptmntBtn);
        //await page.goto("https://katalon-demo-cura.herokuapp.com/");
    }
}
exports.default = MakeAppointmentHomePage;
