const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const moment = require('moment');
const Homepage = require('../../Pages/Pages/Hotels/Homepage');
const SignInPage = require('../../Pages/Pages/Hotels/SignInPage');
const TermsConditionsPage = require('../../Pages/Pages/Hotels/TermsConditionsPage');
const PrivacyStatementPage = require('../../Pages/Pages/Hotels/PrivacyStatementPage');
const SignInPage = require('../../Pages/Pages/Facebook/signInPageHotels');
const termsConditionsPage = require('../../Pages/Pages/Hotels/TermsConditionsPage');
const homepageHotels = require('../../Pages/Pages/Hotels/Homepage');

const Homepage = new Homepage();
const SignInPage = new SignInPage();
const TermsConditionsPage = new TermsConditionsPage();
const PrivacyStatementPage = new PrivacyStatementPage();

Given (/^I am on the hotels.com homepageHotels.$/, async function() {
    await Browser.url('/');
});

When(/^I click on the Sign In link$/, async function () {
  await signInPageHotels.clickSignInLink();
  await signInPageHotels.emailPromptPopup();
  browser.pause(5000)
});

When(/^I click on the Sign Up button$/, async function () {
  await signInPageHotels.clickSignUpLink();
  browser.pause(5000);
});

And(/^I enter "(.+)" as my email address$/, async function () {
  await signInPageHotels.enterInvalidEmail('test@testing');
  browser.pause(5000)
});

When(/^I click the Continue button$/, async function () {
  await signInPageHotels.clickContinueButton();
});

Then(/^I should see an invalid email error message displayed'$/, async function () {
    const errIsDisplayed = await signInPageHotels.emailErrorDisplayed();
    expect(errIsDisplayed, 'Email error is NOT displayed').to.be.true;
});

Then(/^I should see the Continue button displayed but not enabled$/, async function () {
    const isEnabled = await signInPageHotels.continueButtonEnabled();
    expect(isEnabled, 'Continue button is Enabled').to.be.false;
});

When (/^I click on the Terms and Conditions link$/, async function(){
    await SignInPage.clickTermsAndConditions();
})

Then (/^I verify Terms and Conditions is open in a new tab$/, async function(){
    const allHandles = await termsConditionsPage.switchToTermsAndConditionsTab();
    expect(allHandles.length, "terms and conditions is NOT open in a new tab").to.equal(2);
})

Then (/^I Verify the Revised date is in the correct format$/, async function(){
    const revisedDate = await TermsConditionsPage.lastRevisedDate();
    expect(revisedDate, 'Date is not 01/01/23').to.equal('01/01/23');
})

When (/^I click on the Privacy link$/, async function (){
    await SignInPage.clickPrivacyPage();
})

Then (/^I should see the "Privacy" page open in a new tab$/, async function(){
    const allHandles = await PrivacyStatementPage.isPrivacyStmtOpeningNewTab();
    expect(allHandles.length, "privacy tab was not opened in a new tab").to.equal(3);
})

Then (/^I should see the updated date in the correct format in privacy tab$/, async function(){
    const revisedDatePrivacy = await PrivacyStatementPage.lastRevisedDate();
    expect (revisedDatePrivacy, "date is not 12/20/22").to.equal('12/20/22');
})

When (/^I click on the Travelers button$/, async function (){
    await homepageHotels.clickTravelersButton();
})

And (/^I select 6 Adults$/, async function(){
    await homepageHotels.addAdults();
    await homepageHotels.addAdults();
    await homepageHotels.addAdults();
    await homepageHotels.addAdults();
})

And (/^I select 3 children$/, async function(){
    await homepageHotels.addChildren();
    await homepageHotels.addChildren();
    await homepageHotels.addChildren();
})

And (/^I select the first childs age as 4$/, async function(){
    await homepageHotels.setChild1Age();
})

And (/^I select the second childs age as Under 1$/, async function(){
    await homepageHotels.setChild2Age();
})

And (/^I select the third childs age as 7$/, async function(){
    await homepageHotels.setChild3Age();
})

And (/^I click done$/, async function(){
    await homepageHotels.clickCalendarDoneButton();
})

Then (/^Then I should see the total number of travelers matches the sum of adults and children selected$/, async function(){
    const totalPeople = await homepageHotels.getTravelersCount();
    expect (totalPeople, "total people does not equal 9").to.equal(9);
})

When (/^I click on the English language button$/, async function(){
    await homepageHotels.clickEnglishButton();
})

And (/^I select Español in the Language dropdown$/, async function(){
    await homepageHotels.selectLanguageDropDownEspanol();
})

And (/^I click the Save button$/, async function(){
    await homepageHotels.saveEnglishButton();
})

Then (/^Then I should see the Español language displayed$/, async function(){
    await homepageHotels.verifyEspanolDisplay();
})

When (/^When I click on the Español language$/, async function(){
    await homepageHotels.clickEspanolButton();
})

Then (/^I select English in the Language dropdown$/, async function(){
    await homepageHotels.selectLanguageDropDownEnglish();
})

And (/^I click the Guardar button$/, async function (){
    await homepageHotels.saveEspanolButton();
})

Then (/^I should see the English language displayed$/, async function(){
    await homepageHotels.verifyEnglishDisplay();
})