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

    changeViewFormatToList() {
        this.page.clickDropdownFormatMenu();
        this.page.clickListViewButton();
        this.page.waitForListView();
    }

    changeViewFormatToThumb() {
        this.page.clickDropdownFormatMenu();
        this.page.clickThumbViewButton();
    }

	waitForViewer() {
		this.page.waitForContainer();
    }
}

export default new ViewerSteps();
