import DefaultSteps from '../default';
import page from '../../pages/settings/signature';
import assert from 'assert';

class SignatureSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    open(path) {
        super.open('https://e.mail.ru/settings/signature');
        this.page.waitForUrl('https://e.mail.ru/settings/signature?afterReload=1');
    }

    setSenderName(name) {
        this.page.senderName = name;
    }

    senderNameShouldBeEqualTo(name) {
        const currentName = this.page.senderName;
        assert.equal(name, currentName);  /// Проверяем действительно ли сохранил имя отправителья
    }

    setSignature() {
        this.page.addSignatureText(0, text);
    }

    signatureShouldBeEqualTo(signature) {
        const currentSignature = this.page.getIframeValue();
        assert.equal(signature, currentSignature); /// Проверяем не менял ли сохранил подписа
    }

    saveSignature(text) {
        this.page.addSignatureText(0, text);
    }

    save() {
        this.page.save();
    }

    shouldShowError(error) {
        const textError = this.page.getTextError();

        if (error) {
            assert.equal(textError, 'Заполните обязательное поле');
        } else {
            assert.equal(textError, '');
        }
    }

}

export default new SignatureSteps();
