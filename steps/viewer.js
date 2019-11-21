import DefaultSteps from './default';
import page from '../pages/viewer';

class ViewerSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	openCloud() {
		this.open('https://cloud.mail.ru/home/%D0%91%D0%B5%D1%80%D0%B5%D0%B3.jpg');
		this.page.waitForLoaded();
	}

	checkShare() {
		this.page.clickShare();
		this.page.waitForShareModalOpened();
	}

	checkFavourite() {
		this.page.clickFavourite();
		this.page.waitForFavourite();
		this.page.clickFavourite();
	}

	expandDownBar() {
		this.page.expandDownBar();
	}

	checkIfExpanded() {
		this.page.waitForExpanded();
	}
}

export default new ViewerSteps();
