import DefaultPage from './default';

class VMAccountPage extends DefaultPage {
	constructor() {
		super('account', '.l-form.l-card')
	}

	get locators() {
		return {
			login: 'input#login',
			password: 'input#password',
			submitButton: 'button#submit-login',
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

export default new VMAccountPage();
