import DefaultPage from '../default';

class RefPage extends DefaultPage {
	constructor() {
		super('refs', '.footer-menu');
	}

	get locators() {
		return {
			container: this.container,
			refByName: (refName) => this.container + ` a[href="${refName}"]`
		}
	}

	/**
	 * Клик по ссылке
	 * @param {string} refName
	 */
	clickRefByName(refName) {
		const locator = this.locators.refByName(refName);
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

}

export default new RefPage();