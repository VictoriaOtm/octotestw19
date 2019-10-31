export default class DefaultSteps {
	constructor(page) {
		this.page = page;
	}

	open(path) {
		browser.url(path);
	}
}
