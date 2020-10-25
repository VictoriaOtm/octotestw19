import assert from 'assert';

import DefaultSteps from './default';
import page from '../pages/account';
import {endHref, mainURL} from "../store";

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open(mainURL+endHref.login);
		this.page.waitForContainer();
		this.login();
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.waitForUrl(mainURL);
	}

	checkLogin() {
		this.page.isLogoutVisible();
		assert.equal(
			$(this.page.locators.navName).getText(),
			process.env.LOGIN
		);
	}
}

export default new AccountSteps();
