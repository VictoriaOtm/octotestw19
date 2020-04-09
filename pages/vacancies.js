import DefaultPage from './default';

class RespondToVacancyPage extends DefaultPage {
	constructor() {
		super('account', 'div.personal-block__right.js-personal-block-right')
	}

	get locators() {
		return {
            respondLink: 'span.link.bloko-link.bloko-link_dimmed',
		}
    }
    
    respondToVacancy() {
        this.page.waitForVisible(this.locators.respondLink);
        this.page.click(this.locators.respondLink);
    }
}

export default new RespondToVacancyPage();