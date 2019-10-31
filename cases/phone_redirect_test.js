import account from '../steps/account';
import profile from '../steps/profile';
import phone from '../steps/phone';
// import folders from '../steps/sidebar/folders';
// import letters from '../steps/letters/index';
import {foldersHref} from '../store/index';

const FOLDER = foldersHref.sent;

// пример теста
describe('test1', () => {
	// используйте beforeEach хук для вызова account.auth(),
    // если вы тестируете НЕ авторизацию
    
    beforeEach(function() { 
        account.auth();
        profile.openUserinfo();
    });

    it('При нажатии на "Мои телефоны" происходит редирек', () => {
        profile.clickMyPhones();
        phone.waitForPhone();
        phone.checkOpenPhoneUrl();
        // profile.checkOpenPhoneUrl();
    });

    // it('При попытке сохранить профиль с пустыми данными показываются сообщения об ошибке', () => {
    //     profile.inputEmptyData();
	// });
});