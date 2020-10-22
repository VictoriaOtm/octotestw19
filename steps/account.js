import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('https://cloud.mail.ru');
		this.waitForAccount();
		this.login();
	}

	goToDirectory(dirName) {
		let url = "https://cloud.mail.ru/home/" + dirName + "/"
		this.open(url)
		this.page.waitForUrl(url)
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.next();
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.waitForUrl('https://e.mail.ru/messages/inbox?afterReload=1');
		this.open("https://cloud.mail.ru/");
		this.page.waitForUrl("https://cloud.mail.ru/home");


		//first case
		this.page.createDirectory("Kek")

		this.goToDirectory("Kek")


		//second test
		this.open("https://cloud.mail.ru/");
		this.page.waitForUrl("https://cloud.mail.ru/home");

		this.page.createDirectory("Kek1")
		//this.page.goToDirectory("Kek1")
		this.page.createDirectory("Kek2")
		//this.page.goToDirectory("Kek2")
		this.open("https://cloud.mail.ru/");
		this.page.waitForUrl("https://cloud.mail.ru/home");
		this.page.goToDirectory("Kek1")
		this.page.goToDirectory("Kek2")
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
