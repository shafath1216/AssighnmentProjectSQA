import BasePage from "./basePage.js";

export default class SuccessPage extends BasePage {

    constructor(page){
        super(page);
        this.successMessageLocator=this.page.locator('[data-test="complete-header"]')
    }

 async getSuccessMessage(){
    const successMessage = await this.successMessageLocator.innerText()
    return successMessage
 }

}