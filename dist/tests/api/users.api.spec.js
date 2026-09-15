"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const logger_js_1 = require("../helpers/logger.js");
const constants_json_1 = __importDefault(require("../../data/constants.json"));
const test_data_1 = __importDefault(require("../../data/test-data"));
const file_helper_js_1 = __importDefault(require("../helpers/file-helper.js"));
test_1.test.describe("REST API Demo", () => {
    let envConfig = undefined;
    test_1.test.beforeEach("Get the env config", async ({ request }, testInfo) => {
        envConfig = testInfo.project.use;
    });
    //GET Method
    (0, test_1.test)("Should get list of users", async ({ request }) => {
        //Make a GET call
        await (0, logger_js_1.log)("info", `Making a GET call using ${envConfig.apiURL}`);
        const res = await request.get(`${envConfig.apiURL}${constants_json_1.default.REQ_RES_ENDPOINTS["GET:USERS_LIST"]}`, {
            headers: {
                "x-api-key": process.env.RES_RES_API_KEY,
                //"x-api-key": "reqres-free-v1",
            },
        });
        // Assert the status code
        (0, test_1.expect)(res.status()).toBe(200);
        await (0, logger_js_1.log)("info", `The GET call is succesfull with ${res.status()}`);
        //Get list of users
        const userData = await res.json();
        (0, logger_js_1.log)("info", `List of users: ${JSON.stringify(userData)}`);
        //Write List of users
        file_helper_js_1.default.writeFile(`${process.cwd()}/data/api-res/list-of-users.json`, `${JSON.stringify(userData, undefined, 4)}`);
    });
    //POST Method
    (0, test_1.test)("Should create a new user", async ({ request }) => {
        //Make a POST call
        await (0, logger_js_1.log)("info", `Making a POST call using ${envConfig.apiURL}`);
        const payload = test_data_1.default.apiUserCreation()[0];
        const res = await request.post(`${envConfig.apiURL}${constants_json_1.default.REQ_RES_ENDPOINTS["POST_USER"]}`, {
            headers: {
                "x-api-key": process.env.RES_RES_API_KEY,
                "Content-Type": "application/json",
            },
            data: payload,
        });
        // Assert the status code
        (0, test_1.expect)(res.status()).toBe(201);
        await (0, logger_js_1.log)("info", `The POST call is successful with ${res.status()}`);
        //Get list of users
        const restData = await res.json();
        (0, logger_js_1.log)("info", `Response data from post call: ${JSON.stringify(restData)}`);
    });
});
/*
GET Call from Postman
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://reqres.in/api/users?page=2',
  'headers': {
    'x-api-key': 'reqres-free-v1'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
*/
/*
POST Call
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://reqres.in/api/api/users?x-api-key=reqres-free-v1',
  'headers': {
    'x-api-key': 'free_user_3Ij4crm4aB1rlQLp5Owl7STyMH3',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "name": "morpheus",
    "job": "leader"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

*/ 
