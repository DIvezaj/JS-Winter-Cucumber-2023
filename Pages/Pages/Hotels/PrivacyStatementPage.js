const moment = require('moment');

class privacyStatementPage {

    //Locator
    lastUpdatedLocator = '//p[contains(text(), "st Updat")]';

    //Function

    async isPrivacyStmtOpeningNewTab() {
    const newTabUrl = 'https://www.hotels.com/customer_care/privacy.html';
    const allHandles = await browser.getWindowHandles();
    for (const handle of allHandles) {
        await browser.switchToWindow(handle);
        const currentUrl = await browser.getUrl();
        console.log(`Current URL= ${currentUrl}`);
        if (currentUrl === newTabUrl) {
            break;
        }
    }
    return await $(this.privacyStmtNewTab).isDisplayed();
}

async lastRevisedDate() {
    const dateElement = await $(this.lastUpdatedLocator);
    const dateText = await dateElement.getText();
    const dateDisplay = moment(dateText.substr(13), 'MMMM DD, YYYY').format('MM/DD/YY');
    expect(dateDisplay).to.equal(moment().format('MM/DD/YY'));
}

}
module.exports = PrivacyStatementPage;