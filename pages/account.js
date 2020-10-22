import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', 'form.l-form.l-card')
	}

	get locators() {
		return {
			login: '#login',
			password: '#password',
			submitButton: '#submit-login',
			navLogin: '.m-navbar-name',
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
