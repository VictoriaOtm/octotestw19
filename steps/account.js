import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
