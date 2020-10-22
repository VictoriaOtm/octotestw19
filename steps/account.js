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
	}

	createDirectoryAndGoTo(dirName) {
		// first case
		this.page.createDirectory(dirName)
		this.open("https://cloud.mail.ru/");
		this.page.waitForUrl("https://cloud.mail.ru/home");
		this.goToDirectory(dirName)
	}

	createSubDirectoryAndGoTo(firstDirName, secondDirName) {
		// second case
		this.open("https://cloud.mail.ru/");
		this.page.waitForUrl("https://cloud.mail.ru/home");

		this.page.createDirectory(firstDirName)
		this.page.createDirectory(secondDirName)
		this.open("https://cloud.mail.ru/");
		this.page.waitForUrl("https://cloud.mail.ru/home");
		this.page.goToDirectory(firstDirName)
		this.page.goToDirectory(secondDirName)
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
