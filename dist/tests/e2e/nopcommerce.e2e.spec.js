"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const nopcommerce_home_page_1 = __importDefault(require("../page-objects/nopcommerce.home.page"));
(0, test_1.test)("Login to Nopecommerce Web App", async ({ page }, testInfo) => {
    //Env Config
    const envConfig = testInfo.project.use;
    // Create a page object
    const homePage = new nopcommerce_home_page_1.default(page);
    //Login
    await homePage.loginToNopeCommerceApp(envConfig.nopCommerceWeb, process.env.NOP_COMMERCE_TEST_USER_NAME, process.env.NOP_COMMERCE_TEST_PASSWORD);
});
