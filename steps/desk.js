import DefaultSteps from './default';
import page from '../pages/desk';

const assert = require('assert').strict;

class DeskSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	openNewDesk() {
		this.page.openNewDesk();
		this.waitForModalNew();
	}

	create(name, desc) {
		this.page.createDeskModal();
		this.page.fillName(name);
		this.page.fillDesc(desc);
		this.page.submit();
		this.page.closeInfo();
	}

	waitForModalNew() {
		this.page.waitForContainer();
	}
}

export default new DeskSteps();
