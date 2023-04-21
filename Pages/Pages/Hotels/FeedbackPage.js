class FeedbackPage {

    //Locators
    feedbackHeaderLocator = '//span[text()="Overall Satisfaction with Page"]';
    feedbackSubmitLocator = '//button[text()="Submit"]';
    twoStarRatingLocator = '//span[@data-localization="ratings-2"]';
    commentBoxLocator = '//textarea[contains(@placeholder, "enter your comments")]';
    errorMessageLocator = '//p[contains(text(), "highlighted below")]';
    redLineErrorLocator = '//fieldset[contains(@class, "question-group required")]';
    howLikelytoReturnSurveyLocator = '//select[@id="will-you-return"]';
    priorVisitYesSurveyLocator = '//label[@for="booked-here-before-yes"]';
    accomplishOnThisPageLocator = '//span[@data-localization="were-you-successful-yes"]';
    thankYouHeadingLocator = '//h5[@data-localization="thank-you-heading"]';


    //Functions
    async isFeedBackPageInNewTab() {
        const newTabUrl = 'https://www.directword.io/survey/domain=www.hotels.com/locale=en_US?metadata=%7B%22url%22%3A%22https%3A%2F%2Fwww.hotels.com%2F%3Fpos%3DHCOM_US%26locale%3Den_US%22%2C%20%22duaid%22%3A%20%224ad43dad-b3b4-4e30-87a0-a3557f1b8d54%22%7D';
        const allHandles = await browser.getWindowHandles();
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const currentUrl = await browser.getUrl();
            console.log(`Current URL= ${currentUrl}`);
            if (currentUrl === newTabUrl) {
                break;
            }
        }
        return await $(this.feedbackHeaderLocator).isDisplayed();
    }

    async clickSubmitButton() {
        await $(this.submitButtonLocator).click();
    }

    async isErrorShown() {
        return await $(this.errorMessageLocator).isDisplayed();
    }

    async starRatingSelect() {
        await $(this.twoStarRatingLocator).click();
    }

    async enterComments() {
        await $(this.commentBoxLocator).setvalue("TESTING");
    }

    async redLineErrorDisplay() {
        await $(this.redLineErrorLocator).isDisplayed();
    }

    async howLikelyToReturnSelector() {
        await $(this.howLikelytoReturnSurveyLocator).selectbyAttribute("value", "Unsure");
    }

    async haveYouBookedHereSelector() {
        await $(this.priorVisitYesSurveyLocator).click();
    }

    async isThankYouMessageDisplayed() {
        return await $(this.thankYouHeadingLocator).isDisplayed();
    }

}

module.exports = FeedbackPage;