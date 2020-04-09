import DefaultPage from '../default';

class VacancyPage extends DefaultPage {
	constructor() {
		super('vacancies', '.main-content')
	}

	get locators () {
		return {
			container: this.container,
			favorite: '.short-vacancy__favorite_off',
			respondTo: '.respond',
		}
	}

	clickAddToFavorite(){
		this.page.waitForVisible(this.locators.favorite);
		this.page.click(this.locators.favorite);
	}

	clickRespondToVacancy(){
		this.page.waitForVisible(this.locators.respondTo);
		this.page.click(this.locators.respondTo);
	}

	clickToVacancyCard(vacancyId){
		this.page.click(`a[href='/vacancy/${vacancyId}']`);
	}
}

export default new VacancyPage();
