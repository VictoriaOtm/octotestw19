import DefaultSteps from './default';
import page from '../pages/auth';

class AuthSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    auth() {
        this.open('https://cinsear.ru');
        this.openAuthPage();
        this.login();
    }

    logout() {
        browser.deleteCookie('cinsear_session');
        this.open('https://cinsear.ru');
    }

    login() {
        this.page.fillLoginForm(process.env.LOGIN);
        this.page.fillPasswordForm(process.env.PASSWORD);
        this.page.submit();
        this.page.waitForUrl('https://cinsear.ru/');
    }

    openAuthPage() {
        this.page.toAuthPage();
    }

    waitForAccount() {
        this.page.waitForContainer();
    }
}

export default new AuthSteps();
