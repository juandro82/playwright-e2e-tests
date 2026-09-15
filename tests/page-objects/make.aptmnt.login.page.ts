import { expect, type Page } from "@playwright/test";
import BasePage from "./base.page.js";
import { log } from "../helpers/logger.js";

export default class MakeAppointmentLoginPage extends BasePage {
  // Constructor
  constructor(page: Page) {
    super(page);
  }

  /** Elements */

  get userNameTextBox() {
    return this.page.getByLabel("Username");
  }

  get passwordTextBox() {
    return this.page.getByLabel("Password");
  }

  get loginButton() {
    return this.page.getByRole("button", { name: "Login" });
  }


  /** Page Actions */
  async loginToCura(username: string, password: string) {
    //Login
    await this.typeInto(this.userNameTextBox, username);
    await this.typeInto(this.passwordTextBox, password);
    await this.click(this.loginButton);

    //  await expect(this.page.getByText("Please login to make")).toBeVisible();

    // //Assert a text
    // await expect(this.page.locator("h2")).toContainText("Make Appointment");
    // await log("info", "The login is successful...")
    // await log("error", "The next page did not load..")

    // await page.getByRole("link", { name: "Make Appointment" }).click();
    // await page.getByLabel("Username").fill(process.env.TEST_USER_NAME);
    // await page.getByLabel("Password").fill(process.env.TEST_PASSWORD);
    // await page.getByRole("button", { name: "Login" }).click();
  }
}
