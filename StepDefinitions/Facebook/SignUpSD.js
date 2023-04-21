const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const moment = require("moment");
const Homepage = require('../../Pages/Facebook/Homepage');
const SignupPage = require('../../Pages/Facebook/SignupPage');

const homepage = new Homepage();
const signuppage = new SignupPage();


Given(/^I am on facebook homepage$/, async function () {
    await browser.url('/');
});

Given(/^I click on Create New Account button$/, async function() {
    await homepage.clickCreateNewAccountBtn();
    await signuppage.waitForSignUpForm();
});

/**
 * 1. if we want to capture any data from glue-code in a variable
 *  then surround it by a parenthesis, and create variable(s)
 * 
 * 2. If any thing can change in Gherkin. 
 *  So in glue-code, pls replace that with .+
 */
// When(/^I enter "(.+)" as Firstname$/, async function(fname) {
//     await signuppage.enterFirstName(fname);
// });

// When(/^I enter "(.+)" as Lastname$/, async function(lname) {
//     await signuppage.enterLastName(lname);
// });

// When(/^I enter "(.+)" as phone number$/, async function(mobileOrEmail) {
//     await signuppage.enterMobileOrEmail(mobileOrEmail);
// });

// When(/^I enter "(.+)" as New password$/, async function(newPwd) {
//     await signuppage.enterNewPassword(newPwd);
// });

// When(/^I enter "(.+)" as birthdate$/, async function(bDate) {
//     await signuppage.selectBirthDate(bDate);
// });

When(/^I (enter|select) "(.+)" as (Firstname|Lastname|phone number|New password|birthdate)$/, async function(action, data, field) {
    switch (field) {
        case 'Firstname':
            await signuppage.enterFirstName(data);
            break;
        case 'Lastname':
            await signuppage.enterLastName(data);
            break;
        case 'phone number':
            await signuppage.enterMobileOrEmail(data);
            break;
        case 'New password':
            await signuppage.enterNewPassword(data);
            break;
        case 'birthdate':
            await signuppage.selectBirthDate(data);
            break;
        default:
            break;
    }
});


When(/^I click "Sign Up" button$/, async function() {
    await signuppage.clickSignUpBtn();
});

Then(/^I verify gender error is displayed$/, async function () {
    const isErrDisplayed = await signuppage.isGenderErrorDisplayed();
    expect(isErrDisplayed, 'Gender error is NOT displayed').to.be.true;
});

Then(/^I verify (.+) field is empty$/, async function (fieldName) {
    let isFieldEnabled = false;
    switch (fieldName) {
        case 'firstname':
            isFieldEnabled = await signuppage.isFirstNameEmpty();
            break;
        case 'lastname':
            isFieldEnabled = await signuppage.isLastNameEmpty();
            break;
        case 'phone number':
            isFieldEnabled = await signuppage.isMobileOrEmailEmpty();
            break;
        case 'new password':
            isFieldEnabled = await signuppage.isNewPasswordEmpty();
            break;
        default:
            break;
    }
    expect (isFieldEnabled, `"${fieldName}" field is NOT empty`).to.be.true;
});

Then(/^I verify current date is selected$/, async function () {
    const currentTimestamp = moment();
    
    const selectedMonth = await signuppage.getSelectedMonth();
    expect(selectedMonth, 'Current month is not selected').to.equal(currentTimestamp.format('MMM'));

    const selectedDay = await signuppage.getSelectedDay();
    expect(selectedDay, 'Current day is not selected').to.equal(currentTimestamp.format('D'));

    const selectedYear = await signuppage.getSelectedYear();
    expect(selectedYear, 'Current year is not selected').to.equal(currentTimestamp.format('yyyy'));

});

Then(/^I verify no gender is selected$/, async function () {
    const isFemaleGenderSelected = await signuppage.isFemaleGenderSelected();
    expect(isFemaleGenderSelected, 'Female gender is selected').to.be.false;

    const isMaleGenderSelected = await signuppage.isMaleGenderSelected();
    expect(isMaleGenderSelected, 'Male gender is selected').to.be.false;

    const isCustomGenderSelected = await signuppage.isCustomGenderSelected();
    expect(isCustomGenderSelected, 'Custom gender is selected').to.be.false;
});