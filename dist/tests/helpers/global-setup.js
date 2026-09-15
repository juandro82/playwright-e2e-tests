"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = globalSetup;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
async function globalSetup(config) { }
console.log(`[INFO]: Starting the global setup...`);
if (process.env.RUNNER?.toUpperCase() === "LOCAL") {
    console.log(`[INFO]: Detecting local runs..`);
    // Delete allure results
    const resultsDir = path_1.default.resolve(process.cwd(), "allure-results");
    console.log(`>>> resultsDir: ${resultsDir}`);
    if (fs_1.default.existsSync(resultsDir)) {
        fs_1.default.rmSync(resultsDir, { recursive: true, force: true });
    }
}
// All other one-off tasks go here
// Set the login cookie global variable
process.env.LOGIN_COOKIES = undefined;
