import DefaultSteps from './default';
import page from '../pages/settings';

const assert = require('assert');

class SettingsSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	changeName(name) {
		this.open('https://virusmusic.fun/settings');
		this.page.fillNameInput(name);
		this.page.submit();
		this.page.waitForPopUp();
	}

	checkName(name) {
		this.page.refresh();
		const value = this.page.getNameValue();
		assert.equal(value, name);
	}

	changeEmail(email) {
		this.open('https://virusmusic.fun/settings');
		this.page.fillEmailInput(email);
		this.page.submit();
		this.page.waitForPopUp();
	}

	checkEmail(email) {
		this.page.refresh();
		const value = this.page.getEmailValue();
		assert.equal(value, email);
	}
}

export default new SettingsSteps();
