import DefaultPage from './default';

class LoginPage extends DefaultPage {
	constructor() {
		super('login', 'form.light-page__form.login__form-js')
	}

	get locators() {
		return {
			login: 'input[name="email"]',
			password: 'input[name="password"]',
			submitButton: 'button.button.button_stretched.light-page__button',
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

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton);
	}

	checkProfileIcon() {
		this.page.waitForVisible(this.locators.profileIcon);
	}
}

export default new LoginPage();
