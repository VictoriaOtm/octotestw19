import DefaultSteps from '../default';
import page from '../../pages/contentServices/contentServices';

class ServicesSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	clickServiceByName(serviceName) {
        this.page.clickServiceByName(serviceName);
    }  

}

export default new ServicesSteps();