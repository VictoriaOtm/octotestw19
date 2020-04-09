import DefaultPage from './default';

class SearchPage extends DefaultPage {
	constructor() {
		super('search', '[data-test-id=login-app-ready]')
	}

	get locators() {
		return {
			results: '.search-results__items section',
			search: '.search-input__input input[type=search]',
			submit: '.search-input__submit button',
			first_elem: '.search-results__items section:first-child',
			first_job_title: '.search-results__items section:first-child .job-item__title',
			first_job_tags: '.search-results__items section:first-child .job-item__tags span',
		}
	}

	getFirstJobData() {
		this.page.waitForVisible(this.locators.first_elem);
		this.page.waitForVisible(this.locators.first_job_title);
		this.page.waitForVisible(this.locators.first_job_tags);

		return {
			title: this.page.getText(this.locators.first_job_title),
			tags: this.page.getText(this.locators.first_job_tags),
		}
	}

	fillSearch(query) {
		this.page.waitForVisible(this.locators.search);
		this.page.click(this.locators.search);
		this.page.setValue(this.locators.search, query);
	}

	submit() {
		this.page.waitForVisible(this.locators.submit);
		this.page.click(this.locators.submit);
	}

	getSearchResults() {
		this.page.waitForVisible(this.locators.results);
		const resultsAmount = this.page.elements(this.locators.results).value.length;

		// Array of data on found works formation
		let results = [];
		for (let i = 1; i <= resultsAmount; i++) {
			const title = this.page.getText(
				`//*[@class="search-results__items"]//section[${i}]//a[@class="job-item__title"]`
			);
			const tags = this.page.getText(
				`//*[@class="search-results__items"]//section[${i}]//div[@class="job-item__tags"]//span`
			);
			results.push({
				title: title,
				tags: tags,
			});
		}

		return results;
	}
}

export default new SearchPage();
