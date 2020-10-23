import DefaultPage from './default';

class DeskPage extends DefaultPage {
	constructor() {
		super('pin', '[class="window"]')
	}

	get locators() {
		return {
			newModalButton : '[id="addNewModal"]',
			createDeskModalButton : '[id="newDeskModal"]',
			sendDeskButton : '[id="sendDesk"]',
			nameInput : '[id="deskName"]',
			descInput : '[id="deskDesc"]',
			closeInfoButton : '[id="closeInfo"]'
		}
	}

	openNewDesk() {
		this.page.waitForVisible(this.locators.newModalButton);
		this.page.click(this.locators.newModalButton);
	}

	createDeskModal() {
		this.page.click(this.locators.createDeskModalButton);
		this.page.waitForVisible(this.locators.sendDeskButton);
	}

	fillName (name) {
		this.page.waitForVisible(this.locators.nameInput);
		this.page.click(this.locators.nameInput);
		this.page.setValue(this.locators.nameInput, name);
	}

	fillDesc (desc) {
		this.page.waitForVisible(this.locators.descInput);
		this.page.click(this.locators.descInput);
		this.page.setValue(this.locators.descInput, desc);
	}

	closeInfo() {
		this.page.waitForVisible(this.locators.closeInfoButton);
		this.page.click(this.locators.closeInfoButton);
	}

	submit() {
		this.page.waitForVisible(this.locators.sendDeskButton);
		this.page.click(this.locators.sendDeskButton)
	}
}

export default new DeskPage();
