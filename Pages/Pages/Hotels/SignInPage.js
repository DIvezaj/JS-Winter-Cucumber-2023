class signInPageHotels {

//Locators
signUpLocator = '//a[text() = "Sign up, it’s free"]';
signInLocator = '//button[text() = "Sign in"]';
emailBoxLocator = '#loginFormEmailInput';
emailPromptPopUpLocator = '//h2[contains(text(), "15% on thousands")]'
emailErrorLocator = '//div [text()="Enter a valid email."]';
continueButtonLocator = '//button[text()="Continue"]';
termsAndConditionsLocator = "//a[@href='https://www.hotels.com/customer_care/terms_conditions.html']";
privacyStatementPageLocator = '//a[text()="Privacy Statement"]';

//Functions
async clickSignUpLink() {
    await $(this.signUpLocator).click();
}

async clickSignInLink() {
    await $(this.signInLocator).click();
}

async emailPromptUp() {
    await $(this.emailPromptPopUpLocator).isDisplayed();
}

async enterInvalidEmail() {
    await $(this.emailBoxLocator).setValue('test@testing');
}

async emailErrorDisplayed() {
    await $(this.emailErrorLocator).waitForDisplayed();
    return await $(this.emailErrorLocator).isDisplayed();
}

async clickContinueButton() {
    await $(this.continueButtonLocator).click();
}

async continueButtonEnabled() {
    await $(this.continueButtonLocator).waitForDisplayed();
    return await $(this.continueButtonLocator).isEnabled();
}

async clickPrivacyPage() {
    await $(this.privacyStatementPageLocator).waitForDisplayed();
    await $(this.privacyStatementPageLocator).click();
}

async clickTermsAndConditions() {
    await $(this.termsAndConditionsLocator).waitForDisplayed();
    await $(this.termsAndConditionsLocator).click();
}

}

module.exports = signInPageHotels;