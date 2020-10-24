import DefaultPage from './default';

class BoardPage extends DefaultPage {
    constructor() {
        super('board', '[class=board]')
    }

    get locators() {
        return {
            login: 'input[id="inputLogin"]',
            boardSettingsButton: 'div[id="boardSettingsButton"]',
            addNewUserButton:   '//img[contains(@class, "js-addNewUser")]',
            boardSettingsPopup: '//div[contains(@class, "board-settings")]',
            deleteBoardButton:  '//div[contains(@class, "js-deleteBoard")]'
        }
    }

    openBoardSettingsPopup() {
        this.page.waitForVisible(this.locators.boardSettingsButton)
        this.page.click(this.locators.boardSettingsButton);
        this.page.waitForVisible(this.locators.boardSettingsPopup);
    }

    openAddNewUsersPopup() {
        this.page.waitForVisible(this.locators.addNewUserButton);
        this.page.click(this.locators.addNewUserButton);
        this.page.waitForVisible(this.locators.boardSettingsPopup);
    }

    clickDeleteBoardButton() {
        this.page.waitForVisible(this.locators.deleteBoardButton);
        this.page.click(this.locators.deleteBoardButton);
    }

}

export default new BoardPage();
