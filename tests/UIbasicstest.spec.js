const { test, expect } = require('@playwright/test');


test('Invalid Login Credential ', async ({ browser }) => {
    //fresh borswer 
    const context = await browser.newContext();

    const page = await context.newPage();

    //Incorrect username/password. scenario
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("learning123");
    await page.locator("#signInBtn").click();

    console.log(await page.locator("[style*='block']").textContent());

    //Assertions -
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');


});

test('Valid login credential  ', async ({ browser }) => {

    const context = await browser.newContext();

    const page = await context.newPage();

    //web page launched
    await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");

    //title validation 
    console.log(await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy"));


    //locator find
    const usernamenew = page.locator("#username");
    //Valid Username /password  scenario
    await usernamenew.fill("rahulshettyacademy");  //variable declaration above as username constant 
    await page.locator("#password").fill("learning");
    await page.locator("#signInBtn").click();
    await page.waitForTimeout(3000);

    console.log("login succesfull");
    //.card-body a has 4 common element 

    await page.locator(".card-body a").nth(1).textContent();
    //for getting particular element , its stores in array so nth (0) will 
    //give first index value which is iphone X

    //console.log(await page.locator(".card-body a").first().textContent());

    console.log(await page.locator(".card-body a").nth(0).textContent());

    const cardTitels = page.locator(".card-body a");

    console.log(await cardTitels.allTextContents());
})
test('Locators selection ', async ({ browser }) => {
    //fresh borswer 
    const context = await browser.newContext();

    const page = await context.newPage();

    //Incorrect username/password. scenario
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("learning123");
    await page.locator("#signInBtn").click();

    console.log(await page.locator("[style*='block']").textContent());

    //Assertions -
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

   


});

test('UI Controls ', async ({ page }) => {


    await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");
    const usernamenew = page.locator("#username");

    await usernamenew.fill("rahulshettyacademy");  //variable declaration above as username constant 
    await page.locator("#password").fill("learning");
    //dropdown handle
    const dropDown = page.locator("select.form-control");

    await dropDown.selectOption("consult");
    await console.log("Consultation is selected..........");
    //radio button select 

    await page.locator(".radiotextsty").last().click();
    await console.log("User button is selected..........");

    console.log(await (page.locator(".radiotextsty").last().isChecked()));

    expect(await page.locator(".radiotextsty").last().isChecked()).toBeTruthy();


    await page.locator("#okayBtn").click();

    //await page.pause();


})

test('Child window handling  ', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");

    //blinking link 

    const link = page.locator("[href*='documents-request']");

    await expect(link).toHaveAttribute("class", "blinkingText");

    console.log("Blinking text found ....");

    //navigate to new child window page
    const [newPage] = await Promise.all(
        [
            //listen for a new page - pending , rejected , fulfilled 
            context.waitForEvent('page'),
            link.click(),

        ])
    //verify the text in the child window page newPage object 
    const text = await newPage.locator(".red").textContent();
    console.log(text);



})




