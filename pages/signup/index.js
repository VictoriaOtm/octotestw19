import DefaultPage from '../default';

class SignupPage extends DefaultPage {
	constructor() {
		super('signup', '.signup-form')
	}

	get locators () {
		return {
			container: this.container
		}
	}
}

export default new SignupPage();
