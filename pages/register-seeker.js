import DefaultPage from './default';

class RegisterSeekerWithExistingEmailPage extends DefaultPage {
	constructor() {
		super('registerSeekerWithExistingEmail', 'div.left-column')
	}

	get locators() {
		return {
            name: 'input[name="firstName"]',
            surname: 'input[name="lastName"]',
            email: 'input[name="login"]',
            password: 'input[name="password"]',
            repeatPassword: 'input[name="passwordConfirm"]',
            submitButton: 'button.button.button_blue',
            emailErrorMesage: 'span.error.error_active'
		}
	}

	fillNameInput(name) {
		this.page.waitForVisible(this.locators.name);
		this.page.click(this.locators.name);
		this.page.setValue(this.locators.name, name);
	}

	fillSurnameInput(surname) {
		this.page.waitForVisible(this.locators.surname);
		this.page.click(this.locators.surname);
		this.page.setValue(this.locators.surname, surname);
    }
    
    fillEmailInput(email) {
		this.page.waitForVisible(this.locators.email);
		this.page.click(this.locators.email);
		this.page.setValue(this.locators.email, email);
    }
    
    fillPasswordInput(password) {
		this.page.waitForVisible(this.locators.password);
		this.page.click(this.locators.password);
		this.page.setValue(this.locators.password, password);
    }
    
    fillRepeatPasswordInput(password) {
		this.page.waitForVisible(this.locators.repeatPassword);
		this.page.click(this.locators.repeatPassword);
		this.page.setValue(this.locators.repeatPassword, password);
	}

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton);
    }
    
    checkEmailErrorMessage() {
        this.page.waitForVisible(this.locators.emailErrorMesage);
    }
}

export default new RegisterSeekerWithExistingEmailPage();