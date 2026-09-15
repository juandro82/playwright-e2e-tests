"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const sync_1 = require("csv-parse/sync");
const logger_js_1 = require("./logger.js");
// Make the above code reusable function
/**
 * Reads the CSV file
 * @param filePath
 * @returns Array of objects
 */
function readCSV(filePath) {
    // Read file
    const csvDataStr = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    // Parse the csv data into an array of objects
    const csvDataArr = (0, sync_1.parse)(csvDataStr, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
    });
    return csvDataArr;
}
/**
 * Reads file and returns string. For JSON, parse it before using
 */
function readFile(filePath) {
    if (!fs_1.default.existsSync(filePath)) {
        throw new Error(`No file exists with given name:${filePath}`);
    }
    (0, logger_js_1.log)("info", `Reading file: ${filePath}...`);
    let data = fs_1.default.readFileSync(filePath, "utf8");
    return data;
}
/**
 * Writes to target file. If target is json, stringify data
 * @param filePath fullpath incl extn of file
 * @param data
 */
function writeFile(filePath, data) {
    try {
        fs_1.default.writeFileSync(filePath, data);
        (0, logger_js_1.log)("info", `Writing file: ${filePath}...`);
    }
    catch (err) {
        new Error(`Error writing to: ${filePath}, ${err}`);
    }
}
exports.default = { readCSV, readFile, writeFile };
