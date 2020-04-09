import DefaultSteps from './default';
import page from '../pages/searching';
import assert from 'assert';

class SearchSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    findResume() {
        this.page.fillSearchForm();
        this.page.submit();
        this.page.waitForUrl('http://tripway.ru.com/resumes?position=%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA');
    }

    checkResult() {
        assert.strictEqual(this.page.countRelevantResults(), this.page.countAllResults())
    }

    waitForAccount() {
        this.page.waitForContainer();
    }
}

export default new SearchSteps();
