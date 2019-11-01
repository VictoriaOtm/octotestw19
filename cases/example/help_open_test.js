import account from '../../steps/account';
import userinfo from '../../steps/userinfo';
import {foldersHref} from '../../store/index';

const FOLDER = foldersHref.sent;

// пример теста
describe('test id', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию
	beforeEach(function() {
        account.auth()
    });

	it('Проверка нажатия на e.mail.ru/settings/userinfo страницы помощи и открытия её не в той же вкладке', () => {
        account.open('https://e.mail.ru/settings/userinfo');
        userinfo.goToHelpPage();
	});
});