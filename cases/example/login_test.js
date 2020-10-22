import account from '../../steps/account';
import letters from '../../steps/letters/index';

// авторизация
describe('test id', () => {


	it('Авторизоваться и дождаться приветственного сообщения', () => {
		account.open('https://zinterest.ru/login');
		account.login();
	});

});
