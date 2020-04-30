import DefaultSteps from './default';
import page from '../pages/register-seeker';

class RegisterSeekerWithExistingEmailSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	register({name, surname, login, password} = {}) {
		this.page.fillNameInput(name);
		this.page.fillSurnameInput(surname);
		this.page.fillEmailInput(login);
		this.page.fillPasswordInput(password);
		this.page.fillRepeatPasswordInput(password);
		this.page.submit();
		this.page.checkEmailErrorMessage();
	}

	waitForRegisterForm() {
		this.page.waitForContainer();
	}
}

export default new RegisterSeekerWithExistingEmailSteps();