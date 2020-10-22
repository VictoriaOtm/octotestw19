import account from '../../steps/account';
import letters from '../../steps/letters/index';

describe('test id 3', () => {

    it('Создать папку и подпапку и перейти в подпапку', () => {
        account.open('https://account.mail.ru');
        account.login();

        account.createSubDirectoryAndGoTo("someDirectory", "subSomeDirectory");
    });
});