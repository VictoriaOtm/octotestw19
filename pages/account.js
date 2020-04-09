import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '[data-test-id=login-app-ready]')
	}

	get locators() {
		return {
			login: 'input[id="emailinput"]',
			password: 'input[id="passwordinput"]',
			nextButton: '[data-test-id="next-button"]',
			submitButton: 'input[class="button login-block__button login-block__button_margin"]',
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

	// next() {
	// 	this.page.waitForVisible(this.locators.nextButton);
	// 	this.page.click(this.locators.nextButton)
	// }

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton)
	}

}

export default new AccountPage();
