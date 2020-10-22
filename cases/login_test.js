import account from '../steps/account';

describe('test id', () => {
	it('Авторизоваться в сервисе', () => {
		account.open('https://zinterest.ru');
		account.login();
	});
});
