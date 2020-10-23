import DefaultSteps from './default';
import page from '../pages/account';

const assert = require('assert');

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('https://virusmusic.fun/login');
		this.waitForAccount();
		this.login();
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.waitForUrl('https://virusmusic.fun');
	}

	waitForAccount() {
		this.page.waitForContainer();
	}

	checkLogin() {
		assert.equal(
			$(this.page.locators.loginInNavbar).getText(),
			process.env.LOGIN);
	}
}

export default new AccountSteps();
