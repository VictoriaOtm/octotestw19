import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '[id="loginPart"]')
	}

	get locators() {
		return {
			login: 'input[id="loginUser"]',
			password: 'input[id="passUser"]',
			submitButton: '[id="sendLogin"]',
			enterButton: '[id="loginModal"]',
			closeInfo: '[id="closeInfo"]'
		}
	}

	loginOpen () {
		this.page.waitForVisible(this.locators.enterButton);
		this.page.click(this.locators.enterButton)
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

	closeLogin() {
		this.page.waitForVisible(this.locators.closeInfo);
		this.page.click(this.locators.closeInfo);
	}

}

export default new AccountPage();
