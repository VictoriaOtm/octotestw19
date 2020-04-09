import DefaultPage from "./default";


class ProfilePage extends DefaultPage {

    constructor() {
        super('profile', '.profile');
        this.testName = 'name';
        this.testDescription = 'description';
    }

    get locators() {
        return {
            editButton: '.js-edit-button',
            editModal: '.profile-edit-form',
            nameForm: '#js-username-input',
            descriptionForm: '#js-description-textarea',
            saveButton: '#js-save-button',

            nameText: '.list__item:first-child .title',
            descriptionText: '.list__item:first-child div:nth-child(2)',
        }
    }

    openEditModal() {
        this.page.waitForVisible(this.locators.editButton);
        this.page.click(this.locators.editButton);
        this.page.waitForVisible(this.locators.editModal);
    }

    fillNameForm() {
        this.page.waitForVisible(this.locators.editModal);
        this.page.click(this.locators.nameForm);
        this.page.setValue(this.locators.nameForm, this.testName);
    }

    fillDescriptionForm() {
        this.page.waitForVisible(this.locators.editModal);
        this.page.click(this.locators.descriptionForm);
        this.page.setValue(this.locators.descriptionForm, this.testDescription);
    }

    getDescription() {
        return this.page.getText(this.locators.descriptionText);
    }

    getName() {
        return this.page.getText(this.locators.nameText);
    }

    submit() {
        this.page.waitForVisible(this.locators.saveButton);
        this.page.click(this.locators.saveButton);
        this.waitForContainer();
    }

}

export default new ProfilePage();