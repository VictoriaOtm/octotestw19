import DefaultPage from './default';

class ProfilePage extends DefaultPage {
    constructor() {
        super('profile', '[data-test-id=mailid-profile-container]')
    }

    get locators() {
        return {
            name: 'input[id="firstname"]',
            lastName: 'input[data-test-id="lastname-field-input"]',
            submitButton: '[data-test-id="save-button"]',
            gender: 'label[data-test-id$="-not-checked"]',
            photo: '[data-test-id="photo-overlay"]',
            saveButton: 'button[data-test-id="save-button"]',
        }
    }

    fillNameForm (username) {
        this.page.waitForVisible(this.locators.name);
        this.page.click(this.locators.name);
        this.page.setValue(this.locators.name, username);
    }

    fillLastNameForm (lastName) {
        this.page.waitForVisible(this.locators.lastName);
        this.page.click(this.locators.lastName);
        this.page.setValue(this.locators.lastName, lastName);
    }
    changeGender(){
        this.page.waitForVisible(this.locators.gender);
        this.page.click(this.locators.gender);
    }

    // changePhoto(){
    //     this.page.waitForVisible(this.locators.photo);
    //     this.page.click(this.locators.photo);
    //     browser.uploadFile("./pages/file.JPG");
    //     this.savePhoto();
    // }

    savePhoto(){
        this.page.waitForVisible(this.locators.saveButton);
        this.page.click(this.locators.saveButton);
    }

    submit() {
        this.page.waitForVisible(this.locators.submitButton);
        this.page.click(this.locators.submitButton)
    }

}

export default new ProfilePage();
