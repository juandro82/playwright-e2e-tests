"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = globalTeardown;
const child_process_1 = require("child_process");
async function globalTeardown(config) {
    /* Executed after all workers complete. Good place for cleanup tasks */
    console.log(`[INFO]: Starting the global teardown process ...`);
    // Generate Allure report for local runs
    if (process.env.RUNNER?.toUpperCase() === "LOCAL") {
        console.log(`=> Local run detected - starting Allure server...`);
        (0, child_process_1.exec)("allure serve", (error, stdout, stderr) => {
            if (error) {
                console.error("ERROR: Starting Allure server:", error.message);
            }
        });
    }
    console.log(`[INFO]: Completed the global teardown process ...`);
}
