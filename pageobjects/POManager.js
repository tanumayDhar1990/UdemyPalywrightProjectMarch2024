const { DashboardPage } = require('./DashboardPage');
const { LoginPage } = require('./LoginPage');
const {CartPage}=require('./CartPage');
const {OrdersReviewPage} = require('./OrdersReviewPage');
const {OrdersHistoryPage} = require('./OrdersHistoryPage');
//const {nr}= require('./nrHomePage');



class POManager {


    constructor(page) {
        this.page = page;
        this.loginpage = new LoginPage(this.page);
        this.dashboardpage = new DashboardPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.ordersReviewPage = new OrdersReviewPage(this.page);
        this.ordersHistoryPage = new OrdersHistoryPage(this.page);
        //this.nr = new nrHomePage(this.page);


    }

    getLoginPage() {

        return this.loginpage;
    }

    getDashboardPage() {

        return this.dashboardpage;
    }
    getCartPage()
    {
        return this.cartPage;
    }

    getOrdersReviewPage()
{
    return this.ordersReviewPage;
}
getOrdersHistoryPage()
{
    return this.ordersHistoryPage;
}
//getnrHomePage()
//{
    //return this.nr();
//}

}

module.exports = { POManager };


