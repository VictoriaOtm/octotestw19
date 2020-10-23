import DefaultPage from './default';

class DirectoryPage extends DefaultPage {
    constructor() {
        super('directory', '[data-bem="b-react-component"]')
    }

    get locators() {
        return {
            createButton: '.Toolbar__dropdownIcon--35xXj', // button create
            createDirectoryButton: '.DropdownItemAction__root--2vZQy', // button directory create
            dirNameInput: 'input[placeholder="Введите имя папки"]',
            submitButtonCreate: '.CreateNewFolderDialog__button--7S1Hs',

            bannerCloseButton: '.Dialog__close--1rKyk',
            deleteFolderButton: 'div[data-name="remove"]',
            confirmDeleteFolderButton: 'div.b-layer__controls__buttons > button[data-name="remove"]'
        }
    }

    waitForVisibleAndClick(locator) {
        this.page.waitForVisible(locator);
        this.page.click(locator);
    }

    deleteCurrentDirectory() {
        this.waitForVisibleAndClick(this.locators.deleteFolderButton)
        this.waitForVisibleAndClick(this.locators.confirmDeleteFolderButton)
    }

    fillDirectoryNameForm (dirName) {
        this.waitForVisibleAndClick(this.locators.dirNameInput)
        this.page.setValue(this.locators.dirNameInput, dirName);
    }

    createDirectory(dirName) {
        this.waitForVisibleAndClick(this.locators.createButton)
        this.waitForVisibleAndClick(this.locators.createDirectoryButton)
        this.fillDirectoryNameForm(dirName)
        this.waitForVisibleAndClick(this.locators.submitButtonCreate)
    }

}

export default new DirectoryPage();
