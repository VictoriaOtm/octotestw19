import DefaultPage from './default';

class SettingsPage extends DefaultPage {
	constructor() {
		super('settings', 'body')
	}

	get locators() {
		return {
			name: '#name',
			email: '#email',
			submitDataButton: '#submit-setting-changes-data',
			popUp: '.m-pop-up',
		}
	}

	fillNameInput(name) {
		this.page.waitForVisible(this.locators.name);
		this.page.click(this.locators.name);
		this.page.setValue(this.locators.name, name);
	}

	fillEmailInput(email) {
		this.page.waitForVisible(this.locators.email);
		this.page.click(this.locators.email);
		this.page.setValue(this.locators.email, email);
	}

	submit() {
		this.page.waitForVisible(this.locators.submitDataButton);
		this.page.click(this.locators.submitDataButton)
	}
}

export default new SettingsPage();
