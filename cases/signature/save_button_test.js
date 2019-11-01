import account from '../../steps/account';
import signature from '../../steps/settings/signature';
import assert from 'assert';

describe('Проверить работы кнопки сохранить', () => {

    it('Проверить сохранение', () => {
        account.auth();
        signature.open();

        const currentName = 'Jimmy Aja Aja';
        const signatureHTML = '<span>Hi brother</span>';

        signature.page.senderName = currentName;
        signature.saveSignature(signatureHTML);

        signature.page.waitForUrl(/settings\?result=ok/);

        signature.open();
        const currentName2 = signature.page.senderName;
        const signatureHTML2 = signature.page.getIframeValue();

        assert.equal(currentName, currentName2);     /// Проверяем действительно ли сохранил имя отправителья
        assert.equal(signatureHTML, signatureHTML2); /// Проверяем не менял ли сохранил подписа
    });

    it('Не должен сохранить без имени отправителя', () => {
        const {page} = signature;
        signature.open();
        signature.saveSenderName('');

        const textError = page.getTextError();
        console.log(textError);
        assert.equal(textError, 'Заполните обязательное поле');
    });

    it('Сохранить пустой подпись', () => {
        signature.open();
        signature.saveSignature('');

        signature.page.waitForUrl(/settings\?result=ok/);
    });
});
