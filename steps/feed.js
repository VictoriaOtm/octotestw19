import DefaultSteps from './default';
import page from '../pages/feed';

class FeedSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	openPin() {
		this.waitForFeed();
		this.page.openPin();
	}

	waitForFeed() {
		this.page.waitForContainer();
	}
}

export default new FeedSteps();
