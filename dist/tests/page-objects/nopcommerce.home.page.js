"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const base_page_js_1 = __importDefault(require("./base.page.js"));
const logger_js_1 = require("../helpers/logger.js");
class HomePage extends base_page_js_1.default {
    // Constructor
    constructor(page) {
        super(page);
    }
    /** Elements */
    get userNameInputBox() {
        return this.page.getByRole("textbox", { name: "Email" });
    }
    get passwordInputBox() {
        return this.page.getByRole("textbox", { name: "Password" });
    }
    get loginBtn() {
        return this.page.getByRole("button", { name: "Log in" });
    }
    /** Page Actions */
    async loginToNopeCommerceApp(url, username, password) {
        await (0, logger_js_1.log)("info", `Login to ${url}`);
        //Login
        await this.navigateTo(url);
        await this.typeInto(this.userNameInputBox, username);
        await this.typeInto(this.passwordInputBox, password);
        await this.click(this.loginBtn);
        //Assert the URL
        await (0, test_1.expect)(this.page).toHaveURL(`${url}/admin/`);
        await (0, logger_js_1.log)("info", `Home Page is successfully launched`);
    }
}
exports.default = HomePage;
