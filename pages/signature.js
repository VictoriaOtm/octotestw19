import DefaultPage from './default';

class SignaturePage extends DefaultPage {
    constructor() {
        super('signature', '#RealName0')
    }

    get locators() {
        return {
            name: '#RealName0',
            signature: '//iframe//body',
            saveBtn: 'button[type="submit"]',
        }
    }

    fillName (name) {
        this.page.waitForVisible("iframe");
        this.page.click(this.locators.name);
        this.page.setValue(this.locators.name, name);
    }

    fillSignature (signature) {
        this.page.waitForVisible(this.locators.signature);
        this.page.click(this.locators.signature);
        this.page.setValue(this.locators.signature, signature);
    }

    getName () {
        this.page.waitForVisible(this.locators.name);
        return this.page.getValue(this.locators.name);
    }

    getSignature() {
        this.page.waitForVisible(this.locators.signature);
        return this.page.getValue(this.locators.signature);
    }

    saveForm() {
        this.page.waitForVisible(this.locators.saveBtn);
        this.page.click(this.locators.saveBtn);
    }
}

export default new SignaturePage();