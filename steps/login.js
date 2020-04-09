import DefaultSteps from './default';
import page from '../pages/login';

class LoginSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('https://solarsunrise.ru/login');
		this.waitForAccount();
		this.login();
	}

	login() {
        this.page.fillLoginForm(process.env.LOGIN);
        this.page.fillPasswordForm(process.env.PASSWORD);
        this.page.submit();
        this.page.waitForUrl('https://solarsunrise.ru/profile');
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new LoginSteps();
