import account from '../../steps/account';
import start from '../../steps/start';
import viewer from '../../steps/viewer';
import folders from '../../steps/sidebar/folders';
import letters from '../../steps/letters/index';
import {foldersHref} from '../../store/index';

const FOLDER = foldersHref.sent;

// пример теста
// describe('test id', () => {
// 	// используйте beforeEach хук для вызова account.auth(),
// 	// если вы тестируете НЕ авторизацию
//
// 	it('Авторизоваться и открыть первое письмо на странице', () => {
// 		account.open('https://account.mail.ru');
// 		account.login();
//
// 		letters.waitForList();
// 		folders.clickFolderByName(FOLDER);
// 	});
// });

describe('test viewer', () => {
	before(() => {
		account.auth();
		start.open('https://cloud.mail.ru');
		start.exitModal();
	});

	beforeEach(() => {
		start.open('https://cloud.mail.ru');
	});

	it('Zoom', () => {
	start.toggleImage();
		viewer.zoomIn();

		viewer.zoomOut();
	});

	it('Remove file', () => {
		start.toggleImage();
		viewer.openRemoveModal();
	});

	it('Make favorite', () => {
		start.makeFavorite();
	})
});
