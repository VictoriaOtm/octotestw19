import account from '../../steps/account';
import folders from '../../steps/sidebar/folders';
import letters from '../../steps/letters/index';
import {foldersHref} from '../../store/index';

const FOLDER = foldersHref.sent;

// пример теста
describe('test id', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('Авторизоваться и открыть первое письмо на странице', () => {
		account.open('https://account.mail.ru');
		account.login();

		letters.waitForList();
		folders.clickFolderByName(FOLDER);
	});
});
