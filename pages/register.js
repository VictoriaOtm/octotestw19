import DefaultPage from './default';

class RegisterPage extends DefaultPage {
	constructor() {
		super('account', '#signup-content')
	}
}

export default new RegisterPage();
