export default class BasePage{

    constructor(page){
        this.page=page;
    }

    button(button){
    return this.page.getByRole("button",{name:button})
   }
   

   async clickOnButton(button){
    await this.button(button).click()
   }

      async resetState(){
        const menuBtn = this.page.locator('#react-burger-menu-btn');
        await menuBtn.click();
        const resetLink = this.page.locator('#reset_sidebar_link');
        await resetLink.waitFor({ state: 'visible' });
        await resetLink.click();
        const closeMenuBtn = this.page.locator('#react-burger-cross-btn');
        await closeMenuBtn.waitFor({ state: 'visible' });
        await closeMenuBtn.click();
   }

async logout() {
    await this.page.locator("#react-burger-menu-btn").click();

    const logoutLink = this.page.locator("#logout_sidebar_link");

    await logoutLink.waitFor({
        state: "visible"
    });

    await logoutLink.click();
}
}