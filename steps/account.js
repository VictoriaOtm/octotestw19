import DefaultSteps from './default';
import page from '../pages/account';
import { url } from '../store/index';
import assert from 'assert';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open(url.login);
		this.waitForAccount();
		this.login();
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.waitForUrl(url.main);
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
