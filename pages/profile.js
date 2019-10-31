import DefaultPage from './default';

class ProfilePage extends DefaultPage {
	constructor() {
        super('profile', '.content__page')
	}

	get locators() {
		return {
			checkbox: 'input[name="UseAutoTimezone"]',
            saveButton: 'div.form__actions__inner button[type="submit"]',
            timesSelector: 'select[name=TimeZone]',
            phones: 'a.js-click-security-recovery',
            name: 'input[name="FirstName"]',

            newPhonePage: '[data-test-id=expansion-item-header-text]'
		}
    }

    fillNameInput (username) {
		this.page.waitForVisible(this.locators.name);
		this.page.click(this.locators.name);
		this.page.setValue(this.locators.name, username);
	}
    
	clickCheckBox() {
		this.page.waitForVisible(this.locators.checkbox);
		this.page.click(this.locators.checkbox);
    }

    findSelector() {
        this.page.waitForEnabled(this.locators.timesSelector);
    }

    clickMyPhones() {
		this.page.waitForVisible(this.locators.phones);
        this.page.click(this.locators.phones);
    }

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton)
	}

}

export default new ProfilePage();
