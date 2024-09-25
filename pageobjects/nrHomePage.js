const { expect } = require('@playwright/test');
//import test from '../customFixture/baseFixture.js';
//import ENV from "../utils/env.js";
import { time } from "console";
//import CONST from "../constants/constants.js";
import { type } from "os";
//let testData = JSON.parse(JSON.stringify(require('../testdata/testData.json')));
let passangersecondname = 'Kumar';
// let brn = this.bookingDate();
// let mmbdate = this.confirmationPage();
class nrHomePage {
    constructor(page) {
        this.page = page;
        /**
         * Below Locators are for Manage Cookie pop up
         */
        this.cookieLocator = '#cmCloseBanner';
        /**
         * Below Locators are for Search Panel
         */
        this.cookieLocator = '//button[@id="cmCloseBanner"]';
        this.inputAirport = 'input[name="Departure Airport"]';
        this.selectAirports = '[aria-label="airport list"] .SelectAirports__groupcontainer:nth-child(1) .SelectAirports__parentCheckbox .inputs__box';
        this.inputDestinations = 'input[name="Destination or Hotel"]';
        this.selectSuggestionDestination = '[aria-label="auto complete"] ul li[keydown="[object Object]"]:nth-child(2)';
        this.inputDate = 'input[name="Departure Date"]';
        this.monthNavigator = '[class*= "SelectDate__monthNavigator"]:nth-child(3)';
        this.flexiblity = '.SelectDate__flexibleOptions li:nth-child(1) .inputs__circle.inputs__alignmiddle';
        this.selectDates = '[class*="SelectDate__available"]';
        this.searchButton = '[class *= "Package__searchButton"] button';
        /**
         * Below Locators are for Search Results Page
         */
        this.searchCount = '[aria-label="holiday count"]';
        /* Select only Even Number (2, 4, 6 for desktop*/
        this.packageContinueButton = '(//div[@class="ResultListItemV2__buttonWrapper"]//a)[6]';
        this.selectFilterTUI = '//span[contains(text(),"TUI Airways")]//ancestor::label/*[contains(@class,"inputs__box")]';
        this.chat = '.sa-chat-tab';
        /**
        * Below Locators are for Unit Detail Page
        */
        this.accoomodationHeader = '[aria-label="accomodation header"] h1';
        this.unitContinueButton = '.buttons__button.buttons__primary.buttons__fill';
        /**
        * Below Locators are for Summary Page
        */
        this.summaryPageHeader = 'h1[aria-label="page heading"]'
        this.summaryContinueButton = '.ProgressbarNavigation__summaryButton button'
        /**
        * Below Locators are for Passenger Details Page
        */
        this.passengerPageHeader = '[aria-label="page heading"]';
        this.passengerTitle = '#paxInfoTitle0';
        this.passengerTitleOptions = '#paxInfoTitle0 option:nth-child(2)';
        this.passengerFirstName = '#paxInfoFirstName0';
        this.passengerSecondName = '#paxInfoLastName0';
        this.passengerDOBDay = '#paxInfoDobDay0';
        this.passengerDOBMonth = '#paxInfoDobMonth0';
        this.passengerDOBYear = '#paxInfoDobYear0';
        this.passengerAddressfinder = '#paxInfoAddressLookup';
        this.passengerAddressSelect = '.AutoComplete__autoCompleteWrapper ul li:nth-child(5)';
        this.passengerPhoneNumber = '#paxInfoTelephone';
        this.passengerEMailID = '#paxInfoEmail';
        this.passengerSecondTitle = '#paxInfoTitle1';
        this.passengerSecondFirstName = '#paxInfoFirstName1';
        this.passengerSecondSecondName = '#paxInfoLastName1';
        this.passengerImportantInformationCheck = '.ImportantInformation__content .inputs__box';
        this.passengerContinueButton = '.ContinueButton__continueButtonHandler button';
        /**
        * Below Locators are for Payment Page
        */
        this.paymentPageHeader = '.OppPaymentMfeComponent__oppTitleSection h2';
        this.paymentOption = '.PaymentOptions__paymentOptionsContainer .PaymentOptions__OptionPartial:nth-child(2) .inputs__radioButton.undefined';
        this.paymentMethod = 'ui-payments-methods.mfe-component p';
        this.cardPaymentHost = '#payments-component';
        this.cardPaymentNumber = '#number';
        this.cardPaymentName = '#cardholderName';
        this.cardPaymentExpireMonth = '#expirationMonth';
        this.cardPaymentExpireYear = '#expirationYear';
        this.cardPaymentCvv = '#cvv';
        this.conditionCheckboxHost = '#tui-termsandconditions';
        this.conditionCheckbox = 'main > div > div > label > div > i > svg > g > rect';
        this.paymentButton = '[data-testid="payment-button"]';
        /**
        * Below Locators are for Payment Page
        */
        this.confirmationPageHeader = '[aria-label="all booked"]';
        this.bookingReferance = '[itemprop="booking reference"]';
        this.leadPassengerName = '[aria-label="passenger 1 name"]';
        this.departureDate = '[aria-label="out: flight Details"] [aria-label="departure date"]';
        /**
        * Below Locators are for MMB Login Page
        */
        this.mmbLoginPageHeader = '.UI__pageTitle';
        this.mmbLoginButton = '[aria-label="button"]';
        /**
        * Below Locators are for MMB Summary page departure checkilist 
        */
        this.deparureChecklistHeader = '#YourDepartureChecklist__component [aria-label="section title"]';
        this.apiFormLink = '#addAdvancedPassengerInfoComponent_Link a';
        this.apiFormHeader = '#FAEPassenger-form .PassengerForm__CollapsibleSlabWrapper:nth-child(3) .SlabTitle__container .SlabTitle__container';
        this.apiPassenger1email = '[aria-label="lead passenger email"] input';
        this.apiPassenger1Gender = '#FAEPassenger-form .PassengerForm__CollapsibleSlabWrapper:nth-child(3) .GenderInput__genderButtonWrapper .inputs__radioButton.undefined:nth-child(1)';
        this.apiPassenger1TravelDocument = '[name="passengers.0.travelDocument"]';
        this.apiPassenger1TravelDocumentNumber = '[name="passengers.0.travelDocumentNumber"]';
        this.apiPassenger1ExpireDay = '#FAEPassenger-form .PassengerForm__CollapsibleSlabWrapper:nth-child(3) [aria-label="Expiry date"] [aria-label="day"]';
        this.apiPassenger1ExpireMonth = '#FAEPassenger-form .PassengerForm__CollapsibleSlabWrapper:nth-child(3) [aria-label="Expiry date"] [aria-label="month"]';
        this.apiPassenger1ExpireYear = '#FAEPassenger-form .PassengerForm__CollapsibleSlabWrapper:nth-child(3) [aria-label="Expiry date"] [aria-label="year"]';
        this.apiPassenger1IssuingCountry = '[name="passengers.0.issuingCountry"]';
        this.apiPassenger1Nationality = '[name="passengers.0.nationality"]';
        this.apiPassenger2Gender = '#FAEPassenger-form .PassengerForm__CollapsibleSlabWrapper:nth-child(4) .GenderInput__genderButtonWrapper .inputs__radioButton.undefined:nth-child(2)';
        this.apiPassenger2DOBDay = '#FAEPassenger-form .PassengerForm__CollapsibleSlabWrapper:nth-child(4) [aria-label="lead passenger DOB"] [aria-label="day"]';
        this.apiPassenger2DOBMonth = '#FAEPassenger-form .PassengerForm__CollapsibleSlabWrapper:nth-child(4) [aria-label="lead passenger DOB"] [aria-label="month"]';
        this.apiPassenger2DOBYear = '#FAEPassenger-form .PassengerForm__CollapsibleSlabWrapper:nth-child(4) [aria-label="lead passenger DOB"] [aria-label="year"]';
        this.apiPassenger2TravelDocument = '[name="passengers.1.travelDocument"]';
        this.apiPassenger2TravelDocumentNumber = '[name="passengers.1.travelDocumentNumber"]';
        this.apiPassenger2ExpireDay = '#FAEPassenger-form .PassengerForm__CollapsibleSlabWrapper:nth-child(4) [aria-label="Expiry date"] [aria-label="day"]';
        this.apiPassenger2ExpireMonth = '#FAEPassenger-form .PassengerForm__CollapsibleSlabWrapper:nth-child(4) [aria-label="Expiry date"] [aria-label="month"]';
        this.apiPassenger2ExpireYear = '#FAEPassenger-form .PassengerForm__CollapsibleSlabWrapper:nth-child(4) [aria-label="Expiry date"] [aria-label="year"]';
        this.apiPassenger2IssuingCountry = '[name="passengers.1.issuingCountry"]';
        this.apiPassenger2Nationality = '[name="passengers.1.nationality"]';
        this.submitApiFormButton = '.buttons__button.buttons__primary.buttons__fill'
        /**
        * Below Locators are for MMB Summary page Checkin 
        */
        this.outCheckinLink = '#onlineCheckIn_Link a';
        this.outCheckinSummaryPageHeader = '.content-width.page-title h1';
        this.outCheckinSummaryContinueButton = '.PaxDetails__buttonWrapper button';
        this.outCheckinProhibitedPageHeader = 'h1';
        this.outCheckinProhibitedPageCheckbox = '.ProhibitedItemsInfo__confirmationCheckBox label span.inputs__box';
        this.outCheckinProhibitedPageContinueButton = '.ContinueButton__container button';
        this.outCheckinConfirmationPageHeader = 'h1';
        this.outCheckinConfirmationPageLink = '#BacktoHome__component a:nth-child(1)';
        this.retCheckinLink = '#inboundOnlineCheckIn a';

    }



    async acceptCookie() {
        await this.page.locator(this.cookieLocator).click();
    }

    async selectAirport() {
        await this.page.locator(this.inputAirport).click();
        await this.page.locator(this.selectAirports).click();
    }

    async selectDestinations() {
        await this.page.locator(this.inputDestinations).type("Spain");
        await this.page.locator(this.selectSuggestionDestination).click();
        await this.page
    }

    async selectDate() {
        await this.page.locator(this.inputDate).click();
        // await this.page.locator(this.monthNavigator).click();
        await this.page.locator(this.flexiblity).click();
        await this.page.locator(this.selectDates).nth(0).click();
    }

    async searchPackage() {
        await this.page.locator(this.searchButton).click();
        const url = await this.page.url();
        console.log("\n Search Results Page URL: \n", url, "\n");
    }

    async randonSearch() {
        await this.selectAirport();
        await this.selectDestinations();
        await this.selectDate();
        await this.searchPackage();
    }
    /* 
    Search Sesults Page
    */
    async validateSearchResultsPage() {
        // await expect(this.page.locator(this.searchCount)).toBeVisible();
    }

    async selectPackage() {
        await this.page.locator(this.selectFilterTUI).click();
        await this.page.locator(this.packageContinueButton).click();
    }

    async unitDetailsPageToSummaryPage() {
        await expect(this.page.locator(this.accoomodationHeader)).toBeVisible();
        // await this.page.locator(this.accoomodationHeader).waitFor('attached');
        const url = await this.page.url();
        console.log("\n Unit Details Page URL: \n", url, "\n");
        await this.page.locator(this.unitContinueButton).click();
    }

    async validateFlightMeals() {
        await expect("", this.page.locator(this.summaryPageHeader)).toBeVisible();
        await this.page.locator(this.unitContinueButton).click();
    }

    async summaryPageToPassengerDetailsPage() {
        await expect("", this.page.locator(this.summaryPageHeader)).toBeVisible();
        await this.page.locator(this.summaryContinueButton).click();
    }

    async enterPassengerDetails() {
        await expect(this.page.locator(this.passengerPageHeader)).toBeVisible();
        await this.page.locator(this.passengerTitle).selectOption({ value: 'MR' });
        await this.page.locator(this.passengerFirstName).fill("Ravindra");
        await this.page.locator(this.passengerSecondName).fill(`${passangersecondname}`);
        await this.page.locator(this.passengerDOBDay).fill("17");
        await this.page.locator(this.passengerDOBMonth).fill("01");
        await this.page.locator(this.passengerDOBYear).fill("1982");
        await this.page.locator(this.passengerAddressfinder).fill("LU29UE");
        await this.page.locator(this.passengerAddressSelect).click();
        let phno = Math.floor(100000 + Math.random() * 900000);
        await this.page.locator(this.passengerPhoneNumber).fill(`1234${phno}`);
        await this.page.locator(this.passengerEMailID).fill(`ravindra.kumar@tui.co.uk`);
        await this.page.locator(this.passengerSecondTitle).selectOption({ value: 'MRS' });
        await this.page.mouse.wheel(0, 1000);
        await this.page.locator(this.passengerSecondFirstName).fill("Test");
        await this.page.locator(this.passengerSecondSecondName).fill("Test");
        await this.page.locator(this.passengerImportantInformationCheck).click();
        await this.page.locator(this.passengerContinueButton).click();
    }

    async paymentPage() {
        // await this.page.locator(this.paymentOption).click();
        await this.page.locator(this.cardPaymentNumber).fill("4456530000001005");
        await this.page.locator(this.cardPaymentName).fill("Test");
        await this.page.locator(this.cardPaymentExpireMonth).fill("02");
        await this.page.locator(this.cardPaymentExpireYear).fill("30");
        await this.page.locator(this.cardPaymentCvv).fill("321");
        await this.page.locator(this.conditionCheckbox).click();
        await this.page.locator(this.paymentButton).click();
    }

    async confirmationPage(page) {
        await this.page.waitForLoadState('load');
        await this.page.locator(this.bookingReferance).waitFor('attached');
        await this.getBookingReferanceNumber(page)
        await this.bookingDate(page);
        console.log("\n Booking Primary Passenger Second Name: ", `${passangersecondname}`);
    }

    async getBookingReferanceNumber(page) {
        let brn = await this.page.locator('[itemprop="booking reference"]').textContent();
        console.log("\n Booking Referance Number: ", brn);
        return brn
    }

    async bookingDate(page) {
        let booking_date = await this.page.locator(this.departureDate).textContent();
        const convertDateFormat = (dateStr) => {
            const [dayOfWeek, day, month, year] = dateStr.split(' ');
            const monthMap = {
                'Jan': '01',
                'Feb': '02',
                'Mar': '03',
                'Apr': '04',
                'May': '05',
                'Jun': '06',
                'Jul': '07',
                'Aug': '08',
                'Sep': '09',
                'Oct': '10',
                'Nov': '11',
                'Dec': '12'
            };
            const dayMap = {
                '1': '01',
                '2': '02',
                '3': '03',
                '4': '04',
                '5': '05',
                '6': '06',
                '7': '07',
                '8': '08',
                '9': '09',
                '10': '10',
                '11': '11',
                '12': '12',
                '13': '13',
                '14': '14',
                '15': '15',
                '16': '16',
                '17': '17',
                '18': '18',
                '19': '19',
                '20': '20',
                '21': '21',
                '22': '22',
                '23': '23',
                '24': '24',
                '25': '25',
                '26': '26',
                '27': '27',
                '28': '28',
                '29': '29',
                '30': '30',
                '31': '31'
            };

            const monthNumeric = monthMap[month];
            const dayset = dayMap[day];
            const final = `${dayset} ${monthNumeric} ${year}`;
            return final;
        };
        const formattedDate = convertDateFormat(booking_date);
        const mmbdate = formattedDate.replace(/\s+/g, '/').substring(0, 10);
        console.log("\n Booking Departure Date: ", mmbdate);
        return mmbdate;
    }

    async mmbLoginPageURL(page) {
        const mmbbookingReferance = await this.getBookingReferanceNumber(page);
        const mmbdepartureDate = await this.bookingDate(page)
        const mmbURL = `https://hybdv9.tuiprjuat.co.uk/destinations/your-account/managemybooking/login?departureDate=${mmbdepartureDate}&bookingRefereneceId=${mmbbookingReferance}&secPassengerName=${passangersecondname}`;
        console.log("\n MMB Login page URL: \n", mmbURL);
        await this.page.goto(mmbURL);
        return mmbURL;
    }

    async selectMMBLogin() {
        await expect(this.page.locator(this.mmbLoginPageHeader)).toBeVisible();
        await this.page.locator(this.mmbLoginButton).click();
    }

    async updateAPIform() {
        await this.page.waitForLoadState('load');
        await this.page.locator(this.deparureChecklistHeader).waitFor('attached');
        // await expect(this.page.locator(this.deparureChecklistHeader)).toBeVisible();
        await this.page.locator(this.apiFormLink).click();
        // await this.page.locator(this.apiFormHeader).waitFor('attached');
        // await expect(this.page.locator(this.apiFormHeader)).toBeVisible();
        await this.page.locator(this.apiPassenger1email).fill(`ravindra.kumar@tui.co.uk`);
        await this.page.locator(this.apiPassenger1Gender).click();
        await this.page.locator(this.apiPassenger1TravelDocument).selectOption({ value: 'Passport' });
        await this.page.locator(this.apiPassenger1TravelDocumentNumber).fill(`123445284`);
        await this.page.locator(this.apiPassenger1ExpireDay).fill(`17`);
        await this.page.locator(this.apiPassenger1ExpireMonth).fill(`01`);
        await this.page.locator(this.apiPassenger1ExpireYear).fill(`2033`);
        await this.page.locator(this.apiPassenger1IssuingCountry).selectOption({ value: 'GB' });
        await this.page.locator(this.apiPassenger1Nationality).selectOption({ value: 'GB' });
        /* Passenger 2 details*/
        await this.page.locator(this.apiPassenger2Gender).click();
        await this.page.locator(this.apiPassenger2DOBDay).fill(`04`);
        await this.page.locator(this.apiPassenger2DOBMonth).fill(`02`);
        await this.page.locator(this.apiPassenger2DOBYear).fill(`1985`);
        await this.page.locator(this.apiPassenger2TravelDocument).selectOption({ value: 'Passport' });
        await this.page.locator(this.apiPassenger2TravelDocumentNumber).fill(`123436853`);
        await this.page.locator(this.apiPassenger2ExpireDay).fill(`04`);
        await this.page.locator(this.apiPassenger2ExpireMonth).fill(`02`);
        await this.page.locator(this.apiPassenger2ExpireYear).type(`2033`);
        await this.page.keyboard.press('Tab');
        await this.page.locator(this.apiPassenger2IssuingCountry).selectOption({ value: 'GB' });
        await this.page.locator(this.apiPassenger2Nationality).selectOption({ value: 'GB' });
        /* Submit Form*/
        await this.page.locator(this.submitApiFormButton).click();
    }

    async checkin() {
        await this.checkinOut();
        await this.checkinRet();
        console.log("\n \n Soft Checkin is completed!!!");
    }

    async checkinOut() {
        await this.page.locator(this.deparureChecklistHeader).waitFor('attached');
        await this.page.locator(this.outCheckinLink).click();
        await expect(this.page.locator(this.outCheckinSummaryPageHeader)).toBeVisible();
        await this.page.locator(this.outCheckinSummaryContinueButton).click();
        /* Checkin Probihited Page*/
        await expect(this.page.locator(this.outCheckinProhibitedPageHeader)).toBeVisible();
        await this.page.locator(this.outCheckinProhibitedPageCheckbox).click();
        await this.page.locator(this.outCheckinProhibitedPageContinueButton).click();
        /* Checkin Conformation Page*/
        await expect(this.page.locator(this.outCheckinConfirmationPageHeader)).toBeVisible();
        await this.page.locator(this.outCheckinConfirmationPageLink).click();
    }

    async checkinRet() {
        await this.page.locator(this.deparureChecklistHeader).waitFor('attached');
        await this.page.locator(this.retCheckinLink).click();
        await expect(this.page.locator(this.outCheckinSummaryPageHeader)).toBeVisible();
        await this.page.locator(this.outCheckinSummaryContinueButton).click();
        /* Checkin Probihited Page*/
        await expect(this.page.locator(this.outCheckinProhibitedPageHeader)).toBeVisible();
        await this.page.locator(this.outCheckinProhibitedPageCheckbox).click();
        await this.page.locator(this.outCheckinProhibitedPageContinueButton).click();
        /* Checkin Conformation Page*/
        await expect(this.page.locator(this.outCheckinConfirmationPageHeader)).toBeVisible();
        await this.page.locator(this.outCheckinConfirmationPageLink).click();
        await this.page.locator(this.deparureChecklistHeader).waitFor('attached');
    }
}
module.exports = nrHomePage