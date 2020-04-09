import DefaultPage from './default';

class LoginPage extends DefaultPage {
	constructor() {
		super('login', 'body')
	}

	get locators() {
		return {
			email: 'input[name="email"]',
			password: 'input[name="password"]',
			submitButton: '.button',
			icon: '.header__profile-icon',
		}
	}

	fillEmailForm (email) {
		this.page.waitForVisible(this.locators.email);
		this.page.click(this.locators.email);
		this.page.setValue(this.locators.email, email);
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

	refresh() {
		browser.refresh()
	}

	checkAuth() {
		this.page.waitForVisible(this.locators.icon);
	}

}

export default new LoginPage();
