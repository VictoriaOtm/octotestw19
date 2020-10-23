import DefaultSteps from "./default";
import page from "../pages/otvet";

const SEARCH_TEXT = "TEXT";

class OtvetSteps extends DefaultSteps {
    // constructor() {
    //     super(page);
    // }


    OpenOtvet() {
        this.open('https://otvet.mail.ru');
    }

    GoToCategoryList() {
        page.ClickCategoryButton()
        page.ClickCategoryList()
    }

    FillSearch() {
        page.inputSearch(SEARCH_TEXT);
        page.getSearch(SEARCH_TEXT);
    }
}

export default new OtvetSteps();
