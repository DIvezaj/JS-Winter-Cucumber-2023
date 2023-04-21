class SignupPage {

    // locators of webElements on SignupPage
    #signUpSubHeadingLocator = "div=It’s quick and easy.";
    #firstnameInputLocator = 'input[name=firstname]'
    #lastnameInputLocator = 'input[name=lastname]'
    #mobileOrEmailInputLocator = 'input[name=reg_email__]'
    #newPasswordInputLocator = '#password_step_input'
    #monthDropdownLocator = '#month';
    #dayDropdownLocator = '#day';
    #yearDropdownLocator = '#year';
    #femaleGenderLocator = '//label[text()="Female"]/following-sibling::input'
    #maleGenderLocator = '//label[text()="Male"]/following-sibling::input'
    #customGenderLocator = '//label[text()="Custom"]/following-sibling::input'

    #signupBtnLocator = '//button[@name="websubmit"]';
    #genderErrorLocator = '//div[text()="Please choose a gender. You can change who can see this later."]'

    #emptyFirstnameLocator = '//input[@name="firstname"]/parent::div'
    #emptyLastnameLocator = '//input[@name="lastname"]/parent::div'
    #emptyMobileOrEmailInputLocator = '//input[@name="reg_email__"]/parent::div'
    #emptyNewPasswordInputLocator = '//input[@id="password_step_input"]/parent::div'

    #selectedMonthLocator = '//select[@id="month"]//option[@selected]';
    #selectedDayLocator = '//select[@id="day"]//option[@selected]';
    #selectedYearLocator = '//select[@id="year"]//option[@selected]';

    // functions to intercat with webElements on SignupPage
    async waitForSignUpForm() {
        await $(this.#signUpSubHeadingLocator).waitForDisplayed();
    }

    async getSelectedMonth() {
        await $(this.#selectedMonthLocator).waitForDisplayed();
        return await $(this.#selectedMonthLocator).getText();
    }

    async getSelectedDay() {
        await $(this.#selectedDayLocator).waitForDisplayed();
        return await $(this.#selectedDayLocator).getText();
    }

    async getSelectedYear() {
        await $(this.#selectedYearLocator).waitForDisplayed();
        return await $(this.#selectedYearLocator).getText();
    }

    async enterFirstName(fname) {
        await $(this.#firstnameInputLocator).setValue(fname);
    }

    async enterLastName(lname) {
        await $(this.#lastnameInputLocator).setValue(lname);
    }

    async enterMobileOrEmail(mobileOrEmail) {
        await $(this.#mobileOrEmailInputLocator).setValue(mobileOrEmail);
    }

    async enterNewPassword(newPwd) {
        await $(this.#newPasswordInputLocator).setValue(newPwd);
    }

    async selectMonth(month) {
        await $(this.#monthDropdownLocator).selectByVisibleText(month);
    }

    async selectDay(day) {
        await $(this.#dayDropdownLocator).selectByVisibleText(day);
    }

    async selectYear(year) {
        await $(this.#yearDropdownLocator).selectByVisibleText(year);
    }

    async selectBirthDate(birthdate) {      // birthdate = Jul 20 2018 -> 'Jul', '20', '2018'
        const birthDateParts = birthdate.split(' ');        // ['Jul', '20', '2018']

        // select month
        await $(this.#monthDropdownLocator).selectByVisibleText(birthDateParts[0]);

        // select day
        await $(this.#dayDropdownLocator).selectByVisibleText(birthDateParts[1]);

        // select year
        await $(this.#yearDropdownLocator).selectByVisibleText(birthDateParts[2]);
    }

    async clickSignUpBtn() {
        await $(this.#signupBtnLocator).click();
    }

    async isGenderErrorDisplayed() {
        await $(this.#genderErrorLocator).waitForDisplayed();
        return await $(this.#genderErrorLocator).isDisplayed();
    }

    async isFirstNameEmpty() {
        const classAttrValue = await $(this.#emptyFirstnameLocator).getAttribute('class');
        return classAttrValue.localeComapre('uiStickyPlaceholderInput') !== 0;
    }

    async isLastNameEmpty() {
        const classAttrValue = await $(this.#emptyLastnameLocator).getAttribute('class');
        return classAttrValue.endsWith('uiStickyPlaceholderEmptyInput');
    }

    async isMobileOrEmailEmpty() {
        const classAttrValue = await $(this.#emptyMobileOrEmailInputLocator).getAttribute('class');
        return classAttrValue.endsWith('uiStickyPlaceholderEmptyInput');
    }

    async isNewPasswordEmpty() {
        const classAttrValue = await $(this.#emptyNewPasswordInputLocator).getAttribute('class');
        return classAttrValue.endsWith('uiStickyPlaceholderEmptyInput');
    }

    async isFemaleGenderSelected() {
        return await $(this.#femaleGenderLocator).isSelected();
    }

    async isMaleGenderSelected() {
        return await $(this.#maleGenderLocator).isSelected();
    }

    async isCustomGenderSelected() {
        return await $(this.#customGenderLocator).isSelected();
    }

}
module.exports = SignupPage;