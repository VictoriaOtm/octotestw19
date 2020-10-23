import DefaultSteps from "./default";
import page from "../pages/otvet";

const search_text = "TEXT";

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
        page.inputSearch(search_text);
        page.getSearch(search_text);
    }
}

export default new OtvetSteps();
