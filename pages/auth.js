import DefaultPage from './default';

class AuthPage extends DefaultPage {
	constructor() {
		super('account', '.desktop-navbar')
	}

	get locators() {
		return {
			toAuthPageButton: 'a[href="/login"]',
			login: '#js-email-login',
			password: '#js-password-login',
			submitButton: '#js-login',
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

	toAuthPage() {
		this.page.waitForVisible(this.locators.toAuthPageButton);
		this.page.click(this.locators.toAuthPageButton)
	}

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton);
	}

}

export default new AuthPage();
