import DefaultSteps from '../default';
import page from '../../pages/ref/ref';

class RefSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	clickRefByName(refName) {
		this.page.clickRefByName(refName);
	}

}

export default new RefSteps();