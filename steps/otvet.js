import DefaultSteps from "./default";
import page from "../pages/otvet";

const search_text = "TEXT";

class OtvetSteps extends DefaultSteps {
    // constructor() {
    //     super(page);
    // }


    open_otvet() {
        this.open('https://otvet.mail.ru');
    }

    go_to_category_list() {
        page.click_category_button()
        page.click_category_list()
    }

    fill_search() {
        page.input_search(search_text);
        page.get_search(search_text);
    }
}

export default new OtvetSteps();
