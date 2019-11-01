import account from '../../steps/account';
import userinfo from '../../steps/userinfo';
import {foldersHref} from '../../store/index';

const FOLDER = foldersHref.sent;

// пример теста
describe('test id', () => {

    beforeEach(function() {
        account.auth()
    });

	it('Зайти на e.mail.ru/settings/userinfo и поменять имя', () => {
        account.open('https://e.mail.ru/settings/userinfo');
        userinfo.changeData('hi');
	});
});
