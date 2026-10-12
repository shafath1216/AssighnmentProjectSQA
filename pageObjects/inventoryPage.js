import BasePage from "./basePage.js"
export default class InventoryPage extends BasePage{

    constructor(page){
        super(page);
       this.productlocator = this.page.locator('[data-test="inventory-item-name"]');
      this.productPrice=this.page.locator('[data-test="inventory-item-price"]');
     
       this.previousIndices = []
       this.productArray=[];
       this.totalPrice=0;

    }

   

   async selectRandomProducts(){
    
    await this.productlocator.first().waitFor({ state: 'visible' });
    let count=0
    const totalProducts = await this.productlocator.count();
    this.previousIndices = [];
    this.productArray = [];
    this.totalPrice = 0; 


    
    
    while (count<3){
        const randomIndex = Math.floor(Math.random() * totalProducts);
        if(!this.previousIndices.includes(randomIndex)){
          const productName= await this.productlocator.nth(randomIndex).innerText();
          const formattedName = productName.toLowerCase().replaceAll(' ', '-');
          const productPrice= await this.productPrice.nth(randomIndex).innerText();
          await this.page.locator(`[data-test="add-to-cart-${formattedName}"]`).click();
          const price = parseFloat(productPrice.replace("$", ""));
          this.totalPrice+=price;
          this.productArray.push(productName)
          this.previousIndices.push(randomIndex)
          count++;
        }
        
       
       
     }
   }


   async logout(){
     await this.page.locator('#react-burger-menu-btn').click()
     await this.page.locator('#logout_sidebar_link').click()
    }

   async goToCheckeoutInformation(){
     await this.page.locator("[data-test='shopping-cart-link']").click();
     await this.clickOnButton("Checkout")

   }

  getProductArray(){
    return this.productArray
  }

  getTotalPrice(){
    return this.totalPrice
  }

  async sortZtoA(){
    await this.page.locator(".product_sort_container").selectOption('za')

  }
  
async selectFirstProduct() {
         await this.productlocator.first().waitFor({state: "visible"});    
         const firstProductName = await this.productlocator.first().innerText();
           await this.productPrice.first().waitFor({ state: "visible"});
  
        const priceText = await this.page.locator('[data-test="inventory-item-price"]').first().innerText();
    
        this.productArray = [firstProductName];
        this.totalPrice = parseFloat(priceText.replace("$",""));
        const formattedName = firstProductName.toLowerCase().replaceAll(' ', '-');
         await this.page.locator(`[data-test="add-to-cart-${formattedName}"]`).click();
    }



}