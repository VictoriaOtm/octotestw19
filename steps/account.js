import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('https://zinterest.ru/login');
		this.login();
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN, process.env.PASSWORD);
		this.page.submit();}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
