import account from '../steps/account';
import desk from "../steps/desk";

describe('test id', () => {
	it('Создание доски', () => {
		account.auth();
		desk.openNewDesk();
		desk.create('123', 'desc');
	});
});
