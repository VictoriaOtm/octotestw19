import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '[class=auth-form-login]')
	}

	get locators() {
		return {
			login: 'input[id="inputLogin"]',
			password: 'input[id="inputPassword"]',
			submitButton: 'div[id="submit_button"]',
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

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton)
	}

}

export default new AccountPage();
