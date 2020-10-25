import DefaultSteps from './default';
import page from '../pages/settings';
import { url } from '../store/index';
import assert from 'assert';

class SettingsSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	changeName(name) {
		this.open(url.settings);
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
		this.open(url.settings);
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
