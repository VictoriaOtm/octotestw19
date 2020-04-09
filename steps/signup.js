import DefaultSteps from './default';
import page from '../pages/signup';

class SignupSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    signup() {
        this.page.fillCompanyName(process.env.COMPANY_NAME);
        this.page.fillSite();
        this.page.fillRegion();
        this.page.fillFirstName();
        this.page.fillSecondName();
        this.page.fillPhoneNumber();
        this.page.fillEmail(process.env.EMAIL)
        this.page.fillPassword(process.env.PASSWORD)
        this.page.submit();
        this.page.waitForUrl('http://tripway.ru.com/');
    }

    waitForAccount() {
        this.page.waitForContainer();
    }
}

export default new SignupSteps();
