import DefaultSteps from './default';
import page from '../pages/search';

class SearchSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	searchByGenre(genre) {
		this.page.fillGenresForm(genre);
		this.page.submit();
		this.page.waitSearchResultItem();
	}

	searchByName(name) {
		this.page.fillName(name);
		this.page.submit();
		this.page.waitSearchResultItem();
	}
}

export default new SearchSteps();

