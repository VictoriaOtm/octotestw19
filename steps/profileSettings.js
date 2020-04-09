import DefaultSteps from './default';
import page from '../pages/profileSettings';

class ProfileSettingsSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('https://https://solarsunrise.ru/login');
		this.waitForAccount();
		this.login();
	}

    goToSettings() {
        this.page.submitSettings();
    }

    setStatus() {
        this.page.fillStatusForm(process.env.STATUS);
        this.page.submit();
        this.page.waitForUrl('https://solarsunrise.ru/profile');
    }

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new ProfileSettingsSteps();
