import DefaultPage from './default';

class SignupPage extends DefaultPage {
    constructor() {
        super('signup', '.page')
    }

    get locators() {
        return {
            companyName: 'input[name="companyName"]',
            site: 'input[name="site"]',
            region: 'input[name="region"]',
            firstName: 'input[name="firstName"]',
            secondName: 'input[name="secondName"]',
            phoneNumber: 'input[name="phoneNumber"]',
            login: 'input[name="login"]',
            password: 'input[name="pass"]',
            password2: 'input[name="repass"]',
            submitButton: '.button',
        }
    }

    fillCompanyName (companyName) {
        this.page.waitForVisible(this.locators.companyName);
        this.page.click(this.locators.companyName);
        this.page.setValue(this.locators.companyName, companyName);
    }

    fillSite () {
        this.page.waitForVisible(this.locators.site);
        this.page.click(this.locators.site);
        this.page.setValue(this.locators.site, 'http://tripway.ru.com/');
    }

    fillRegion () {
        this.page.waitForVisible(this.locators.region);
        this.page.click(this.locators.region);
        this.page.setValue(this.locators.region, 'Москва');
    }

    fillFirstName () {
        this.page.waitForVisible(this.locators.firstName);
        this.page.click(this.locators.firstName);
        this.page.setValue(this.locators.firstName, 'Тест');
    }

    fillSecondName () {
        this.page.waitForVisible(this.locators.secondName);
        this.page.click(this.locators.secondName);
        this.page.setValue(this.locators.secondName, 'Тестов');
    }

    fillPhoneNumber () {
        this.page.waitForVisible(this.locators.phoneNumber);
        this.page.click(this.locators.phoneNumber);
        this.page.setValue(this.locators.phoneNumber, '89991234567');
    }

    fillEmail (email) {
        this.page.waitForVisible(this.locators.login);
        this.page.click(this.locators.login);
        this.page.setValue(this.locators.login, email);
    }

    fillPassword (password) {
        this.page.waitForVisible(this.locators.password);
        this.page.click(this.locators.password);
        this.page.setValue(this.locators.password, password);

        this.page.waitForVisible(this.locators.password2);
        this.page.click(this.locators.password2);
        this.page.setValue(this.locators.password2, password);
    }

    submit() {
        this.page.waitForVisible(this.locators.submitButton);
        this.page.click(this.locators.submitButton)
    }

}

export default new SignupPage();
