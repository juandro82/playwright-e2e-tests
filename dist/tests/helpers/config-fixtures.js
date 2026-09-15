"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const test_1 = require("@playwright/test");
exports.test = test_1.test.extend({
    // Define an option and provide a default value.
    // We can later override it in the config.
    envName: ["test", { option: true }],
    appURL: ["https://katalon-demo-cura.herokuapp.com/", { option: true }],
    dbConfig: [{}, { option: true }],
    nopCommerceWeb: ["provideURL", { option: true }],
    apiURL: ["https://reqres.in/api", { option: true }],
});
