import { expect, type Page } from "@playwright/test";
import BasePage from "./base.page.js";
import { log } from "../helpers/logger.js";

export default class CustList extends BasePage {
  // Constructor
  constructor(page: Page) {
    super(page);
  }

  /** Elements */
  get firstNameInputBox() {
    return this.page.getByRole("textbox", { name: "First name" });
  }
  get lastNameInputBox() {
    return this.page.getByRole("textbox", { name: "Last name" });
  }
  get searchBtn() {
    return this.page.getByRole("button", { name: "Search" });
  }
  get noDataAvailableCell() {
    return this.page.locator("[id='search-customers']");
  }

  /** Page Actions */
  async goToCustomerListPage(custListPage: string) {
    await this.navigateTo(custListPage);
  }

  async searchAndConfirmUser(firstName: string, lastName: string): Promise<boolean> {
    await log ("info", `Searching the user with first name: ${firstName} and last name: ${lastName}`);
    //Search actions
    await this.typeInto(this.firstNameInputBox, firstName);
    await this.typeInto(this.lastNameInputBox, lastName);
    await this.click(this.searchBtn);

    // Check wether the customer present
    await this.page.waitForTimeout(1_500); //1.5s delay
    let customerNotFound = await this.noDataAvailableCell.isVisible();
    return customerNotFound;
  }
}

/*
  https://admin-demo.nopcommerce.com/Admin/Customer/List
  
  await page.getByRole('textbox', { name: 'First name' }).fill('Alex');
  await page.getByRole('textbox', { name: 'Last name' }).fill('Thomas');
  await page.getByRole('button', { name: ' Search' }).click();
  //await page.getByRole('cell', { name: 'No data available in table' }).click();
  //Tambien podemos obtener el mismo elemento con el siguiente selector
  await page.locator("[id='search-customers']").click();

*/
