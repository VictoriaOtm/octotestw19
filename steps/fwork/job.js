import DefaultSteps from "../default";
import page from '../../pages/fwork/job';

class JobSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	addJob(){
		this.page.waitForContainer();
		this.page.fillAddJobForm();
		this.page.submitAdd();
		this.page.waitForJobPage();
	}

	deleteJob(){
		this.page.waitForContainer();
		this.page.deleteJob();
	}
}

export default new JobSteps();
