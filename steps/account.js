import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
		this.urlAccountMail = "https://account.mail.ru"
		this.baseUrl = "https://cloud.mail.ru/home"
		this.mailMessageInbox = "https://e.mail.ru/inbox/?afterReload=1"
	}

	auth() {
		this.open(this.urlAccountMail);
		this.login();
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.next();
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.waitForUrl(this.mailMessageInbox);
		this.open(this.baseUrl);
	}

	waitForAccount() {
		this.open(this.baseUrl);
		this.page.waitForUrl(this.baseUrl);
	}
}

export default new AccountSteps();
