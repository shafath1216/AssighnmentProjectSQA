import BasePage from "./basePage.js"
export default class AuthPage extends BasePage{

    constructor(page){
        super(page);
       this.username = this.page.locator("#user-name")
       this.password= this.page.locator("#password")
    }

  async enterusername(username){
     await this.username.fill(username)
  }

 async enterpassword(password){
    await this.password.fill(password)
 }

 async login(username,password){
   await this.enterusername(username)
   await this.enterpassword(password)
   await this.page.locator("#login-button").click()
 }

}