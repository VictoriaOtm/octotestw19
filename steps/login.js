import DefaultSteps from './default';
import page from '../pages/login';

class LoginSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.login();
		this.page.waitForUrl('https://m.calendar.mail.ru/');
    }
    
    loginIncorrectEmail() {
        const incorrectPassword = `${process.env.PASSWORD}incorrect`;

		this.page.fillLoginForm(process.env.LOGIN);
		this.page.fillPasswordForm(incorrectPassword);
        this.page.login();
    }

	register() {
		this.page.register();
	}

	waitForLogin() {
		this.page.waitForContainer();
	}
}

export default new LoginSteps();
