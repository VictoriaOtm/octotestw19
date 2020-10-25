import DefaultSteps from "./default";
import page from "../pages/auth";
import {foldersHref} from "../store";

class AuthSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    login() {
        this.page.fillLoginForm(process.env.LOGIN);
        this.page.fillPasswordForm(process.env.PASSWORD);
        this.page.submit();
        this.page.waitForUrl(foldersHref.virusmusic);
    }
}


export default new AuthSteps();