import DefaultSteps from '../default';
import page from '../../pages/recovery';

class RecoverySteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	waitForForm() {
		this.page.waitForContainer();
	}
}

export default new RecoverySteps();
