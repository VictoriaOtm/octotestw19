import DefaultSteps from './default';
import page from '../pages/viewer';

class ViewerSteps extends DefaultSteps {
	constructor() {
		super(page);
    }
    
    closeBanner() {
        this.page.clickBannerButton();
    }

    openView() {
        this.page.clickOpenViewButton();
    }

    changeViewFormat() {
        this.page.clickDropdownFormatMenu();
        this.page.clickListViewButton();
        this.page.waitForListView();

    }

	waitForViewer() {
		this.page.waitForContainer();
    }
}

export default new ViewerSteps();
