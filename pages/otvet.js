import DefaultPage from './default';
import {strict as assert} from 'assert';

const HEADER = 'Все категории проекта';

class OtvetPage extends DefaultPage {
    get locators() {
        return {
            category: '[bem-id="24"]',
            fullList: '[href="/categories/"]',
            navSearch: '[bem-id="182"]',
            bigSearch: '[name="search_value"]',
            navSearchBut: '[name="clb3917179"]',
            headerLAbel: 'h1',
        }
    }

    ClickCategoryButton() {
        this.page.waitForVisible(this.locators.category);
        this.page.click(this.locators.category);
    }

    ClickCategoryList() {
        this.page.waitForVisible(this.locators.fullList);
        this.page.click(this.locators.fullList);
        const headerText = $(this.locators.headerLAbel).getText();
        assert.equal(headerText, HEADER);
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
        const searchValue = $(this.locators.bigSearch).getValue();
        assert.equal(searchText, searchValue);
    }

}

export default new OtvetPage();