import DefaultSteps from './default';
import page from '../pages/board';

class BoardSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	openAddNewUsersPopup() {
		this.page.openAddNewUsersPopup();
	}

	openBoardSettingsPopup() {
		this.page.openBoardSettingsPopup();
	}

}

export default new BoardSteps();
