import DefaultSteps from './default';
import page from '../pages/account';
import { baseUrl, foldersHref } from "../store";

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open(foldersHref.login);
		this.waitForAccount();
		this.login();
	}

	login() {
		this.page.fillAuthForm(process.env.LOGIN, process.env.PASSWORD);
		this.page.submit();
		this.page.waitForUrl(baseUrl + foldersHref.main);
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
