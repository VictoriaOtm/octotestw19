import account from '../../steps/account';
import signature from '../../steps/signature';

describe('Open page settings/signature errors', () => {
    beforeEach(() => {
        account.open('https://account.mail.ru');
        account.login();
    });

    it('Открыть страницу', () => {
        signature.open('https://e.mail.ru/settings/signature?afterReload=1');
        signature.waitForSignature();
    });
});