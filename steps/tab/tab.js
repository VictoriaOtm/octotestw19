import DefaultSteps from '../default';
import page from '../../pages/tab/tab';

class TabSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	clickTabByName(tabName) {
        this.page.clickTabByName(tabName);
    }

}

export default new TabSteps();