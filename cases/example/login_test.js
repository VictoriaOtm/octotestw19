import account from '../../steps/account';


describe('test id', () => {

	it('Авторизоваться и дождаться приветственного сообщения', () => {

		account.open(browser.options.baseUrl + '/login');
		account.login();
	});

});
