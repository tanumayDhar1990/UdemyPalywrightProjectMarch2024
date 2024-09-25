import { test, expect } from '@playwright/test'


test('Calender validation', async ({ page }) => {


    const month = "6";
    const date = "22";
    const year = "2027";



    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    //click on calender box
    await page.locator(".react-date-picker__inputGroup").click();
    //click  on 
    await page.locator(".react-calendar__navigation__label__labelText").click();
    await page.locator(".react-calendar__navigation__label__labelText").click();
    //click year
    await page.getByText(year).click();

    //month click
    await page.locator(".react-calendar__year-view__months__month").nth(Number(month) - 1).click();
    //date click

    await page.locator("//abbr[text()='" + date + "']").click();











})