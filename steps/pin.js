import DefaultSteps from './default';
import page from '../pages/pin';

const assert = require('assert').strict;

class PinSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	comment(comment) {
		this.waitForPin();
		this.page.fillComment(comment);
		this.page.submit();
		assert(this.page.getLastComment(), comment);
	}

	waitForPin() {
		this.page.waitForContainer();
	}
}

export default new PinSteps();
