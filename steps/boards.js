import DefaultSteps from './default';
import page from '../pages/boards';
import board from "../pages/board";

class BoardsSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	createBoard(boardName) {
		this.open(`${process.env.DRELLO_URL}/boards`);
		this.page.waitForContainer()

		this.page.openCreateBoardForm();
		this.page.fillBoardName(boardName);
		this.page.submitCreateBoardForm()

		board.waitForContainer();
	}

	openBoard(boardName) {
		this.open(`${process.env.DRELLO_URL}/boards`);
		this.page.waitForContainer();
		this.page.openBoard(boardName);

		board.waitForContainer();
	}

	deleteBoard(boardName) {
		this.open(`${process.env.DRELLO_URL}/boards`);
		this.page.waitForContainer();
		this.page.openBoard(boardName);

		board.waitForContainer();

		board.openBoardSettingsPopup();
		board.clickDeleteBoardButton();
		this.page.waitForContainer();
	}

}

export default new BoardsSteps();
