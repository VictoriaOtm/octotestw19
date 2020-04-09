import DefaultPage from '../default';

class FavoritesVacanciesPage extends DefaultPage {
	constructor() {
		super('favorite', '.main-content')
	}

	get locators () {
		return {
			container: this.container,
		}
	}

	checkVacancyCard (vacancyId) {
		this.page.waitForVisible(`a[href='/vacancy/${vacancyId}']`);
	}
}

export default new FavoritesVacanciesPage();
