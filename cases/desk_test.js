import account from '../steps/account';
import desk from "../steps/desk";

describe('Создание доски', () => {
	beforeEach(() => {
		account.auth();
	});
	it('Создать доску', () => {
		desk.openNewDesk();
		desk.create('123', 'desc');
	});
});
