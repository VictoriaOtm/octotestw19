import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '[data-test-id=login-app-read]')
	}

	get locators() {
		return {
			login: 'input[name="username"]',
			password: 'input[name="password"]',
			nextButton: '[data-test-id="next-button"]',
			submitButton: '[data-test-id="submit-button"]',
		}
	}

	waitForVisibleAndClick(locator) {
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

	fillLoginForm (username) {
		this.waitForVisibleAndClick(this.locators.login)
		this.page.setValue(this.locators.login, username);
	}

	fillPasswordForm (password) {
		this.waitForVisibleAndClick(this.locators.password)
		this.page.setValue(this.locators.password, password);
	}

	next() {
		this.waitForVisibleAndClick(this.locators.nextButton)
	}

	submit() {
		this.waitForVisibleAndClick(this.locators.submitButton)
	}
}

export default new AccountPage();
