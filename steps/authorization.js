import DefaultSteps from './default';
import page from '../pages/authorization';

class AuthorizationSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open(process.env.PROJECT_PATH + '/login');
		this.waitForAuthorization();
		this.login();
	}

	login() {
		this.page.fillLoginForm(process.env.AUTH_LOGIN);
		this.page.fillPasswordForm(process.env.AUTH_PASSWORD);
		this.page.submit();
		this.page.waitForUrl(process.env.PROJECT_PATH);
	}

	waitForAuthorization() {
		this.page.waitForContainer();
	}
}

export default new AuthorizationSteps();
