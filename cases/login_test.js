import account from '../steps/account';

describe('Проверка авторизации', () => {
	it('Авторизоваться', () => {
		account.open('https://virusmusic.fun/login');
		account.login();
		account.checkLogin();
	});
});
