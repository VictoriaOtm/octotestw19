import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open(`${process.env.DRELLO_URL}/login`);
		this.waitForAccount();
		this.login();
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.waitForUrl(process.env.DRELLO_URL);
	}

	waitForAccount() {
		this.page.waitForContainer();
	}

	openSettings() {
		this.page.openSettings()
	}
}

export default new AccountSteps();
