import DefaultSteps from './default';
import page from '../pages/settings';

const assert = require('assert');

class SettingsSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	changeName(name) {
		this.open('https://virusmusic.fun/settings');
		this.page.waitForUrl('https://virusmusic.fun/settings');
		this.page.fillNameInput(name);
		this.page.submit();
		this.page.page.waitForVisible(this.page.locators.popUp);
	}

	checkName(name) {
		this.page.page.refresh();
		this.page.page.waitForVisible(this.page.locators.name);
		this.page.page.waitForValue(this.page.locators.name);
		assert.equal($(this.page.locators.name).getValue(), name);
	}

	changeEmail(email) {
		this.open('https://virusmusic.fun/settings');
		this.page.waitForUrl('https://virusmusic.fun/settings');
		this.page.fillEmailInput(email);
		this.page.submit();
		this.page.page.waitForVisible(this.page.locators.popUp);
	}

	checkEmail(email) {
		this.page.page.refresh();
		this.page.page.waitForVisible(this.page.locators.email);
		this.page.page.waitForValue(this.page.locators.email);
		assert.equal($(this.page.locators.email).getValue(), email);
	}
}

export default new SettingsSteps();
