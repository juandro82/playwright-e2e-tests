"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_page_js_1 = __importDefault(require("./base.page.js"));
class MakeAppointmentFormPage extends base_page_js_1.default {
    // Constructor
    constructor(page) {
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
    get commentTxtBox() {
        return this.page.getByRole("textbox", { name: "Comment" });
    }
    get bookAptmntBtn() {
        return this.page.getByRole("button", { name: "Book Appointment" });
    }
    /** Page Actions */
    async selectFacility(facility) {
        await this.facilityDropdwn.selectOption(facility);
    }
    async checkReadmission() {
        await this.readmissionCheck.check();
    }
    async selectHealthPrgrm() {
        await this.healthPrgrmRadioBtn.check();
    }
    async fillVisitDate(date) {
        await this.click(this.visitDatePckr); // Abre calendario
        await this.typeInto(this.visitDatePckr, date); // Llena
        await this.visitDatePckr.press("Enter"); // Confirma
    }
    async fillCommentTxt(text) {
        await this.commentTxtBox.fill(text);
    }
    async bookingInit() {
        await this.click(this.bookAptmntBtn);
    }
}
exports.default = MakeAppointmentFormPage;
