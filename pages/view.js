import DefaultPage from './default';

class ViewPage extends DefaultPage {
	constructor() {
		super('view', '[class=b-view__image__image]')
	}

	get locators() {
		return {
            expandButton:'[data-name="expand"]',
            navbar: '.b-viewer__toolbox_expanded',
            closeViewButton: '.b-viewer__viewport__close'
		}
    }

    clickExpandButton() {
        this.page.waitForVisible(this.locators.expandButton);
        this.page.click(this.locators.expandButton);
    }

    clickCloseViewButton() {
        this.page.waitForVisible(this.locators.closeViewButton);
        this.page.click(this.locators.closeViewButton);
    }

    waitForNavbar() {
        this.page.waitForVisible(this.locators.navbar);
    }
}

export default new ViewPage();
