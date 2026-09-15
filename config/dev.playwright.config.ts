import { defineConfig, devices } from "@playwright/test"
import { baseConfig } from '../playwright.config.ts'
import { EnvConfig } from '../tests/helpers/config-fixtures.ts'
import path from "path";

console.log(`---RUNNING DEV CONFIG---`);

export default defineConfig <EnvConfig>({
    ...baseConfig, //Loads all existing values...
    testDir: path.resolve(process.cwd(), "./tests"),

    use: {
        ...baseConfig.use, //Loads all existing values...
        envName: "dev",
        appURL: "https://www.google.com/",
        dbConfig: {
            server: "",
            dbname: "",
            connectionStr:"",
        },


    },
});