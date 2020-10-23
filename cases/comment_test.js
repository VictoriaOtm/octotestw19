import account from '../steps/account';
import pin from '../steps/pin';
import feed from '../steps/feed';

describe('Проверка пина', () => {
	beforeEach(() => {
		account.auth();
	});
	it('Оставить комментарий к пину', () => {
		feed.openPin();
		pin.comment('123');
	});
});
