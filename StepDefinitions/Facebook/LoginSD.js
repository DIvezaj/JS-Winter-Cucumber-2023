const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require('../../Pages/Facebook/Homepage');
const Loginpage = require('../../Pages/Facebook/Loginpage');

const homepage = new Homepage();
const loginpage = new Loginpage();


When(/^I enter (.+) as login (username|password)$/, async function (loginData, loginField) {
    switch (loginField) {
        case 'username':
            await homepage.enterLoginEmail(loginData);
            break;
        case 'password':
            await homepage.enterLoginPassword(loginData);
            break;
        default:
            break;
    }

});


When(/^I click login button$/, async function () {
    await homepage.clickLoginButton();
})

Then(/^I verify login error is displayed$/, async function () {
    const isErrDisplayed = await loginpage.isLoginErrorDisplayed();
    expect(isErrDisplayed, 'Login error is NOT displayed').to.be.true;
});

Then(/^I verify login (.+) is enabled$/, async function (field) {
    switch (field) {
        case 'username field':
            const isLoginUsrFieldEnabled = await homepage.isLoginEmailEnabled();
            expect(isLoginUsrFieldEnabled, 'Login username field is NOT enabled').to.be.true;
            break;
        case 'password field':
            const isLoginPwdFieldEnabled = await homepage.isLoginPasswordEnabled();
            expect(isLoginPwdFieldEnabled, 'Login password field is NOT enabled').to.be.true;
            break;
        case 'button':
            const isLoginBtnFieldEnabled = await homepage.isLoginButtonEnabled();
            expect(isLoginBtnFieldEnabled, 'Login button is NOT enabled').to.be.true;
            break;
        default:
            break;
    }
})
