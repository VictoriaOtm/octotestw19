import DefaultSteps from './default';
import page from '../pages/header';

class HeaderSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	login() {
        this.page.fillLoginForm(process.env.LOGIN);
        this.page.fillPasswordForm(process.env.PASSWORD);
        this.page.submit();
        this.page.waitForUrl('https://solarsunrise.ru/profile');
	}

    search(value, type) {
        if (type=='user') {
            this.page.perform_search_users(value);
        }
    }

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new HeaderSteps();
