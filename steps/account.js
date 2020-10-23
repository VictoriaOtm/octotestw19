import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {

	constructor() {
		super(page);
	}

	auth() {
		this.open(browser.options.baseUrl + '/login');
		this.login();
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN, process.env.PASSWORD);
		this.page.submit();
	}

}

export default new AccountSteps();
