import DefaultPage from './default';

class SearchPage extends DefaultPage {
	constructor() {
		super('login', 'div[id="search-page"]')
	}

	get locators() {
		return {}
    }
    
    getResults(value) {
        this.page.waitForVisible(`a[href="/users/${value}`);
    }
}

export default new SearchPage();
