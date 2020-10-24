import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', 'form.l-form.l-card')
	}

	get locators() {
		return {
			login: 'input#login',
			password: 'input#password',
			submitButton: 'button#submit-login',
			gearIcon: '#settings-icon',
			logoutLink: '#logout-link',
			navName: '.m-navbar-name.col'
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

	isLogoutVisible() {
		this.page.waitForVisible(this.locators.gearIcon);
		this.page.waitForVisible(this.locators.logoutLink);
	}
}

export default new AccountPage();
