import DefaultSteps from './default';
import page from '../pages/registration';

class RegistrationSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	join() {
		this.open(process.env.PROJECT_PATH + '/join');
		this.waitForRegistration();
		this.registration();
	}

	registration() {
		this.page.fillNameForm("Tim");
		this.page.fillSurnameForm("Razumov");
		this.page.fillLoginForm(process.env.REG_LOGIN);
		this.page.fillPasswordForm(process.env.REG_PASSWORD);
		this.page.fillRepeatPasswordForm(process.env.REG_PASSWORD);
		this.page.submit();
		this.page.waitForUrl(process.env.PROJECT_PATH);
	}

	waitForRegistration() {
		this.page.waitForContainer();
	}
}

export default new RegistrationSteps();
