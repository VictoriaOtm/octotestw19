import account from '../../steps/account';

// пример теста
describe('test id', () => {

	it('Авторизоваться в Solar', () => {
		account.open('https://solarsunrise.ru/login');
		account.login();
	});

	it('Авторизоваться c невалидными данными в Solar', () => {
		account.open('https://solarsunrise.ru/login');
		account.nologin();
	});
});
