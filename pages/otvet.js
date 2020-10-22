import DefaultPage from './default';

class OtvetPage extends DefaultPage {
    constructor() {
        super('account', '[data-test-id=login-app-read]')
    }

    get locators() {
        return {
            category: '[bem-id="24"]',
            ful_list: '[href="/categories/"]',
            nav_search: '[bem-id="182"]',
            big_search: '[name="search_value"]',
            nav_search_but: '[name="clb3917179"]',
            header: 'Все категории проекта'
        }
    }

    click_category_button() {
        this.page.waitForVisible(this.locators.category);
        this.page.click(this.locators.category);
    }

    click_category_list() {
        this.page.waitForVisible(this.locators.ful_list);
        this.page.click(this.locators.ful_list);
        var header_text = $('h1').getText();
        if (header_text !== this.locators.header) {
            console.log(header_text)
            throw new Error("you lose");
        }
    }

    input_search(text) {
        this.page.waitForVisible(this.locators.nav_search);
        this.page.click(this.locators.nav_search);
        this.page.setValue(this.locators.nav_search, text);
        this.page.click(this.locators.nav_search_but);
        this.page.waitForVisible(this.locators.big_search)
    }

    get_search(search_text) {
        this.page.waitForVisible(this.locators.big_search)
        var search_value = $('[name="search_value"]').getValue();
        if (search_text !== search_value) {
            console.log(search_value)
            throw new Error("you lose");
        }
    }

}

export default new OtvetPage();