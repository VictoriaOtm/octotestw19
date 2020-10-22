import DefaultPage from './default';

class PinPage extends DefaultPage {
	constructor() {
		super('pin', '[class="page_content_pin page_content"]')
	}

	get locators() {
		return {
			pin: '[class="card"]:first-child',
			comment: 'input[id="commentUser"]',
			sendComment: '[id="sendComment"]',
			lastComment: '[class="comment_item"]:last-child'
		}
	}

	openPin() {
		this.page.waitForVisible(this.locators.pin);
		this.page.click(this.locators.pin);

	}

	fillComment(comment) {
		this.page.waitForVisible(this.locators.comment);
		this.page.setValue(this.locators.comment, comment);
	}

	submit() {
		this.page.waitForVisible(this.locators.sendComment);
		this.page.click(this.locators.sendComment);
	}

	getLastComment() {
		this.page.waitForVisible(this.locators.lastComment);
		return $(this.locators.lastComment).getText('[class="comment_text"]');
	}
}

export default new PinPage();
