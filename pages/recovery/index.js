import DefaultPage from '../default';

class RecoveryPage extends DefaultPage {
	constructor() {
		super('recovery', '[data-test-id=recovery-page]')
	}

	get locators () {
		return {
			container: this.container
		}
	}
}

export default new RecoveryPage();
