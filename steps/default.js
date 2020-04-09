import { baseUrl } from "../store";

export default class DefaultSteps {
	constructor(page) {
		this.page = page;
	}

	open(subpath) {
		browser.url(baseUrl + subpath);
	}
}
