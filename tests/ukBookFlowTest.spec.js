import { test,page, expect, request } from '@playwright/test'

//import test from '../customFixture/baseFixture.js';
//import ENV from "../utils/env.js";
//import { SelectFlight } from '../pages/SelectFlight.js';
//import testdata from '../testdata/testData.json'
//import { PassengerDetails } from '../pages/PassengerDetails.js'
//const GenricMethod = require('../pages/GenericMethod.js');
//const nrHomePage = require('../tests/ukBookFlowTest.spec.js');
//import dotenv from "dotenv";
//const nrSearchPage = require('../pages/nrSearchPage.js');
// import { nrSearchPage } from "../pages/nrSearchPage.js";
import { nrHomePage } from '../pageobjects/nrHomePage.js';
//const { POManager } = require('../pageobjects/POManager');

//const nrHomePage=require('../pageobjects/nrHomePage.js');

let locale = process.env.ENV;
console.log(locale);

//const pomanager = new POManager(page);


// let testData = JSON.parse(JSON.stringify(require(`../testdata/${locale}/testData.json`)));
let testData;

test.describe('TUI UK Beach Book Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://st3.tuiprjuat.co.uk/');
    //const nrp = new nrHomePage(page);
    //const nrp = pomanager.getnrHomePage();
    await nrp.acceptCookie();
    await nrp.randonSearch();
  });

  test('MMB Checkin Flow with book flow', async ({ page }, testInfo) => {
    const nrp = new nrHomePage(page);
    await nrp.validateSearchResultsPage();
    await nrp.selectPackage();
    await nrp.unitDetailsPageToSummaryPage();
    await nrp.summaryPageToPassengerDetailsPage();
    await nrp.enterPassengerDetails();
    await nrp.paymentPage();
    await nrp.confirmationPage();
    await nrp.mmbLoginPageURL(page);
    await nrp.selectMMBLogin();
    await nrp.updateAPIform();
    await nrp.checkin();
  });


  test.afterEach(async ({ page }) => {
    await page.close();
  });
});