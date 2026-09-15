import { test as base } from "@playwright/test";

export type EnvConfig = {
  envName: string;
  appURL: string;
  dbConfig: {};
  nopCommerceWeb: string;
  apiURL: string;
};

export const test = base.extend<EnvConfig>({
  // Define an option and provide a default value.
  // We can later override it in the config.
  envName: ["test", { option: true }],
  appURL: ["https://katalon-demo-cura.herokuapp.com/", { option: true }],
  dbConfig: [{}, { option: true }],
  nopCommerceWeb: ["provideURL", { option: true }],
  apiURL: ["https://reqres.in/api", { option: true }],

});
