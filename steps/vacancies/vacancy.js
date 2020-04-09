import DefaultSteps from '../default';
import page from '../../pages/vacancies/vacancy_page';

class VacancyPageSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	addToFavorite () {
		this.page.clickAddToFavorite();
	}

	respondVacancy(){
		this.page.clickRespondToVacancy();
	}

}

export default new VacancyPageSteps();
