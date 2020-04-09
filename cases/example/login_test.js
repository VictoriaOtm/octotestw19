import account from '../../steps/account';
import letters from '../../steps/letters/index';

// пример теста
describe('test id', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('Авторизоваться и открыть первое письмо на странице', () => {
		account.open('https://account.mail.ru/login?page=https%3A%2F%2Faccount.mail.ru%2F%3F&');
		account.login();

		letters.waitForList();
		letters.openLetter();
	});
});
