import account from '../steps/account';
import profile from '../steps/profile';
// import folders from '../steps/sidebar/folders';
// import letters from '../steps/letters/index';
import {foldersHref} from '../store/index';

const FOLDER = foldersHref.sent;

describe('test1', () => {
	// используйте beforeEach хук для вызова account.auth(),
    // если вы тестируете НЕ авторизацию
    
    beforeEach(function() { 
        account.auth();
        profile.openUserinfo();
    });

	it('Снять галку Определять автоматически в поле Ваш часовой пояс', () => {
        profile.changeCheckBox();
        profile.getCheckBox();
    });
});