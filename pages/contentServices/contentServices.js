import DefaultPage from '../default';

class ServicePage extends DefaultPage {
	constructor() {
		super('services', '.services__item');
	}

	get locators() {
		return {
			container: this.container,
			serviceByName: (serviceName) => this.container + ` a[href="${serviceName}"]`
		}
	}

	/**
	 * Клик по ссылке
	 * @param {string} serviceName
	 */
	clickServiceByName(serviceName) {
		const locator = this.locators.serviceByName(serviceName);
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

}

export default new ServicePage();