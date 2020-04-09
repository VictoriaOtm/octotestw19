import DefaultPage from '../default';

class TabPage extends DefaultPage {
	constructor() {
		super('tabs', '.header-tabs');
	}

	get locators() {
		return {
			container: this.container,
			tabByName: (tabName) => this.container + ` a[href="${tabName}"]`
		}
	}

	/**
	 * Клик по слайд табу
	 * @param {string} tabName
	 */
	clickTabByName(tabName) {
		const locator = this.locators.tabByName(tabName);
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

}

export default new TabPage();