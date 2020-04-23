import DefaultSteps from "../default";
import page from '../../pages/fwork/job';

class JobSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	addJob(job){
		this.page.waitForContainer();
		this.fillAddJobForm(job);
		this.page.submitAdd();
		this.page.waitForJobPage();
	}

	deleteJob(){
		this.page.waitForContainer();
		this.page.deleteJob();
	}

	fillAddJobForm ({
		title,
		description,
		paymentAmount,
		tags
	} = {}) {
		this.fillTitle(title);
		this.fillDescription(description);

		this.fillPaymentAmount(paymentAmount);
		this.fillTags(tags);
		this.chooseLevelRadio();

		this.selectCategory();
		this.selectCountry();

		this.selectSpec();
		this.selectCity();
	}
}

export default new JobSteps();
