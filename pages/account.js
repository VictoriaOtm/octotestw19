import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '[data-test-id=login-app-ready]')
	}

	get locators() {
		return {
			login: 'input[name="Login"]',
			password: 'input[name="Password"]',
			nextButton: '[data-test-id="next-button"]',
			submitButton: '[data-test-id="submit-button"]',
			recoveryButton: '[data-test-id="remind"]',
			signupButton: '[data-test-id="signup-link"]'
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
		this.page.click(this.locators.submitButton)
	}

	recover() {
		this.page.waitForVisible(this.locators.recoveryButton);
		this.page.click(this.locators.recoveryButton);
	}

	signup() {
		this.page.waitForVisible(this.locators.signupButton);
		this.page.click(this.locators.signupButton);
	}
}

export default new AccountPage();
