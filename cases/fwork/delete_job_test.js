import auth from "../../steps/fwork/auth";
import job from "../../steps/fwork/job";

describe('test delete job', () => {
	beforeEach(() => {
		auth.auth();

		job.open("https://fwork.live/new-job");
		job.addJob();
	});

	it('Удалить заказ', () => {
		job.open("https://fwork.live/my-job-postings");
		job.deleteJob();
	});
});
