import { expect, type Page } from "@playwright/test";
import BasePage from "./base.page.js";
import { log } from "../helpers/logger.js";

export default class MakeAppointmentFormPage extends BasePage {
  // Constructor
  constructor(page: Page) {
    super(page);
  }

  /** Elements */

  get facilityDropdwn() {
    return this.page.getByLabel("Facility");
  }

  get readmissionCheck() {
    return this.page.getByRole("checkbox", {
      name: "Apply for hospital readmission",
    });
  }

  get healthPrgrmRadioBtn() {
    return this.page.getByRole("radio", { name: "Medicaid" });
  }

  get visitDatePckr() {
    return this.page.getByRole("textbox", { name: "Visit Date (Required)" });
  }
  
  get commentTxtBox (){
    return this.page.getByRole("textbox", { name: "Comment" })
  }

  get bookAptmntBtn (){
    return this.page.getByRole("button", { name: "Book Appointment" })
  }



  /** Page Actions */
  async selectFacility(facility: string) {
    await this.facilityDropdwn.selectOption(facility);
  }

  async checkReadmission() {
    await this.readmissionCheck.check();
  }

  async selectHealthPrgrm() {
    await this.healthPrgrmRadioBtn.check();
  }

  async fillVisitDate(date: string) {
    await this.click(this.visitDatePckr); // Abre calendario
    await this.typeInto(this.visitDatePckr, date); // Llena
    await this.visitDatePckr.press("Enter"); // Confirma
  }

  async fillCommentTxt(text: string){
    await this.commentTxtBox.fill(text);
  } 

    async bookingInit (){
    await this.click(this.bookAptmntBtn);
  } 
}
