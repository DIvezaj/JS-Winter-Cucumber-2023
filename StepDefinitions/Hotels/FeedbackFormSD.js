const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const moment = require('moment');
const Homepage = require('../../Pages/Pages/Hotels/Homepage');
const signInPageHotels = require('../../Pages/Pages/Hotels/SignInPage');
const FeedbackPage = require('../../Pages/Pages/Hotels/FeedbackPage');
const signInPageHotels = require('../../Pages/Pages/Hotels/SignInPage');
const FeedbackPage = require('../../Pages/Pages/Hotels/FeedbackPage');
const Homepage = new Homepage();
const signInPageHotels = new signInPageHotels
const FeedbackPage = new FeedbackPage


Given (/^I am on the hotels.com homepageHotels.$/, async function() {
    await Browser.url('/');
});

When(/^I click on the Sign In link$/, async function () {
    await signInPageHotels.clickSignInLink();
    await signInPageHotels.emailPromptPopup();
    browser.pause(5000)
  });

Then(/^I click on "Feedback"$/, async function (){
    await signInPageHotels.clickFeedbackButton();
});

And (/^I submit the form without filling any required fields$/, async function (){
    await FeedbackPage.clickSubmitButton();
})

Then (/^I should see an error message "Please fill in the required information highlighted below."$/, async function(){
    const errorPopUp = await FeedbackPage.isErrorShown();
    expect (errorPopUp, 'Error message did not appear').to.be.true;
})

And(/^I Verify red-dotted line is displayed around star-section.$/, async function () {
    const redLine = await Feedbackpage.redLineErrorDisplay();
    expect(redLine, 'Red line did not appear').to.be.true;
});
