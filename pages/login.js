import DefaultPage from './default';

class LoginPage extends DefaultPage {
	constructor() {
		super('login', 'div[id="login-page"]')
	}

	get locators() {
		return {
			login: 'input[id="emailinput"]',
			password: 'input[id="passwordinput"]',
            submitButton: 'input[type="submit"]',
            
		}
	}

	fillLoginForm (username) {
		this.page.waitForVisible(this.locators.login);
		this.page.setValue(this.locators.login, username);
    }
    
    fillPasswordForm (password) {
		this.page.waitForVisible(this.locators.password);
		this.page.setValue(this.locators.password, password);
    }
    
    submit() {
        this.page.click(this.locators.submitButton)
    }
}

export default new LoginPage();
