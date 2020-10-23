import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '[id="loginPart"]')
	}

	get locators() {
		return {
			loginInput: 'input[id="loginUser"]',
			passwordInput: 'input[id="passUser"]',
			submitButton: '[id="sendLogin"]',
			enterButton: '[id="loginModal"]',
			closeInfoButton: '[id="closeInfo"]'
		}
	}

	loginOpen () {
		this.page.waitForVisible(this.locators.enterButton);
		this.page.click(this.locators.enterButton)
	}

	fillLoginForm (username) {
		this.page.waitForVisible(this.locators.loginInput);
		this.page.click(this.locators.loginInput);
		this.page.setValue(this.locators.loginInput, username);
	}

	fillPasswordForm (password) {
		this.page.waitForVisible(this.locators.passwordInput);
		this.page.click(this.locators.passwordInput);
		this.page.setValue(this.locators.passwordInput, password);
	}

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton)
	}

	closeLogin() {
		this.page.waitForVisible(this.locators.closeInfoButton);
		this.page.click(this.locators.closeInfoButton);
	}
}

export default new AccountPage();
