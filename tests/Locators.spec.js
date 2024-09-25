import { test, expect } from '@playwright/test'


test('playwright special locators', async ({ page }) => {


    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByRole("button", { name: 'Submit' }).click();
    await page.getByRole("link", { name: "Shop" }).click();
    await page.locator("app-card").filter({ hasText: 'Nokia Edge' }).getByRole("button").click();
    await page.getByText('Item').click({ button: 'right' });

    await page.getByLabel('Choose a color').selectOption('blue');

    expect(page.getByLabel('Subscribe to newsletter')).toBeChecked();

    

//OTHERS :  


//ID
//Name
//ClassName
//CSS Selector
//XPath
//Text Content
//TagName


});



