import DefaultPage from "../default";

class AuthPage extends DefaultPage {
	constructor() {
		super('auth', '.login-page');
	}

	get locators(){
		return {
			login: 'input[name="email"]',
			password: 'input[name="password"]',
			submitButton: 'button.btn.btn_primary[type="submit"]'
		};
	}

	fillLoginForm (username, password) {
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

export default new AuthPage();
