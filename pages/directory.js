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

    deleteCurrentDirectory() {
        this.page.waitForVisible(this.locators.deleteFolderButton);
        this.page.click(this.locators.deleteFolderButton)

        this.page.waitForVisible(this.locators.confirmDeleteFolderButton);
        this.page.click(this.locators.confirmDeleteFolderButton);
    }

    fillDirectoryNameForm (dirName) {
        this.page.waitForVisible(this.locators.dirNameInput);
        this.page.click(this.locators.dirNameInput);
        this.page.setValue(this.locators.dirNameInput, dirName);
    }

    createDirectory(dirName) {
        this.page.waitForVisible(this.locators.createButton);
        this.page.click(this.locators.createButton)
        this.page.waitForVisible(this.locators.createDirectoryButton);
        this.page.click(this.locators.createDirectoryButton)
        this.fillDirectoryNameForm(dirName)
        this.page.click(this.locators.submitButtonCreate)
    }

}

export default new DirectoryPage();