import DefaultSteps from './default';
import page from '../pages/notify';

class NotifySteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    waitForOkNotify() {
        const {page} = this;

        page.waitForUrl(/settings\?result=ok/);

        const locator = page.locators.messageOk;
        page.waitForVisible(locator, true);
    }
}

export default new NotifySteps();
