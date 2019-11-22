import account from '../../steps/account';
import signature from '../../steps/settings/signature';

describe('Проверить работы кнопки сохранить', () => {
    it('Не должен сохранить без имени отправителя', () => {
        account.auth();
        signature.open();

        signature.setSenderName('');
        signature.save();

        signature.shouldShowError(true);
    });
});
