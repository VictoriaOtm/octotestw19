import account from '../../steps/account';
import letters from '../../steps/letters/index';

describe('test id 2', () => {

    it('Создать папку и перейти в нее', () => {
        account.open('https://account.mail.ru');
        account.login();

        account.createDirectoryAndGoTo("FirstDirectory");
    });
});
