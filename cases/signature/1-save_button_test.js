import account from '../../steps/account';
import signature from '../../steps/settings/signature';
import notify from '../../steps/notify';

describe('Проверить работы кнопки сохранить', () => {

    const currentName = 'Jimmy Aja Aja';
    const signatureHTML = '<span>Hi brother</span>';

    it('Проверить сохранение', () => {
        account.auth();
        signature.open();

        signature.setSenderName(currentName);
        signature.setSignature(signatureHTML);
        signature.save();

        notify.waitForOkNotify();

        signature.open();

        signature.senderNameShouldBeEqualTo(currentName);
        signature.signatureShouldBeEqualTo(signatureHTML);
    });
});
