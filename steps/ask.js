import DefaultSteps from "./default";
import page from "../pages/ask"

class AskSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    askQuestion(theme, text) {
        this.waitForQuestionForm();

        this.page.fillQuestionThemeForm(theme);
        this.page.fillQuestionTextForm(text);
        this.page.chooseAnyCategory();
        this.page.chooseAnySubcategory();
        this.page.submit();

        this.page.waitForUrl('https://otvet.mail.ru/question/*');
    }

    waitForQuestionForm() {
        this.page.waitForContainer();
    }
}

export default new AskSteps();
