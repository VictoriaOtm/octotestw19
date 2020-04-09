import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '.login-page')
	}

	get locators() {
		return {
			login: '#loginForm input[name=email]',
			password: '#loginForm input[name=password]',
			submitButton: '#loginForm button[type=submit]',
		}
	}

	fillAuthForm (username, password) {
		this.page.waitForVisible(this.locators.login);
		this.page.click(this.locators.login);
		this.page.setValue(this.locators.login, username);
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
