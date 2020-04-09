import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '.login__form')
	}

	get locators() {
		return {
			login: 'input[id="js-email-login"]',
			password: 'input[id="js-password-login"]',
			//nextButton: '[data-test-id="next-button"]',
			submitButton: 'input[id="js-login"]',
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

/*	next() {
		this.page.waitForVisible(this.locators.nextButton);
		this.page.click(this.locators.nextButton)
	}
*/
	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton)
	}

}

export default new AccountPage();
