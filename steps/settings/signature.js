import DefaultSteps from '../default';
import page from '../../pages/settings/signature';

class SignatureSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    open(path) {
        super.open('https://e.mail.ru/settings/signature');
        this.page.waitForUrl('https://e.mail.ru/settings/signature?afterReload=1');
    }

    saveSignature(text) {
        this.page.addSignatureText(0, text);
        this.page.save();
    }

    saveSenderName(name) {
        this.page.senderName = name;
        this.page.save();
    }

    getFrameValue() {
        browser.frame(this.page.iframe);
        return $
    }
}

export default new SignatureSteps();
