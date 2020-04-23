import auth from "../../steps/fwork/auth";
import jobStep from "../../steps/fwork/job";
import {job} from '../../store';

describe('test delete job', () => {
	beforeEach(() => {
		auth.auth();

		jobStep.open("https://fwork.live/new-job");
		jobStep.addJob(job);
	});

	it('Удалить заказ', () => {
		jobStep.open("https://fwork.live/my-job-postings");
		jobStep.deleteJob();
	});
});
