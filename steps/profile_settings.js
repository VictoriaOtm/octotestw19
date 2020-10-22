import DefaultSteps from './default';
import page from '../pages/profile_settings';

class ProfileSettingsPage extends DefaultSteps {
	constructor() {
		super(page);
	}

	change() {
		this.open('https://drello.works/profile');
		this.waitForProfileSettings();
		
		this.setInvalidName();
		this.setInvalidSurname();
	}


	setInvalidName() {
		this.page.fillNameForm("1");
		this.page.submit();
		this.page.checkInvalidNameForm();
	}


	setInvalidSurname() {
		this.page.fillSurnameForm("2");
		this.page.submit();
		this.page.checkInvalidSurnameForm();
	}


	waitForProfileSettings() {
		this.page.waitForContainer();
	}
}

export default new ProfileSettingsPage();
