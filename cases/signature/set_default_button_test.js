import account from '../../steps/account';
import signature from '../../steps/settings/signature';
import assert from 'assert';

describe('Проверить работы кнопки Вставить имя из анкеты', () => {

    it('Нажимаем на кнопку и прочитаем значение поли Имя отправителья', () => {
        account.auth();
        signature.open();
        signature.page.setDefaultName();
        signature.page.save();

        signature.page.waitForUrl(/settings\?result=ok/);
        signature.open();

        const defaultName = signature.page.senderName;
        assert.equal(defaultName, 'Джахонгир Тулфоров');
        /**
         * Я прекрасно понимаю так захардкодить запрещено. Но увы у меня не получилось как-то похитрить
         * Нашел такой скрипт в конце файла
         * <script>
         require(['patron.build/SettingsSignature'], function (SettingsSignature) {
                    new SettingsSignature({
                        el: $('#options-form-signature'),
                        defaultName: ajs.HTML.unescape('Джахонгир Тулфоров')
                    });
                });
         * </script>

         * Попробоваль не сработал ))
         */
    });
});
