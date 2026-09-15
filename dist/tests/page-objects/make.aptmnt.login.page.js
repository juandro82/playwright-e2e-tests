"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_page_js_1 = __importDefault(require("./base.page.js"));
class MakeAppointmentLoginPage extends base_page_js_1.default {
    // Constructor
    constructor(page) {
        super(page);
    }
    /** Elements */
    get userNameTextBox() {
        return this.page.getByLabel("Username");
    }
    get passwordTextBox() {
        return this.page.getByLabel("Password");
    }
    get loginButton() {
        return this.page.getByRole("button", { name: "Login" });
    }
    /** Page Actions */
    async loginToCura(username, password) {
        //Login
        await this.typeInto(this.userNameTextBox, username);
        await this.typeInto(this.passwordTextBox, password);
        await this.click(this.loginButton);
        //  await expect(this.page.getByText("Please login to make")).toBeVisible();
        // //Assert a text
        // await expect(this.page.locator("h2")).toContainText("Make Appointment");
        // await log("info", "The login is successful...")
        // await log("error", "The next page did not load..")
        // await page.getByRole("link", { name: "Make Appointment" }).click();
        // await page.getByLabel("Username").fill(process.env.TEST_USER_NAME);
        // await page.getByLabel("Password").fill(process.env.TEST_PASSWORD);
        // await page.getByRole("button", { name: "Login" }).click();
    }
}
exports.default = MakeAppointmentLoginPage;
