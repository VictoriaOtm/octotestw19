import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '[data-test-id=login-app-read]')
	}

	get locators() {
		return {
			loginBtn: '[id="loginModal"]',

			loginUser: '[id="loginUser"]',
			pass: '[id="passUser"]',

			submitButton: '[id="sendLogin"]',
			modalCloseInfo: '[id="closeInfo"]',
		}
	}

	fillLoginForm (username, pass) {
		this.page.waitForVisible(this.locators.loginBtn);
		this.page.click(this.locators.loginBtn);

		this.page.waitForVisible(this.locators.loginUser);
		this.page.setValue(this.locators.loginUser, username);

		this.page.waitForVisible(this.locators.pass);
		this.page.setValue(this.locators.pass, pass);


	}


	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton)
		this.page.waitForVisible(this.locators.modalCloseInfo);
	}

}

export default new AccountPage();
