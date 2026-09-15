"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = log;
const test_1 = require("@playwright/test");
const chalk_1 = __importDefault(require("chalk"));
async function log(level, message) {
    const plainLine = `[${level.toUpperCase()}]: ${message}`; // For Allure
    let coloredLine = plainLine;
    // Pick color based on log level
    switch (level) {
        case "info":
            coloredLine = chalk_1.default.blue(plainLine);
            break;
        case "warn":
            coloredLine = chalk_1.default.yellow(plainLine);
            break;
        case "error":
            coloredLine = chalk_1.default.red(plainLine);
            break;
        default:
            coloredLine = chalk_1.default.white(plainLine);
    }
    // Print colored text in terminal
    (console[level] || console.log)(coloredLine);
    // Send plain text to Allure
    await test_1.test.step(plainLine, async () => { });
}
