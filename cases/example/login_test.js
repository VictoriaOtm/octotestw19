import account from '../../steps/login';

// пример теста
describe('login-test', () => {
	it('Авторизоваться', () => {
		account.open('http://tripway.ru.com/signin');
		account.waitForAccount();
		account.login();
	});
});
