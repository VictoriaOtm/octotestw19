import DefaultPage from './default';
import { strict as assert } from 'assert';

class OtvetPage extends DefaultPage {
    constructor() {
        super('account', '[data-test-id=login-app-read]')
    }

    get locators() {
        return {
            category: '[bem-id="24"]',
            fullList: '[href="/categories/"]',
            navSearch: '[bem-id="182"]',
            bigSearch: '[name="search_value"]',
            navSearchBut: '[name="clb3917179"]',
            header: 'Все категории проекта'
        }
    }

    ClickCategoryButton() {
        this.page.waitForVisible(this.locators.category);
        this.page.click(this.locators.category);
    }

    ClickCategoryList() {
        this.page.waitForVisible(this.locators.fullList);
        this.page.click(this.locators.fullList);
        var header_text = $('h1').getText();
        assert.equal(header_text,this.locators.header);
    }

    inputSearch(text) {
        this.page.waitForVisible(this.locators.navSearch);
        this.page.click(this.locators.navSearch);
        this.page.setValue(this.locators.navSearch, text);
        this.page.click(this.locators.navSearchBut);
        this.page.waitForVisible(this.locators.bigSearch)
    }

    getSearch(searchText) {

        this.page.waitForVisible(this.locators.bigSearch)
        var searchValue = $('[name="search_value"]').getValue();
        assert.equal(searchText, searchValue);
    }

}

export default new OtvetPage();