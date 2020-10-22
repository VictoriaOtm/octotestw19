import account from '../../steps/account';

describe('test id', () => {
	it('Авторизоваться', () => {
		account.open('https://virusmusic.fun/login');
		account.login();
		account.checkLogin();
	});
});
