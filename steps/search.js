import DefaultSteps from './default';
import page from '../pages/search';
import { baseUrl, foldersHref } from "../store";

const assert = require('assert');

// is array includes object
const containsObject = (obj, array) => {
	for (let i = 0; i < array.length; i++) {
		if (JSON.stringify(array[i]) === JSON.stringify(obj)) {
			return true;
		}
	}
	return false;
};

class SearchSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	getFirstJob() {
		return this.page.getFirstJobData();
	}

	findJobByTag(job_data) {
		this.page.fillSearch(job_data.tags[0]);
		this.page.submit();
		const result = this.page.getSearchResults();
		assert(containsObject(job_data, result), "Search by tag failed");
	}

	findJobByTitle(job_data) {
		this.page.fillSearch(job_data.title.split(" ")[0]);
		this.page.submit();
		const result = this.page.getSearchResults();
		assert(containsObject(job_data, result), "Search by title failed");
	}
}

export default new SearchSteps();
