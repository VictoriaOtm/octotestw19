import account from '../../steps/account';
import letters from '../../steps/letters/index';
import signature from '../../steps/signature';

describe('Base signature tests', () => {
    beforeEach(() => {
        account.open('https://account.mail.ru');
        account.login();

        signature.open('https://e.mail.ru/settings/signature?afterReload=1');
        signature.waitForSignature();
    });

    const NAME = "My name";
    const SIGNATURE = "My signature";

    it('Заполнить форму и сохранить', () => {
        signature.fillForm(NAME, SIGNATURE);
        signature.saveForm();

        signature.open('https://e.mail.ru/settings/signature?afterReload=1');
        signature.waitForSignature();

        signature.checkForm(NAME, SIGNATURE);
    });
});