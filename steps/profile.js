import DefaultSteps from './default';
import page from '../pages/profile';

class ProfileSteps extends DefaultSteps {
	constructor() {
		super(page);
    }
    
    changeCheckBox() {
        this.page.clickCheckBox();
        this.page.findSelector();
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
    
    waitForPhoneUrl() {
		this.page.waitForUrl('https://account.mail.ru/security/recovery');
	}
}

export default new ProfileSteps();
