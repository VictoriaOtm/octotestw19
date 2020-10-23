import DefaultPage from './default';

class ProfileSettingsPage extends DefaultPage {
	constructor() {
		super('profile_setting', '[class=profile]')
	}

	get locators() {
		return {
			name: 'input[id="inputName"]',
			nameError: 'div[id="inputNameError"]',
			surname: 'input[id="inputSurname"]',
			surnameError: 'div[id="inputSurnameError"]',
			submitAboutButton: 'div[id="submitAbout"]',
		}
	}

	fillNameForm (name) {
		this.page.waitForVisible(this.locators.name);
		this.page.click(this.locators.name);
		this.page.setValue(this.locators.name, name);
	}

	checkInvalidNameForm () {
		this.page.waitForVisible(this.locators.nameError);
	}

	fillSurnameForm (surname) {
		this.page.waitForVisible(this.locators.surname);
		this.page.click(this.locators.surname);
		this.page.setValue(this.locators.surname, surname);
	}

	checkInvalidSurnameForm () {
		this.page.waitForVisible(this.locators.surnameError);
	}

	submit() {
		this.page.waitForVisible(this.locators.submitAboutButton);
		this.page.click(this.locators.submitAboutButton)
	}
}

export default new ProfileSettingsPage();
