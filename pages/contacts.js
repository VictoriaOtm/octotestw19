import DefaultPage from "./default";

class ContactsPage extends DefaultPage {
    constructor() {
        super('contacts', '#root')
    }

    get locators() {
        return {
            addPhoneButton: '[data-test-id="recovery-addPhone-button"]',
            addEmailButton: '[data-test-id="recovery-addEmail-button"]',
            popUp : '[data-test-id="recovery-inner-popup"]',
            phoneInput : '[data-test-id="phone-input"]',
            emailInput : '[data-test-id="recovery-addEmail-emailField-input"]',
            addPhoneSubmitButton: '[data-test-id="recovery-addPhone-submit"]',
            addEmailSubmitButton: '[data-test-id="recovery-addEmail-submit"]',
            invalidNumberSpan : '[data-test-id="recovery-error-invalidPhone"]',
            invalidEmailSpan : '[data-test-id="recovery-error-invalidEmail"]',
            confirmPanel : '[data-test-id="recovery-addvfy-confirm-panel"]',
        }
    }

    openPhonePopUp() {
        this.page.waitForVisible(this.locators.addPhoneButton);
        this.page.click(this.locators.addPhoneButton);
        this.checkPopUp();
    }

    openEmailPopUp() {
        this.page.waitForVisible(this.locators.addEmailButton);
        this.page.click(this.locators.addEmailButton);
        this.checkPopUp();
    }

    checkPopUp() {
        this.page.waitForVisible(this.locators.popUp);
    }

    insertPhone(phone) {
        this.page.setValue(this.locators.phoneInput, phone);
        this.submitPhone();
    }

    insertEmail(email) {
        this.page.setValue(this.locators.emailInput, email);
        this.submitEmail();
    }

    submitPhone() {
        this.page.waitForVisible(this.locators.addPhoneSubmitButton);
        this.page.click(this.locators.addPhoneSubmitButton);
    }

    submitEmail() {
        this.page.waitForVisible(this.locators.addEmailSubmitButton);
        this.page.click(this.locators.addEmailSubmitButton);
    }

    checkInvalidNumber() {
        this.page.waitForVisible(this.locators.invalidNumberSpan);
    }

    checkValidNumber() {
        this.page.waitForVisible(this.locators.confirmPanel);
    }

    checkInvalidEmail() {
        this.page.waitForVisible(this.locators.invalidEmailSpan);
    }

}
export default new ContactsPage();