import DefaultPage from './default';

class BoardsPage extends DefaultPage {
    constructor() {
        super('boards', '[class=boards]')
    }

    get locators() {
        return {
            createBoardButton: 'div[id="addBoard"]',
            boardNameInput: 'input[id="inputNewBoardTitle"]',
            submitBoardButton: 'div[id="submitAddBoard"]',
            boardTitle: (title) => `//div[@class="group-mini-board__title" and text()="${title}"]`
        }
    }

    openCreateBoardForm() {
        this.page.waitForVisible(this.locators.createBoardButton);
        this.page.click(this.locators.createBoardButton);
    }

    fillBoardName(boardName) {
        this.page.waitForVisible(this.locators.boardNameInput);
        this.page.click(this.locators.boardNameInput);
        this.page.setValue(this.locators.boardNameInput, boardName);

    }

    submitCreateBoardForm() {
        this.page.waitForVisible(this.locators.submitBoardButton);
        this.page.click(this.locators.submitBoardButton);
    }

    openBoard(boardName) {
        this.page.waitForVisible(this.locators.boardTitle(boardName));
        this.page.click(this.locators.boardTitle(boardName));
    }

}

export default new BoardsPage();
