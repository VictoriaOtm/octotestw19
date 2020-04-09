import auth from '../../steps/fwork/auth';

describe('test auth', () => {
	it('Авторизоваться', () => {
		auth.open('https://fwork.live/login');
		auth.login();
	});
});
