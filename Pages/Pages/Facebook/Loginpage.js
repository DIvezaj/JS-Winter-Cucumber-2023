class Loginpage {

    // Locators of elements on Loginpage
    #loginErrorLocator = '//div[contains(text() , "connected to an account")]'

    // Functions to interact with elements on Loginpage
    async isLoginErrorDisplayed() {
        await $(this.#loginErrorLocator).waitForDisplayed();
        return await $(this.#loginErrorLocator).isDisplayed();
    }

}
module.exports = Loginpage;