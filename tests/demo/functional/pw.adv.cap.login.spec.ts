import { test, expect } from "@playwright/test";

test.describe(
  "Login functionality",
  {
    annotation: {
      type: "Story",
      description: "Login flow regression tests",
    },
    tag: "@regression",
  },
  () => {
    test.beforeEach("Go to the login page", async ({ page }) => {
      // 1. Launch URL and assert title and header
      await page.goto("https://katalon-demo-cura.herokuapp.com/", { timeout: 60_000 });
      await expect(page).toHaveTitle("CURA Healthcare Service");
      await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");

      // 2. Click on the Make Appointment
      await page.getByRole("link", { name: "Make Appointment" }).click();
      await expect(page.getByText("Please login to make")).toBeVisible();
    });

    test.only("Should login successfully", { tag: "@smoke" }, async ({ page }) => {
      /*
       * Capability: Auto-waiting
       * @scenarios
       * 1. Just location element - Lazy
       * 2. Invalid locator on action method
       * 3. Valid locator but invalid action
       * 4. Invalid locator on expect method
       */



      //Timeout
      test.slow()
      test.setTimeout(120_000)
      
      // Successful login
      await page.getByLabel("Username").fill("John Doe");

      // Auto-Waiting
      // let userNameEle = page.getByLabel("USerID")
      // await userNameEle.fill("John Doe")


      await page.getByLabel("Password").fill("ThisIsNotAPassword");
      await page.getByRole("button", { name: "Login" }).click({timeout: 10_000});

      // Assert a text
      await expect(page.locator("h2")).toContainText("Make Appointment", {timeout: 10_000});
    });

    //Negative scenario

    test("Should prevent login with incorrect creds", async ({ page }) => {
      // Unsuccessful Login
      await page.getByLabel("Username").fill("John Smith");
      await page.getByLabel("Password").fill("ThisIsNotAPassword");
      await page.getByRole("button", { name: "Login" }).click();

      // Assert an error message
      await expect(page.locator("#login")).toContainText(
        "Login failed! Please ensure the username and password are valid.",
      );
    });
  },
);
