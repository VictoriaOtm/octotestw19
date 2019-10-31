import account from '../../steps/account';
import viewer from '../../steps/viewer';


// пример теста
describe('test id', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	before(() => {
		account.auth();
		viewer.openCloud();
	});

	it('Проверка добавления в избранное', () => {
		viewer.checkFavourite();
	});

	it('Проверка открытия модального окна предоставления доступа', () => {
		viewer.checkShare();
	});

});
