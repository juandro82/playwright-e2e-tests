"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseConfig = void 0;
const test_1 = require("@playwright/test");
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, ".env") });
/**
 * See https://playwright.dev/docs/test-configuration.
 */
exports.baseConfig = (0, test_1.defineConfig)({
    testDir: "./tests",
    //globaltimeout: 10_000,
    //globaltimeout: 3 * 60 * 60 * 1000, // 3 hours
    /* Run tests in files in parallel */
    fullyParallel: false,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    expect: { timeout: 10_000 },
    globalSetup: require.resolve("./tests/helpers/global-setup"),
    globalTeardown: require.resolve("./tests/helpers/global-teardown"),
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [
        [
            "html",
            {
                open: "never",
            },
        ],
        [
            "allure-playwright",
            {
                detail: true,
                suiteTitle: true,
                environmentInfo: {
                    name: "TEST",
                    appName: "CURA",
                    Release: "Release 1.1",
                    node_version: process.version,
                },
            },
        ],
    ],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('')`. */
        // baseURL: 'http://localhost:3000',
        /*Headless mode off*/
        headless: true,
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: "on-first-retry",
        ignoreHTTPSErrors: true,
        navigationTimeout: 30_000,
        screenshot: "on",
        //video: "retain-on-failure"
        //actionTimeout: 10_000
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
    /* Configure projects for major browsers */
    projects: [
        {
            name: "chromium",
            use: {
                ...test_1.devices["Desktop Chrome"],
                // viewport: null,
                launchOptions: {
                    args: ["--disable-blink-features=AutomationControlled", "--disable-features=IsolateOrigins,site-per-process", "--allow-no-sandbox-job"],
                },
            },
        },
        // {
        //   name: "firefox",
        //   use: { ...devices["Desktop Firefox"] },
        // },
        // {
        //   name: "webkit",
        //   use: { ...devices["Desktop Safari"], ignoreHTTPSErrors: true },
        // },
        /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: { ...devices['Pixel 5'] },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },
        /* Test against branded browsers. */
        // {
        //   name: 'Microsoft Edge',
        //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
        // },
        // {
        //   name: 'Google Chrome',
        //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
        // },
        //  {
        //    name: "Galaxy A55",
        //    use: {...devices["Galaxy A55"] }
        //  }
    ],
    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://localhost:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
});
exports.default = exports.baseConfig;
