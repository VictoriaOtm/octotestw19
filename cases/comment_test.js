import account from '../steps/account';
import pin from '../steps/pin';

describe('test id', () => {
	it('Оставить комментарий к пину', () => {
		account.auth();
		pin.openPin();
		pin.comment('123');
	});
});
