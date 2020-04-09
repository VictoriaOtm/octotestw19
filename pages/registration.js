import DefaultPage from './default';

class RegisterPage extends DefaultPage {
	constructor() {
		super('account', '[data-test-id=login-app-ready]')
	}

	get locators() {
		return {
            email: 'input[id="signUpEmail"]',
			login: 'input[id="signUpUsername"]',
			password: 'input[id="signUpPassword"]',
			submitButton: 'button[class="buttonComponent"]',
		}
	}

    fillEmailForm (email) {
		this.page.waitForVisible(this.locators.email);
		this.page.click(this.locators.email);
		this.page.setValue(this.locators.email, email);
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

export default new RegisterPage();
