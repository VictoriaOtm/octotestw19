import account from '../../steps/account';
import board from "../../steps/board";
import boards from "../../steps/boards";

describe('board', () => {
	const boardName = "TEST BOARD";

	beforeEach(()=>{
		account.auth();
		boards.createBoard(boardName);

		// Opening board is not necessary because after board creation
		// you are getting redirected to created board
		// boards.openBoard(boardName)
	});

	afterEach(()=>{
		boards.deleteBoard(boardName)
	})

	it('Открыть попап настроек доски', () => {
		board.openBoardSettingsPopup();
	});
});
