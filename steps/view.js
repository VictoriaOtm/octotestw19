import DefaultSteps from './default';
import page from '../pages/view';

class ViewSteps extends DefaultSteps {
	constructor() {
		super(page);
    }

    showBottomNavbar () {
        this.page.clickExpandButton();   
        this.page.waitForNavbar();
    }
    
	waitForView() {
		this.page.waitForContainer();
    }

    closeView () {
        this.page.clickCloseViewButton()
    }
}

export default new ViewSteps();
