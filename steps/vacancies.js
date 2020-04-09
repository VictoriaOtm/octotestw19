import DefaultSteps from './default';
import page from '../pages/vacancies';

class RespondToVacancySteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	respondToVacancy() {
        page.respondToVacancy();
        this.page.waitForUrl('http://tripway.ru.com/chooseResume');
	}

	waitForVacancyForm() {
		this.page.waitForContainer();
	}
}

export default new RespondToVacancySteps();