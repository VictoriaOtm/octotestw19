import DefaultPage from './default';

class RegistrationPage extends DefaultPage {
	constructor() {
		super('registration', '[class=auth-form-join]')
	}

	get locators() {
		return {
			name: 'input[id="inputName"]',
			surname: 'input[id="inputSurname"]',
			login: 'input[id="inputNickname"]',
			password: 'input[id="inputPassword"]',
			repeatPassword: 'input[id="inputPasswordRepeat"]',
			submitButton: 'div[id="submit_button"]',
		}
	}

	fillNameForm (name) {
		this.page.waitForVisible(this.locators.name);
		this.page.click(this.locators.name);
		this.page.setValue(this.locators.name, name);
	}

	fillSurnameForm (surname) {
		this.page.waitForVisible(this.locators.surname);
		this.page.click(this.locators.surname);
		this.page.setValue(this.locators.surname, surname);
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


	fillRepeatPasswordForm (password) {
		this.page.waitForVisible(this.locators.repeatPassword);
		this.page.click(this.locators.repeatPassword);
		this.page.setValue(this.locators.repeatPassword, password);
	}

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton)
	}

}

export default new RegistrationPage();
