import DefaultPage from './default';

class SearchPage extends DefaultPage {
	constructor() {
		super('search', '.page')
	}

	get locators() {
		return {
			query: 'input[name="query"]',
			submitButton: '.search-bar__button',
			resultRelevant: '//a[contains(text(),"разработчик")]',
			resultAll: '.resume-search-item'
		}
	}

	fillSearchForm () {
		this.page.waitForVisible(this.locators.query);
		this.page.click(this.locators.query);
		this.page.setValue(this.locators.query, 'разработчик');
	}

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton);
	}

    countRelevantResults() {
        return this.page.elements(this.locators.resultRelevant).length;
    }

    countAllResults() {
        return this.page.elements(this.locators.resultAll).length;
    }

	checkAuth() {
		this.page.waitForVisible(this.locators.icon);
	}

}

export default new SearchPage();
