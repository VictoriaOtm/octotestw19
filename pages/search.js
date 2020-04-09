import DefaultPage from './default';

class SearchPage extends DefaultPage {
	constructor() {
		super('search', '[data-test-id=login-app-ready]')
	}

	get locators() {
		return {
			// results: '.search-results__items',
			search: '.search-input__input input[type=search]',
			submit: '.search-input__submit button',
			first_elem: '.search-results__items section:first-child',
			job_title: '.search-results__items section:first-child .job-item__title',
			job_first_tag: '.search-results__items section:first-child .job-item__tags span:first-child',
		}
	}

	getFirstJobData() {
		this.page.waitForVisible(this.locators.first_elem);
		this.page.waitForVisible(this.locators.job_title);
		this.page.waitForVisible(this.locators.job_first_tag);

		return {
			title: this.page.getText(this.locators.job_title),
			firstTag: this.page.getText(this.locators.job_first_tag),
		}
	}

	fillSearch(query) {
		this.page.waitForVisible(this.locators.search);
		this.page.click(this.locators.search);
		this.page.setValue(this.locators.search, query);
	}

	submit() {
		this.page.waitForVisible(this.locators.submit);
		this.page.click(this.locators.submit)
	}

	isJobInResults(job_data) {

	}
}

export default new SearchPage();
