import account from '../../steps/login';
describe('Auth', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('Авторизоваться', () => {
		account.open('https://solarsunrise.ru/login');
		account.login();
	});
});
