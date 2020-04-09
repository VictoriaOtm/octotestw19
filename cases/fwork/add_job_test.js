import auth from '../../steps/fwork/auth';
import job from '../../steps/fwork/job';

describe('test add job', () => {
	beforeEach(() => {
		auth.auth();
	});

	it('Добавить заказ', () => {
		job.open("https://fwork.live/new-job");
		job.addJob();
	});
});
