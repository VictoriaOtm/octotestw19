import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	login() {
		this.page.fillLoginForm('ga@ya.ru');
		this.page.fillPasswordForm('123456');
		this.page.submit();
		this.page.waitForUrl('https://fwork.live/dashboard');
	}
	
	signup() {
	    this.page.fillFirstName("Daria");
	    this.page.fillSecondName("Efimova");
	    this.page.fillLoginForm(process.env.LOGIN);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.waitForUrl('https://fwork.live/dashboard');
	}
	
    fail_signup() {
	    this.page.fillFirstName("Daria");
	    this.page.fillSecondName("Efimova");
	    this.page.fillLoginForm('dhghsgshgdhg@yaru');
		this.page.fillPasswordForm('1');
		this.page.submit();
		//this.page.waitForUrl('https://fwork.live/dashboard');
	}
	
	logout() {
	    this.page.logout();
	    this.page.waitForUrl('https://fwork.live/');
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
