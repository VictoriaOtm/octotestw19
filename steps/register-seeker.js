import DefaultSteps from './default';
import page from '../pages/register-seeker';

class RegisterSeekerWithExistingEmailSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	register() {
        this.page.fillNameInput('Abigail');
        this.page.fillSurnameInput('Threshold');
		this.page.fillEmailInput(process.env.LOGIN);
        this.page.fillPasswordInput(process.env.PASSWORD);
        this.page.fillRepeatPasswordInput(process.env.PASSWORD);
        this.page.submit();
        this.page.checkEmailErrorMessage();
	}

	waitForRegisterForm() {
		this.page.waitForContainer();
	}
}

export default new RegisterSeekerWithExistingEmailSteps();