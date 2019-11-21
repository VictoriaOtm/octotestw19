import DefaultSteps from './default';
import page from '../pages/profile';

class ProfileSteps extends DefaultSteps {
	constructor() {
		super(page);
    }
    
    changeCheckBox() {
        this.page.clickCheckBox();
    }

    getCheckBox() {
        this.page.findTimeSelector();
    }

    clickMyPhones() {
        this.page.clickMyPhones();
    }

    openUserinfo() {
        this.open('https://e.mail.ru/settings/userinfo');
        this.waitForProfile();
    }

    inputEmptyData() {
        
    }
    
    waitForProfile() {
		  this.page.waitForContainer();
    }
}

export default new ProfileSteps();
