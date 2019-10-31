import DefaultSteps from './default';
import page from '../pages/register';

class RegisterSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	waitForRegister() {
		this.page.waitForContainer();
	}
}

export default new RegisterSteps();
