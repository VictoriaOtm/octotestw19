import DefaultPage from './default';

class LoginPage extends DefaultPage {
	constructor() {
		super('account', '.panel-content__white')
	}

	get locators() {
		return {
			login: 'input[name="Login"]',
			password: 'input[name="Password"]',
			loginButton: '.login-button',
			registerButton: '.panel-item__last .calendar-title',
		}
	}

	fillLoginForm(username) {
		this.page.waitForVisible(this.locators.login);
		this.page.click(this.locators.login);
		this.page.setValue(this.locators.login, username);
	}

	fillPasswordForm(password) {
		this.page.waitForVisible(this.locators.password);
		this.page.click(this.locators.password);
		this.page.setValue(this.locators.password, password);
	}

	login() {
		this.page.waitForVisible(this.locators.loginButton);
		this.page.click(this.locators.loginButton)
    }

	register() {
		this.page.waitForVisible(this.locators.registerButton);
		this.page.click(this.locators.registerButton)
	}

}

export default new LoginPage();
