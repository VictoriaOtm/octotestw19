import DefaultPage from './default';

class ProfileSettingsPage extends DefaultPage {
	constructor() {
		super('account', '[data-test-id=login-app-ready]')
	}

	get locators() {
		return {
            status: 'input[id="status"]',
            settingsButton: 'a[href="/settings"]',
            submitButton: 'input[class="button-save button-save_pos"]',
            submitPoints: 'img[id="headerView"]'
		}
	}

    fillStatusForm (status) {
		this.page.waitForVisible(this.locators.status);
		this.page.click(this.locators.status);
		this.page.setValue(this.locators.status, status);
    }

    submitSettings() {
        this.page.waitForVisible(this.locators.submitPoints);
        this.page.click(this.locators.submitPoints);
        
		this.page.waitForVisible(this.locators.settingsButton);
		this.page.click(this.locators.settingsButton);
    }

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton);
	}

}

export default new ProfileSettingsPage();