import {test,expect} from "@playwright/test"
import AuthPage from "../pageObjects/authPage.js"
import InventoryPage from "../pageObjects/inventoryPage.js"
import CheckOutInformationPage from "../pageObjects/checkOutInformation.js"
import CheckOutOverviewPage from "../pageObjects/checkOutOverview.js"
import SuccessPage from "../pageObjects/successPage.js"


test.describe("performance_glitch_user test",()=>{
    /** @type{AuthPage} */
     let authPage
    
    /** @type{InventoryPage} */
    let inventoryPage
    
    /** @type{CheckOutInformationPage} */
     let checkOutInformationPage
    
    /** @type{CheckOutOverviewPage} */
     let checkOutOverviewPage

    /** @type{SuccessPage} */ 
      
     let successPage
      

    let firstName="Shafath"
    let lastName= "Mahmud Choudhury"
    let zip="1229"
    let username="performance_glitch_user"
    let password="secret_sauce"
    let expectedProductArray
    let actualProductArray 
    let  expectedTotalPrice
    let actualTotalPrice
    
    test.beforeEach(async({page})=>{
        authPage = new AuthPage(page)
        inventoryPage = new InventoryPage(page)
        checkOutInformationPage= new CheckOutInformationPage(page)
        checkOutOverviewPage= new CheckOutOverviewPage(page)
        successPage= new SuccessPage(page)
        await page.goto("https://www.saucedemo.com/")
    })

    test("product names and total price and successful purchase",async({page})=>{
         await  authPage.login(username,password)
         await inventoryPage.resetState()
         await  inventoryPage.sortZtoA()
         await inventoryPage.selectFirstProduct();
         expectedProductArray=inventoryPage.getProductArray();
         expectedTotalPrice = inventoryPage.getTotalPrice();
         await inventoryPage.goToCheckeoutInformation();
         await checkOutInformationPage.enterInformation(firstName,lastName,zip)
         await checkOutInformationPage.goToCheckOutOverView();
         actualProductArray = await checkOutOverviewPage.getActualProductArray()
         actualTotalPrice = await checkOutOverviewPage.getActualTotalPrice()
         expect([...actualProductArray].sort()).toEqual([...expectedProductArray].sort());
        expect(actualTotalPrice).toBe(expectedTotalPrice);
        await checkOutOverviewPage.clickOnButton("finish");
        expect(await successPage.getSuccessMessage()).toEqual('Thank you for your order!')
        await successPage.resetState();
        await successPage.logout();


        
       
    })

})
