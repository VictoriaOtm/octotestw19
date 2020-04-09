import DefaultSteps from './default';
import page from '../pages/registration';

class RegisterSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('https://https://solarsunrise.ru/login');
		this.waitForAccount();
		this.login();
	}

	register() {
        this.page.fillEmailForm(process.env.REG_EMAIL);
        this.page.fillLoginForm(process.env.REG_LOGIN);
        this.page.fillPasswordForm(process.env.REG_PASSWORD);
		this.page.submit();
		this.page.waitForUrl('https://solarsunrise.ru/profile');
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new RegisterSteps();
