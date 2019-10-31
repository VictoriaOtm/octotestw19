import DefaultSteps from './default';
import page from '../pages/userinfo';

class UserinfoSteps extends DefaultSteps {
	constructor() {
		super(page);
    }

	waitForErrorMessagesNearForm(form) {
        this.page.topErrorMessage.waitForContainer();
        const formErrorMessage = `${form}ErrorMessage`;
        this.page[formErrorMessage].waitForContainer();
    }

    waitForSuggestItems() {
        this.page.suggestItems.waitForContainer();
    }

    enterAndSaveNewSurname(surname) {
        this.page.fillSurnameForm(surname);
        this.page.save();
    }

    enterAndSaveNewTown(townName) {
        this.page.fillTownForm(townName);
        this.page.save();
    }

    enterTown(townName) {
        this.page.fillTownForm(townName);
    }
    
    openUserinfo() {
        this.open('https://e.mail.ru/settings/userinfo');
		this.page.waitForContainer();
	}
}

export default new UserinfoSteps();
