import DefaultSteps from './default';
import page from '../pages/login';

class LoginSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	login() {
		this.page.fillEmailForm(process.env.EMAIL);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.refresh();
		this.page.checkAuth();
	}
}

export default new LoginSteps();
