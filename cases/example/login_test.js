import account from '../../steps/account';
import letters from '../../steps/letters/index';
import { foldersHref } from "../../store";

// пример теста
describe('test id', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('Авторизоваться', () => {
		account.open(foldersHref.login);
		account.login();

		// letters.waitForList();
		// letters.openLetter();
	});
});
