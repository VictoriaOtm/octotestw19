import account from '../steps/account';

describe('Авторизация', () => {
	it('Авторизоваться в сервисе', () => {
		account.open(browser.options.baseUrl);
		account.login();
	});
});
