"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const logger_js_1 = require("../../helpers/logger.js");
const make_aptmnt_home_page_js_1 = __importDefault(require("../../page-objects/make.aptmnt.home.page.js"));
const make_aptmnt_login_page_js_1 = __importDefault(require("../../page-objects/make.aptmnt.login.page.js"));
const make_aptmnt_form_page_js_1 = __importDefault(require("../../page-objects/make.aptmnt.form.page.js"));
test_1.test.describe("Make appointmenmt", () => {
    test_1.test.beforeEach("Login with valid creds", async ({ page }, testInfo) => {
        // 1. Launch URL and assert title and header
        //Get URL from config file
        const envConfig = testInfo.project.use;
        // Create a page object
        const makeAppointmentHomePage = new make_aptmnt_home_page_js_1.default(page);
        const makeAppointmentLoginPage = new make_aptmnt_login_page_js_1.default(page);
        //Custom logs
        await (0, logger_js_1.log)("info", `Launching the web app in ${envConfig.envName}`);
        // 2. Click on the Make Appointment
        await makeAppointmentHomePage.navigateHome(envConfig.appURL);
        await (0, test_1.expect)(page.getByText("Please login to make")).toBeVisible();
        // Successful login
        await makeAppointmentLoginPage.loginToCura(process.env.TEST_USER_NAME, process.env.TEST_PASSWORD);
        // //Assert a text
        await (0, test_1.expect)(page.locator("h2")).toContainText("Make Appointment");
        await (0, logger_js_1.log)("info", "The login is successful...");
        await (0, logger_js_1.log)("error", "The next page did not load..");
    });
    //Test goes here
    (0, test_1.test)("Should make an appointment with non-default values", async ({ page, }, testInfo) => {
        //console.log(`>> Current config \n: ${JSON.stringify(testInfo.config)} `);
        const makeAppointmentFormPage = new make_aptmnt_form_page_js_1.default(page);
        //Dropdown
        await makeAppointmentFormPage.selectFacility("Hongkong CURA Healthcare Center");
        //Checkbox
        await makeAppointmentFormPage.checkReadmission();
        // // Radio Button
        await makeAppointmentFormPage.selectHealthPrgrm();
        // //Date input box
        await makeAppointmentFormPage.fillVisitDate("05/10/2027");
        //Multi-Line comments input box
        await makeAppointmentFormPage.fillCommentTxt("This is a multi-line comments\ncaptured by playwright codgen");
        //Button
        await makeAppointmentFormPage.bookingInit();
        //Assertion
        await (0, test_1.expect)(page.locator("h2")).toContainText("Appointment Confirmation");
        await (0, test_1.expect)(page.getByRole("link", { name: "Go to Homepage" })).toBeVisible();
    });
    //More tests go here...
});
