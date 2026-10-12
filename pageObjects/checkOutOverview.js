import BasePage from "./basePage.js"
export default class CheckOutOverviewPage extends BasePage{

    constructor(page){
        super(page);
          this.productlocator = this.page.locator('[data-test="inventory-item-name"]');
          this.productPrice=this.page.locator('[data-test="inventory-item-price"]');
          this.actualProductArray=[]
          this.totalProducts
          this.actualProductTotalPrice=0
    }

    async getActualProductArray(){
       await this.productlocator.first().waitFor({
        state: "visible",
        timeout: 15000
    });

    // Wait until the checkout products actually render
    await this.productlocator.first().waitFor({
        state: "visible",
        timeout: 15000
    });

    this.totalProducts = await this.productlocator.count();

    console.log("Overview URL:", this.page.url());
    console.log("Overview product count:", this.totalProducts);

    this.actualProductArray = [];

    for (let i = 0; i < this.totalProducts; i++) {
        const productName =
            await this.productlocator.nth(i).innerText();

        this.actualProductArray.push(productName);
    }

    return this.actualProductArray;
    }
    
    async getActualTotalPrice(){
        this.actualProductTotalPrice=0;
        for (let i=0;i<this.totalProducts;i++){
        const productPrice= await this.productPrice.nth(i).innerText();
        const price = parseFloat(productPrice.replace("$", ""));
        this.actualProductTotalPrice+=price;
     }
      return this.actualProductTotalPrice;
    }

    

}