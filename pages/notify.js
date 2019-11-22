import DefaultPage from '../default';

class Notify extends DefaultPage {
    constructor() {
        super('Notify', '.notify');
    }

    get locators() {
        const {container} = this;

        return {
            container,
            messageOk: container + ' .notify-message__title__text_o',
        }
    }

    messageOk() {
        const locator = this.locators.messageOk;
        this.page.waitForVisible(locator);
    }
}

export default new Notify();
