import DefaultSteps from "./default";
import page from "../pages/auth";

class authSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    auth() {
        this.open('https://virusmusic.fun/login');
        this.waitForAccount();
        this.login();
    }

    login() {
        this.page.fillLoginForm(process.env.LOGIN);
        this.page.fillPasswordForm(process.env.PASSWORD);
        this.page.submit();
        this.page.waitForUrl('https://virusmusic.fun/');
    }

    waitForAccount() {
        this.page.waitForContainer();
    }
}

export default new authSteps();