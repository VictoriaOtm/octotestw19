import DefaultSteps from '../default';
import page from '../../pages/vacancies/favorites_vacancies';

class FavoriteVacanciesSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	checkFavoriteVacancy (vacancyId) {
		this.page.checkVacancyCard(vacancyId);
	}
}

export default new FavoriteVacanciesSteps();
