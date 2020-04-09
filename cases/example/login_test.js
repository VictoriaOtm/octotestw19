import account from '../../steps/account';
import letters from '../../steps/letters/index';

// пример теста
describe('test id', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('Авторизоваться в Solar', () => {
		account.open('https://solarsunrise.ru/login');
		account.login();

		// letters.waitForList();
		// letters.openLetter();
	});
});
