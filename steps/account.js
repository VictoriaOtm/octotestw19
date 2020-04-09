import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('https://account.mail.ru');
		this.waitForAccount();
		this.login();
	}

	login() {
		this.page.fillEmailForm(process.env.LOGIN);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.waitForUrl('https://solarsunrise.ru/profile');
	}

	nologin() {
		this.page.fillEmailForm(process.env.NO_LOGIN);
		this.page.fillPasswordForm(process.env.NO_PASSWORD);
		this.page.submit();
		this.page.waitForContainerName('div[id="loginTextErr"]');
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
