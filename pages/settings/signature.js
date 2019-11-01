import DefaultPage from '../default';

class SignaturePage extends DefaultPage {
    constructor() {
        super('signature', '.content__page');
    }

    get locators() {
        const container = this.container;

        return {
            container,
            senderName: container + ' input#RealName0',
            signatureText: (number) =>  container + ` iframe#Editor${number}_ifr`,
            saveButton: 'button[data-mnemo=\'save\'][type=\'submit\'',
            cancelButton: '.form__actions__inner a',
            nameError: container + ' .form__message.form__message_error',
            setDefaultName: container + ' .js-set-default-name'
        }
    }

    set senderName(name) {
        const locator = this.locators.senderName;
        this.page.setValue(locator, name);
        // $(locator).setValue(name);
    }

    get senderName() {
        const locator = this.locators.senderName;
        return this.page.getValue(locator);
    }

    getTextError() {
        const locator = this.locators.nameError;
        return this.page.getText(locator)[0];
    }

    getIframeValue() {
        const locator = this.locators.signatureText(0);

        const myFrame = $(locator).value;
        browser.frame(myFrame);

        return $('body').getHTML(false);
    }

    addSignatureText(signatureNumber, text) {
        const locator = this.locators.signatureText(signatureNumber);

        this.page.execute(`
            const element = document.querySelector(arguments[0]);
            element.src = "about:blank";
            
            element.contentWindow.document.open();
            element.contentWindow.document.write(arguments[1]);
            element.contentWindow.document.close();
        `, locator, text);
    }

    save() {
        const button = this.locators.saveButton;
        this.page.click(button);
    }

    cancelChanging() {
        const locator = this.locators.cancelButton;
        this.page.click(locator);
    }

    setDefaultName() {
        const locator = this.locators.setDefaultName;
        this.page.click(locator);
    }
}

export default new SignaturePage();
