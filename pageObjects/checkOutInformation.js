import BasePage from "./basePage.js"
export default class CheckOutInformationPage extends BasePage{

    constructor(page){
        super(page);
        this.firstName = this.page.locator("#first-name")
        this.lastName=this.page.locator("#last-name")
        this.postalCode=this.page.locator("#postal-code")

    }

    async enterInformation(fname,lname,zip){
      await this.firstName.waitFor({ state: "visible" });
      await this.firstName.fill(fname)
      await this.lastName.fill(lname)
      await this.postalCode.fill(zip)

    }

   async goToCheckOutOverView(){
    await this.clickOnButton("continue")

   }
}