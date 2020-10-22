import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '[data-test-id=login-app-read]')
	}

	get locators() {
		return {
			login: 'input[name="username"]',
			password: 'input[name="password"]',
			nextButton: '[data-test-id="next-button"]',
			submitButton: '[data-test-id="submit-button"]',

			createButton: '.Toolbar__dropdownIcon--35xXj', // button create
			createDirectoryButton: '.DropdownItemAction__root--2vZQy', // button directory create
			dirNameInput: 'input[placeholder="Введите имя папки"]',
			submitButtonCreate: '.CreateNewFolderDialog__button--7S1Hs',

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

	next() {
		this.page.waitForVisible(this.locators.nextButton);
		this.page.click(this.locators.nextButton)
	}

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton)
	}

	fillDirectoryNameForm (dirName) {
		this.page.waitForVisible(this.locators.dirNameInput);
		this.page.click(this.locators.dirNameInput);
		this.page.setValue(this.locators.dirNameInput, dirName);
	}

	createDirectory(dirName) {
		this.page.click(this.locators.createButton)
		this.page.click(this.locators.createDirectoryButton)
		this.fillDirectoryNameForm(dirName)
		this.page.click(this.locators.submitButtonCreate)
	}



}

export default new AccountPage();
