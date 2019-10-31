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
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.next();
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.waitForUrl('https://e.mail.ru/inbox/?afterReload=1');
	}

	waitForAccount() {
		this.page.waitForContainer();
	}

	recovery() {
		this.page.recover();
		this.page.waitForUrl('https://account.mail.ru/recovery?back_url=https%3A%2F%2Faccount.mail.ru%2Flogin&dwhsplit=s3319.n0s&success_redirect=https%3A%2F%2Fe.mail.ru%2Fmessages%2Finbox%3Fauthid%3Dk2eykx8q.bx%26back%3D1%26dwhsplit%3Ds3319.n0s%26from%3Dlogin&utm_source=login');
	}

	signup() {
		this.page.signup();
		this.page.waitForUrl('https://account.mail.ru/login?page=https%3A%2F%2Faccount.mail.ru%2F%3F&');
	}
}

export default new AccountSteps();
