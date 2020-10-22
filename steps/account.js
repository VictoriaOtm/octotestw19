import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('https://zinterest.ru');
		this.waitForAccount();
		this.login();
	}

	login() {
		this.page.loginOpen();
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.closeLogin();
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
