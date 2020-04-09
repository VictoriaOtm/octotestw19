import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '.login__form-js')
	}

	get locators() {
		return {
			login: 'input[name="email"]',
			password: 'input[name="password"]',
			nextButton: '[data-test-id="next-button"]',
			submitButton: 'button[type="submit"]',
			profileIcon: 'button[name="profile-menu"]',
		}
	}

	fillLoginForm (username) {
		this.page.waitForVisible(this.locators.login);
		this.page.click(this.locators.login);
		this.page.setValue(this.locators.login, username);
	}

	fillPasswordForm (password) {
		this.page.waitForVisible(this.locators.password);
		this.page.click(this.locators.password);
		this.page.setValue(this.locators.password, password);
	}

	next() {
		this.page.waitForVisible(this.locators.nextButton);
		this.page.click(this.locators.nextButton)
	}

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton);
	}

	checkProfileIcon(){
		this.page.waitForVisible(this.locators.profileIcon);
	}

	refresh() {
		browser.refresh()
	}
}

export default new AccountPage();
