import DefaultPage from './default';

class FeedPage extends DefaultPage {
	constructor() {
		super('pin', '[class="desk"]')
	}

	get locators() {
		return {
			pinCard: '[class="card"]:first-child'
		}
	}

	openPin() {
		this.page.waitForVisible(this.locators.pinCard);
		this.page.click(this.locators.pinCard);
	}
}

export default new FeedPage();
