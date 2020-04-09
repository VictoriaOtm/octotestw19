import DefaultSteps from "../default";
import page from '../../pages/fwork/auth';

class AuthSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	login(){
		this.page.fillLoginForm(process.env.LOGIN, process.env.PASSWORD);
		this.page.submit();
		this.page.waitForUrl('https://fwork.live/dashboard');
	}

	auth(){
		this.open('https://fwork.live/login');
		this.waitForLoginPage();
		this.login();
	}

	waitForLoginPage(){
		this.page.waitForContainer();
	}
}

export default new AuthSteps();
