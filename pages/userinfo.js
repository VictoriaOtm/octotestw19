import DefaultPage from './default';


class UserinfoPage extends DefaultPage {

    constructor() {
        super('userinfo', '.content__page')
    }
    
    get locators() {
        return {
            firstName: 'input[name="FirstName"]',
            submitButton: 'div.form__actions__inner button[type="submit"]',
            helpButton: 'div[id="settigns_toolbar__right"] a.b-toolbar__btn',
            birthDate: 'select[name="BirthDay"]',
            birthMonth: 'select[name="BirthMonth"]',
            birthYear: 'select[name="BirthYear"]',
            helpPage: 'img.pm-logo__link__pic'
        }
    }

    fillFirstNameForm(firstName) {
        this.page.waitForVisible(this.locators.firstName);
        this.page.click(this.locators.firstName);
        this.page.setValue(this.locators.firstName, firstName);
    }

    getFirstName() {
        return this.page.getValue(this.locators.firstName);
    }

    waitForHelpButton() {
        this.page.waitForVisible(this.locators.helpButton);
    }

    clickHelpButton() {
        
        this.page.click(this.locators.helpButton);
    }

    clickBirthDate() {
        this.page.waitForEnabled(this.locators.birthDate);
        this.page.click(this.locators.birthDate);
        this.page.waitForEnabled(this.locators.birthMonth);
        this.page.click(this.locators.birthMonth);
        this.page.waitForEnabled(this.locators.birthYear);
        this.page.click(this.locators.birthYear);
    }

    checkHelpPage() {
        this.page.waitForVisible(this.locators.helpPage);
    }


    submit() {
        this.page.waitForVisible(this.locators.submitButton);
        this.page.click(this.locators.submitButton);
    }
}

export default new UserinfoPage();