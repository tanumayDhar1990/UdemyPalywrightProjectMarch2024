class DashboardPage

{


    constructor(page)
    {
        this.page = page;
        this.products = page.locator(".card-body");
        this.cart = page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");

    }

    async searchProductAddCart(productName) {

        const count = await this.products.count();
        for (let i = 0; i < count; ++i) {
            if (await this.products.nth(i).locator("b").textContent() === productName) {


                //add to cart --

                await this.products.nth(i).locator("text= Add To Cart").click();
                console.log("Added to cart ..........")
                break;
            }
        }

    }


    async navigateToCart() {

        await this.cart.click();


    }

async navigateToOrders()
{
    await this.orders.click();
}





}

module.exports ={DashboardPage};  //to make available/ accessible  in entire project 