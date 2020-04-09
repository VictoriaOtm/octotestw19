import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('auth', '.login-page');
	}

	get locators() {
		return {
			login: 'input[name="email"]',
			password: 'input[name="password"]',
			nextButton: '[data-test-id="next-button"]',
			submitButton: 'button.btn.btn_primary[type="submit"]',
			firstName: 'input[name="firstName"]',
			secondName: 'input[name="secondName"]',
			logoutButtoun: 'a[id="logout"]',
			dropdown: '//i[@class="fas fa-angle-down user-dropdown-wrap__arrow"]',
			dropdownList: '//div[@class="dropdown__content dropdown__content_right dropdown__content_display"]',
		}
	}
	
	fillFirstName (name) {
		this.page.waitForVisible(this.locators.firstName);
		this.page.click(this.locators.firstName);
		this.page.setValue(this.locators.firstName, name);
	}
	
	fillSecondName (name) {
		this.page.waitForVisible(this.locators.secondName);
		this.page.click(this.locators.secondName);
		this.page.setValue(this.locators.secondName, name);
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

	next() {
		this.page.waitForVisible(this.locators.nextButton);
		this.page.click(this.locators.nextButton);
	}

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton);
	}
	
	logout() {
	    this.page.waitForVisible(this.locators.dropdown);
	    this.page.click(this.locators.dropdown);
	    this.page.waitForVisible(this.locators.dropdownList);
	    this.page.click(this.locators.logoutButton);
	}

}

export default new AccountPage();
