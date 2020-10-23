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

	refresh() {
		this.page.refresh();
	}

	waitForPopUp() {
		this.page.waitForVisible(this.locators.popUp);
	}

	getNameValue() {
		this.page.waitForVisible(this.locators.name);
		this.page.waitForValue(this.locators.name);
		return $(this.locators.name).getValue();
	}

	getEmailValue() {
		this.page.waitForVisible(this.locators.email);
		this.page.waitForValue(this.locators.email);
		return $(this.locators.email).getValue();
	}
}

export default new SettingsPage();
