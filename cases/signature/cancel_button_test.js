import account from '../../steps/account';
import signature from '../../steps/settings/signature';
import assert from 'assert';

describe('Проверить работы кнопки Отменить', () => {

    it('Простая проверка', () => {
        account.auth();

        signature.open();
        signature.page.cancelChanging();
        signature.page.waitForUrl(/settings/);
    });

    it('Изменяем полья. Нажием кнопку отменить и новые вводённые данные не должны сохраниться', () => {
        signature.open();

        const currentName = signature.page.senderName;
        const signatureHTML = signature.page.getIframeValue();

        signature.page.senderName = 'Jacky Chan';
        signature.page.addSignatureText(0, 'Lorem Ipsum');
        signature.page.cancelChanging();
        signature.page.waitForUrl(/settings/);

        signature.open();

        const currentName2 = signature.page.senderName;
        const signatureHTML2 = signature.page.getIframeValue();

        assert.equal(currentName, currentName2);     /// Проверяем не менял ли наша кнопка имя отправителья
        assert.equal(signatureHTML, signatureHTML2); /// Проверяем не менял ли наша кнопка подписа
    });
});
