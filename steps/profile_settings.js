import DefaultSteps from './default';
import page from '../pages/profile_settings';

class ProfileSettingsPage extends DefaultSteps {
	constructor() {
		super(page);
	}

	changeName(name) {
		this.open('https://drello.works/profile');
		this.waitForProfileSettings();

		this.page.fillNameForm(name);
		this.page.submit();
	}

	checkInvalidName() {
		this.page.checkInvalidNameForm();
	}

	changeSurname(surname) {
		this.open('https://drello.works/profile');
		this.waitForProfileSettings();

		this.page.fillSurnameForm(surname);
		this.page.submit();
	}

	checkInvalidSurname() {
		this.page.checkInvalidSurnameForm();
	}

	waitForProfileSettings() {
		this.page.waitForContainer();
	}
}

export default new ProfileSettingsPage();
