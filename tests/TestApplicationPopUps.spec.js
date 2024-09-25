const {test , expect}=require('@playwright/test')

test.only("pop up validations", async ({page}) =>

{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.goto("https://google.com");
    //await page.goBack();
    //await page.goForward();



    //await methods //hidden , visible verify
    await expect (page.locator("//input[@id='displayed-text']")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect (page.locator("//input[@id='displayed-text']")).toBeHidden();


                                         
    // Alert handling
    await page.pause();
    await page.locator("#confirmbtn").click();

    page.on("dialog" , dialog => dialog.accept());


// MOuse hover- 

    await page.locator("#mousehover").hover();

//Frame

    const newFrame =  page.frameLocator("#courses-iframe");


    




}






)


