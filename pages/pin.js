import DefaultPage from './default';

class PinPage extends DefaultPage {
	constructor() {
		super('pin', '[class="page_content_pin page_content"]')
	}

	get locators() {
		return {
			commentInput: 'input[id="commentUser"]',
			sendCommentButton: '[id="sendComment"]',
			lastComment: '[class="comment_item"]:last-child'
		}
	}

	fillComment(comment) {
		this.page.waitForVisible(this.locators.commentInput);
		this.page.setValue(this.locators.commentInput, comment);
	}

	submit() {
		this.page.waitForVisible(this.locators.sendCommentButton);
		this.page.click(this.locators.sendCommentButton);
	}

	getLastComment() {
		this.page.waitForVisible(this.locators.lastComment);
		return $(this.locators.lastComment).getText('[class="comment_text"]');
	}
}

export default new PinPage();
