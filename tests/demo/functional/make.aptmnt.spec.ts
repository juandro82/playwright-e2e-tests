import { test, expect } from "@playwright/test";
import { log } from "../../helpers/logger.js";
import MakeAppointmentHomePage from "../../page-objects/make.aptmnt.home.page.js";
import MakeAppointmentLoginPage from "../../page-objects/make.aptmnt.login.page.js";
import MakeAppointmentFormPage from "../../page-objects/make.aptmnt.form.page.js";

test.describe("Make appointmenmt", () => {
  test.beforeEach("Login with valid creds", async ({ page }, testInfo) => {
    // 1. Launch URL and assert title and header

    //Get URL from config file
    const envConfig = testInfo.project.use as any;

    // Create a page object
    const makeAppointmentHomePage = new MakeAppointmentHomePage(page);
    const makeAppointmentLoginPage = new MakeAppointmentLoginPage(page);

    //Custom logs
    await log("info", `Launching the web app in ${envConfig.envName}`);

    // 2. Click on the Make Appointment
    await makeAppointmentHomePage.navigateHome(envConfig.appURL);

    await expect(page.getByText("Please login to make")).toBeVisible();
    // Successful login
    await makeAppointmentLoginPage.loginToCura(
      process.env.TEST_USER_NAME,
      process.env.TEST_PASSWORD,
    );

    // //Assert a text
    await expect(page.locator("h2")).toContainText("Make Appointment");
    await log("info", "The login is successful...");
    await log("error", "The next page did not load..");
  });

  
  
  //Test goes here
  
  
  test("Should make an appointment with non-default values", async ({
    page,
  }, testInfo) => {
    //console.log(`>> Current config \n: ${JSON.stringify(testInfo.config)} `);
   
    const makeAppointmentFormPage = new MakeAppointmentFormPage(page);
    
    //Dropdown
    await makeAppointmentFormPage.selectFacility("Hongkong CURA Healthcare Center")

    //Checkbox

    await makeAppointmentFormPage.checkReadmission();
   
    // // Radio Button
    await makeAppointmentFormPage.selectHealthPrgrm();
    

    // //Date input box
    await makeAppointmentFormPage.fillVisitDate("05/10/2027");
   

    //Multi-Line comments input box
    await makeAppointmentFormPage.fillCommentTxt("This is a multi-line comments\ncaptured by playwright codgen")

    //Button
    await makeAppointmentFormPage.bookingInit();
   

    //Assertion
    await expect(page.locator("h2")).toContainText("Appointment Confirmation");
    await expect(
      page.getByRole("link", { name: "Go to Homepage" }),
    ).toBeVisible();
  });

  //More tests go here...
});
