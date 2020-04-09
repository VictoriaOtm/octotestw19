import DefaultPage from "./default";

class ContactsPage extends DefaultPage {
    constructor() {
        super('contacts', '#root')
    }

    get locators() {
        return {
            addPhoneButton: '[data-test-id="recovery-addPhone-button"]',
            popUp : '[data-test-id="recovery-inner-popup"]',
            phoneInput : '[data-test-id="phone-input"]',
            addPhoneSubmitButton: '[data-test-id="recovery-addPhone-submit"]',
            invalidNumberSpan : '[data-test-id="recovery-error-invalidPhone"]',
            confirmPanel : '[data-test-id="recovery-addvfy-confirm-panel"]',
        }
    }

    openPhonePopUp() {
        this.page.waitForVisible(this.locators.addPhoneButton);
        this.page.click(this.locators.addPhoneButton);
        this.checkPopUp();
    }

    checkPopUp() {
        this.page.waitForVisible(this.locators.popUp);
    }

    insertPhone(phone) {
        this.page.setValue(this.locators.phoneInput, phone);
        this.submitPhone();
    }

    submitPhone() {
        this.page.waitForVisible(this.locators.addPhoneSubmitButton);
        this.page.click(this.locators.addPhoneSubmitButton);
    }

    checkInvalidNumber() {
        this.page.waitForVisible(this.locators.invalidNumberSpan);
    }

    checkValidNumber() {
        this.page.waitForVisible(this.locators.confirmPanel);
    }

}
export default new ContactsPage();