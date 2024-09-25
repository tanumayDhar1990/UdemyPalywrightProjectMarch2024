const { test, expect } = require('@playwright/test');


test.only('Client app end to end flow ', async ({ page }) => {
  
  //fresh borswer

  const products = page.locator(".card-body");
  const productName = "IPHONE 13 PRO";

  await page.goto("https://rahulshettyacademy.com/client/");

  //Username password by fill method 


  await page.locator("#userEmail").fill("t2@gmail.com");
  //await page.locator("#userPassword").fill("Test@123!");
  await page.locator("//input[@id='userPassword']").fill("Test@123!");  //by using xpath rule .
  await page.locator("#login").click();


  //get the webpage title?


  const title = await page.title();
  
  //wait for page load 
  await page.waitForLoadState('networkidle');

  const count = await products.count();
  for (let i = 0; i < count; ++i) {
    if (await products.nth(i).locator("b").textContent() === productName) {
      //add to cart --

      await products.nth(i).locator("text= Add To Cart").click();
      console.log("Added to cart ..........")
      break;
    }
  }

  //click on add to cart icon 
  await page.locator("[routerlink*='cart']").click();

  //waiting for element to load on the page
  const boolean = await page.locator("div li").first().waitFor();

  //verify the actual item selected by user
  const bool = await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible();
  //return true if visible
  expect(bool).toBeTruthy();
  //click on checkout button
  await page.locator("text=Checkout").click();

  //await page.pause();
  //select country field - "fill " will not work so for type one after another letter use pressSequentially
  await page.locator("[placeholder*='Country']").pressSequentially("ind");
  const dropdown = await page.locator(".ta-results");
  await dropdown.waitFor();
  const optionsCount = await dropdown.locator("button").count();


  for (let i = 0; i < optionsCount; ++i) {

    const text = await dropdown.locator("button").nth(i).textContent();

    if (text === " India") 
    {
      await dropdown.locator("button").nth(i).click();
      break;
    }
  }

  await page.locator(".action__submit").click();

  //verify Thankyou for the order. text in the confirmation page

  const boolConfirmation = await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  console.log(boolConfirmation);

  //to grab the order ID

  const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  console.log(orderID);

  //go to order page

  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();

  //web table --

  const rows = page.locator("tbody tr"); 

  for (let i = 0; i < await rows.count(); i++) {
    const rowOrderID = await rows.nth(i).locator("th").textContent();
    if (orderID.includes(rowOrderID)) {
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }

  const orderIdSummaryPage = await page.locator(".col-text").textContent();
  console.log(expect(orderID.includes(orderIdSummaryPage)).toBeTruthy());

}
)
