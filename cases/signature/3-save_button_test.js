import signature from '../../steps/settings/signature';
import notify from '../../steps/notify';
import account from '../../steps/account';

describe('Проверить работы кнопки сохранить', () => {
    it('Сохранить пустой подпись', () => {
        account.auth();
        signature.open();

        signature.setSignature('');
        signature.save();

        notify.waitForOkNotify();
    });
});
