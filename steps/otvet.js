import DefaultSteps from "./default";
import page from "../pages/otvet";

class OtvetSteps extends DefaultSteps {
    OpenOtvet() {
        this.open('https://otvet.mail.ru');
    }

    GoToCategoryList() {
        page.ClickCategoryButton()
        page.ClickCategoryList()
    }

    FillSearch(searchText) {
        page.inputSearch(searchText);
        page.getSearch(searchText);
    }
}

export default new OtvetSteps();
