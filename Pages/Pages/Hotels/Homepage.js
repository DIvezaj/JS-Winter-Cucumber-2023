class homepageHotels {

    #hotelsLogoLocator = '//a[contains(@class , "header-logo")]';

    //Locators
    #destinationButtonLocator = 'button[data-stid=destination_form_field-menu-trigger]';
    #destinationInputLocator = '#destination_form_field';
    #destinationAutoSuggestionLocator = '//li[contains(@class, "has-subtext")]//button';
    signUpButtonLocator = '//a[text() = "Sign up, it’s free"]';
    signInButtonLocator = '//button[text() = "Sign in"]';
    feedbackLocator = '//a[text()="Feedback"]';
    languageEnglishButtonLocator = '//div[text()="English"]'
    espanolLanguageSelectLocator = '//option[text()="Español (Estados Unidos)"]'
    saveLanguageEnglishButtonLocator = '//button[text()="Save"]'
    languageEspanolButtonLocator = '//div[text()="Español"]'
    englishLanguageSelectLocator = '//option[text()="English (United States)"]'
    saveLanguageEspanolButtonLocator = '//button[text()="Guardar"]'
    languageSelectDropDownLocator = '//select[@id="language-selector"]'

    // Calendar Locators
    #calendarButtonLocator = 'div[class*=uitk-date-picker-menu]'
    #calendarDoneButtonLocator = 'button[data-stid=apply-date-picker]';
    #previousMonthArrowLocator = '(//button[@data-stid="date-picker-paging"])[1]';
    #nextMonthArrowLocator = '(//button[@data-stid="date-picker-paging"])[2]';
    #leftMonthHeadingLocator = '(//div[@data-stid="date-picker-month"])[1]//h2';
    #calendarDatesLocatorStarts = '//h2[text()="';
    #calendarDatesLocatorEnds = '"]/following-sibling::table//button';

    // Travelers Locators
    #travelersButtonLocator = 'button[data-stid=open-room-picker]';
    #travelersHeadingLocator = 'h3=Travelers';
    totalTravelersandRoomCountLocator = '//button[@data-stid="open-room-picker"]';

        // Adults Locators
    #roomAdultsMinusLocatorStarts = '((//h3[text()="';
    #roomAdultsMinusLocatorEnds = '"]/following-sibling::div)[1]//button)[1]';
    #roomAdultsPlusLocatorStarts = '((//h3[text()="';
    #roomAdultsPlusLocatorEnds = '"]/following-sibling::div)[1]//button)[2]';
    #roomAdultsCountLocatorStarts = '(//h3[text()="';
    #roomAdultsCountLocatorEnds = '"]/following-sibling::div)[1]//input';
    addAdultButtonLocator = '//*[@id="traveler_selector_adult_step_input-0"]/following-sibling::button';
    

        // Children Locators
    #roomChildrenMinusLocatorStarts = '((//h3[text()="';
    #roomChildrenMinusLocatorEnds = '"]/following-sibling::div)[2]//button)[1]';
    #roomChildrenPlusLocatorStarts = '((//h3[text()="';
    #roomChildrenPlusLocatorEnds = '"]/following-sibling::div)[2]//button)[2]';
    #roomChildrenCountLocatorStarts = '(//h3[text()="';
    #roomChildrenCountLocatorEnds = '"]/following-sibling::div)[2]//input';
    addChildrenButtonLocator = "//label[@for='traveler_selector_children_step_input-0']/following::button[2]";
    removeChildrenButtonLocator = '//*[@id="traveler_selector_children_step_input-0"]/preceding-sibling::button]';
    totalChildrenLocator = 'select[name*=child-traveler_selector_children_age_selector-0-]';

        // ChildrenAge Locators
    allChildrenAgeDropdownLocator = '//select[starts-with(@id, "age-traveler_selector_children_age_selector")]';
    childAgeDropdownLocatorStarts = '//label[text()="';
    childAgeDropdownLocatorEnds = '"]/following-sibling::select';
    child1AgeDropDownLocator = '#age-traveler_selector_children_age_selector-0-0';
    child2AgeDropDownLocator = '#age-traveler_selector_children_age_selector-0-1';
    child3AgeDropDownLocator = '#age-traveler_selector_children_age_selector-0-2';
    totalChildrenDropdownLocator = '//select'

        // Travelers Misc Locators
    #travelersDoneButtonLocator = '#traveler_selector_done_button';
    #anotherRoomLocator = '#traveler_selector_add_room';
    #searchButtonLocator = '#search_button';


    //Functions
    async isHotelsLogoDisplayed() {
        await $(this.#hotelsLogoLocator).waitForDisplayed();
        await $(this.#hotelsLogoLocator).isDisplayed();
    }

    // Destination functions
    async enterDestination(destination) {
        await $(this.#destinationButtonLocator).click();
        await $(this.#destinationInputLocator).waitForDisplayed();
        await $(this.#destinationInputLocator).setValue(destination);
    }

    async selectDestinationFromAutoSuggestion(destinationToSelect) {
        const allSuggestions = await $$(this.#destinationAutoSuggestionLocator);

        for (const suggestion of allSuggestions) {
            const text = await suggestion.getAttribute('aria-label');
            if(text.toLowerCase().startsWith(destinationToSelect.toLowerCase())) {
                await suggestion.click();
                break;
            }
        }
    }

    // Calendar functions
    async selectDate(date) {
        const isDoneBtnDisplayed = await $(this.#calendarDoneButtonLocator).isDisplayed();
        if (isDoneBtnDisplayed) {
            await $(this.#calendarButtonLocator).click();
            await $(this.#calendarDoneButtonLocator).waitForDisplayed();
        }
        const dateValuesInArray = date.split();
        const monthYear = dateValuesInArray[1] + ' ' + dateValuesInArray[2];
        await this.goToDesiredCalendar(monthYear);
        const allDates = await $$(this.#calendarDatesLocatorStarts + monthYear + this.#calendarDatesLocatorEnds);
        for (const dateElement of allDates) {
            const dateValue = await dateElement.getAttribute('data-day');
            if (dateValue.localeCompare(dateValuesInArray[0]) === 0) {
                await dateElement.click()
                break;
            }
        }
    }

    async goToDesiredCalendar(monthYear) {
        const isPreviousMonthArrowEnabled = await $(this.#previousMonthArrowLocator).isEnabled();
        for (let i=1; i<=12 ; i++) {
            const monthHeading = await $(this.#leftMonthHeadingLocator).getText();
            if(monthHeading.toLowerCase().localeCompare(monthYear.toLowerCase()) !== 0) {
                if(i === 1 && isPreviousMonthArrowEnabled) {
                    await $(this.#previousMonthArrowLocator).click();
                } else {
                    await $(this.#nextMonthArrowLocator).click();
                }
            } else {
                break;
            }
        }
    }
 
    async clickCalendarDoneButton() {
        await $(this.#calendarDoneButtonLocator).click();
    }


    // Travelers functions
    async getTravelersCount() {
        await $(this.#travelersButtonLocator).getText();
    }

    async selectAdultsInRoom(adultCount, roomNumber) {
        const isDoneBtnDisplayed = await $(this.#travelersDoneButtonLocator).isDisplayed();
        if (isDoneBtnDisplayed) {
            await $(this.#travelersButtonLocator).click();
            await $(this.#travelersHeadingLocator).waitForDisplayed();
        }
        for (let i=0 ; i<=12 ; i++) {
            const adultCountOnWeb = await $(this.#roomAdultsCountLocatorStarts+roomNumber+this.#roomAdultsCountLocatorEnds).getAttribute('value');
            if (adultCountOnWeb < adultCount) {
                await $(this.#roomAdultsPlusLocatorStarts+roomNumber+this.#roomAdultsPlusLocatorEnds).click();
            } else if (adultCountOnWeb > adultCount) {
                await $(this.#roomAdultsMinusLocatorStarts+roomNumber+this.#roomAdultsMinusLocatorEnds).click();
            } else {
                break;
            }
        }
    }

    async selectChildrenInRoom(childrenCount, roomNumber) {
        const isDoneBtnDisplayed = await $(this.#travelersDoneButtonLocator).isDisplayed();
        if (isDoneBtnDisplayed) {
            await $(this.#travelersButtonLocator).click();
            await $(this.#travelersHeadingLocator).waitForDisplayed();
        }
        for (let i=0 ; i<=12 ; i++) {
            const childrenCountOnWeb = await $(this.#roomChildrenCountLocatorStarts+roomNumber+this.#roomChildrenCountLocatorEnds).getAttribute('value');
            if (childrenCountOnWeb < adultCount) {
                await $(this.#roomChildrenPlusLocatorStarts+roomNumber+this.#roomChildrenPlusLocatorEnds).click();
            } else if (childrenCountOnWeb > childrenCount) {
                await $(this.#roomChildrenMinusLocatorStarts+roomNumber+this.#roomChildrenMinusLocatorEnds).click();
            } else {
                break;
            }
        }
    }

    async childrenAgeDropdownCount() {
        const allChildrenAgeDropdownArray = await $$(this.allChildrenAgeDropdownLocator);
        return allChildrenAgeDropdownArray.length;
    }

    async selectChildAge(childNum, childAgeToSelect) {
        const childAgeDropdownLocator = this.childAgeDropdownLocatorStarts + childNum + this.childAgeDropdownLocatorEnds;
        const childAgeDropdown = await $(childAgeDropdownLocator);
        await childAgeDropdown.selectByVisibleText(childAgeToSelect);
    }

    async clickTravelersDoneButton() {
        await $(this.#travelersDoneButtonLocator).click();
    }

    async clickSearchButton() {
        await $(this.#searchButtonLocator).click();
    }

    async clicksignup() {
        await $(this.signUpButtonLocator).click();
      }

    async clickSignIn() {
        await $(this.signInButtonLocator).click();
      }

      async clickTravelersButton() {
        await $(this.#travelersButtonLocator).click();
    }
    
  async clickFeedbackButton() {
        const feedBackLink = await $(this.feedbackLocator)
        await feedBackLink.click();
        browser.pause(5000)
    }

    async addAdults() {
        await $(this.addAdultButtonLocator).click();
    }

    async addChildren() {
            await $(this.addChildrenButtonLocator).click();
          }
        
    async removeChildren() {
        await $(this.removeChildrenButtonLocator).click();
        }

    async isChildrenAddButtonEnabled(){
        await $(this.addChildrenButtonLocator).isEnabled();
    }

    async isChildrenRemoveButtonEnabled(){
        await $(this.removeChildrenButtonLocator).isEnabled();
    }

    async childrenDropDownAmount(){
        const amountOfChildren = await $$(this.totalChildrenDropdownLocator)
        return amountOfChildren
    }

    async setChild1Age() {
        const childOneAge = await $(this.child1AgeDropDownLocator);
        childOneAge.selectByAttribute('value','4')
        await browser.pause(5000);
    
    }

    async setChild2Age() {
        const childTwoAge = await $(this.child2AgeDropDownLocator);
        childTwoAge.selectByAttribute('value','0')
        await browser.pause(5000);
    
    }

    async setChild3Age() {
        const childThreeAge = await $(this.child3AgeDropDownLocator);
        childThreeAge.selectByAttribute('value','7')
        await browser.pause(5000);
    
    }

    async totalTravelers() {
    await $(this.totalTravelersandRoomCountLocator).waitForDisplayed()
    return await $(this.totalTravelersandRoomCountLocator).getText();
    }

    async totalChildrenDropdownCount() {
        return await $$(this.totalChildrenDropdownLocator);
    }

    async clickEnglishButton() {
        await $(this.languageEnglishButtonLocator).click();
    }

    async selectLanguageDropDownEspanol() {
        await $(this.languageSelectDropDownLocator).click();
        await dropdown.selectByVisibleText('Español (Estados Unidos)');
    }

    async saveEnglishButton() {
        await $(this.saveLanguageEnglishButtonLocator).click();
    }

    async verifyEspanolDisplay() {
        await $(this.languageEspanolButtonLocator).isDisplayed();
    }

    async clickEspanolButton() {
        await $(this.languageEspanolButtonLocator).click();
    }

    async selectLanguageDropDownEnglish() {
        await $(this.languageSelectDropDownLocator).click();
        await dropdown.selectByVisibleText('English (United States)')
    }

    async saveEspanolButton() {
        await $(this.saveLanguageEspanolButtonLocator).click();
    }

    async verifyEnglishDisplay() {
        await $(this.languageEnglishButtonLocator).isDisplayed();
    }

}
module.exports = homepageHotels;