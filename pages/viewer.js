import DefaultPage from './default';

class ViewerPage extends DefaultPage {
	constructor() {
		super('viewer', '.b-collection__container_datalist')
	}

	get locators() {
		return {
            openViewButton: '.b-thumb__image',
            closeBannerButton: '[class^="Dialog__close"]',
            viewFormatButton: '#cloud_toolbars [data-group=view]',
            listViewButton: '#cloud_toolbars [data-name="list"]',
            listView: '.datalist_default'
			// login: 'input[name="Login"]',
			// password: 'input[name="Password"]',
			// nextButton: '[data-test-id="next-button"]',
			// submitButton: '[data-test-id="submit-button"]',
		}
    }
    
	clickOpenViewButton () {
		this.page.waitForVisible(this.locators.openViewButton);
		this.page.click(this.locators.openViewButton);
    }

    clickBannerButton () {
        this.page.waitForVisible(this.locators.closeBannerButton);
        this.page.click(this.locators.closeBannerButton);
    }
        
    clickDropdownFormatMenu () {
        this.page.waitForVisible(this.locators.viewFormatButton);
        this.page.click(this.locators.viewFormatButton);
    }

    clickListViewButton () {
        this.page.waitForVisible(this.locators.listViewButton);
        this.page.click(this.locators.listViewButton);
    }

    waitForListView () {
        this.page.waitForVisible(this.locators.listView);
    }
}

export default new ViewerPage();
