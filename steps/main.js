import page from '../pages/main_page';
import DefaultSteps from './default';

class MainSteps extends DefaultSteps {
	constructor () {
		super(page);
	}

	routeToVacancy(vacancyId){
		this.page.clickForSeekerGuest();
		this.page.clickToVacancyCard(vacancyId);
	}

}

export default new MainSteps();
