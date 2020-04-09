import DefaultPage from "./default";

class AskPage extends DefaultPage {
    constructor() {
        super('ask', '.layout_1VYOlkXa');
    }

    get locators() {
        return {
            themeField: '[name="question_text"]',
            textField: '[name="question_additional"]',

            categoryButton: '[name="select_parents_categories"]',
            categoryList: '//*[@name="select_parents_categories"]/a/*[@class="default_1IJJ-JAn"]',
            anyCategory: '//*[@name="select_parents_categories"]/a/*[@class="default_1IJJ-JAn"]/div/div[2]/div[1]/div/span',

            subcategoryButton: '[name="select_childs_categories"]',
            subcategoryList: '//*[@name="select_childs_categories"]/a/*[@class="default_1IJJ-JAn"]',
            anySubcategory: '//*[@name="select_childs_categories"]/a/*[@class="default_1IJJ-JAn"]/div/div[2]/div[1]/div/span',

            submitButton: '.bg_37aDeK6H',
        }
    }

    fillQuestionThemeForm(theme) {
        this.page.waitForVisible(this.locators.themeField);
        this.page.click(this.locators.themeField);
        this.page.setValue(this.locators.themeField, theme);
    }

    fillQuestionTextForm(text) {
        this.page.waitForVisible(this.locators.textField);
        this.page.click(this.locators.textField);
        this.page.setValue(this.locators.textField, text);
    }

    chooseAnyCategory() {
        this.page.waitForVisible(this.locators.categoryButton);
        this.page.click(this.locators.categoryButton);
        this.page.waitForVisible(this.locators.categoryList);
        this.page.click(this.locators.anyCategory);
    }

    chooseAnySubcategory() {
        this.page.waitForVisible(this.locators.subcategoryButton);
        this.page.click(this.locators.subcategoryButton);
        this.page.waitForVisible(this.locators.subcategoryList);
        this.page.click(this.locators.anySubcategory);
    }

    submit() {
        this.page.waitForVisible(this.locators.submitButton);
        this.page.click(this.locators.submitButton);
    }
}

export default new AskPage();
