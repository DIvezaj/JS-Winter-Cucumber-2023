const moment = require('moment');

class termsConditionsPage {

    //Locators
    termsOfServiceHeaderLocator = "//*[@id='_TERMS_OF_SERVICE']";
    lastRevisedDateLocator = 'span=Last revised: 01/01/23';

    //Functions
    async switchToTermsAndConditionsTab() {
        const windowHandles = await browser.getWindowHandles();
        for (const handle of windowHandles) {
        await browser.switchToWindow(handle);
            const currentUrl = await browser.getUrl();
             if (currentUrl.includes('terms-of-service')) {
                    break;
        }
    } return await $(this.termsOfServiceHeaderLocator).isDisplayed();
    }

async lastRevisedDate() {
    const dateElement = await $(this.lastRevisedDateLocator);
    const dateText = await dateElement.getText();
    const updatedText = dateText.substr(13);
    const dateDisplay = moment(updatedText, 'MMM DD, YYYY').format('MMddyy');
    expect(dateDisplay).to.equal(updatedText);
  }

}
module.exports = termsConditionsPage;