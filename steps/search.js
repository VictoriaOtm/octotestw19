import DefaultSteps from './default';
import page from '../pages/search';
import { baseUrl, foldersHref } from "../store";

class SearchSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	getFirstJob() {
		return this.page.getFirstJobData();
	}

	findJobByTag(job_data) {
		this.page.fillSearch(job_data.tag);
		this.page.submit();
		const result = this.page.isJobInResults(job_data);
		expect(result).toBe(true)
	}

	findJobByTitle(job_data) {
		this.page.fillSearch(job_data.title);
		this.page.submit();
		const result = this.page.isJobInResults(job_data);
		expect(result).toBe(true)
	}
}

export default new SearchSteps();
