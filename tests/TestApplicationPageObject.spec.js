const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../Utils/TestApplicationPOTestData.json')));


test('Client app end to end flow ', async ({ page }) => {


  const products = page.locator(".card-body");
  //calling Page object manager class which invokes & creates object of all page objects classes 
  
  const pomanager = new POManager(page);

  // Login page 
  const loginpage = pomanager.getLoginPage();
  await loginpage.goToPage(); 
  await loginpage.validLogin(dataset.username, dataset.password);
  console.log("Logged in successfull .....");


  //dashboard page 
  const dashboardpage = pomanager.getDashboardPage();
  await dashboardpage.searchProductAddCart(dataset.productName);
  await dashboardpage.navigateToCart();
  await page.screenshot({ path: 'CartPagescreenshot.png' });
  console.log("Dashboard page loaded  .....");


  //Cart page 
  const cartPage = pomanager.getCartPage();
  await cartPage.VerifyProductIsDisplayed(dataset.productName);
  await cartPage.Checkout();
  console.log("Cart page item added .....");
  

  //payment page
  const ordersReviewPage = pomanager.getOrdersReviewPage();
  await ordersReviewPage.searchCountryAndSelect("ind", "India");
  const orderId = await ordersReviewPage.SubmitAndGetOrderId();
  console.log(orderId);
  await dashboardpage.navigateToOrders();
  console.log("Payment page details & Naviagted to all orders page .....");

  //Confirmation page

  const ordersHistoryPage = pomanager.getOrdersHistoryPage();
  await ordersHistoryPage.searchOrderAndSelect(orderId);
  expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
  console.log("Order succesfully placed.....");

}
);
