import DefaultPage from './default';

class DeskPage extends DefaultPage {
	constructor() {
		super('pin', '[class="window"]')
	}

	get locators() {
		return {
			newModal : '[id="addNewModal"]',
			createDeskModal : '[id="newDeskModal"]',
			sendDesk : '[id="sendDesk"]',
			name : '[id="deskName"]',
			desc : '[id="deskDesc"]',
			closeInfo : '[id="closeInfo"]'
		}
	}

	openNewDesk() {
		this.page.waitForVisible(this.locators.newModal);
		this.page.click(this.locators.newModal);
	}

	createDeskModal() {
		this.page.click(this.locators.createDeskModal);
		this.page.waitForVisible(this.locators.sendDesk);
	}

	fillName (name) {
		this.page.waitForVisible(this.locators.name);
		this.page.click(this.locators.name);
		this.page.setValue(this.locators.name, name);
	}

	fillDesc (desc) {
		this.page.waitForVisible(this.locators.desc);
		this.page.click(this.locators.desc);
		this.page.setValue(this.locators.desc, desc);
	}

	closeInfo() {
		this.page.waitForVisible(this.locators.closeInfo);
		this.page.click(this.locators.closeInfo);
	}

	submit() {
		this.page.waitForVisible(this.locators.sendDesk);
		this.page.click(this.locators.sendDesk)
	}
}

export default new DeskPage();
