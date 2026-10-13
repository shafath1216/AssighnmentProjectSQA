import {test,expect} from "@playwright/test"
import AuthPage from "../pageObjects/authPage.js"

test.describe("locked-out-user test",()=>{
    /** @type{AuthPage} */
    
    let authPage
    let username="locked_out_user"
    let password="secret_sauce"
    
    test.beforeEach(async({page})=>{
        authPage = new AuthPage(page)
        await page.goto("https://www.saucedemo.com/")
    })

    test("Test error message for locked_out_user",async({page})=>{
         await  authPage.login(username,password)
         const error= page.locator('[data-test="error"]');
         await expect(error).toBeVisible();
         await expect(error).toHaveText("Epic sadface: Sorry, this user has been locked out.")

       
    })

})


