import { expect, type Page } from "@playwright/test";
import BasePage from "./base.page.js";
import { log } from "../helpers/logger.js";

export default class MakeAppointmentHomePage extends BasePage {
  // Constructor
  constructor(page: Page) {
    super(page);
  }

  /** Elements */

  get makeAptmntBtn() {
    return this.page.getByRole("link", { name: "Make Appointment" });
  }

  /** Page Actions */
  async navigateHome(url: string) {
    await log("info", `Navigating to ${url}`);

    //Navigate Home
    await this.navigateTo(url);
    await expect(this.page).toHaveTitle("CURA Healthcare Service");
    await expect(this.page.locator("//h1")).toHaveText("CURA Healthcare Service");
    await this.click(this.makeAptmntBtn);
    //await page.goto("https://katalon-demo-cura.herokuapp.com/");
    
  }
}
