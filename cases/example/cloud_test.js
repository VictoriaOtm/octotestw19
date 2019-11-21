import account from '../../steps/account';
import viewer from '../../steps/viewer';


describe('test id', () => {
	before(() => {
		account.auth();
		viewer.openCloud();
	});

	it('Проверка добавления в избранное', () => {
		viewer.checkFavourite();
	});
});
