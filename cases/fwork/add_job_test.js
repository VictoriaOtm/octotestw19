import auth from '../../steps/fwork/auth';
import jobStep from '../../steps/fwork/job';
import {job} from '../../store';

describe('test add job', () => {
	beforeEach(() => {
		auth.auth();
	});

	it('Добавить заказ', () => {
		jobStep.open("https://fwork.live/new-job");
		jobStep.addJob(job);
	});
});
